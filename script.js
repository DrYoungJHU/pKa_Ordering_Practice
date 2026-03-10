// ==================== MOLECULE DATA ====================
const molecules = [
    { "id": 1, "name": "HI", "structure": "HI", "smiles": "I", "pka": -10, "functionalGroup": "Hydroiodic acid", "category": "Strong acids" },
    { "id": 2, "name": "H₂SO₄", "structure": "H2SO4", "smiles": "OS(=O)(=O)O", "pka": -9, "functionalGroup": "Sulfuric acid", "category": "Strong acids" },
    { "id": 3, "name": "HBr", "structure": "HBr", "smiles": "Br", "pka": -8, "functionalGroup": "Hydrobromic acid", "category": "Strong acids" },
    { "id": 4, "name": "HCl", "structure": "HCl", "smiles": "Cl", "pka": -7, "functionalGroup": "Hydrochloric acid", "category": "Strong acids" },
    { "id": 5, "name": "CH₃SO₃H", "structure": "CH3SO3H", "smiles": "CS(=O)(=O)O", "pka": -2.6, "functionalGroup": "Methanesulfonic acid", "category": "Strong acids" },
    { "id": 6, "name": "H₃O⁺", "structure": "H3O+", "smiles": "[OH3+]", "pka": -1.7, "functionalGroup": "Hydronium", "category": "Strong acids" },
    { "id": 7, "name": "HNO₃", "structure": "HNO3", "smiles": "O[N+](=O)[O-]", "pka": -1.3, "functionalGroup": "Nitric acid", "category": "Strong acids" },
    { "id": 8, "name": "CF₃CO₂H", "structure": "CF3COOH", "smiles": "C(=O)(C(F)(F)F)O", "pka": 0.2, "functionalGroup": "Trifluoroacetic acid", "category": "Carboxylic acids" },
    { "id": 9, "name": "CH₃CO₂H", "structure": "CH3COOH", "smiles": "CC(=O)O", "pka": 4.8, "functionalGroup": "Acetic acid", "category": "Carboxylic acids" },
    { "id": 10, "name": "Phenol", "structure": "PhOH", "smiles": "c1ccc(cc1)O", "pka": 10.0, "functionalGroup": "Phenol", "category": "Alcohols" },
    { "id": 11, "name": "H₂O", "structure": "H2O", "smiles": "O", "pka": 15.7, "functionalGroup": "Water", "category": "Water" },
    { "id": 12, "name": "CH₃CH₂OH", "structure": "CH3CH2OH", "smiles": "CCO", "pka": 16.0, "functionalGroup": "Ethanol", "category": "Alcohols" },
    { "id": 13, "name": "Acetone", "structure": "(CH3)2CO", "smiles": "CC(=O)C", "pka": 19.3, "functionalGroup": "Ketone (α-H)", "category": "Carbonyls" },
    { "id": 14, "name": "Acetylene", "structure": "HC≡CH", "smiles": "C#C", "pka": 25, "functionalGroup": "Terminal alkyne", "category": "Alkynes" },
    { "id": 15, "name": "NH₃", "structure": "NH3", "smiles": "N", "pka": 38, "functionalGroup": "Ammonia", "category": "Amines" },
    { "id": 16, "name": "Ethylene", "structure": "H2C=CH2", "smiles": "C=C", "pka": 44, "functionalGroup": "Alkene", "category": "Alkenes" },
    { "id": 17, "name": "Benzene", "structure": "C6H6", "smiles": "c1ccccc1", "pka": 43, "functionalGroup": "Aromatic", "category": "Aromatics" },
    { "id": 18, "name": "Ethane", "structure": "CH3CH3", "smiles": "CC", "pka": 50, "functionalGroup": "Alkane", "category": "Alkanes" },
];

// ==================== GLOBAL STATE ====================

let currentProblem = {
    molecules: [],
    correctOrder: [],
    userSlots: [null, null, null, null],
    answered: false
};

let draggedMolecule = null;

// ==================== PROBLEM GENERATION ====================

function generateNewProblem() {
    let selected = [];
    let attempts = 0;
    const maxAttempts = 100;
    
    while (selected.length < 4 && attempts < maxAttempts) {
        const candidate = molecules[Math.floor(Math.random() * molecules.length)];
        if (!selected.find(m => m.id === candidate.id)) {
            selected.push(candidate);
        }
        attempts++;
    }
    
    const correctOrder = [...selected].sort((a, b) => a.pka - b.pka);
    const shuffled = [...selected].sort(() => Math.random() - 0.5);
    
    currentProblem = {
        molecules: shuffled,
        correctOrder: correctOrder,
        userSlots: [null, null, null, null],
        answered: false
    };
    
    renderMoleculeBank();
    renderDropSlots();
    updateUI();
}

