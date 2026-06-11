// Drug Synthesis Mod for Sandboxels
// Synthesis chain: Incense + Steam => IncenseOil => +Ammonia => CrudeAmine
//   => +Lye => FreebaseOil => +Charcoal => CrudeProduct => +heat => Crystal
// Placeable finished drugs also available in the Drugs category.

// ============================================================
// SYNTHESIS INTERMEDIATES (hidden, reaction-created only)
// ============================================================

elements.incense_oil = {
    color: ["#c8943c","#d4a04a","#bf8a30","#dbaa55"],
    behavior: behaviors.LIQUID,
    viscosity: 45,
    tempHigh: 160,
    stateHigh: ["fragrance","smoke","smoke"],
    tempLow: -5,
    stateLow: "incense_wax",
    reactions: {
        "ammonia": { elem1: "crude_amine", elem2: null, tempMin: 50, tempMax: 85, chance: 0.04 },
        "lye": { elem1: "waste_tar", elem2: null, chance: 0.01 },
        "propane": { elem1: "fire", elem2: "incense_oil", chance: 0.1, tempMin: 200 }
    },
    category: "drugs",
    state: "liquid",
    density: 920,
    burn: 15,
    burnTime: 80,
    burnInto: ["fragrance","smoke"],
    hidden: true
};

elements.incense_wax = {
    color: ["#8a6e30","#7a6028","#9a7e40"],
    behavior: behaviors.POWDER,
    tempHigh: 55,
    stateHigh: "incense_oil",
    category: "drugs",
    state: "solid",
    density: 950,
    burn: 20,
    burnTime: 100,
    burnInto: ["fragrance","smoke"],
    hidden: true
};

elements.crude_amine = {
    color: ["#5c3a1e","#4a2e15","#6e4628","#3d2410"],
    behavior: behaviors.LIQUID,
    viscosity: 180,
    tempHigh: 130,
    stateHigh: ["poison_gas","smoke","waste_tar"],
    tempLow: -10,
    stateLow: "crude_amine_solid",
    reactions: {
        "lye": { elem1: "freebase_oil", elem2: null, chance: 0.06 },
        "charcoal": { elem1: "crude_product", elem2: null, chance: 0.03 },
        "alga": { elem1: "crude_amine", elem2: "activated_catalyst", chance: 0.01 },
        "water": { elem1: "dirty_water", elem2: null, chance: 0.05 }
    },
    category: "drugs",
    state: "liquid",
    density: 1050,
    burn: 25,
    burnTime: 60,
    burnInto: ["poison_gas","smoke"],
    poison: true,
    hidden: true
};

elements.crude_amine_solid = {
    color: ["#3d2410","#2e1a0a","#4a2e15"],
    behavior: behaviors.POWDER,
    tempHigh: 20,
    stateHigh: "crude_amine",
    category: "drugs",
    state: "solid",
    density: 1100,
    hidden: true
};

elements.freebase_oil = {
    color: ["#d4aa50","#e0b860","#c8a040","#ecd070"],
    behavior: behaviors.LIQUID,
    viscosity: 25,
    tempHigh: 180,
    stateHigh: ["purified_crystal","purified_crystal","smoke"],
    tempLow: -15,
    stateLow: "freebase_wax",
    reactions: {
        "charcoal": { elem1: "crude_product", elem2: null, chance: 0.05 },
        "water": { elem1: "incense_oil", elem2: null, chance: 0.02 }
    },
    category: "drugs",
    state: "liquid",
    density: 880,
    burn: 30,
    burnTime: 40,
    burnInto: ["fragrance","smoke"],
    hidden: true
};

elements.freebase_wax = {
    color: ["#b89840","#a88830","#c8a850"],
    behavior: behaviors.POWDER,
    tempHigh: 35,
    stateHigh: "freebase_oil",
    category: "drugs",
    state: "solid",
    density: 900,
    hidden: true
};

elements.crude_product = {
    color: ["#b89560","#a0804a","#c8a070","#90703a"],
    behavior: behaviors.POWDER,
    tempHigh: 155,
    stateHigh: ["purified_crystal","purified_crystal","smoke","waste_tar"],
    tempLow: -20,
    category: "drugs",
    state: "solid",
    density: 750,
    burn: 20,
    burnTime: 50,
    burnInto: ["fragrance","smoke"],
    hidden: true
};

elements.purified_crystal = {
    color: ["#f0ece0","#e8e4d8","#f4f0e8","#dcd8cc"],
    behavior: behaviors.POWDER,
    tempHigh: 210,
    stateHigh: ["fragrance","smoke","steam","steam"],
    tempLow: -30,
    reactions: {
        "water": { elem1: null, elem2: "dirty_water", chance: 0.04 },
        "fire": { elem1: null, elem2: "color_smoke", chance: 0.1, color2: "#aabbff" },
        "oxygen": { elem1: ["steam","smoke","color_smoke"], elem2: null, tempMin: 150, chance: 0.05 }
    },
    category: "drugs",
    state: "solid",
    density: 680,
    burn: 15,
    burnTime: 120,
    burnInto: ["fragrance","steam"],
    hidden: true
};

