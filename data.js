let items = {
  grass: {
    displayName: "Grass",
    pluralName: "Grass",
    display: document.getElementById("grassDisp"),
    button: document.getElementById("grassButton"),
    iconRef: 'grassIcon',
    count: 0,
    cooldown: 1000,
    type: "resource",
    section: "resources",
    weight: 0.5,
    equip: null,
    requirements: [],
  },
  leaf: {
    displayName: "Leaf",
    pluralName: "Leaves",
    display: document.getElementById("leafDisp"),
    button: document.getElementById("leafButton"),
    iconRef: 'leafIcon',
    count: 0,
    cooldown: 1000,
    type: "resource",
    section: "resources",
    weight: 0.5,
    equip: null,
    requirements: [],
  },
  stick: {
    displayName: "Stick",
    pluralName: "Sticks",
    display: document.getElementById("stickDisp"),
    button: document.getElementById("stickButton"),
    iconRef: 'stickIcon',
    count: 0,
    cooldown: 1000,
    type: "resource",
    section: "resources",
    weight: 0.7,
    equip: ["leftHand", "rightHand"],
    requirements: [],
  },
  dirt: {
    displayName: "Dirt",
    pluralName: "Dirt",
    display: document.getElementById("dirtDisp"),
    button: document.getElementById("dirtButton"),
    iconRef: 'dirtIcon',
    count: 0,
    cooldown: 1000,
    type: "resource",
    section: "resources",
    weight: 1,
    equip: null,
    requirements: [],
  },
  rock: {
    displayName: "Rock",
    pluralName: "Rocks",
    display: document.getElementById("rockDisp"),
    button: document.getElementById("rockButton"),
    iconRef: 'rockIcon',
    count: 0,
    cooldown: 2000,
    type: "resource",
    section: "resources",
    weight: 2,
    equip: ["leftHand", "rightHand"],
    requirements: [],
  },
  feather: {
    displayName: "Feather",
    pluralName: "Feathers",
    display: document.getElementById("featherDisp"),
    button: document.getElementById("featherButton"),
    iconRef: 'featherIcon',
    count: 0,
    cooldown: 10000,
    type: "resource",
    section: "resources",
    weight: 0.1,
    equip: null,
    requirements: [],
  },
  rope: {
    displayName: "Rope",
    pluralName: "Rope",
    display: document.getElementById("ropeDisp"),
    button: document.getElementById("ropeButton"),
    iconRef: 'ropeIcon',
    count: 0,
    cooldown: 3000,
    type: "material",
    section: "materials",
    weight: 1,
    equip: null,
    requirements: [
      {
        item: "grass",
        count: 4,
      },
    ],
  },
  arrowhead: {
    displayName: "Arrowhead",
    pluralName: "Arrowheads",
    display: document.getElementById("arrowheadDisp"),
    button: document.getElementById("arrowheadButton"),
    iconRef: 'arrowheadIcon',
    count: 0,
    cooldown: 5000,
    type: "material",
    section: "materials",
    weight: 0.5,
    equip: null,
    requirements: [
      {
        item: "rock",
        count: 2,
      },
    ],
  },
  stake: {
    displayName: "Stake",
    pluralName: "Stakes",
    display: document.getElementById("stakeDisp"),
    button: document.getElementById("stakeButton"),
    iconRef: 'stakeIcon',
    count: 0,
    cooldown: 3000,
    type: "weapon",
    section: "tools",
    weight: 3,
    equip: ["leftHand", "rightHand"],
    requirements: [
      {
        item: "stick",
        count: 2,
      },
    ],
  },
  arrow: {
    displayName: "Arrow",
    pluralName: "Arrows",
    display: document.getElementById("arrowDisp"),
    button: document.getElementById("arrowButton"),
    iconRef: 'arrowIcon',
    count: 0,
    cooldown: 5000,
    type: "ammunition",
    section: "tools",
    weight: 1,
    equip: null,
    requirements: [
      {
        item: "stick",
        count: 1,
      },
      {
        item: "arrowhead",
        count: 1,
      },
      {
        item: "feather",
        count: 3,
      },
    ],
  },
  spear: {
    displayName: "Spear",
    pluralName: "Spears",
    display: document.getElementById("spearDisp"),
    button: document.getElementById("spearButton"),
    iconRef: 'spearIcon',
    count: 0,
    cooldown: 5000,
    type: "weapon",
    section: "tools",
    weight: 4,
    equip: ["leftHand", "rightHand"],
    requirements: [
      {
        item: "stick",
        count: 1,
      },
      {
        item: "rock",
        count: 1,
      },
      {
        item: "rope",
        count: 1,
      },
    ],
  },
  axe: {
    displayName: "Axe",
    pluralName: "Axes",
    display: document.getElementById("axeDisp"),
    button: document.getElementById("axeButton"),
    iconRef: 'axeIcon',
    count: 0,
    cooldown: 7000,
    type: ["tool", "weapon"],
    section: "tools",
    weight: 6,
    equip: ["leftHand", "rightHand"],
    requirements: [
      {
        item: "stick",
        count: 1,
      },
      {
        item: "rock",
        count: 1,
      },
      {
        item: "rope",
        count: 1,
      },
    ],
  },
  sword: {
    displayName: "Sword",
    pluralName: "Swords",
    display: document.getElementById("swordDisp"),
    button: document.getElementById("swordButton"),
    iconRef: 'swordIcon',
    count: 0,
    cooldown: 7000,
    type: ["weapon"],
    section: "tools",
    weight: 8,
    equip: ["leftHand", "rightHand"],
    requirements: [
      {
        item: "stick",
        count: 1,
      },
      {
        item: "rock",
        count: 2,
      },
      {
        item: "rope",
        count: 1,
      },
    ],
  },
};

let player = {
  inventory: [],
  equipment: {
    leftHand: {
      selected: null,
      displayName: "Left Hand",
      displayObj: document.getElementById("leftHandDisp")
    },
    rightHand: {
      selected: null,
      displayName: "Right Hand",
      displayObj: document.getElementById("rightHandDisp")
    },
    head: {
      selected: null,
      displayName: "Head",
      displayObj: document.getElementById("headDisp")
    },
    chest: {
      selected: null,
      displayName: "Chest",
      displayObj: document.getElementById("chestDisp")
    },
    back: {
      selected: null,
      displayName: "Back",
      displayObj: document.getElementById("backDisp")
    },
    leftFoot: {
      selected: null,
      displayName: "Left Foot",
      displayObj: document.getElementById("leftFootDisp")
    },
    rightFoot: {
      selected: null,
      displayName: "Right Foot",
      displayObj: document.getElementById("rightFootDisp")
    },
    leftLeg: {
      selected: null,
      displayName: "Left Leg",
      displayObj: document.getElementById("leftLegDisp")
    },
    rightLeg: {
      selected: null,
      displayName: "Right Leg",
      displayObj: document.getElementById("rightLegDisp")
    }
  },
};
