// Wildbound world data — kept separate from rendering and game systems.
export const REGIONS = Object.freeze({
  greenhaven: {
    id: "greenhaven",
    name: "Greenhaven Meadow",
    subtitle: "REALMS OF DISCOVERY · GREENHAVEN",
    bounds: 99,
    encounterRadius: 4.2,
    atmosphere: "temperate",
    description: "A quiet meadow of old woods, winding paths, and hidden companions."
  }
});

export const CREATURE_SPAWNS = Object.freeze([
  { id:"mossling", name:"Mossling", emoji:"🌿", body:0x9d65e8, accent:0xe8d4ff, x:-3, z:6, level:2, affinity:"verdant" },
  { id:"tidepup", name:"Tidepup", emoji:"💧", body:0x36b8d2, accent:0xffe48c, x:4, z:3, level:3, affinity:"tide" },
  { id:"bramblet", name:"Bramblet", emoji:"🍃", body:0x91bd42, accent:0xf2d88a, x:-7, z:-1, level:3, affinity:"verdant" },
  { id:"cindercub", name:"Cindercub", emoji:"🔥", body:0xe28a43, accent:0xffe0a3, x:9, z:-8, level:4, affinity:"ember" },
  { id:"petalyn", name:"Petalyn", emoji:"🌸", body:0xe16b94, accent:0xffd2e2, x:-15, z:14, level:2, affinity:"bloom" },
  { id:"cloudlet", name:"Cloudlet", emoji:"☁️", body:0x8d9be8, accent:0xe1e7ff, x:18, z:5, level:4, affinity:"aether" }
]);
