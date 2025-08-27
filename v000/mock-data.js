// Mock Data for Supplement Database

const mockProblems = [
    {
        id: "sleep",
        name: "Sleep Issues",
        icon: "😴",
        topSupplements: ["mag-glycinate", "l-theanine", "melatonin"]
    },
    {
        id: "energy",
        name: "Low Energy",
        icon: "⚡",
        topSupplements: ["b12", "iron", "ashwagandha"]
    },
    {
        id: "anxiety",
        name: "Anxiety/Stress",
        icon: "😰",
        topSupplements: ["ashwagandha", "l-theanine", "mag-glycinate"]
    },
    {
        id: "digestion",
        name: "Gut Issues",
        icon: "🤢",
        topSupplements: ["probiotics", "digestive-enzymes", "psyllium"]
    },
    {
        id: "pain",
        name: "Joint/Muscle Pain",
        icon: "💪",
        topSupplements: ["turmeric", "omega3", "glucosamine"]
    },
    {
        id: "focus",
        name: "Brain Fog",
        icon: "🧠",
        topSupplements: ["omega3", "lions-mane", "b-complex"]
    },
    {
        id: "skin",
        name: "Skin Problems",
        icon: "🔴",
        topSupplements: ["zinc", "vitamin-e", "collagen"]
    },
    {
        id: "immune",
        name: "Weak Immune System",
        icon: "🛡️",
        topSupplements: ["vitamin-d", "vitamin-c", "zinc"]
    }
];

