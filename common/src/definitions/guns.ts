import { type BulletDefinition, type ItemDefinition, ItemType } from "../utils/objectDefinitions";
import { v, type Vector } from "../utils/vector";
import { FireMode } from "../constants";

export type GunDefinition = ItemDefinition & {
    readonly itemType: ItemType.Gun
    readonly rarityType: string

    readonly ammoType: string
    readonly ammoSpawnAmount: number
    readonly capacity: number
    readonly reloadTime: number
    readonly singleReload?: boolean
    readonly infiniteAmmo?: boolean
    readonly scope?: boolean

    readonly fireDelay: number
    readonly switchDelay: number

    readonly speedMultiplier: number
    readonly recoilMultiplier: number
    readonly recoilDuration: number
    readonly shotSpread: number
    readonly moveSpread: number // Added to shotSpread if the player is moving
    readonly consistentPatterning?: boolean

    readonly canQuickswitch?: boolean
    readonly bulletCount?: number
    readonly length: number
    readonly killstreak?: boolean

    readonly fists: {
        readonly left: Vector
        readonly right: Vector
        readonly animationDuration: number
    }

    readonly image: {
        readonly position: Vector
        readonly angle?: number
    }

    readonly casingParticles?: {
        readonly position: Vector
        readonly spawnOnReload?: boolean
    }

    readonly noMuzzleFlash?: boolean

    readonly ballistics: BulletDefinition
} & ({
    readonly fireMode: FireMode.Auto | FireMode.Single
} | {
    readonly fireMode: FireMode.Burst
    readonly burstProperties: {
        readonly shotsPerBurst: number
        readonly burstCooldown: number
        // note: the time between bursts is burstCooldown, and the time between shots within a burst is cooldown
    }
});

