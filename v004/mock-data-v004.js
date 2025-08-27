// Mock Data for Supplement Database App - Version 004
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
    },
    // NEW SUPPLEMENTS START HERE
    {
        id: "vitamin-c",
        name: "Vitamin C",
        category: "vitamin",
        problems: ["immunity", "skin-health", "wound-healing"],
        benefits: [
            "Boosts immune system",
            "Antioxidant protection",
            "Collagen synthesis"
        ],
        warnings: [
            "Large doses cause diarrhea",
            "May cause kidney stones"
        ],
        dose: "500-2000mg",
        timing: "With meals, split doses",
        price: "$5-15/month",
        quality: "verified",
        forms: {
            "ascorbic-acid": "Standard, cheap",
            "buffered": "Gentler on stomach",
            "liposomal": "Better absorbed"
        },
        pregnancy_safe: true,
        medication_interactions: ["blood thinners", "chemotherapy"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "calcium",
        name: "Calcium",
        category: "mineral",
        problems: ["bone-health", "muscle-cramps", "osteoporosis"],
        benefits: [
            "Builds strong bones",
            "Muscle function",
            "Nerve transmission"
        ],
        warnings: [
            "Can cause constipation",
            "Interferes with iron absorption",
            "Heart attack risk if excessive"
        ],
        dose: "500-1200mg",
        timing: "With meals, split doses",
        price: "$10-20/month",
        quality: "verified",
        forms: {
            "citrate": "Better absorbed",
            "carbonate": "Needs stomach acid",
            "with-d3": "Enhanced absorption"
        },
        pregnancy_safe: true,
        medication_interactions: ["thyroid medication", "antibiotics", "bisphosphonates"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "ginkgo",
        name: "Ginkgo Biloba",
        category: "herb",
        problems: ["brain-fog", "memory", "circulation"],
        benefits: [
            "May improve memory",
            "Increases circulation",
            "Antioxidant effects"
        ],
        warnings: [
            "Bleeding risk",
            "May cause headaches",
            "Seizure risk in some"
        ],
        dose: "120-240mg",
        timing: "With meals",
        price: "$15-30/month",
        quality: "standardized-extract",
        forms: {
            "24-6": "Standardized extract",
            "whole-leaf": "Less concentrated"
        },
        pregnancy_safe: false,
        medication_interactions: ["blood thinners", "seizure meds", "antidepressants"],
        common_allergies: [],
        evidence_level: "bronze"
    },
    {
        id: "glucosamine",
        name: "Glucosamine",
        category: "supplement",
        problems: ["joint-pain", "arthritis", "cartilage"],
        benefits: [
            "May help joint pain",
            "Cartilage maintenance",
            "Reduces inflammation"
        ],
        warnings: [
            "May affect blood sugar",
            "Shellfish allergy concern",
            "Takes months to work"
        ],
        dose: "1500mg daily",
        timing: "With meals",
        price: "$20-35/month",
        quality: "verified",
        forms: {
            "sulfate": "Most studied",
            "HCL": "Better absorbed",
            "with-chondroitin": "Combined approach"
        },
        pregnancy_safe: false,
        medication_interactions: ["blood thinners", "diabetes medication"],
        common_allergies: ["shellfish"],
        evidence_level: "silver"
    },
    {
        id: "milk-thistle",
        name: "Milk Thistle",
        category: "herb",
        problems: ["liver-health", "detox", "inflammation"],
        benefits: [
            "Supports liver function",
            "May help with liver damage",
            "Antioxidant properties"
        ],
        warnings: [
            "Can cause digestive upset",
            "May lower blood sugar",
            "Allergic reactions possible"
        ],
        dose: "200-400mg",
        timing: "Between meals",
        price: "$15-25/month",
        quality: "standardized-extract",
        forms: {
            "silymarin": "Active compound standardized",
            "whole-herb": "Traditional preparation"
        },
        pregnancy_safe: false,
        medication_interactions: ["diabetes medication", "blood thinners", "birth control"],
        common_allergies: ["ragweed", "marigold"],
        evidence_level: "silver"
    },
    {
        id: "nac",
        name: "NAC (N-Acetyl Cysteine)",
        category: "amino-acid",
        problems: ["respiratory", "liver-health", "mental-health"],
        benefits: [
            "Thins mucus",
            "Liver protection",
            "May help OCD/addiction"
        ],
        warnings: [
            "Can cause nausea",
            "May reduce blood clotting",
            "Strong sulfur smell"
        ],
        dose: "600-1200mg",
        timing: "Empty stomach",
        price: "$20-40/month",
        quality: "verified",
        forms: {
            "capsules": "Standard form",
            "powder": "Cheaper, mix in water"
        },
        pregnancy_safe: false,
        medication_interactions: ["blood thinners", "nitrates"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "chromium",
        name: "Chromium",
        category: "mineral",
        problems: ["blood-sugar", "cravings", "metabolism"],
        benefits: [
            "May help blood sugar",
            "Reduces cravings",
            "Supports metabolism"
        ],
        warnings: [
            "Can cause low blood sugar",
            "May affect mood",
            "Kidney damage at high doses"
        ],
        dose: "200-400mcg",
        timing: "With meals",
        price: "$5-15/month",
        quality: "verified",
        forms: {
            "picolinate": "Better absorbed",
            "polynicotinate": "Gentler form"
        },
        pregnancy_safe: false,
        medication_interactions: ["diabetes medication", "thyroid medication"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "saw-palmetto",
        name: "Saw Palmetto",
        category: "herb",
        problems: ["prostate", "hair-loss", "urinary"],
        benefits: [
            "May help prostate health",
            "Could reduce hair loss",
            "Improves urinary flow"
        ],
        warnings: [
            "Can cause digestive issues",
            "May affect hormones",
            "Bleeding risk"
        ],
        dose: "160-320mg",
        timing: "With meals",
        price: "$15-25/month",
        quality: "standardized-extract",
        forms: {
            "liposterolic": "Standardized extract",
            "whole-berry": "Traditional form"
        },
        pregnancy_safe: false,
        medication_interactions: ["blood thinners", "hormone therapy"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "elderberry",
        name: "Elderberry",
        category: "herb",
        problems: ["immunity", "cold-flu", "inflammation"],
        benefits: [
            "May shorten cold duration",
            "Immune system support",
            "Rich in antioxidants"
        ],
        warnings: [
            "Can cause digestive upset",
            "Raw berries are toxic",
            "May overstimulate immune system"
        ],
        dose: "300-600mg",
        timing: "At first sign of illness",
        price: "$15-30/month",
        quality: "verified",
        forms: {
            "syrup": "Traditional, tasty",
            "capsules": "Standardized dose",
            "gummies": "Kid-friendly"
        },
        pregnancy_safe: false,
        medication_interactions: ["immunosuppressants", "diuretics"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "biotin",
        name: "Biotin",
        category: "vitamin",
        problems: ["hair-loss", "nail-health", "skin"],
        benefits: [
            "Supports hair growth",
            "Strengthens nails",
            "Healthy skin"
        ],
        warnings: [
            "Can interfere with lab tests",
            "Most people aren't deficient",
            "High doses unnecessary"
        ],
        dose: "30-100mcg",
        timing: "With meals",
        price: "$10-20/month",
        quality: "verified",
        forms: {
            "standard": "Works fine for most",
            "high-potency": "Usually overkill"
        },
        pregnancy_safe: true,
        medication_interactions: [],
        common_allergies: [],
        evidence_level: "bronze"
    },
    {
        id: "spirulina",
        name: "Spirulina",
        category: "supplement",
        problems: ["nutrition", "energy", "immunity"],
        benefits: [
            "Dense nutrition",
            "May boost energy",
            "Protein source"
        ],
        warnings: [
            "Can cause digestive issues",
            "May be contaminated",
            "Autoimmune caution"
        ],
        dose: "3-5g",
        timing: "With meals",
        price: "$20-40/month",
        quality: "third-party-tested",
        forms: {
            "powder": "Mix in smoothies",
            "tablets": "Easier to take"
        },
        pregnancy_safe: false,
        medication_interactions: ["immunosuppressants", "blood thinners"],
        common_allergies: [],
        evidence_level: "bronze"
    },
    {
        id: "green-tea",
        name: "Green Tea Extract",
        category: "herb",
        problems: ["weight-loss", "metabolism", "antioxidants"],
        benefits: [
            "May boost metabolism",
            "High in antioxidants",
            "Supports weight loss"
        ],
        warnings: [
            "Can cause liver damage",
            "Contains caffeine",
            "May cause nausea"
        ],
        dose: "300-500mg EGCG",
        timing: "Between meals",
        price: "$15-30/month",
        quality: "standardized-extract",
        forms: {
            "decaffeinated": "No stimulant effects",
            "with-caffeine": "Full spectrum"
        },
        pregnancy_safe: false,
        medication_interactions: ["blood thinners", "stimulants", "liver medications"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "selenium",
        name: "Selenium",
        category: "mineral",
        problems: ["immunity", "thyroid", "antioxidants"],
        benefits: [
            "Supports immune function",
            "Thyroid health",
            "Antioxidant protection"
        ],
        warnings: [
            "Toxic at high doses",
            "Can cause hair loss if excessive",
            "Brazil nuts are high in selenium"
        ],
        dose: "55-200mcg",
        timing: "With meals",
        price: "$5-10/month",
        quality: "verified",
        forms: {
            "selenomethionine": "Better absorbed",
            "sodium-selenite": "Inorganic form"
        },
        pregnancy_safe: true,
        medication_interactions: ["blood thinners", "chemotherapy"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "vitamin-k2",
        name: "Vitamin K2",
        category: "vitamin",
        problems: ["bone-health", "heart-health", "calcium-metabolism"],
        benefits: [
            "Directs calcium to bones",
            "May prevent arterial calcification",
            "Works with Vitamin D"
        ],
        warnings: [
            "Can interfere with blood thinners",
            "Different forms have different effects"
        ],
        dose: "100-200mcg",
        timing: "With fatty meal",
        price: "$15-35/month",
        quality: "verified",
        forms: {
            "MK-7": "Longer lasting",
            "MK-4": "More research"
        },
        pregnancy_safe: true,
        medication_interactions: ["blood thinners"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "gaba",
        name: "GABA",
        category: "amino-acid",
        problems: ["anxiety", "sleep", "stress"],
        benefits: [
            "May reduce anxiety",
            "Promotes relaxation",
            "Sleep support"
        ],
        warnings: [
            "May cause drowsiness",
            "Questionable absorption",
            "Can interact with sedatives"
        ],
        dose: "250-750mg",
        timing: "Empty stomach",
        price: "$15-25/month",
        quality: "verified",
        forms: {
            "pharma-gaba": "Naturally produced",
            "synthetic": "Cheaper option"
        },
        pregnancy_safe: false,
        medication_interactions: ["sedatives", "anti-anxiety meds", "blood pressure meds"],
        common_allergies: [],
        evidence_level: "bronze"
    },
    {
        id: "valerian",
        name: "Valerian Root",
        category: "herb",
        problems: ["sleep", "anxiety", "stress"],
        benefits: [
            "Helps with sleep",
            "Reduces anxiety",
            "Natural sedative"
        ],
        warnings: [
            "Can cause morning grogginess",
            "Strong unpleasant smell",
            "May cause paradoxical stimulation"
        ],
        dose: "300-900mg",
        timing: "30-60 min before bed",
        price: "$10-20/month",
        quality: "standardized-extract",
        forms: {
            "extract": "Standardized potency",
            "tea": "Milder effects"
        },
        pregnancy_safe: false,
        medication_interactions: ["sedatives", "anti-anxiety meds", "alcohol"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "folic-acid",
        name: "Folic Acid",
        category: "vitamin",
        problems: ["anemia", "pregnancy", "mood"],
        benefits: [
            "Prevents birth defects",
            "Supports red blood cell formation",
            "May help depression"
        ],
        warnings: [
            "Can mask B12 deficiency",
            "High doses may increase cancer risk"
        ],
        dose: "400-800mcg",
        timing: "With meals",
        price: "$5-15/month",
        quality: "verified",
        forms: {
            "methylfolate": "Active form",
            "folic-acid": "Synthetic form"
        },
        pregnancy_safe: true,
        medication_interactions: ["methotrexate", "seizure medications"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "copper",
        name: "Copper",
        category: "mineral",
        problems: ["anemia", "bone-health", "immune"],
        benefits: [
            "Iron absorption",
            "Collagen formation",
            "Immune function"
        ],
        warnings: [
            "Toxic at high doses",
            "Most people get enough from food",
            "Can cause nausea"
        ],
        dose: "1-3mg",
        timing: "With meals",
        price: "$5-10/month",
        quality: "verified",
        forms: {
            "bisglycinate": "Well absorbed",
            "gluconate": "Gentle form"
        },
        pregnancy_safe: true,
        medication_interactions: ["zinc supplements", "penicillamine"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "alpha-lipoic",
        name: "Alpha-Lipoic Acid",
        category: "antioxidant",
        problems: ["diabetes", "neuropathy", "aging"],
        benefits: [
            "May help diabetes",
            "Reduces nerve pain",
            "Universal antioxidant"
        ],
        warnings: [
            "Can cause low blood sugar",
            "May cause skin rash",
            "R-form is more expensive"
        ],
        dose: "300-600mg",
        timing: "Empty stomach",
        price: "$25-50/month",
        quality: "verified",
        forms: {
            "R-lipoic": "More bioactive",
            "racemic": "Standard form"
        },
        pregnancy_safe: false,
        medication_interactions: ["diabetes medication", "thyroid medication"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "tryptophan",
        name: "L-Tryptophan",
        category: "amino-acid",
        problems: ["sleep", "mood", "anxiety"],
        benefits: [
            "Precursor to serotonin",
            "Improves sleep",
            "May help depression"
        ],
        warnings: [
            "Can cause drowsiness",
            "May interact with antidepressants",
            "EMS contamination history"
        ],
        dose: "500-2000mg",
        timing: "Empty stomach before bed",
        price: "$20-40/month",
        quality: "pharmaceutical-grade",
        forms: {
            "L-tryptophan": "Natural amino acid",
            "5-HTP": "Closer to serotonin"
        },
        pregnancy_safe: false,
        medication_interactions: ["antidepressants", "sedatives", "MAO inhibitors"],
        common_allergies: [],
        evidence_level: "bronze"
    },
    {
        id: "echinacea",
        name: "Echinacea",
        category: "herb",
        problems: ["immunity", "cold-flu", "infections"],
        benefits: [
            "May reduce cold duration",
            "Immune system support",
            "Anti-inflammatory"
        ],
        warnings: [
            "Can cause allergic reactions",
            "May overstimulate immune system",
            "Not for long-term use"
        ],
        dose: "300-500mg",
        timing: "At first sign of illness",
        price: "$10-20/month",
        quality: "standardized-extract",
        forms: {
            "purpurea": "Most common species",
            "angustifolia": "Traditional use"
        },
        pregnancy_safe: false,
        medication_interactions: ["immunosuppressants", "autoimmune medications"],
        common_allergies: ["ragweed", "daisy family"],
        evidence_level: "bronze"
    },
    {
        id: "vitamin-e",
        name: "Vitamin E",
        category: "vitamin",
        problems: ["antioxidants", "skin-health", "heart"],
        benefits: [
            "Antioxidant protection",
            "Skin health",
            "May help immune function"
        ],
        warnings: [
            "Can increase bleeding risk",
            "High doses may increase mortality",
            "Synthetic vs natural forms"
        ],
        dose: "15-400 IU",
        timing: "With fatty meal",
        price: "$10-25/month",
        quality: "natural-source",
        forms: {
            "d-alpha": "Natural, more active",
            "mixed-tocopherols": "Full spectrum"
        },
        pregnancy_safe: true,
        medication_interactions: ["blood thinners", "chemotherapy"],
        common_allergies: [],
        evidence_level: "bronze"
    },
    {
        id: "potassium",
        name: "Potassium",
        category: "mineral",
        problems: ["blood-pressure", "muscle-cramps", "heart"],
        benefits: [
            "Lowers blood pressure",
            "Prevents muscle cramps",
            "Supports heart function"
        ],
        warnings: [
            "Can be dangerous with kidney disease",
            "May cause hyperkalemia",
            "Limited supplement doses"
        ],
        dose: "99mg (supplement limit)",
        timing: "With meals",
        price: "$10-20/month",
        quality: "verified",
        forms: {
            "chloride": "Most common",
            "citrate": "Better absorbed"
        },
        pregnancy_safe: true,
        medication_interactions: ["ACE inhibitors", "potassium-sparing diuretics", "heart medications"],
        common_allergies: [],
        evidence_level: "gold"
    },
    {
        id: "garlic",
        name: "Garlic Extract",
        category: "herb",
        problems: ["heart-health", "cholesterol", "blood-pressure"],
        benefits: [
            "May lower cholesterol",
            "Supports heart health",
            "May reduce blood pressure"
        ],
        warnings: [
            "Can cause digestive upset",
            "Strong breath/body odor",
            "Bleeding risk"
        ],
        dose: "600-1200mg",
        timing: "With meals",
        price: "$10-20/month",
        quality: "standardized-extract",
        forms: {
            "aged": "Odorless, gentler",
            "allicin": "Active compound standardized"
        },
        pregnancy_safe: true,
        medication_interactions: ["blood thinners", "HIV medications"],
        common_allergies: [],
        evidence_level: "silver"
    },
    {
        id: "lysine",
        name: "L-Lysine",
        category: "amino-acid",
        problems: ["cold-sores", "immune", "tissue-repair"],
        benefits: [
            "May prevent cold sores",
            "Supports immune function",
            "Helps tissue repair"
        ],
        warnings: [
            "Can cause digestive issues",
            "May increase cholesterol",
            "High doses can affect kidneys"
        ],
        dose: "1000-3000mg",
        timing: "Empty stomach",
        price: "$15-25/month",
        quality: "pharmaceutical-grade",
        forms: {
            "HCL": "Standard form",
            "free-form": "Better absorbed"
        },
        pregnancy_safe: false,
        medication_interactions: ["calcium supplements", "arginine supplements"],
        common_allergies: [],
        evidence_level: "bronze"
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
        topSupplements: ["melatonin", "mag-glycinate", "l-theanine", "ashwagandha", "valerian", "gaba"]
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
        topSupplements: ["ashwagandha", "l-theanine", "mag-glycinate", "rhodiola", "gaba", "valerian"]
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
        topSupplements: ["b-complex", "iron", "coq10", "rhodiola", "vitamin-d", "spirulina"]
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
        topSupplements: ["probiotics", "turmeric", "collagen", "milk-thistle"]
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
        topSupplements: ["turmeric", "omega-3", "collagen", "mag-glycinate", "glucosamine"]
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
        topSupplements: ["omega-3", "b-complex", "l-theanine", "creatine", "rhodiola", "ginkgo"]
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
        topSupplements: ["collagen", "zinc", "omega-3", "vitamin-d", "biotin"]
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
        topSupplements: ["vitamin-d", "zinc", "probiotics", "omega-3", "vitamin-c", "elderberry", "selenium"]
    }
];

const mockInteractions = [
    {
        supplement: "ashwagandha",
        medication: "thyroid medication",
        severity: "high",
        description: "May enhance thyroid hormone effects"
    },
    {
        supplement: "turmeric",
        medication: "blood thinners",
        severity: "high",
        description: "Increases bleeding risk"
    },
    {
        supplement: "mag-glycinate",
        medication: "antibiotics",
        severity: "moderate",
        description: "Reduces antibiotic absorption"
    },
    {
        supplement: "omega-3",
        medication: "blood thinners",
        severity: "moderate",
        description: "May increase bleeding risk"
    },
    {
        supplement: "melatonin",
        medication: "blood pressure meds",
        severity: "moderate",
        description: "May enhance blood pressure lowering effects"
    },
    {
        supplement: "iron",
        medication: "thyroid medication",
        severity: "high",
        description: "Significantly reduces thyroid medication absorption"
    },
    {
        supplement: "vitamin-d",
        medication: "digoxin",
        severity: "high",
        description: "Increases risk of irregular heart rhythms"
    },
    {
        supplement: "ginkgo",
        medication: "blood thinners",
        severity: "high",
        description: "Significantly increases bleeding risk"
    },
    {
        supplement: "green-tea",
        medication: "blood thinners",
        severity: "moderate",
        description: "May affect blood clotting"
    },
    {
        supplement: "vitamin-k2",
        medication: "blood thinners",
        severity: "high",
        description: "Directly counteracts blood thinning effects"
    }
];