const mockSupplements = [
    {
        id: "mag-glycinate",
        name: "Magnesium Glycinate",
        category: "mineral",
        problems: ["sleep", "anxiety", "pain"],
        benefits: [
            "Improves sleep quality",
            "Reduces anxiety",
            "Prevents muscle cramps",
            "Supports heart health"
        ],
        warnings: [
            "May cause digestive issues at high doses",
            "Can interact with antibiotics"
        ],
        dose: "200-400mg",
        timing: "Before bed",
        price: "$15-25",
        researchLevel: "gold",
        forms: {
            "glycinate": "Best for sleep/anxiety",
            "citrate": "Best for constipation",
            "oxide": "Cheap but poor absorption"
        },
        interactions: ["antibiotics", "blood pressure meds"],
        description: "Highly bioavailable form of magnesium that's gentle on the stomach."
    },
    {
        id: "l-theanine",
        name: "L-Theanine",
        category: "amino-acid",
        problems: ["sleep", "anxiety", "focus"],
        benefits: [
            "Promotes relaxation without drowsiness",
            "Improves focus when combined with caffeine",
            "Reduces anxiety",
            "Better sleep quality"
        ],
        warnings: [
            "May lower blood pressure",
            "Can cause headaches in some people"
        ],
        dose: "100-200mg",
        timing: "Anytime, or 30min before sleep",
        price: "$20-30",
        researchLevel: "gold",
        forms: {
            "standard": "Regular L-Theanine",
            "suntheanine": "Patented, pure form"
        },
        interactions: ["blood pressure medications"],
        description: "Amino acid from tea that calms without sedation."
    },
    {
        id: "melatonin",
        name: "Melatonin",
        category: "hormone",
        problems: ["sleep"],
        benefits: [
            "Helps fall asleep faster",
            "Regulates sleep-wake cycle",
            "May help with jet lag"
        ],
        warnings: [
            "Can cause morning grogginess",
            "May cause vivid dreams",
            "Not for long-term use",
            "Can affect hormone levels"
        ],
        dose: "0.5-3mg",
        timing: "30-60min before bed",
        price: "$5-15",
        researchLevel: "gold",
        forms: {
            "immediate": "Fast-acting",
            "extended": "Stays in system longer",
            "sublingual": "Under tongue, faster absorption"
        },
        interactions: ["blood thinners", "diabetes medications", "immune suppressants"],
        description: "Sleep hormone your body naturally produces."
    },
    {
        id: "ashwagandha",
        name: "Ashwagandha",
        category: "herb",
        problems: ["anxiety", "energy", "focus"],
        benefits: [
            "Reduces stress and cortisol",
            "May boost testosterone",
            "Improves strength and energy",
            "Better sleep"
        ],
        warnings: [
            "Can cause stomach upset",
            "May affect thyroid hormones",
            "Not for pregnant women",
            "Can cause drowsiness"
        ],
        dose: "300-600mg",
        timing: "With food, morning or evening",
        price: "$15-30",
        researchLevel: "silver",
        forms: {
            "ksm66": "Standardized extract, well-studied",
            "sensoril": "Higher concentration",
            "powder": "Traditional form"
        },
        interactions: ["thyroid medications", "sedatives", "immune medications"],
        description: "Ancient adaptogenic herb for stress management."
    },
    {
        id: "omega3",
        name: "Omega-3 (Fish Oil)",
        category: "fatty-acid",
        problems: ["focus", "pain", "skin"],
        benefits: [
            "Reduces inflammation",
            "Supports brain health",
            "Good for heart health",
            "May help depression"
        ],
        warnings: [
            "Can cause fishy burps",
            "May thin blood",
            "Check for mercury content"
        ],
        dose: "1000-2000mg EPA+DHA",
        timing: "With meals",
        price: "$20-40",
        researchLevel: "gold",
        forms: {
            "triglyceride": "Better absorption",
            "ethyl-ester": "Cheaper, okay absorption",
            "algae": "Vegan option"
        },
        interactions: ["blood thinners", "blood pressure meds"],
        description: "Essential fatty acids your body can't make."
    },
    {
        id: "vitamin-d",
        name: "Vitamin D3",
        category: "vitamin",
        problems: ["immune", "energy"],
        benefits: [
            "Supports immune system",
            "Bone health",
            "May improve mood",
            "Reduces inflammation"
        ],
        warnings: [
            "Can build up to toxic levels",
            "Needs K2 for proper calcium regulation",
            "Get tested first ideally"
        ],
        dose: "1000-5000 IU",
        timing: "Morning with fat",
        price: "$10-20",
        researchLevel: "gold",
        forms: {
            "d3": "Better than D2",
            "liquid": "Good absorption",
            "softgel": "Standard form"
        },
        interactions: ["calcium supplements", "thiazide diuretics"],
        description: "The sunshine vitamin most people are deficient in."
    },
    {
        id: "b12",
        name: "Vitamin B12",
        category: "vitamin",
        problems: ["energy", "focus"],
        benefits: [
            "Boosts energy",
            "Supports nerve function",
            "Helps make red blood cells",
            "May improve mood"
        ],
        warnings: [
            "Can cause acne in some",
            "May interfere with sleep if taken late"
        ],
        dose: "500-2000mcg",
        timing: "Morning",
        price: "$10-25",
        researchLevel: "gold",
        forms: {
            "methylcobalamin": "Most bioavailable",
            "cyanocobalamin": "Cheap, synthetic",
            "sublingual": "Under tongue absorption"
        },
        interactions: ["metformin", "proton pump inhibitors"],
        description: "Essential vitamin for energy and nerve health."
    },
    {
        id: "zinc",
        name: "Zinc",
        category: "mineral",
        problems: ["immune", "skin"],
        benefits: [
            "Immune support",
            "Wound healing",
            "May reduce acne",
            "Supports testosterone"
        ],
        warnings: [
            "Can cause nausea on empty stomach",
            "Interferes with copper absorption",
            "Metallic taste"
        ],
        dose: "15-30mg",
        timing: "With food",
        price: "$10-20",
        researchLevel: "gold",
        forms: {
            "picolinate": "Best absorption",
            "gluconate": "Gentle on stomach",
            "oxide": "Cheap, poor absorption"
        },
        interactions: ["antibiotics", "copper supplements"],
        description: "Essential mineral for immune function and healing."
    },
    {
        id: "probiotics",
        name: "Probiotics",
        category: "bacteria",
        problems: ["digestion"],
        benefits: [
            "Improves gut health",
            "May boost immunity",
            "Can help with IBS",
            "May improve mood"
        ],
        warnings: [
            "Can cause initial bloating",
            "Quality varies wildly",
            "Need refrigeration often"
        ],
        dose: "10-50 billion CFU",
        timing: "Empty stomach or with meal",
        price: "$20-50",
        researchLevel: "silver",
        forms: {
            "multi-strain": "Diverse bacteria",
            "single-strain": "Targeted approach",
            "spore-based": "Survives stomach acid"
        },
        interactions: ["antibiotics", "immune suppressants"],
        description: "Beneficial bacteria for gut health."
    },
    {
        id: "turmeric",
        name: "Turmeric (Curcumin)",
        category: "herb",
        problems: ["pain", "digestion"],
        benefits: [
            "Powerful anti-inflammatory",
            "May reduce arthritis pain",
            "Antioxidant properties",
            "May help digestion"
        ],
        warnings: [
            "Can cause stomach upset",
            "May thin blood",
            "Stains everything yellow"
        ],
        dose: "500-1000mg curcumin",
        timing: "With food and black pepper",
        price: "$15-35",
        researchLevel: "silver",
        forms: {
            "standard": "Regular turmeric powder",
            "bcm95": "Enhanced absorption",
            "liposomal": "Best absorption"
        },
        interactions: ["blood thinners", "diabetes meds"],
        description: "Golden spice with potent anti-inflammatory effects."
    },
    {
        id: "iron",
        name: "Iron",
        category: "mineral",
        problems: ["energy"],
        benefits: [
            "Treats anemia",
            "Boosts energy",
            "Improves focus",
            "Better athletic performance"
        ],
        warnings: [
            "Common side effect: constipation",
            "Can be toxic in high doses",
            "Don't take unless deficient",
            "Stomach upset common"
        ],
        dose: "18-65mg",
        timing: "Empty stomach with vitamin C",
        price: "$10-20",
        researchLevel: "gold",
        forms: {
            "ferrous-sulfate": "Cheap, harsh on stomach",
            "bisglycinate": "Gentle, better absorption",
            "liquid": "Easy to adjust dose"
        },
        interactions: ["calcium", "antacids", "coffee/tea"],
        description: "Essential mineral for oxygen transport."
    },
    {
        id: "vitamin-c",
        name: "Vitamin C",
        category: "vitamin",
        problems: ["immune"],
        benefits: [
            "Immune support",
            "Antioxidant",
            "Collagen production",
            "Iron absorption"
        ],
        warnings: [
            "Can cause diarrhea at high doses",
            "Kidney stones risk if prone"
        ],
        dose: "500-1000mg",
        timing: "Split throughout day",
        price: "$10-20",
        researchLevel: "gold",
        forms: {
            "ascorbic-acid": "Standard form",
            "buffered": "Easier on stomach",
            "liposomal": "Better absorption"
        },
        interactions: ["chemotherapy drugs"],
        description: "Classic immune-supporting vitamin."
    },
    {
        id: "b-complex",
        name: "B-Complex",
        category: "vitamin",
        problems: ["energy", "focus"],
        benefits: [
            "Energy production",
            "Nerve function",
            "Mood support",
            "Healthy hair and skin"
        ],
        warnings: [
            "Can turn pee bright yellow",
            "May cause nausea",
            "Can affect sleep if taken late"
        ],
        dose: "1 capsule (varies)",
        timing: "Morning with food",
        price: "$15-30",
        researchLevel: "gold",
        forms: {
            "standard": "All B vitamins",
            "activated": "Methylated forms",
            "stress": "Higher B5 and B6"
        },
        interactions: ["levodopa"],
        description: "All eight B vitamins in one supplement."
    },
    {
        id: "collagen",
        name: "Collagen",
        category: "protein",
        problems: ["skin", "pain"],
        benefits: [
            "Skin elasticity",
            "Joint health",
            "Hair and nail strength",
            "Gut health"
        ],
        warnings: [
            "May cause digestive issues",
            "Not vegetarian/vegan",
            "Benefits take months to show"
        ],
        dose: "10-20g",
        timing: "Anytime",
        price: "$25-45",
        researchLevel: "bronze",
        forms: {
            "hydrolyzed": "Better absorption",
            "type-1-3": "Skin and bones",
            "type-2": "Joints"
        },
        interactions: [],
        description: "Protein that makes up skin, bones, and joints."
    },
    {
        id: "lions-mane",
        name: "Lion's Mane",
        category: "mushroom",
        problems: ["focus"],
        benefits: [
            "May improve cognitive function",
            "Nerve regeneration",
            "Mood support",
            "Immune support"
        ],
        warnings: [
            "Can cause skin rashes in rare cases",
            "May lower blood sugar"
        ],
        dose: "500-1000mg",
        timing: "Morning",
        price: "$25-40",
        researchLevel: "bronze",
        forms: {
            "extract": "Concentrated",
            "powder": "Whole mushroom",
            "dual-extract": "Water and alcohol extracted"
        },
        interactions: ["diabetes medications"],
        description: "Mushroom that looks like a lion's mane, supports brain health."
    }
];

// Helper function to get supplements by problem
function getSupplementsForProblem(problemId) {
    return mockSupplements.filter(supp => supp.problems.includes(problemId));
}

// Helper function to get supplement by ID
function getSupplementById(id) {
    return mockSupplements.find(supp => supp.id === id);
}

// Categories for filtering
const categories = ["vitamin", "mineral", "herb", "amino-acid", "fatty-acid", "protein", "mushroom", "bacteria", "hormone"];