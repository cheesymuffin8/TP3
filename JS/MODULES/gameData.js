export const games = {
  "GMOD": {
    name: `Garry's Mod`,
    desc: `Garry's Mod is a physics sandbox. There aren't any predefined aims or goals. We give you the tools and leave you to play.<br>
    You spawn objects and weld them together to create your own contraptions - whether that's a car, a rocket, a catapult or something that doesn't have a name yet - that's up to you. You can do it offline, or join the thousands of players who play online each day.<br>
    If you're not too great at construction - don't worry! You can place a variety of characters in silly positions. But if you want to do more, we have the means.`
  },
  "AHIT": {
    name: `A Hat in Time`,
    desc: `A Hat in Time is a cute-as-heck 3D platformer featuring a little girl who stitches hats for wicked powers.<br><br>
    In A Hat in Time you play as a tiny space-travelling girl with a big tophat. Her adventure is halted when all her fuel, the Time Pieces, is lost and scattered across a nearby planet. Hat Kid must now jump, fight and stitch new hats to make her way into every nook and cranny of this new world in order to restore her fuel and resume her journey. On her way, she'll bump into the menacing Mafia of Cooks, the goofy birds of Dead Bird Studio, the spooky shadows of Subcon Forest, and more!`
  },
  "ABF": {
    name: `Abiotic Factor`,
    desc: `Home to the world's greatest minds, GATE operates a global network of secretive research laboratories, spanning every field of scientific study - and the realms beyond.<br>
    As a GATE employee you extend the bounds of human knowledge, and seek to explain the unexplainable - including anomalies and paranormal entities: from gravity-distorting artifacts to supernatural creatures with an unbridled instinct for violence. Safety, security, and secrecy are of the utmost importance… usually.<br>
    After a catastrophic containment breach, your workplace has become a cosmic battle zone: anomalous entities are on the loose, enemies from other dimensions are invading via portals, and an arcane military sect - known as The Order - is targeting personnel and entities indiscriminately, aiming to seize artifacts and put an end to the chaos.<br>
    Containment procedures have failed and help isn’t on the way. Stranded miles beneath the surface, it’s up to you and your fellow scientists to band together, plan your escape, and make this underground complex your new home - for now..`
  },
  "BEAMNG": {
    name: `BeamNG.drive`,
    desc: `BeamNG.drive is an incredibly realistic driving game with near-limitless possibilities. Our soft-body physics engine simulates every component of a vehicle in real time, resulting in true-to-life behavior. With years of meticulous design, intensive research and experience, the simulation authentically recreates the excitement of real world driving.`
  },
  "BMS": {
    name: `Black Mesa`,
    desc: `Black Mesa is the fan-made reimagining of Valve Software’s Half-Life.<br>
    You are Gordon Freeman, a theoretical physicist at the Black Mesa Research Facility. When a routine experiment goes horribly wrong, you must fight your way through an interdimensional alien invasion, and a bloodthirsty military clean-up crew in order to save the science team... and the world!`
  },
  "FC5": {
    name: `Far Cry 5`,
    desc: `Welcome to Hope County, Montana, the land of the free and brave, but also the home of a fanatical doomsday cult. Stand up to cult leader Joseph Seed and his siblings, the Heralds, to spark the fires of resistance and liberate the besieged community.
    <br>
    <br>
    Play solo or two-player co-op in the vast open world of Hope County. Use a vast arsenal of weapons from rocket launchers to shovels, and take control of iconic muscle cars, ATVs, planes, and more to engage the cult forces in epic fights.
    <br>
    <br>
    DISCOVER ONE OF THE MOST ACCLAIMED FAR CRY GAMES<br>
    Join the millions of players in the Far Cry® 5 community and discover what IGN describes as “fast-paced fun.”
    <br>
    <br>
    FIGHT AGAINST THE DEADLY CULT OF JOSEPH SEED<br>
    Free Hope County from the Eden's Gate cult and the Seed family. Discover the first appearance of the charismatic antagonist Joseph Seed, before his return in Far Cry® New Dawn and his own dedicated DLC in Far Cry® 6, Collapse.
    <br>
    <br>
    EXPLORE THE HOPE COUNTY OPEN WORLD SOLO OR CO-OP AND MAKE YOUR OWN RULES<br>
    Play solo or two-player co-op in the vast open world of Hope County. Use a vast arsenal of weapons from rocket launchers to shovels, and take control of iconic muscle cars, ATVs, planes, and more to engage the cult forces in epic fights. Ally with the Fangs for Hire group, including fan-favorite bear Cheeseburger and dog Boomer, and free Hope County from its oppressors.
    `
  },
  "BONEWORKS": {
    name: `BONEWORKS`,
    desc: `BONEWORKS Is a narrative VR action adventure using advanced experimental physics mechanics. Dynamically navigate through environments, engage in physics heavy combat, and creatively approach puzzles with physics.`
  },
};

// Helper function to get a song by file name
export function getGames(fileName) {
  return games[fileName] || null; // returns null if file not found
}
