// Table of songs
export const songs = {
  "(Your Cat) Don’t Stand a Chance.mp3": {
    song: "(Your Cat) Don’t Stand a Chance",
    artist: "Mustard Service",
    album: "Variety Pack"
  },
  "A Night To Remember.mp3": {
    song: "A Night To Remember",
    artist: "beabadoobee, Laufey",
    album: "Single"
  },
  "Bring It Back to Me.mp3": {
    song: "Bring It Back to Me",
    artist: "New Age Jimmy, The Poser Party",
    album: "Single"
  },
  "C’est La Vie (with bbno$ & Rich Brian).mp3": {
    song: "C’est La Vie (with bbno$ & Rich Brian)",
    artist: "Yung Gravy, bbno$, Rich Brian",
    album: "Marvelous"
  },
  "Chicken Fried.mp3": {
    song: "Chicken Fried",
    artist: "Zac Brown Band",
    album: "The Foundation"
  },
  "Chop Suey!.mp3": {
    song: "Chop Suey!",
    artist: "System Of A Down",
    album: "Toxicity"
  },
  "Dalai Lama.mp3": {
    song: "Dalai Lama",
    artist: "Shotgun Willy",
    album: "Bombs Away"
  },
  "Dance Floor.mp3": {
    song: "Dance Floor",
    artist: "jungle bobby, ceo@buisness.net, lentra",
    album: "wibe world"
  },
  "Deep Down (feat. Never Dull).mp3": {
    song: "Deep Down (feat. Never Dull)",
    artist: "Alok, Ella Eyre, Kenny Dope, Never Dull",
    album: "Single"
  },
  "DOMINGO.mp3": {
    song: "DOMINGO",
    artist: "Nonô",
    album: "Single"
  },
  "Don't Stop.mp3": {
    song: "Don't Stop",
    artist: "Biscits",
    album: "Single"
  },
  "Dream Sweet in Sea Major.mp3": {
    song: "Dream Sweet in Sea Major",
    artist: "Miracle Musical",
    album: "Hawaii: Part II"
  },
  "Easy.mp3": {
    song: "Easy",
    artist: "Commodores",
    album: "Commodores"
  },
  "endlessly.mp3": {
    song: "endlessly",
    artist: "Chanpan",
    album: "endlessly"
  },
  "Feel It Deep Inside.mp3": {
    song: "Feel It Deep Inside",
    artist: "Dopamine, Sigala",
    album: "endlessly"
  },
  "Full Moon Eyes.mp3": {
    song: "Full Moon Eyes",
    artist: "Arlo, fkblnde",
    album: "Single"
  },
  "GRAILED.mp3": {
    song: "GRAILED",
    artist: "1nonly, Freddie Dredd",
    album: "Single"
  },
  "Heavy News.mp3": {
    song: "Heavy News",
    artist: "Bear Ghost",
    album: "Jiminy"
  },
  "Kill Or Be Killed.mp3": {
    song: "Kill Or Be Killed",
    artist: "Muse",
    album: "Kill Or Be Killed"
  },
  "Killing In The Name.mp3": {
    song: "Killing In The Name",
    artist: "Rage Against The Machine",
    album: "Rage Against The Machine - XX (20th Anniversary Special Edition)"
  },
  "lekker dansen.mp3": {
    song: "lekker dansen",
    artist: "gladde paling",
    album: "dansmuziek"
  },
  "My Way - 2008 Remastered.mp3": {
    song: "My Way - 2008 Remastered",
    artist: "Frank Sinatra",
    album: "Nothing But The Best (2008 Remastered)"
  },
  "Obsession.mp3": {
    song: "Obsession",
    artist: "Valentino Khan, Ship Wrek",
    album: "Single"
  },
  "Party Right.mp3": {
    song: "Party Right",
    artist: "Zero, Logan_olm",
    album: "Feel So Free Mixtape"
  },
  "Pasadena.mp3": {
    song: "Pasadena",
    artist: "BABY GRAVY, Yung Gravy, bbno$",
    album: "Baby Gravy 3"
  },
  "PUNK TACTICS.mp3": {
    song: "PUNK TACTICS",
    artist: "Joey Valence & Brae",
    album: "PUNK TACTICS"
  },
  "Ride.mp3": {
    song: "Ride",
    artist: "HYBS",
    album: "Making Steak"
  },
  "So What - RudeLies Remix.mp3": {
    song: "So What - RudeLies Remix",
    artist: "Jay Pryor, RudeLies",
    album: "So What (Remixes)"
  },
  "Supersonic (my existence).mp3": {
    song: "Supersonic (my existence)",
    artist: "Skrillex, Noisia, josh pan, Dylan Brady",
    album: "Quest For Fire"
  },
  "That Choice.mp3": {
    song: "That Choice",
    artist: "Fox Stevenson",
    album: "Single"
  },
  "The Less I Know The Better.mp3": {
    song: "The Less I Know The Better",
    artist: "Tame Impala",
    album: "Currents"
  },
  "Through My System.mp3": {
    song: "Through My System",
    artist: "it's murph, Arlo, Emi Grace",
    album: "Single"
  },
  "Timber.mp3": {
    song: "Timber",
    artist: "Pitbull, Kesha",
    album: "Global Warming: Meltdown (Deluxe Version)"
  },
  "Time of Our Lives.mp3": {
    song: "Time of Our Lives",
    artist: "Pitbull, Ne-Yo",
    album: "Globalization"
  },
  "USELESS.mp3": {
    song: "USELESS",
    artist: "Freddie Dredd",
    album: "Cease & Disintegrate"
  },
  "WEIGHTLESS!.mp3": {
    song: "WEIGHTLESS!",
    artist: "femtanyl",
    album: "Single"
  },
  "WHAT U NEED.mp3": {
    song: "WHAT U NEED",
    artist: "Joey Valence & Brae",
    album: "NO HANDS (Deluxe Edition)"
  },
};

// Helper function to get a song by file name
export function getSong(fileName) {
  return songs[fileName] || null; // returns null if file not found
}