// ==================== RENDERING ====================

function renderMoleculeBank() {
    const container = document.getElementById('molecule-bank-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    currentProblem.molecules.forEach((mol) => {
        const inSlot = currentProblem.userSlots.includes(mol);
        
        const card = document.createElement('div');
        card.className = 'molecule-card' + (inSlot ? ' in-slot' : '');
        card.setAttribute('draggable', !inSlot);
        card.setAttribute('data-mol-id', mol.id);
        
        const containerId = `bank-mol-${mol.id}`;
        
        card.innerHTML = `
            <div class="molecule-structure">
                <div id="${containerId}" class="rdkit-viewer"></div>
            </div>
            <div class="molecule-info">
                <div class="molecule-name">${mol.name}</div>
                <div class="molecule-group">${mol.functionalGroup}</div>
            </div>
        `;
        
        container.appendChild(card);
        
        setTimeout(() => renderSingleMolecule(containerId, mol), 50);
        
        if (!inSlot) {
            card.addEventListener('dragstart', handleMoleculeDragStart);
            card.addEventListener('dragend', handleMoleculeDragEnd);
        }
    });
}

function renderDropSlots() {
    // Add event listeners to slots
    document.querySelectorAll('.drop-slot').forEach((slot, i) => {
        slot.addEventListener('dragover', handleSlotDragOver);
        slot.addEventListener('dragleave', handleSlotDragLeave);
        slot.addEventListener('drop', handleSlotDrop);
    });
    
    // Update slot contents
    for (let i = 0; i < 4; i++) {
        const slotContent = document.getElementById(`slot-${i}`);
        const slotDiv = document.querySelector(`[data-slot="${i}"]`);
        
        if (!slotContent || !slotDiv) continue;
        
        const mol = currentProblem.userSlots[i];
        
        if (mol) {
            slotContent.classList.remove('empty');
            slotDiv.classList.add('filled');
            const molId = `slot-mol-${i}-${mol.id}`;
            slotContent.innerHTML = `
                <div class="slot-molecule" onclick="removeMoleculeFromSlot(${i})" style="cursor: pointer;">
                    <div class="molecule-structure">
                        <div id="${molId}" class="rdkit-viewer"></div>
                    </div>
                    <div class="molecule-info">
                        <div class="molecule-name">${mol.name}</div>
                        <div class="molecule-group">${mol.functionalGroup}</div>
                    </div>
                </div>
            `;
            setTimeout(() => renderSingleMolecule(molId, mol), 50);
        } else {
            slotContent.classList.add('empty');
            slotDiv.classList.remove('filled');
            slotContent.innerHTML = '';
        }
    }
}

function renderSingleMolecule(containerId, mol) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    try {
        if (!window.RDKit) {
            throw new Error('RDKit not loaded yet');
        }
        
        const mol_obj = window.RDKit.get_mol(mol.smiles);
        if (!mol_obj || !mol_obj.is_valid()) {
            throw new Error(`Invalid SMILES: ${mol.smiles}`);
        }
        
        const svg = mol_obj.get_svg(70, 50);
        container.innerHTML = svg;
        mol_obj.delete();
        
    } catch (error) {
        console.error(`Error rendering ${mol.name}:`, error);
        container.innerHTML = `<div style="font-size:11px; padding:5px;">${mol.structure}</div>`;
    }
}

// ==================== DRAG AND DROP ====================

function handleMoleculeDragStart(e) {
    const molId = parseInt(this.getAttribute('data-mol-id'));
    draggedMolecule = currentProblem.molecules.find(m => m.id === molId);
    
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', molId);
}

function handleMoleculeDragEnd(e) {
    this.classList.remove('dragging');
    draggedMolecule = null;
}

function handleSlotDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
}

function handleSlotDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleSlotDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    const slotIndex = parseInt(this.getAttribute('data-slot'));
    const molId = parseInt(e.dataTransfer.getData('text/plain'));
    const mol = currentProblem.molecules.find(m => m.id === molId);
    
    if (mol && !currentProblem.userSlots[slotIndex]) {
        currentProblem.userSlots[slotIndex] = mol;
        renderMoleculeBank();
        renderDropSlots();
    }
}

function removeMoleculeFromSlot(slotIndex) {
    currentProblem.userSlots[slotIndex] = null;
    renderMoleculeBank();
    renderDropSlots();
}

function resetOrder() {
    currentProblem.userSlots = [null, null, null, null];
    currentProblem.answered = false;
    renderMoleculeBank();
    renderDropSlots();
    updateUI();
}