export const Guns: GunDefinition[] = [
    { // Heavy Assault Rifle Unommon
        idString: "har.uncommon",
        name: "Heavy Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Uncommon",
        ammoType: "762mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.5,
        fireDelay: 200,
        switchDelay: 500,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.75,
        recoilDuration: 150,
        fireMode: FireMode.Auto,
        shotSpread: 2,
        moveSpread: 4,
        length: 8.9,
        fists: {
            left: v(122, -3),
            right: v(62, 0),
            animationDuration: 100
        },
        image: { position: v(90, 2) },
        casingParticles: {
            position: v(4, 0.6)
        },
        ballistics: {
            damage: 14,
            obstacleMultiplier: 1.5,
            speed: 0.26,
            maxDistance: 160
        }
    },
    { // Heavy Assault Rifle Common
        idString: "har.common",
        name: "Heavy Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Common",
        ammoType: "762mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.5,
        fireDelay: 200,
        switchDelay: 500,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.75,
        recoilDuration: 150,
        fireMode: FireMode.Auto,
        shotSpread: 2,
        moveSpread: 4,
        length: 8.9,
        fists: {
            left: v(122, -3),
            right: v(62, 0),
            animationDuration: 100
        },
        image: { position: v(90, 2) },
        casingParticles: {
            position: v(4, 0.6)
        },
        ballistics: {
            damage: 16,
            obstacleMultiplier: 1.5,
            speed: 0.26,
            maxDistance: 160
        }
    },
    { // Heavy Assault Rifle Rare
        idString: "har.rare",
        name: "Heavy Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Rare",
        ammoType: "762mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.5,
        fireDelay: 200,
        switchDelay: 500,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.75,
        recoilDuration: 150,
        fireMode: FireMode.Auto,
        shotSpread: 2,
        moveSpread: 4,
        length: 8.9,
        fists: {
            left: v(122, -3),
            right: v(62, 0),
            animationDuration: 100
        },
        image: { position: v(90, 2) },
        casingParticles: {
            position: v(4, 0.6)
        },
        ballistics: {
            damage: 17,
            obstacleMultiplier: 1.5,
            speed: 0.26,
            maxDistance: 160
        }
    },
    { // Heavy Assault Rifle Epic
        idString: "har.epic",
        name: "Heavy Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Epic",
        ammoType: "762mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.5,
        fireDelay: 185,
        switchDelay: 500,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.75,
        recoilDuration: 150,
        fireMode: FireMode.Auto,
        shotSpread: 2,
        moveSpread: 4,
        length: 8.9,
        fists: {
            left: v(122, -3),
            right: v(62, 0),
            animationDuration: 100
        },
        image: { position: v(90, 2) },
        casingParticles: {
            position: v(4, 0.6)
        },
        ballistics: {
            damage: 18,
            obstacleMultiplier: 1.5,
            speed: 0.26,
            maxDistance: 160
        }
    },
    { // Heavy Assault Rifle Legendary
        idString: "har.legendary",
        name: "Heavy Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Legendary",
        ammoType: "762mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.5,
        fireDelay: 185,
        switchDelay: 500,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.75,
        recoilDuration: 150,
        fireMode: FireMode.Auto,
        shotSpread: 2,
        moveSpread: 4,
        length: 8.9,
        fists: {
            left: v(122, -3),
            right: v(62, 0),
            animationDuration: 100
        },
        image: { position: v(90, 2) },
        casingParticles: {
            position: v(4, 0.6)
        },
        ballistics: {
            damage: 19,
            obstacleMultiplier: 1.5,
            speed: 0.26,
            maxDistance: 160
        }
    },
    { // G19 (Pistol) Uncommon
        idString: "pistol.uncommon",
        name: "Pistol",
        itemType: ItemType.Gun,
        rarityType: "Uncommon",
        ammoType: "9mm",
        ammoSpawnAmount: 60,
        fireDelay: 90,
        switchDelay: 250,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.8,
        recoilDuration: 90,
        fireMode: FireMode.Single,
        shotSpread: 7,
        moveSpread: 7,
        length: 6,
        fists: {
            left: v(70, 4),
            right: v(65, 0),
            animationDuration: 100
        },
        image: { position: v(78, 0) },
        capacity: 15,
        reloadTime: 1.5,
        ballistics: {
            damage: 16,
            obstacleMultiplier: 1,
            speed: 0.14,
            maxDistance: 120
        }
    },
    { // G19 Common
        idString: "pistol.common",
        name: "Pistol",
        itemType: ItemType.Gun,
        rarityType: "Common",
        ammoType: "9mm",
        ammoSpawnAmount: 60,
        fireDelay: 90,
        switchDelay: 250,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.8,
        recoilDuration: 90,
        fireMode: FireMode.Single,
        shotSpread: 7,
        moveSpread: 7,
        length: 6,
        fists: {
            left: v(70, 4),
            right: v(65, 0),
            animationDuration: 100
        },
        image: { position: v(78, 0) },
        capacity: 17,
        reloadTime: 1.5,
        ballistics: {
            damage: 12,
            obstacleMultiplier: 1,
            speed: 0.14,
            maxDistance: 120
        }
    },
    { // G19 Rare
        idString: "pistol.rare",
        name: "Pistol",
        itemType: ItemType.Gun,
        rarityType: "Rare",
        ammoType: "9mm",
        ammoSpawnAmount: 60,
        fireDelay: 90,
        switchDelay: 250,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.8,
        recoilDuration: 90,
        fireMode: FireMode.Single,
        shotSpread: 7,
        moveSpread: 7,
        length: 6,
        fists: {
            left: v(70, 4),
            right: v(65, 0),
            animationDuration: 100
        },
        image: { position: v(78, 0) },
        capacity: 18,
        reloadTime: 1.5,
        ballistics: {
            damage: 13,
            obstacleMultiplier: 1,
            speed: 0.14,
            maxDistance: 120
        }
    },
    { // Assault Rifle Uncommon
        idString: "ar.uncommon",
        name: "Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Uncommon",
        ammoType: "556mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.2,
        fireDelay: 170,
        switchDelay: 300,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.7,
        recoilDuration: 900,
        fireMode: FireMode.Auto,
        shotSpread: 1,
        moveSpread: 1.5,
        length: 9.5,
        fists: {
            left: v(120, -7),
            right: v(65, 0),
            animationDuration: 100
        },
        image: { position: v(100, 0) },
        ballistics: {
            damage: 18,
            obstacleMultiplier: 1.5,
            speed: 0.3,
            maxDistance: 180
        }
    },
    { // Assault Rifle Common
        idString: "ar.common",
        name: "Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Common",
        ammoType: "556mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.2,
        fireDelay: 170,
        switchDelay: 300,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.7,
        recoilDuration: 900,
        fireMode: FireMode.Auto,
        shotSpread: 1,
        moveSpread: 1.5,
        length: 9.5,
        fists: {
            left: v(120, -7),
            right: v(65, 0),
            animationDuration: 100
        },
        image: { position: v(100, 0) },
        ballistics: {
            damage: 19,
            obstacleMultiplier: 1.5,
            speed: 0.3,
            maxDistance: 180
        }
    },
    { // Assault Rifle Rare
        idString: "ar.rare",
        name: "Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Rare",
        ammoType: "556mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.2,
        fireDelay: 170,
        switchDelay: 300,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.7,
        recoilDuration: 900,
        fireMode: FireMode.Auto,
        shotSpread: 1,
        moveSpread: 1.5,
        length: 9.5,
        fists: {
            left: v(120, -7),
            right: v(65, 0),
            animationDuration: 100
        },
        image: { position: v(100, 0) },
        ballistics: {
            damage: 20,
            obstacleMultiplier: 1.5,
            speed: 0.3,
            maxDistance: 180
        }
    },
    { // Assault Rifle Epic
        idString: "ar.epic",
        name: "Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Epic",
        ammoType: "556mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.2,
        fireDelay: 165,
        switchDelay: 300,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.7,
        recoilDuration: 900,
        fireMode: FireMode.Auto,
        shotSpread: 1,
        moveSpread: 1.5,
        length: 9.5,
        fists: {
            left: v(120, -7),
            right: v(65, 0),
            animationDuration: 100
        },
        image: { position: v(100, 0) },
        ballistics: {
            damage: 22,
            obstacleMultiplier: 1.5,
            speed: 0.3,
            maxDistance: 180
        }
    },
    { // Assault Rifle Legendary
        idString: "ar.legendary",
        name: "Assault Rifle",
        itemType: ItemType.Gun,
        rarityType: "Legendary",
        ammoType: "556mm",
        ammoSpawnAmount: 90,
        capacity: 30,
        reloadTime: 2.2,
        fireDelay: 165,
        switchDelay: 300,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.7,
        recoilDuration: 900,
        fireMode: FireMode.Auto,
        shotSpread: 1,
        moveSpread: 1.5,
        length: 9.5,
        fists: {
            left: v(120, -7),
            right: v(65, 0),
            animationDuration: 100
        },
        image: { position: v(100, 0) },
        ballistics: {
            damage: 23,
            obstacleMultiplier: 1.5,
            speed: 0.3,
            maxDistance: 180
        }
    },
    { // Heavy Sniper Epic
        idString: "hs.epic",
        name: "Heavy Sniper",
        itemType: ItemType.Gun,
        scope: true,
        rarityType: "Epic",
        ammoType: "762mm",
        ammoSpawnAmount: 20,
        capacity: 5,
        reloadTime: 2.6,
        fireDelay: 900,
        switchDelay: 900,
        speedMultiplier: 0.9,
        recoilMultiplier: 0.4,
        recoilDuration: 1000,
        fireMode: FireMode.Single,
        shotSpread: 0.3,
        moveSpread: 0.3,
        canQuickswitch: true,
        length: 13.9,
        fists: {
            left: v(145, -1),
            right: v(75, 0),
            animationDuration: 100
        },
        image: { position: v(125, 4) },
        casingParticles: {
            position: v(4, 0.6)
        },
        ballistics: {
            damage: 78,
            obstacleMultiplier: 1,
            speed: 0.4,
            maxDistance: 280,
            tracerWidth: 1.6,
            tracerLength: 3.5
        }
    },
    { // Heavy Sniper Legendary
        idString: "hs.legendary",
        name: "Heavy Sniper",
        itemType: ItemType.Gun,
        scope: true,
        rarityType: "Legendary",
        ammoType: "762mm",
        ammoSpawnAmount: 20,
        capacity: 5,
        reloadTime: 2.6,
        fireDelay: 900,
        switchDelay: 900,
        speedMultiplier: 0.9,
        recoilMultiplier: 0.4,
        recoilDuration: 1000,
        fireMode: FireMode.Single,
        shotSpread: 0.3,
        moveSpread: 0.3,
        canQuickswitch: true,
        length: 13.9,
        fists: {
            left: v(145, -1),
            right: v(75, 0),
            animationDuration: 100
        },
        image: { position: v(125, 4) },
        casingParticles: {
            position: v(4, 0.6)
        },
        ballistics: {
            damage: 88,
            obstacleMultiplier: 1,
            speed: 0.4,
            maxDistance: 280,
            tracerWidth: 1.6,
            tracerLength: 3.5
        }
    },
    { // Combat Shotgun Uncommon
        idString: "cs.uncommon",
        name: "Combat Shotgun",
        itemType: ItemType.Gun,
        rarityType: "Uncommon",
        ammoType: "12g",
        ammoSpawnAmount: 18,
        capacity: 9,
        reloadTime: 0.55,
        fireDelay: 700,
        switchDelay: 700,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.5,
        recoilDuration: 500,
        fireMode: FireMode.Single,
        shotSpread: 5,
        moveSpread: 2,
        canQuickswitch: true,
        bulletCount: 9,
        length: 11,
        fists: {
            left: v(120, -3),
            right: v(47, 0),
            animationDuration: 100
        },
        image: { position: v(110, 1) },
        casingParticles: {
            position: v(4, 0.6)
        },
        singleReload: true,
        ballistics: {
            damage: 6,
            obstacleMultiplier: 1,
            speed: 0.2,
            maxDistance: 80
        }
    },
    { // Combat Shotgun Common
        idString: "cs.common",
        name: "Combat Shotgun",
        itemType: ItemType.Gun,
        rarityType: "Common",
        ammoType: "12g",
        ammoSpawnAmount: 18,
        capacity: 9,
        reloadTime: 0.53,
        fireDelay: 700,
        switchDelay: 700,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.5,
        recoilDuration: 500,
        fireMode: FireMode.Single,
        shotSpread: 5,
        moveSpread: 2,
        canQuickswitch: true,
        bulletCount: 9,
        length: 11,
        fists: {
            left: v(120, -3),
            right: v(47, 0),
            animationDuration: 100
        },
        image: { position: v(110, 1) },
        casingParticles: {
            position: v(4, 0.6)
        },
        singleReload: true,
        ballistics: {
            damage: 7,
            obstacleMultiplier: 1,
            speed: 0.2,
            maxDistance: 80
        }
    },
    { // Combat Shotgun Rare
        idString: "cs.rare",
        name: "Combat Shotgun",
        itemType: ItemType.Gun,
        rarityType: "Rare",
        ammoType: "12g",
        ammoSpawnAmount: 18,
        capacity: 9,
        reloadTime: 0.50,
        fireDelay: 700,
        switchDelay: 700,
        speedMultiplier: 0.92,
        recoilMultiplier: 0.5,
        recoilDuration: 500,
        fireMode: FireMode.Single,
        shotSpread: 5,
        moveSpread: 2,
        canQuickswitch: true,
        bulletCount: 9,
        length: 11,
        fists: {
            left: v(120, -3),
            right: v(47, 0),
            animationDuration: 100
        },
        image: { position: v(110, 1) },
        casingParticles: {
            position: v(4, 0.6)
        },
        singleReload: true,
        ballistics: {
            damage: 8,
            obstacleMultiplier: 1,
            speed: 0.2,
            maxDistance: 80
        }
    },
];