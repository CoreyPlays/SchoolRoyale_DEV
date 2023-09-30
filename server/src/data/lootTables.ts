export interface WeightedLoot { item: string, count?: number, weight: number }
export interface WeightedTier { tier: string, weight: number }
export type WeightedItem = WeightedLoot | WeightedTier;
export interface LootTable { min: number, max: number, loot: WeightedItem[] }

export const LootTables: Record<string, LootTable> = {
    ground_loot: {
        min: 1,
        max: 1,
        loot: [
            { tier: "equipment", weight: 1 },
            { tier: "scopes", weight: 0.3 },
            { tier: "healing_items", weight: 1 },
            { tier: "ammo", weight: 1 },
            { tier: "guns", weight: 0.9 }
        ]
    },
    regular_crate: {
        min: 1,
        max: 1,
        loot: [
            { tier: "guns", weight: 1.25 },
            { tier: "equipment", weight: 0.3 },
            { tier: "scopes", weight: 0.3 },
            { tier: "healing_items", weight: 1 },
            { tier: "ammo", weight: 0.6 },
            { tier: "melee", weight: 0.04 }
        ]
    },
    aegis_crate: {
        min: 3,
        max: 5,
        loot: [
            { tier: "special_guns", weight: 1 },
            { tier: "special_healing_items", weight: 0.15 },
            { tier: "special_equipment", weight: 0.65 },
            { tier: "special_scopes", weight: 0.3 }
        ]
    },
    flint_crate: {
        min: 3,
        max: 5,
        loot: [
            { tier: "special_guns", weight: 1 },
            { tier: "special_equipment", weight: 0.65 },
            { tier: "special_healing_items", weight: 0.15 },
            { tier: "special_scopes", weight: 0.3 }
        ]
    },
    melee_crate: {
        min: 2,
        max: 2,
        loot: [
            { tier: "melee", weight: 1 }
        ]
    },
    gold_rock: {
        min: 1,
        max: 1,
        loot: [
            { item: "har.epic", weight: 1 },
        ]
    },
    blueberry_bush: {
        min: 1,
        max: 1,
        loot: [
            { tier: "equipment", weight: 1 },
            { tier: "healing_items", weight: 1 },
            { tier: "scopes", weight: 1 }
        ]
    },
    warehouse: {
        min: 1,
        max: 1,
        loot: [
            { tier: "special_guns", weight: 1 },
            { tier: "special_scopes", weight: 0.25 },
            { tier: "special_equipment", weight: 0.65 }
        ]
    },
    large_drawer: {
        min: 1,
        max: 1,
        loot: [
            { tier: "guns", weight: 1 },
            { tier: "equipment", weight: 0.65 },
            { tier: "scopes", weight: 0.3 }
        ]
    },
    small_drawer: {
        min: 1,
        max: 1,
        loot: [
            { tier: "healing_items", weight: 0.8 },
            { tier: "ammo", weight: 1 }
        ]
    },
    small_table: {
        min: 1,
        max: 1,
        loot: [
            { tier: "healing_items", weight: 1 },
            { tier: "ammo", weight: 1 }
        ]
    },
    box: {
        min: 1,
        max: 1,
        loot: [
            { tier: "ammo", weight: 1.2 },
            { tier: "healing_items", weight: 1 },
            { tier: "equipment", weight: 1 },
            { tier: "guns", weight: 0.5 },
            { tier: "scopes", weight: 0.3 }
        ]
    },
    bookshelf: {
        min: 1,
        max: 2,
        loot: [
            { tier: "equipment", weight: 1.1 },
            { tier: "scopes", weight: 0.4 },
            { tier: "guns", weight: 1 },
            { tier: "healing_items", weight: 0.6 }
        ]
    },
    fridge: {
        min: 2,
        max: 3,
        loot: [
            { item: "cola", weight: 1 }
        ]
    },
    washing_machine: {
        min: 1,
        max: 1,
        loot: [
            { item: "hazel_jumpsuit", weight: 1 },
            { item: "verified", weight: 0.2 },
            { item: "nokilpls", weight: 0.1 },
            { item: "basic_outfit", weight: 0.0001 }
        ]
    },
    toilet: {
        min: 2,
        max: 3,
        loot: [
            { tier: "healing_items", weight: 3 },
            { tier: "scopes", weight: 0.1 },
            { tier: "guns", weight: 0.05 }
        ]
    },
    used_toilet: {
        min: 2,
        max: 3,
        loot: [
            { tier: "guns", weight: 1.25 },
            { tier: "equipment", weight: 1 },
            { tier: "scopes", weight: 0.35 },
            { tier: "special_guns", weight: 0.8 },
            { tier: "healing_items", weight: 0.75 }
        ]
    },
    porta_potty_toilet_open: {
        min: 2,
        max: 3,
        loot: [
            { tier: "guns", weight: 1.25 },
            { tier: "healing_items", weight: 1 },
            { tier: "equipment", weight: 0.9 },
            { tier: "special_guns", weight: 0.8 },
            { tier: "special_scopes", weight: 0.35 }
        ]
    },
    porta_potty_toilet_closed: {
        min: 2,
        max: 3,
        loot: [
            { tier: "healing_items", weight: 3 },
            { tier: "scopes", weight: 0.1 },
            { tier: "guns", weight: 0.05 }
        ]
    },
    gun_mount: {
        min: 1,
        max: 1,
        loot: [
            { item: "har.epic", weight: 1 },
            { item: "ar.epic", weight: 1 },
            { item: "hs.epic", weight: 1 },
            { item: "har.legendary", weight: 0.5 },
            { item: "ar.legendary", weight: 0.5 },
            { item: "hs.legendary", weight : 0.5 }
        ]
    }
};

