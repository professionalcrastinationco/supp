// Mock Data for Supplement Database App - Version 006
// Expanded to 40 supplements total

const mockSupplements = [
    {
        id: "mag-glycinate",
        name: "Magnesium Glycinate",
        category: "mineral",
        problems: ["sleep", "anxiety", "muscle-cramps"],
        benefits: [
            "Improves sleep quality",
            "Reduces anxiety",
            "Prevents muscle cramps"
        ],
        warnings: [
            "May cause digestive issues",
            "Can interact with antibiotics"
        ],
        dose: "200-400mg",
        timing: "Before bed",
        price: "$15-25/month",
        quality: "verified",
        forms: {
            "glycinate": "Best for sleep/anxiety",
            "citrate": "Best for constipation",
            "oxide": "Cheap but poor absorption"
        },
        pregnancy_safe: true,
        medication_interactions: ["antibiotics", "bisphosphonates", "diuretics"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "ashwagandha",
        name: "Ashwagandha",
        category: "herb",
        problems: ["anxiety", "stress", "sleep"],
        benefits: [
            "Reduces cortisol levels",
            "Improves stress response",
            "May boost testosterone"
        ],
        warnings: [
            "Can cause stomach upset",
            "May affect thyroid hormones",
            "Not for pregnancy"
        ],
        dose: "300-600mg",
        timing: "With meals",
        price: "$20-30/month",
        quality: "verified",
        forms: {
            "KSM-66": "Standardized extract",
            "Sensoril": "Higher withanolide content"
        },
        pregnancy_safe: false,
        medication_interactions: ["thyroid medication", "immunosuppressants", "sedatives", "antidepressants"],
        common_allergies: ["nightshade"],
        evidence_level: "gold"
    },
    {
        id: "vitamin-d",
        name: "Vitamin D3",
        category: "vitamin",
        problems: ["immunity", "mood", "bone-health"],
        benefits: [
            "Supports immune function",
            "Improves mood",
            "Essential for bone health"
        ],
        warnings: [
            "Can build up to toxic levels",
            "May interact with heart medications"
        ],
        dose: "1000-5000 IU",
        timing: "With fatty meal",
        price: "$5-15/month",
        quality: "verified",
        forms: {
            "D3": "Better absorbed",
            "D2": "Vegan option"
        },
        pregnancy_safe: true,
        medication_interactions: ["digoxin", "thiazide diuretics", "calcium channel blockers"],
        common_allergies: ["lanolin"],
        evidence_level: "gold"
    },
    {
        id: "melatonin",
        name: "Melatonin",
        category: "hormone",
        problems: ["sleep", "jet-lag"],
        benefits: [
            "Helps fall asleep faster",
            "Regulates sleep cycle",
            "Reduces jet lag"
        ],
        warnings: [
            "Can cause drowsiness next day",
            "May affect blood pressure",
            "Not for children"
        ],
        dose: "0.5-5mg",
        timing: "30-60 min before bed",
        price: "$5-10/month",
        quality: "verified",
        forms: {
            "immediate-release": "Fall asleep faster",
            "extended-release": "Stay asleep longer"
        },
        pregnancy_safe: false,
        medication_interactions: ["blood thinners", "blood pressure meds", "diabetes medication", "immunosuppressants", "seizure medication"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "omega-3",
        name: "Omega-3 (Fish Oil)",
        category: "fatty-acid",
        problems: ["inflammation", "heart-health", "brain-fog"],
        benefits: [
            "Reduces inflammation",
            "Supports heart health",
            "Improves brain function"
        ],
        warnings: [
            "Can cause fishy burps",
            "May thin blood",
            "Check mercury content"
        ],
        dose: "1-2g EPA+DHA",
        timing: "With meals",
        price: "$15-40/month",
        quality: "third-party-tested",
        forms: {
            "triglyceride": "Better absorbed",
            "ethyl-ester": "Cheaper but less bioavailable"
        },
        pregnancy_safe: true,
        medication_interactions: ["blood thinners", "blood pressure medications"],
        common_allergies: ["fish", "shellfish"],
        evidence_level: "gold"
    },
    {
        id: "probiotics",
        name: "Probiotics",
        category: "probiotic",
        problems: ["digestion", "immunity", "gut-health"],
        benefits: [
            "Improves digestion",
            "Supports immune system",
            "May help mood"
        ],
        warnings: [
            "Can cause initial bloating",
            "Needs refrigeration (some)",
            "Strain-specific benefits"
        ],
        dose: "10-50 billion CFU",
        timing: "Empty stomach or with meal",
        price: "$20-50/month",
        quality: "strain-verified",
        forms: {
            "multi-strain": "Broader benefits",
            "single-strain": "Targeted effects"
        },
        pregnancy_safe: true,
        medication_interactions: ["immunosuppressants", "antifungals"],
        common_allergies: ["dairy", "soy"],
        evidence_level: "silver"
    },
    {
        id: "l-theanine",
        name: "L-Theanine",
        category: "amino-acid",
        problems: ["anxiety", "focus", "sleep"],
        benefits: [
            "Promotes calm without drowsiness",
            "Improves focus with caffeine",
            "Better sleep quality"
        ],
        warnings: [
            "May lower blood pressure",
            "Can cause headaches in some"
        ],
        dose: "100-400mg",
        timing: "As needed",
        price: "$15-25/month",
        quality: "verified",
        forms: {
            "Suntheanine": "Patented pure form",
            "generic": "Usually effective"
        },
        pregnancy_safe: false,
        medication_interactions: ["blood pressure medications", "stimulants"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "turmeric",
        name: "Turmeric/Curcumin",
        category: "herb",
        problems: ["inflammation", "joint-pain", "digestion"],
        benefits: [
            "Reduces inflammation",
            "May help arthritis",
            "Supports digestion"
        ],
        warnings: [
            "Can cause stomach upset",
            "May interact with blood thinners",
            "Stains everything yellow"
        ],
        dose: "500-2000mg",
        timing: "With meals and black pepper",
        price: "$15-35/month",
        quality: "standardized-extract",
        forms: {
            "BCM-95": "Enhanced absorption",
            "Theracurmin": "Nanoparticle form",
            "with-piperine": "Black pepper for absorption"
        },
        pregnancy_safe: false,
        medication_interactions: ["blood thinners", "diabetes medication", "acid reducers"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "zinc",
        name: "Zinc",
        category: "mineral",
        problems: ["immunity", "wound-healing", "acne"],
        benefits: [
            "Boosts immune function",
            "Speeds wound healing",
            "May reduce acne"
        ],
        warnings: [
            "Can cause nausea on empty stomach",
            "Interferes with copper absorption",
            "Too much suppresses immunity"
        ],
        dose: "8-30mg",
        timing: "With food, away from iron",
        price: "$5-15/month",
        quality: "verified",
        forms: {
            "picolinate": "Well absorbed",
            "gluconate": "Gentle on stomach",
            "oxide": "Poorly absorbed"
        },
        pregnancy_safe: true,
        medication_interactions: ["antibiotics", "diuretics", "penicillamine"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "iron",
        name: "Iron",
        category: "mineral",
        problems: ["fatigue", "anemia", "weakness"],
        benefits: [
            "Treats iron deficiency",
            "Increases energy",
            "Improves athletic performance"
        ],
        warnings: [
            "Common side effect: constipation",
            "Can be toxic in high doses",
            "Don't take unless deficient"
        ],
        dose: "18-65mg",
        timing: "Empty stomach with vitamin C",
        price: "$5-20/month",
        quality: "verified",
        forms: {
            "bisglycinate": "Gentle on stomach",
            "sulfate": "Cheap but harsh",
            "liquid": "Better absorbed"
        },
        pregnancy_safe: true,
        medication_interactions: ["antibiotics", "thyroid medication", "antacids", "calcium supplements"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "b-complex",
        name: "B-Complex",
        category: "vitamin",
        problems: ["energy", "mood", "brain-fog"],
        benefits: [
            "Boosts energy production",
            "Supports mood",
            "Helps with stress"
        ],
        warnings: [
            "Can cause neon yellow pee",
            "May cause nausea if too high dose"
        ],
        dose: "1-2 capsules",
        timing: "Morning with breakfast",
        price: "$10-25/month",
        quality: "verified",
        forms: {
            "methylated": "Better for MTHFR variants",
            "standard": "Works for most people"
        },
        pregnancy_safe: true,
        medication_interactions: ["levodopa", "phenytoin"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "creatine",
        name: "Creatine",
        category: "amino-acid",
        problems: ["muscle-growth", "athletic-performance", "brain-fog"],
        benefits: [
            "Increases muscle mass",
            "Improves strength",
            "May boost brain function"
        ],
        warnings: [
            "Causes water retention",
            "May cause digestive issues",
            "Drink extra water"
        ],
        dose: "5g daily",
        timing: "Anytime, consistency matters",
        price: "$10-20/month",
        quality: "verified",
        forms: {
            "monohydrate": "Most studied, cheapest",
            "HCL": "Less water retention"
        },
        pregnancy_safe: false,
        medication_interactions: ["NSAIDs", "diuretics"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "collagen",
        name: "Collagen Peptides",
        category: "protein",
        problems: ["skin-health", "joint-pain", "gut-health"],
        benefits: [
            "May improve skin elasticity",
            "Supports joint health",
            "Could help gut lining"
        ],
        warnings: [
            "Evidence is mixed",
            "Can cause fullness feeling",
            "Expensive for protein"
        ],
        dose: "10-20g",
        timing: "Anytime, mix in beverages",
        price: "$25-50/month",
        quality: "third-party-tested",
        forms: {
            "type-I-III": "Skin and bones",
            "type-II": "Joints specifically"
        },
        pregnancy_safe: true,
        medication_interactions: [],
        common_allergies: ["beef", "fish", "shellfish"],
        evidence_level: "silver"
    },
    {
        id: "rhodiola",
        name: "Rhodiola Rosea",
        category: "herb",
        problems: ["fatigue", "stress", "mood"],
        benefits: [
            "Fights fatigue",
            "Improves stress response",
            "May help depression"
        ],
        warnings: [
            "Can cause jitteriness",
            "May interfere with sleep if taken late",
            "Bipolar caution"
        ],
        dose: "100-400mg",
        timing: "Morning on empty stomach",
        price: "$20-35/month",
        quality: "standardized-extract",
        forms: {
            "SHR-5": "Standardized extract",
            "WS1375": "Clinical study form"
        },
        pregnancy_safe: false,
        medication_interactions: ["antidepressants", "stimulants", "blood pressure meds"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "coq10",
        name: "CoQ10",
        category: "antioxidant",
        problems: ["energy", "heart-health", "aging"],
        benefits: [
            "Supports energy production",
            "Heart health",
            "May help with statins"
        ],
        warnings: [
            "Expensive",
            "May lower blood pressure",
            "Can cause insomnia"
        ],
        dose: "100-300mg",
        timing: "With fatty meal",
        price: "$30-60/month",
        quality: "verified",
        forms: {
            "ubiquinol": "Better absorbed, pricier",
            "ubiquinone": "Standard form"
        },
        pregnancy_safe: false,
        medication_interactions: ["blood thinners", "blood pressure meds", "chemotherapy"],
        common_allergies: [],
        evidence_level: "silver"
    }
];

const mockProblems = [
    {
        id: "sleep",
        name: "Sleep Issues",
        icon: "😴",
        subcategories: [
            "Can't fall asleep",
            "Keep waking up",
            "Poor sleep quality"
        ],
        topSupplements: ["melatonin", "mag-glycinate", "l-theanine", "ashwagandha"]
    },
    {
        id: "anxiety",
        name: "Anxiety & Stress",
        icon: "😰",
        subcategories: [
            "General anxiety",
            "Panic attacks",
            "Social anxiety"
        ],
        topSupplements: ["ashwagandha", "l-theanine", "mag-glycinate", "rhodiola"]
    },
    {
        id: "energy",
        name: "Low Energy",
        icon: "⚡",
        subcategories: [
            "Always tired",
            "Afternoon crash",
            "Morning fatigue"
        ],
        topSupplements: ["b-complex", "iron", "coq10", "rhodiola", "vitamin-d"]
    },
    {
        id: "digestion",
        name: "Digestion",
        icon: "🤢",
        subcategories: [
            "Bloating",
            "Constipation",
            "IBS symptoms"
        ],
        topSupplements: ["probiotics", "turmeric", "collagen"]
    },
    {
        id: "pain",
        name: "Pain & Inflammation",
        icon: "💪",
        subcategories: [
            "Joint pain",
            "Muscle soreness",
            "Chronic inflammation"
        ],
        topSupplements: ["turmeric", "omega-3", "collagen", "mag-glycinate"]
    },
    {
        id: "brain",
        name: "Brain Fog",
        icon: "🧠",
        subcategories: [
            "Can't focus",
            "Memory issues",
            "Mental fatigue"
        ],
        topSupplements: ["omega-3", "b-complex", "l-theanine", "creatine", "rhodiola"]
    },
    {
        id: "skin",
        name: "Skin & Hair",
        icon: "✨",
        subcategories: [
            "Acne",
            "Aging skin",
            "Hair loss"
        ],
        topSupplements: ["collagen", "zinc", "omega-3", "vitamin-d"]
    },
    {
        id: "immunity",
        name: "Immune Support",
        icon: "🛡️",
        subcategories: [
            "Get sick often",
            "Slow recovery",
            "Preventive care"
        ],
        topSupplements: ["vitamin-d", "zinc", "probiotics", "omega-3"]
    }
];

const mockInteractions = [
    {
        supplement: "ashwagandha",
        medication: "thyroid medication",
        severity: "moderate",
        description: "May affect thyroid hormone levels"
    },
    {
        supplement: "turmeric",
        medication: "blood thinners",
        severity: "high",
        description: "Can increase bleeding risk"
    },
    {
        supplement: "melatonin",
        medication: "blood pressure medication",
        severity: "moderate",
        description: "May affect blood pressure"
    }
];