elements.activated_catalyst = {
    color: ["#888899","#7a7a8a","#9696a6","#a0a0b0"],
    behavior: behaviors.POWDER,
    tempHigh: 1200,
    tempLow: -20,
    reactions: {
        "ammonia": { elem1: "alga", elem2: null, chance: 0.005 },
        "incense_oil": { elem1: "crude_amine", elem2: "activated_catalyst", chance: 0.08 },
        "water": { elem1: "hydrogen", elem2: null, chance: 0.01 }
    },
    category: "drugs",
    state: "solid",
    density: 4200,
    hidden: true
};

elements.waste_tar = {
    color: ["#1a1008","#2a1a0e","#0e0804"],
    behavior: behaviors.LIQUID,
    viscosity: 600,
    tempHigh: 350,
    stateHigh: ["smoke","smoke","ash"],
    tempLow: -5,
    stateLow: "waste_tar_solid",
    category: "drugs",
    state: "liquid",
    density: 1200,
    burn: 40,
    burnTime: 200,
    burnInto: ["smoke","stench"],
    hidden: true
};

elements.waste_tar_solid = {
    color: ["#1a1008","#2a1a0e","#0e0804"],
    behavior: behaviors.POWDER,
    tempHigh: 20,
    stateHigh: "waste_tar",
    category: "drugs",
    state: "solid",
    density: 1100,
    hidden: true
};

// ============================================================
// PLACEABLE FINISHED DRUGS (visible in Drugs category tab)
// ============================================================

elements.meth = {
    color: ["#f0ece0","#e8e4d8","#f4f0e8","#ffffff"],
    behavior: behaviors.POWDER,
    tempHigh: 175,
    stateHigh: ["fragrance","steam","steam"],
    reactions: {
        "water": { elem1: null, elem2: "dirty_water", chance: 0.05 },
        "fire": { elem1: null, elem2: "color_smoke", chance: 0.15, color2: "#88bbff" },
        "lye": { elem1: "freebase_oil", elem2: null, chance: 0.06 }
    },
    category: "drugs",
    state: "solid",
    density: 720,
    burn: 20,
    burnTime: 100,
    burnInto: ["fragrance","steam"],
    conduct: 0.01
};

elements.mdma = {
    color: ["#e8dcc8","#dcccb4","#f0e4d4","#d4c4a8"],
    behavior: behaviors.POWDER,
    tempHigh: 148,
    stateHigh: ["fragrance","steam"],
    reactions: {
        "water": { elem1: null, elem2: "dirty_water", chance: 0.03 },
        "fire": { elem1: null, elem2: "color_smoke", chance: 0.12, color2: "#cc88ff" },
        "lye": { elem1: "freebase_oil", elem2: null, chance: 0.03 }
    },
    category: "drugs",
    state: "solid",
    density: 740,
    burn: 15,
    burnTime: 90,
    burnInto: ["fragrance","steam"]
};

elements.lsd = {
    color: ["#f8f0e0","#f0e8d0","#fcf4e8"],
    behavior: behaviors.WALL,
    tempHigh: 80,
    stateHigh: ["fragrance","steam","steam"],
    reactions: {
        "water": { elem1: null, elem2: null, chance: 0.06 },
        "fire": { elem1: null, elem2: "color_smoke", chance: 0.2, color2: "#ff88ff" }
    },
    category: "drugs",
    state: "solid",
    density: 200,
    burn: 30,
    burnTime: 30,
    burnInto: ["fragrance","smoke"]
};

elements.cocaine = {
    color: ["#faf6f0","#f0ece4","#ffffff","#f4f0ea"],
    behavior: behaviors.POWDER,
    tempHigh: 195,
    stateHigh: ["fragrance","steam"],
    reactions: {
        "water": { elem1: null, elem2: "dirty_water", chance: 0.08 },
        "fire": { elem1: null, elem2: "color_smoke", chance: 0.1, color2: "#ffffff" },
        "lye": { elem1: "freebase_oil", elem2: null, chance: 0.08 },
        "ammonia": { elem1: "freebase_oil", elem2: null, chance: 0.04, tempMin: 40 }
    },
    category: "drugs",
    state: "solid",
    density: 730,
    burn: 10,
    burnTime: 60,
    burnInto: ["fragrance","steam"],
    stain: -0.3
};

elements.heroin = {
    color: ["#c8a880","#b89870","#d4b490","#a88060"],
    behavior: behaviors.POWDER,
    tempHigh: 170,
    stateHigh: ["stench","smoke"],
    reactions: {
        "water": { elem1: null, elem2: "dirty_water", chance: 0.04 },
        "fire": { elem1: null, elem2: "smoke", chance: 0.2, color2: "#443322" },
        "vinegar": { elem1: "incense_oil", elem2: null, chance: 0.02 }
    },
    category: "drugs",
    state: "solid",
    density: 760,
    burn: 25,
    burnTime: 80,
    burnInto: ["stench","smoke"]
};