export const LootTiers: Record<string, WeightedLoot[]> = {
    guns: [
        { item: "har.uncommon", weight: 2 },
        { item: "har.common", weight: 1.25 },
        { item: "har.rare", weight: 1 },
        { item: "har.epic", weight: 0.5 },
        { item: "har.legendary", weight: 0.25 },
        { item: "ar.uncommon", weight: 2 },
        { item: "ar.common", weight: 1.25 },
        { item: "ar.rare", weight: 1 },
        { item: "ar.epic", weight: 0.5 },
        { item: "ar.legendary", weight: 0.25 },
        { item: "pistol.uncommon", weight: 2 },
        { item: "pistol.common", weight: 1.25 },
        { item: "pistol.rare", weight: 1 },
        { item: "hs.epic", weight: 0.25 },
        { item: "hs.epic", weight: 0.15 },
        { item: "cs.uncommon", weight: 2 },
        { item: "cs.common", weight: 1.25 },
        { item: "cs.rare", weight: 1 },
    ],
    healing_items: [
        { item: "gauze", weight: 3, count: 5 },
        { item: "cola", weight: 2 },
        { item: "tablets", weight: 1 },
        { item: "medikit", weight: 1 }
    ],
    scopes: [
        { item: "2x_scope", weight: 1 },
        { item: "4x_scope", weight: 0.5 },
        { item: "8x_scope", weight: 0.1 },
        { item: "15x_scope", weight: 0.0025 }
    ],
    equipment: [
        { item: "hard_hat", weight: 1 },
        { item: "m1_helmet", weight: 0.3 },
        { item: "tactical_helmet", weight: 0.1 },

        { item: "basic_vest", weight: 1 },
        { item: "bulletproof_vest", weight: 0.3 },
        { item: "tactical_vest", weight: 0.1 },

        { item: "satchel", weight: 1 },
        { item: "regular_backpack", weight: 0.3 },
        { item: "tactical_backpack", weight: 0.1 }
    ],
    ammo: [
        { item: "12g", count: 10, weight: 0.75 },
        { item: "556mm", count: 60, weight: 1 },
        { item: "762mm", count: 60, weight: 1 },
        { item: "9mm", count: 60, weight: 1 }
    ],
    special_guns: [
        { item: "har.epic", weight: 1 },
        { item: "ar.epic", weight: 1 },
        { item: "hs.epic", weight: 1 },
        { item: "har.legendary", weight: 0.5 },
        { item: "ar.legendary", weight: 0.5 },
        { item: "hs.legendary", weight : 0.5 }
    ],
    special_healing_items: [
        { item: "cola", weight: 3 },
        { item: "tablets", weight: 1 },
        { item: "medikit", weight: 1 },
        { item: "gauze", weight: 3 }
    ],
    special_scopes: [
        { item: "2x_scope", weight: 1 },
        { item: "4x_scope", weight: 0.45 },
        { item: "8x_scope", weight: 0.1 },
        { item: "15x_scope", weight: 0.05 }
    ],
    special_equipment: [
        { item: "hard_hat", weight: 1 },
        { item: "m1_helmet", weight: 0.5 },
        { item: "tactical_helmet", weight: 0.15 },

        { item: "basic_vest", weight: 1 },
        { item: "bulletproof_vest", weight: 0.5 },
        { item: "tactical_vest", weight: 0.15 },

        { item: "satchel", weight: 1 },
        { item: "regular_backpack", weight: 0.5 },
        { item: "tactical_backpack", weight: 0.15 }
    ],
    melee: [
        { item: "baseball_bat", weight: 4 },
        { item: "kbar", weight: 2.5 }
    ]
};
