// ==================== MOLECULE DATA AS TAKEN FROM SCUDDER pKa CHART ====================

const molecules = [
    // ==================== OXYGEN ACIDS ====================
    // Strong Acids (pKa < 0)
    { "id": 1, "name": "H₂SO₄", "structure": "H2SO4", "smiles": "OS(=O)(=O)O", "pka": -15, "functionalGroup": "Sulfuric acid", "category": "Oxygen acids" },
    { "id": 2, "name": "RSO₃H", "structure": "CH3SO3H", "smiles": "CS(=O)(=O)O", "pka": -12, "functionalGroup": "Methanesulfonic acid", "category": "Oxygen acids" },
    { "id": 3, "name": "HClO₄", "structure": "HClO4", "smiles": "OCl(=O)(=O)=O", "pka": -10, "functionalGroup": "Perchloric acid", "category": "Oxygen acids" },
    { "id": 4, "name": "HI", "structure": "HI", "smiles": "I", "pka": -10, "functionalGroup": "Hydroiodic acid", "category": "Oxygen acids" },
    { "id": 5, "name": "HBr", "structure": "HBr", "smiles": "Br", "pka": -9, "functionalGroup": "Hydrobromic acid", "category": "Oxygen acids" },
    { "id": 6, "name": "HCl", "structure": "HCl", "smiles": "Cl", "pka": -7, "functionalGroup": "Hydrochloric acid", "category": "Oxygen acids" },
    { "id": 7, "name": "R₂SH⁺", "structure": "R2SH+", "smiles": "[SH+](C)C", "pka": -5.4, "functionalGroup": "Protonated thioether", "category": "Oxygen acids" },
    { "id": 8, "name": "H₃O⁺", "structure": "H3O+", "smiles": "[OH3+]", "pka": -1.7, "functionalGroup": "Hydronium", "category": "Oxygen acids" },
    
    // Carboxylic Acids (pKa 0-5)
    { "id": 9, "name": "CF₃COOH", "structure": "CF3COOH", "smiles": "C(=O)(C(F)(F)F)O", "pka": 0.5, "functionalGroup": "Trifluoroacetic acid", "category": "Oxygen acids" },
    { "id": 10, "name": "PhSO₃H", "structure": "PhSO3H", "smiles": "c1ccc(cc1)S(=O)(=O)O", "pka": 0.7, "functionalGroup": "Benzenesulfonic acid", "category": "Oxygen acids" },
    { "id": 11, "name": "CCl₃COOH", "structure": "CCl3COOH", "smiles": "C(=O)(C(Cl)(Cl)Cl)O", "pka": 0.6, "functionalGroup": "Trichloroacetic acid", "category": "Oxygen acids" },
    { "id": 12, "name": "Oxalic acid", "structure": "HOOCCOOH", "smiles": "C(=O)(C(=O)O)O", "pka": 1.7, "functionalGroup": "Dicarboxylic acid", "category": "Oxygen acids" },
    { "id": 13, "name": "CHCl₂COOH", "structure": "CHCl2COOH", "smiles": "C(=O)(C(Cl)Cl)O", "pka": 1.8, "functionalGroup": "Dichloroacetic acid", "category": "Oxygen acids" },
    { "id": 14, "name": "Propiolic acid", "structure": "HC≡CCOOH", "smiles": "C(=O)(C#C)O", "pka": 1.9, "functionalGroup": "Alkynoic acid", "category": "Oxygen acids" },
    { "id": 15, "name": "HSO₄⁻", "structure": "HSO4-", "smiles": "OS(=O)(=O)[O-]", "pka": 2.0, "functionalGroup": "Bisulfate ion", "category": "Oxygen acids" },
    { "id": 16, "name": "H₃PO₄", "structure": "H3PO4", "smiles": "OP(=O)(O)O", "pka": 2.2, "functionalGroup": "Phosphoric acid", "category": "Oxygen acids" },
    { "id": 17, "name": "Chloroacetic acid", "structure": "ClCH2COOH", "smiles": "C(=O)(CCl)O", "pka": 2.9, "functionalGroup": "Haloacetic acid", "category": "Oxygen acids" },
    { "id": 18, "name": "Fluoroacetic acid", "structure": "FCH2COOH", "smiles": "C(=O)(CF)O", "pka": 3.1, "functionalGroup": "Haloacetic acid", "category": "Oxygen acids" },
    { "id": 19, "name": "HF", "structure": "HF", "smiles": "F", "pka": 3.2, "functionalGroup": "Hydrofluoric acid", "category": "Oxygen acids" },
    { "id": 20, "name": "HNO₂", "structure": "HNO2", "smiles": "ON=O", "pka": 3.3, "functionalGroup": "Nitrous acid", "category": "Oxygen acids" },
    { "id": 21, "name": "HCOOH", "structure": "HCOOH", "smiles": "C(=O)O", "pka": 3.8, "functionalGroup": "Formic acid", "category": "Oxygen acids" },
    { "id": 22, "name": "Benzoic acid", "structure": "PhCOOH", "smiles": "c1ccc(cc1)C(=O)O", "pka": 4.2, "functionalGroup": "Aromatic carboxylic acid", "category": "Oxygen acids" },
    { "id": 23, "name": "4-Methoxybenzoic acid", "structure": "4-CH3OC6H4COOH", "smiles": "COc1ccc(cc1)C(=O)O", "pka": 4.5, "functionalGroup": "Substituted benzoic acid", "category": "Oxygen acids" },
    { "id": 24, "name": "Acetic acid", "structure": "CH3COOH", "smiles": "CC(=O)O", "pka": 4.8, "functionalGroup": "Carboxylic acid", "category": "Oxygen acids" },
    
    // Phenols and Thiols (pKa 6-11)
    { "id": 25, "name": "Carbonic acid", "structure": "H2CO3", "smiles": "C(=O)(O)O", "pka": 6.4, "functionalGroup": "Carbonic acid", "category": "Oxygen acids" },
    { "id": 26, "name": "PhSH", "structure": "PhSH", "smiles": "c1ccc(cc1)S", "pka": 6.5, "functionalGroup": "Thiophenol", "category": "Oxygen acids" },
    { "id": 27, "name": "4-Nitrophenol", "structure": "4-NO2C6H4OH", "smiles": "c1cc(ccc1O)[N+](=O)[O-]", "pka": 7.2, "functionalGroup": "Substituted phenol", "category": "Oxygen acids" },
    { "id": 28, "name": "HOCl", "structure": "HOCl", "smiles": "OCl", "pka": 7.5, "functionalGroup": "Hypochlorous acid", "category": "Oxygen acids" },
    { "id": 29, "name": "H₂S", "structure": "H2S", "smiles": "S", "pka": 8.7, "functionalGroup": "Hydrogen sulfide", "category": "Oxygen acids" },
    { "id": 30, "name": "Phenol", "structure": "PhOH", "smiles": "c1ccc(cc1)O", "pka": 10.0, "functionalGroup": "Phenol", "category": "Oxygen acids" },
    { "id": 31, "name": "4-Methoxyphenol", "structure": "4-CH3OC6H4OH", "smiles": "COc1ccc(cc1)O", "pka": 10.2, "functionalGroup": "Substituted phenol", "category": "Oxygen acids" },
    { "id": 32, "name": "4-Methylphenol", "structure": "4-CH3C6H4OH", "smiles": "Cc1ccc(cc1)O", "pka": 10.3, "functionalGroup": "Substituted phenol", "category": "Oxygen acids" },
    { "id": 33, "name": "EtSH", "structure": "CH3CH2SH", "smiles": "CCS", "pka": 10.6, "functionalGroup": "Ethanethiol", "category": "Oxygen acids" },
    { "id": 34, "name": "H₂O₂", "structure": "H2O2", "smiles": "OO", "pka": 11.6, "functionalGroup": "Hydrogen peroxide", "category": "Oxygen acids" },
    { "id": 35, "name": "HPO₄²⁻", "structure": "HPO4-2", "smiles": "OP(=O)([O-])[O-]", "pka": 12.3, "functionalGroup": "Hydrogen phosphate", "category": "Oxygen acids" },
    { "id": 36, "name": "CF₃CH₂OH", "structure": "CF3CH2OH", "smiles": "C(C(F)(F)F)O", "pka": 12.5, "functionalGroup": "Trifluoroethanol", "category": "Oxygen acids" },
    { "id": 37, "name": "HOC₂H₄OH", "structure": "HOCH2CH2OH", "smiles": "OCCO", "pka": 13.3, "functionalGroup": "Ethylene glycol", "category": "Oxygen acids" },
    { "id": 38, "name": "CH₃CH(OH)CH₂OH", "structure": "(CH3)2CHCH2OH", "smiles": "CC(C)CO", "pka": 13.9, "functionalGroup": "Isobutanol", "category": "Oxygen acids" },
    { "id": 39, "name": "H₂O", "structure": "H2O", "smiles": "O", "pka": 15.7, "functionalGroup": "Water", "category": "Oxygen acids" },
    { "id": 40, "name": "CH₃OH", "structure": "CH3OH", "smiles": "CO", "pka": 15.2, "functionalGroup": "Methanol", "category": "Oxygen acids" },
    { "id": 41, "name": "CH₃CH₂OH", "structure": "CH3CH2OH", "smiles": "CCO", "pka": 16.0, "functionalGroup": "Ethanol", "category": "Oxygen acids" },
    { "id": 42, "name": "(CH₃)₂CHOH", "structure": "(CH3)2CHOH", "smiles": "CC(C)O", "pka": 17.0, "functionalGroup": "Isopropanol", "category": "Oxygen acids" },
    { "id": 43, "name": "(CH₃)₃COH", "structure": "(CH3)3COH", "smiles": "CC(C)(C)O", "pka": 19.0, "functionalGroup": "tert-Butanol", "category": "Oxygen acids" },

    // ==================== NITROGEN ACIDS ====================
    { "id": 44, "name": "R₃NH⁺", "structure": "R3NH+", "smiles": "[NH+](C)(C)C", "pka": -10, "functionalGroup": "Protonated tertiary amine", "category": "Nitrogen acids" },
    { "id": 45, "name": "ArNH₃⁺", "structure": "ArNH3+", "smiles": "[NH3+]c1ccccc1", "pka": -5, "functionalGroup": "Protonated aniline", "category": "Nitrogen acids" },
    { "id": 46, "name": "ArNH₃⁺", "structure": "ArNH3+", "smiles": "[NH3+]c1ccccc1", "pka": 1.0, "functionalGroup": "Anilinium", "category": "Nitrogen acids" },
    { "id": 47, "name": "4-NO₂C₆H₄NH₃⁺", "structure": "4-NO2C6H4NH3+", "smiles": "[NH3+]c1ccc(cc1)[N+](=O)[O-]", "pka": 1.0, "functionalGroup": "4-Nitroanilinium", "category": "Nitrogen acids" },
    { "id": 48, "name": "Iminodiacetic acid", "structure": "HN(CH2COOH)2", "smiles": "C(C(=O)O)NC(C(=O)O)", "pka": 3.6, "functionalGroup": "Aminopolycarboxylic acid", "category": "Nitrogen acids" },
    { "id": 49, "name": "Pyridinium", "structure": "C5H5NH+", "smiles": "[nH+]1ccccc1", "pka": 5.2, "functionalGroup": "Protonated pyridine", "category": "Nitrogen acids" },
    { "id": 50, "name": "4-CH₃C₆H₄NH₃⁺", "structure": "4-CH3C6H4NH3+", "smiles": "Cc1ccc(cc1)[NH3+]", "pka": 5.4, "functionalGroup": "4-Methylanilinium", "category": "Nitrogen acids" },
    { "id": 51, "name": "H₂CO₂⁺NH₃⁺", "structure": "HOCONHNH3+", "smiles": "NC(=O)[OH+]", "pka": 6.0, "functionalGroup": "Protonated semicarbazide", "category": "Nitrogen acids" },
    { "id": 52, "name": "Imidazolium", "structure": "ImH+", "smiles": "[nH+]1cncc1", "pka": 7.0, "functionalGroup": "Protonated imidazole", "category": "Nitrogen acids" },
    { "id": 53, "name": "H₂NNH₃⁺", "structure": "H2NNH3+", "smiles": "[NH3+]N", "pka": 7.9, "functionalGroup": "Protonated hydrazine", "category": "Nitrogen acids" },
    { "id": 54, "name": "NH₄⁺", "structure": "NH4+", "smiles": "[NH4+]", "pka": 9.2, "functionalGroup": "Ammonium", "category": "Nitrogen acids" },
    { "id": 55, "name": "4-CH₃C₆H₄NH₃⁺", "structure": "4-CH3C6H4NH3+", "smiles": "Cc1ccc(cc1)[NH3+]", "pka": 9.3, "functionalGroup": "p-Toluidinium", "category": "Nitrogen acids" },
    { "id": 56, "name": "HO-NH₃⁺", "structure": "HONH3+", "smiles": "O[NH3+]", "pka": 6.0, "functionalGroup": "Protonated hydroxylamine", "category": "Nitrogen acids" },
    { "id": 57, "name": "Succinimide", "structure": "C4H5NO2", "smiles": "O=C1CCC(=O)N1", "pka": 9.6, "functionalGroup": "Imide", "category": "Nitrogen acids" },
    { "id": 58, "name": "PhNH₃⁺", "structure": "PhNH3+", "smiles": "[NH3+]c1ccccc1", "pka": 4.6, "functionalGroup": "Anilinium", "category": "Nitrogen acids" },
    { "id": 59, "name": "(C₂H₅)₂NH₂⁺", "structure": "(C2H5)2NH2+", "smiles": "[NH2+](CC)CC", "pka": 10.7, "functionalGroup": "Diethylammonium", "category": "Nitrogen acids" },
    { "id": 60, "name": "Piperidinium", "structure": "C5H11NH+", "smiles": "[NH2+]1CCCCC1", "pka": 10.7, "functionalGroup": "Protonated piperidine", "category": "Nitrogen acids" },
    { "id": 61, "name": "Morpholinium", "structure": "C4H9NOH+", "smiles": "[NH2+]1CCOCC1", "pka": 9.6, "functionalGroup": "Protonated morpholine", "category": "Nitrogen acids" },
    { "id": 62, "name": "Pyrrolidinium", "structure": "C4H9NH+", "smiles": "[NH2+]1CCCC1", "pka": 10.7, "functionalGroup": "Protonated pyrrolidine", "category": "Nitrogen acids" },
    { "id": 63, "name": "(H₂N)₂C=NH₂⁺", "structure": "(H2N)2C=NH2+", "smiles": "NC(=[NH2+])N", "pka": 13.6, "functionalGroup": "Guanidinium", "category": "Nitrogen acids" },
    { "id": 64, "name": "H₂NNH₂", "structure": "H2NNH2", "smiles": "NN", "pka": 17.0, "functionalGroup": "Hydrazine", "category": "Nitrogen acids" },
    { "id": 65, "name": "(iPr)₂NH", "structure": "((CH3)2CH)2NH", "smiles": "CC(C)NC(C)C", "pka": 25.8, "functionalGroup": "Diisopropylamine", "category": "Nitrogen acids" },
    { "id": 66, "name": "PhNH₂", "structure": "PhNH2", "smiles": "c1ccc(cc1)N", "pka": 28.0, "functionalGroup": "Aniline", "category": "Nitrogen acids" },
    { "id": 67, "name": "NH₃", "structure": "NH3", "smiles": "N", "pka": 35.0, "functionalGroup": "Ammonia", "category": "Nitrogen acids" },
    { "id": 68, "name": "R₂NH", "structure": "R2NH", "smiles": "CNC", "pka": 36.0, "functionalGroup": "Secondary amine", "category": "Nitrogen acids" },

    // ==================== CARBON ACIDS ====================
    { "id": 69, "name": "HC(CN)₃", "structure": "HC(CN)3", "smiles": "C(C#N)(C#N)C#N", "pka": -5, "functionalGroup": "Tricyanomethane", "category": "Carbon acids" },
    { "id": 70, "name": "Meldrum's acid", "structure": "C6H8O4", "smiles": "CC1(C)OC(=O)CC(=O)O1", "pka": 4.8, "functionalGroup": "Cyclic β-diketone", "category": "Carbon acids" },
    { "id": 71, "name": "Acetylacetone", "structure": "CH3COCH2COCH3", "smiles": "CC(=O)CC(=O)C", "pka": 9.0, "functionalGroup": "β-Diketone", "category": "Carbon acids" },
    { "id": 72, "name": "HCN", "structure": "HCN", "smiles": "C#N", "pka": 9.2, "functionalGroup": "Hydrogen cyanide", "category": "Carbon acids" },
    { "id": 73, "name": "Nitromethane", "structure": "CH3NO2", "smiles": "C[N+](=O)[O-]", "pka": 10.2, "functionalGroup": "Nitroalkane", "category": "Carbon acids" },
    { "id": 74, "name": "Ethyl acetoacetate", "structure": "CH3COCH2COOC2H5", "smiles": "CCOC(=O)CC(=O)C", "pka": 10.7, "functionalGroup": "β-Ketoester", "category": "Carbon acids" },
    { "id": 75, "name": "CH₂(CN)₂", "structure": "CH2(CN)2", "smiles": "C(C#N)C#N", "pka": 11.2, "functionalGroup": "Malononitrile", "category": "Carbon acids" },
    { "id": 76, "name": "CH₂(CO₂Et)₂", "structure": "CH2(COOC2H5)2", "smiles": "CCOC(=O)CC(=O)OCC", "pka": 13.0, "functionalGroup": "Diethyl malonate", "category": "Carbon acids" },
    { "id": 77, "name": "Cyclopentadiene", "structure": "C5H6", "smiles": "C1=CC=CC1", "pka": 16.0, "functionalGroup": "Cyclic diene", "category": "Carbon acids" },
    { "id": 78, "name": "CH₃CHO", "structure": "CH3CHO", "smiles": "CC=O", "pka": 16.7, "functionalGroup": "Acetaldehyde (α-H)", "category": "Carbon acids" },
    { "id": 79, "name": "Acetone", "structure": "(CH3)2CO", "smiles": "CC(=O)C", "pka": 19.2, "functionalGroup": "Ketone (α-H)", "category": "Carbon acids" },
    { "id": 80, "name": "Dimethyl sulfone", "structure": "(CH3)2SO2", "smiles": "CS(=O)(=O)C", "pka": 29.0, "functionalGroup": "Sulfone", "category": "Carbon acids" },
    { "id": 81, "name": "Acetamide", "structure": "CH3CONH2", "smiles": "CC(=O)N", "pka": 15.9, "functionalGroup": "Amide (N-H)", "category": "Carbon acids" },
    { "id": 82, "name": "CH₃COSH", "structure": "CH3COSH", "smiles": "CC(=O)S", "pka": 21.0, "functionalGroup": "Thioacetic acid", "category": "Carbon acids" },
    { "id": 83, "name": "Phenylacetylene", "structure": "PhC≡CH", "smiles": "C#Cc1ccccc1", "pka": 23.0, "functionalGroup": "Aryl alkyne", "category": "Carbon acids" },
    { "id": 84, "name": "CHCl₃", "structure": "CHCl3", "smiles": "C(Cl)(Cl)Cl", "pka": 24.0, "functionalGroup": "Chloroform", "category": "Carbon acids" },
    { "id": 85, "name": "CHI₃", "structure": "CHI3", "smiles": "C(I)(I)I", "pka": 24.0, "functionalGroup": "Iodoform", "category": "Carbon acids" },
    { "id": 86, "name": "HC≡CH", "structure": "HC≡CH", "smiles": "C#C", "pka": 25.0, "functionalGroup": "Acetylene", "category": "Carbon acids" },
    { "id": 87, "name": "CH₃C≡CH", "structure": "CH3C≡CH", "smiles": "CC#C", "pka": 24.0, "functionalGroup": "Propyne", "category": "Carbon acids" },
    { "id": 88, "name": "CH₃COOC₂H₅", "structure": "CH3COOC2H5", "smiles": "CCOC(=O)C", "pka": 25.6, "functionalGroup": "Ethyl acetate (α-H)", "category": "Carbon acids" },
    { "id": 89, "name": "HC≡C-OR", "structure": "HC≡COR", "smiles": "C#CCO", "pka": 25.6, "functionalGroup": "Alkynyl ether", "category": "Carbon acids" },
    { "id": 90, "name": "CH₃SO(CH₃)₂", "structure": "CH3SO(CH3)2", "smiles": "CS(=O)C", "pka": 29.0, "functionalGroup": "Dimethyl sulfoxide", "category": "Carbon acids" },
    { "id": 91, "name": "Ph₃CH", "structure": "Ph3CH", "smiles": "c1ccc(cc1)C(c2ccccc2)c3ccccc3", "pka": 31.5, "functionalGroup": "Triphenylmethane", "category": "Carbon acids" },
    { "id": 92, "name": "Ph₂CH₂", "structure": "Ph2CH2", "smiles": "c1ccc(cc1)Cc2ccccc2", "pka": 33.5, "functionalGroup": "Diphenylmethane", "category": "Carbon acids" },
    { "id": 93, "name": "Dimethyl sulfoxide", "structure": "(CH3)2SO", "smiles": "CS(=O)C", "pka": 35.0, "functionalGroup": "DMSO (α-H)", "category": "Carbon acids" },
    { "id": 94, "name": "PhCH₃", "structure": "PhCH3", "smiles": "Cc1ccccc1", "pka": 40.0, "functionalGroup": "Toluene (benzylic)", "category": "Carbon acids" },
    { "id": 95, "name": "Benzene", "structure": "C6H6", "smiles": "c1ccccc1", "pka": 43.0, "functionalGroup": "Aromatic C-H", "category": "Carbon acids" },
    { "id": 96, "name": "CH₂=CHCH₃", "structure": "CH2=CHCH3", "smiles": "CC=C", "pka": 43.0, "functionalGroup": "Propene (allylic)", "category": "Carbon acids" },
    { "id": 97, "name": "Cyclohexane", "structure": "C6H12", "smiles": "C1CCCCC1", "pka": 44.0, "functionalGroup": "Cycloalkane", "category": "Carbon acids" },
    { "id": 98, "name": "CH₄", "structure": "CH4", "smiles": "C", "pka": 48.0, "functionalGroup": "Methane", "category": "Carbon acids" },
    { "id": 99, "name": "CH₃CH₃", "structure": "CH3CH3", "smiles": "CC", "pka": 50.0, "functionalGroup": "Ethane", "category": "Carbon acids" },
    { "id": 100, "name": "CH₃CH₂CH₃", "structure": "CH3CH2CH3", "smiles": "CCC", "pka": 51.0, "functionalGroup": "Propane", "category": "Carbon acids" },
    { "id": 101, "name": "(CH₃)₄C", "structure": "(CH3)4C", "smiles": "CC(C)(C)C", "pka": 52.0, "functionalGroup": "Neopentane", "category": "Carbon acids" },

    // ==================== MISCELLANEOUS ====================
    { "id": 102, "name": "Fe(H₂O)₆³⁺", "structure": "Fe(H2O)6-3+", "smiles": "[Fe+3]", "pka": 2.7, "functionalGroup": "Hydrated iron(III)", "category": "Miscellaneous" },
    { "id": 103, "name": "H₂Se", "structure": "H2Se", "smiles": "[SeH2]", "pka": 3.9, "functionalGroup": "Hydrogen selenide", "category": "Miscellaneous" },
    { "id": 104, "name": "H₂", "structure": "H2", "smiles": "[H][H]", "pka": 35.0, "functionalGroup": "Hydrogen gas", "category": "Miscellaneous" },
    { "id": 105, "name": "CHBr₃", "structure": "CHBr3", "smiles": "C(Br)(Br)Br", "pka": 13.7, "functionalGroup": "Bromoform", "category": "Miscellaneous" },
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