// ==================== ANSWER CHECKING ====================

function checkAnswer() {
    const feedback = document.getElementById('practice-feedback');
    
    if (currentProblem.userSlots.includes(null)) {
        feedback.innerHTML = '⚠️ <span style="color: orange;">Please fill all 4 slots before checking.</span>';
        return;
    }
    
    let correct = true;
    for (let i = 0; i < 4; i++) {
        if (currentProblem.userSlots[i].id !== currentProblem.correctOrder[i].id) {
            correct = false;
        }
    }
    
    if (correct) {
        feedback.innerHTML = '✓ <strong style="color: green;">Correct!</strong> You ordered the molecules correctly from lowest to highest pKa.';
        currentProblem.answered = true;
        highlightSlots('correct');
    } else {
        feedback.innerHTML = '✗ <strong style="color: red;">Incorrect.</strong> Check your ordering. Remember: lower pKa = stronger acid.';
        highlightSlots('incorrect');
    }
}

function highlightSlots(status) {
    for (let i = 0; i < 4; i++) {
        const slot = document.querySelector(`[data-slot="${i}"]`);
        slot.classList.remove('correct', 'incorrect');
        
        if (currentProblem.userSlots[i]) {
            if (status === 'correct') {
                slot.classList.add('correct');
            } else {
                const isCorrect = currentProblem.userSlots[i].id === currentProblem.correctOrder[i].id;
                slot.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
        }
    }
}

// ==================== TOGGLE HINT (NEW FUNCTION) ====================

// ==================== HINT MODAL ====================

function toggleHint() {
    openHintModal();
}

function openHintModal() {
    const modal = document.getElementById('hint-modal');
    modal.style.display = 'block';
    
    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            closeHintModal();
        }
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeHintModal();
        }
    });
}

function closeHintModal() {
    const modal = document.getElementById('hint-modal');
    modal.style.display = 'none';
}

// ==================== UI UPDATES (MODIFIED) ====================

function updateUI() {
    const isPractice = document.getElementById('practice-toggle').checked;
    const practiceControls = document.getElementById('practice-controls');
    const referenceBox = document.getElementById('reference-box');
    const instructions = document.getElementById('instructions-display');
    
    updateViewLabels(isPractice);
    
    if (isPractice) {
        practiceControls.style.display = 'block';
        referenceBox.style.display = 'none';
        instructions.style.display = 'flex';
        
        // Reset feedback
        const feedback = document.getElementById('practice-feedback');
        if (feedback) {
            feedback.innerHTML = '';
        }
        
        // Update hint button text (always "Show Hint" since it's a modal now)
        const hintBtn = document.getElementById('hint-toggle-btn');
        if (hintBtn) {
            hintBtn.textContent = 'Show Hint';
            hintBtn.style.background = '#ffc107';
            hintBtn.style.color = '#000';
        }
        
        // Reset slot highlighting
        document.querySelectorAll('.drop-slot').forEach(slot => {
            slot.classList.remove('correct', 'incorrect');
        });
        
    } else {
        practiceControls.style.display = 'none';
        referenceBox.style.display = 'block';
        instructions.style.display = 'none';
        
        let answerHTML = '<div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 10px;">';
        currentProblem.correctOrder.forEach((mol, i) => {
            answerHTML += `
                <div style="flex: 1; min-width: 150px; background: white; padding: 10px; border-radius: 5px; border: 2px solid #28a745;">
                    <div style="font-weight: bold; font-size: 1.2em;">${i + 1}. ${mol.name}</div>
                    <div style="color: #666; margin-top: 5px;">${mol.functionalGroup}</div>
                    <div style="color: #007bff; font-weight: bold; margin-top: 5px;">pKa = ${mol.pka}</div>
                </div>
            `;
        });
        answerHTML += '</div>';
        
        document.getElementById('answer-display').innerHTML = answerHTML;
    }
}

function updateViewLabels(isPractice) {
    const labels = document.querySelectorAll('.view-label');
    if (isPractice) {
        labels[0].style.opacity = "0.5";
        labels[1].style.opacity = "1";
    } else {
        labels[0].style.opacity = "1";
        labels[1].style.opacity = "0.5";
    }
}

// ==================== INITIALIZATION ====================

window.initRDKitModule().then(function(RDKit) {
    window.RDKit = RDKit;
    console.log('✓ RDKit loaded successfully!');
    generateNewProblem();
}).catch(function(error) {
    console.error('Failed to load RDKit:', error);
    alert('Failed to load molecule renderer. Please refresh the page.');
});