elements.crack = {
    color: ["#e8dcc0","#dccfb0","#f0e4cc","#d0c0a0"],
    behavior: behaviors.POWDER,
    tempHigh: 95,
    stateHigh: ["fragrance","steam","steam"],
    reactions: {
        "fire": { elem1: null, elem2: "color_smoke", chance: 0.25, color2: "#ffddaa" },
        "water": { elem1: "freebase_oil", elem2: null, chance: 0.04 }
    },
    category: "drugs",
    state: "solid",
    density: 700,
    burn: 35,
    burnTime: 40,
    burnInto: ["fragrance","steam"]
};

elements.weed = {
    color: ["#5a7a30","#4a6a28","#6a8a40","#3d5a20"],
    behavior: behaviors.POWDER,
    tempHigh: 230,
    stateHigh: ["ash","smoke"],
    reactions: {
        "fire": { elem1: null, elem2: "smoke", chance: 0.15 },
        "charcoal": { elem1: "hash", elem2: null, chance: 0.005 }
    },
    category: "drugs",
    state: "solid",
    density: 320,
    burn: 15,
    burnTime: 150,
    burnInto: ["ash","smoke"]
};

elements.hash = {
    color: ["#2a1a0e","#1a0e06","#3a2212","#221008"],
    behavior: behaviors.STURDYPOWDER,
    tempHigh: 200,
    stateHigh: ["smoke","smoke","ash"],
    reactions: {
        "fire": { elem1: null, elem2: "smoke", chance: 0.2 }
    },
    category: "drugs",
    state: "solid",
    density: 600,
    burn: 20,
    burnTime: 200,
    burnInto: ["smoke","ash"]
};

elements.dmt = {
    color: ["#f0e8d0","#e8dcc0","#f4ecd8","#dcd0b0"],
    behavior: behaviors.POWDER,
    tempHigh: 60,
    stateHigh: ["fragrance","steam"],
    reactions: {
        "fire": { elem1: null, elem2: "color_smoke", chance: 0.3, color2: "#ffcc44" },
        "water": { elem1: null, elem2: "dirty_water", chance: 0.02 }
    },
    category: "drugs",
    state: "solid",
    density: 690,
    burn: 40,
    burnTime: 25,
    burnInto: ["fragrance","steam"]
};

elements.shrooms = {
    color: ["#c8a070","#b89060","#d4b080","#a08050"],
    behavior: behaviors.POWDER,
    tempHigh: 180,
    stateHigh: ["ash","smoke"],
    reactions: {
        "water": { elem1: null, elem2: "dirty_water", chance: 0.03 },
        "fire": { elem1: null, elem2: "smoke", chance: 0.1 },
        "vinegar": { elem1: null, elem2: "dirty_water", chance: 0.05 }
    },
    category: "drugs",
    state: "solid",
    density: 360,
    burn: 10,
    burnTime: 100,
    burnInto: ["ash","smoke"]
};

elements.ketamine = {
    color: ["#f4f0e8","#ece8e0","#faf6f0","#e0dcd4"],
    behavior: behaviors.POWDER,
    tempHigh: 190,
    stateHigh: ["fragrance","steam"],
    reactions: {
        "water": { elem1: null, elem2: "dirty_water", chance: 0.06 },
        "fire": { elem1: null, elem2: "steam", chance: 0.1 }
    },
    category: "drugs",
    state: "solid",
    density: 710,
    burn: 5,
    burnTime: 40,
    burnInto: ["fragrance","steam"]
};

// ============================================================
// REACTIONS ON EXISTING BASE ELEMENTS (modifies incense + water)
// ============================================================

if (elements.incense) {
    if (!elements.incense.reactions) elements.incense.reactions = {};
    elements.incense.reactions.steam = { elem1: "incense_oil", elem2: null, tempMin: 60, tempMax: 95, chance: 0.06 };
    elements.incense.reactions.lye = { elem1: "incense_oil", elem2: null, tempMin: 40, tempMax: 90, chance: 0.03 };
}

if (elements.water && elements.water.reactions) {
    elements.water.reactions.meth = { elem1: "dirty_water", elem2: null, chance: 0.02 };
    elements.water.reactions.mdma = { elem1: "dirty_water", elem2: null, chance: 0.02 };
    elements.water.reactions.cocaine = { elem1: "dirty_water", elem2: null, chance: 0.02 };
    elements.water.reactions.heroin = { elem1: "dirty_water", elem2: null, chance: 0.02 };
    elements.water.reactions.weed = { elem1: "dirty_water", elem2: null, chance: 0.01 };
}
