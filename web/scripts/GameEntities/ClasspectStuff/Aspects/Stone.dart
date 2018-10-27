import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Mindstone extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 0.3;
  @override
  double fraymotifWeight = 0.3;
  @override
  double companionWeight = 1.00; //manipulate others

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#ebd837"
    ..aspect_light = '#ebd837'
    ..aspect_dark = '#857a1f'
    ..shoe_light = '#857a1f'
    ..shoe_dark = '#524b13'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["STONE", "Thought", "Rationality", "Decisions", "Consequences", "Choices", "Paths", "Trails", "Trials"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["NIPPER-CADET", "COIN-FLIPPER CONFIDANTE", "TWO-FACED BUCKAROO"]);

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Mind", "Modulation", "Shock", "Awe", "Coin", "Judgement", "Mind", "Decision", "Spark", "Path", "Trial", "Variations", "Thunder", "Logical", "Telekinetic", "Brainiac", "Hysteria", "Deciso", "Thesis", "Imagination", "Psycho", "Control", "Execution", "Bolt", "Stone"]);

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }

  @override
  List<String> symbolicMcguffins = ["stone", "mind","decisions", "consequences", "free will", "path", "neurons", "causality"];
  @override
  List<String> physicalMcguffins = ["stone", "mind","coin", "plan", "mask", "map", "brain", "circuit"];

  @override
  String denizenSongTitle = "The Green Sun";

  @override
  String denizenSongDesc = " The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY";

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>["Paradox Space"]); //Pfffft, I feel bad for these players

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Puzzle Box",<ItemTrait>[ItemTraitFactory.WOOD, ItemTraitFactory.ASPECTAL, ItemTraitFactory.MAGICAL],shogunDesc: "13x13 Rubix Cube", abDesc: "Don't let Mind players fool you. It's not about smarts."))
      ..add(new Item("Tesla Coil",<ItemTrait>[ItemTraitFactory.ZAP, ItemTraitFactory.ASPECTAL,ItemTraitFactory.METAL],shogunDesc: "Lightning Weiner",abDesc:  "Mind is electric shit. I guess."))
      ..add(new Item("Coin",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.ASPECTAL],shogunDesc: "Official Minted Shogun Coin Circa. 1764",abDesc:  "Luck doesn't even matter, so neither does this coin. Mind players are such hams."))
      ..add(new Item("Electronic Door",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.ASPECTAL,ItemTraitFactory.ZAP, ItemTraitFactory.SMART],shogunDesc: "Star Wars Force Activated Door",abDesc:"I guess it has buttons and shit? I bet it leads somewhere weird."))
      ..add(new Item("Janus Bust",<ItemTrait>[ItemTraitFactory.UNCOMFORTABLE,ItemTraitFactory.BUST, ItemTraitFactory.STONE,ItemTraitFactory.CLASSY,ItemTraitFactory.ASPECTAL,ItemTraitFactory.LEGENDARY, ItemTraitFactory.ZAP],shogunDesc: "Bust of A Giant Phallic Asshole",abDesc:"So is the joke that Mind Players are two faced?"))
      ..add(new Item("A Stone",<ItemTrait>[ItemTraitFactory.ASPECTAL,ItemTraitFactory.REAL,ItemTraitFactory.FAKE]));
  }


  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.FREE_WILL, 2.0, true),
    new AssociatedStat(Stats.MIN_LUCK, 1.0, true),
    new AssociatedStat(Stats.ALCHEMY, -2.0, true) //too many choices, freeze up
  ]);


  Mindstone(int id) :super(id, "Mindstone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}


class Spacestone extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 0.5;
  @override
  double fraymotifWeight = 1.0;
  @override
  double companionWeight = 0.500;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#74a4ff"
    ..aspect_light = '#74a4ff'
    ..aspect_dark = '#466299'
    ..shoe_light = '#466299'
    ..shoe_dark = '#2f4166'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Frogs", "Stone"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["GREENTIKE", "RIBBIT RUSTLER", "FROG-WRANGLER"]);

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }

  @override
  String denizenSongTitle = "The Green Sun";

  @override
  String denizenSongDesc = " The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY";

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Canon", "Space", "Frogs", "Location", "Spatial", "Universe", "Infinite", "Spiral", "Physics", "Star", "Galaxy", "Nuclear", "Atomic", "Nucleus", "Horizon", "Event", "CROAK", "Spatium", "Squiddle", "Engine", "Meteor", "Gravity", "Crush", "Stone"]);

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>["Paradox Space"]); //Pfffft, I feel bad for these players

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Frog Statue",<ItemTrait>[ItemTraitFactory.UNCOMFORTABLE,ItemTraitFactory.STONE, ItemTraitFactory.ASPECTAL],shogunDesc: "Croaking Lizard Monument",abDesc:"Frogs."))
      ..add(new Item("Frog Costume",<ItemTrait>[ItemTraitFactory.CLOTH, ItemTraitFactory.ASPECTAL],shogunDesc: "Croaking Lizard Cosplay",abDesc:"You won't be able to stop the ribbits."))
      ..add(new Item("Nuclear Reactor",<ItemTrait>[ItemTraitFactory.NUCLEAR,ItemTraitFactory.SMART,ItemTraitFactory.ZAP, ItemTraitFactory.ASPECTAL],shogunDesc: "A Representation of My Hatred for Everything"))
      ..add(new Item("Telescope",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.GLASS,ItemTraitFactory.SMART,ItemTraitFactory.ASPECTAL],shogunDesc: "Mono-Sighted Long Ranged Perversion Apparatus"))
      ..add(new Item("Green Sun Poster",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.ASPECTAL, ItemTraitFactory.GREENSUN, ItemTraitFactory.LEGENDARY],shogunDesc: "Sauce Sun Poster",abDesc:"Huh."))
      ..add(new Item("A Stone",<ItemTrait>[ItemTraitFactory.ASPECTAL,ItemTraitFactory.REAL,ItemTraitFactory.FAKE]));
  }

  @override
  List<String> symbolicMcguffins = ["stone","space","commitment", "creation", "room","stars", "galaxy", "black hole", "super nova"];
  @override
  List<String> physicalMcguffins = ["stone","space","frog", "globe", "map","toad", "bass guitar", "nuclear reactor", "paint"];

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.ALCHEMY, 2.0, true),
    new AssociatedStat(Stats.HEALTH, 1.0, true),
    new AssociatedStat(Stats.MOBILITY, -2.0, true)
  ]);

  Spacestone(int id) :super(id, "Spacestone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}


class Powerstone extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 1.00;
  @override
  double fraymotifWeight = 1.0;
  @override
  double companionWeight = 0.01;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#9846cc"
    ..aspect_light = '#9846cc'
    ..aspect_dark = '#4c2366'
    ..shoe_light = '#4c2366'
    ..shoe_dark = '#261233'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';

  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Mirth", "Whimsy", "Madness", "Impossibility", "Chaos", "Hate", "Violence", "Joy", "Murder", "Noise", "Screams", "Denial", "Stone"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["MOPPET OF MADNESS", "FLEDGLING HATTER", "RAGAMUFFIN REVELER"]);


  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Rage", "Barbaric", "Impossible", "Tantrum", "Juggalo", "Horrorcore", "Madness", "Carnival", "Mirthful", "Screaming", "Berserk", "MoThErFuCkInG", "War", "Haze", "Murder", "Furioso", "Aggressive", "ATBasher", "Violent", "Unbound", "Purple", "Unholy", "Hateful", "Fearful", "Inconceivable", "Impossible", "Stone"]);


  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }

  @override
  List<String> symbolicMcguffins = ["stone","rage","sanity", "power", "whimsy", "impossible", "screams", "laughter", "madness"];
  @override
  List<String> physicalMcguffins = ["stone","rage","face paint", "script", "bike horn", "war mask", "murder weapon", "loud speaker", "bullhorn", "broken machine"];

  @override
  String denizenSongTitle = "The Green Sun";

  @override
  String denizenSongDesc = " The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY";

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Curtain",<ItemTrait>[ItemTraitFactory.CLOTH, ItemTraitFactory.ASPECTAL, ItemTraitFactory.FAKE],shogunDesc: "Show Ender"))
      ..add(new Item("Cursed Sword",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.SWORD,ItemTraitFactory.POINTY,  ItemTraitFactory.ASPECTAL, ItemTraitFactory.EDGED, ItemTraitFactory.SCARY, ItemTraitFactory.FAKE, ItemTraitFactory.CORRUPT, ItemTraitFactory.DOOMED],abDesc:"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex."))

      ..add(new Item("Megaphone",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.LOUD,ItemTraitFactory.ZAP,  ItemTraitFactory.ASPECTAL, ItemTraitFactory.FAKE],shogunDesc: "Voice Embiggener",abDesc:"Rage players are such loud assholes."))
      ..add(new Item("Bike Horn",<ItemTrait>[ItemTraitFactory.UNCOMFORTABLE,ItemTraitFactory.METAL, ItemTraitFactory.LOUD, ItemTraitFactory.ENRAGING,ItemTraitFactory.RUBBER,ItemTraitFactory.ASPECTAL, ItemTraitFactory.FAKE],shogunDesc: "Two-wheel device mounted Juggalo voicebox"))
      ..add(new Item("Bacchus Wine",<ItemTrait>[ItemTraitFactory.EDIBLE, ItemTraitFactory.ENRAGING,ItemTraitFactory.CLASSY, ItemTraitFactory.ASPECTAL, ItemTraitFactory.LEGENDARY, ItemTraitFactory.FAKE ],shogunDesc: "Aged Grape Gore",abDesc:"I guess it makes you go beserk or some shit. Sucks being biological."))
      ..add(new Item("Nightmare Fuel",<ItemTrait>[ItemTraitFactory.WOOD, ItemTraitFactory.ASPECTAL,ItemTraitFactory.SCARY,ItemTraitFactory.ONFIRE,ItemTraitFactory.EXPLODEY, ItemTraitFactory.FAKE],shogunDesc: "Image of Adam Sandler in a Troll Face Shirt",abDesc:"It's clowns isn't it. It's always fucking clowns."))
      ..add(new Item("A Stone",<ItemTrait>[ItemTraitFactory.ASPECTAL,ItemTraitFactory.REAL,ItemTraitFactory.FAKE]));
  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.POWER, 2.0, true),
    new AssociatedStat(Stats.MOBILITY, 1.0, true),
    new AssociatedStat(Stats.SANITY, -1.0, true),
    new AssociatedStat(Stats.RELATIONSHIPS, -1.0, true),
    new AssociatedStat(Stats.SBURB_LORE, 0.01, false) //yes, technically it's from an aspect, but it's not NORMAL.
  ]);


  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>["Paradox Space"]); //Pfffft, I feel bad for these players

  Powerstone(int id) :super(id, "Powerstone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}


class Soulstone extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 0.3;
  @override
  double fraymotifWeight = 0.6;
  @override
  double companionWeight = 0.01; //inwards focus

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#ffcb6f"
    ..aspect_light = '#ffcb6f'
    ..aspect_dark = '#997a42'
    ..shoe_light = '#997a42'
    ..shoe_dark = '#66512c'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';


  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Little Cubes", "Hats", "Dolls", "Selfies", "Mirrors", "Spirits", "Souls", "Jazz", "Shards", "Splinters", "Stone"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["SHARKBAIT HEARTHROB", "FEDORA FLEDGLING", "PENCILWART PHYLACTERY"]);

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Stone", "Heart", "Soul", "Jazz", "Blues", "Spirit", "Splintering", "Clone", "Self", "Havoc", "Noble", "Animus", "Astral", "Shatter", "Breakdown", "Ethereal", "Beat", "Pulchritude"]);


  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }

  @override
  List<String> symbolicMcguffins = ["stone","heart","identity", "emotion", "core", "beat", "shadow"];

  @override
  List<String> physicalMcguffins = ["stone","heart","doll", "locket", "mirror", "mask", "shades", "sculpture"];


  @override
  String denizenSongTitle = "The Green Sun";

  @override
  String denizenSongDesc = " The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY";

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>["Paradox Space"]); //Pfffft, I feel bad for these players

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.RELATIONSHIPS, 1.0, true),
    new AssociatedStatInterests(true)
  ]);


  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Doll",<ItemTrait>[ItemTraitFactory.PORCELAIN,ItemTraitFactory.PRETTY,ItemTraitFactory.SENTIENT, ItemTraitFactory.ASPECTAL],shogunDesc: "Possessed Doll (Probably)", abDesc: "It's like a robot, but useless."))
      ..add(new Item("Puppet",<ItemTrait>[ItemTraitFactory.WOOD,ItemTraitFactory.SENTIENT, ItemTraitFactory.ASPECTAL, ItemTraitFactory.LEGENDARY,ItemTraitFactory.SCARY],shogunDesc: "Baby Muppet Snuff Survivor",abDesc:"Don't touch this shit."))
      ..add(new Item("Mirror",<ItemTrait>[ItemTraitFactory.MIRROR, ItemTraitFactory.ASPECTAL],shogunDesc: "Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move"))
      ..add(new Item("Shipping Grid",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.ASPECTAL, ItemTraitFactory.ROMANTIC],shogunDesc: "A Grid of Pure Taint",abDesc:"No. No cat troll shit."))
      ..add(new Item("Shades",<ItemTrait>[ItemTraitFactory.COOLK1D,ItemTraitFactory.GLASS,ItemTraitFactory.ASPECTAL],shogunDesc: "Glasses For Try Hard Nerds", abDesc: "You can put a p great robot in these. I advise it."))
      ..add(new Item("A Stone",<ItemTrait>[ItemTraitFactory.ASPECTAL,ItemTraitFactory.REAL,ItemTraitFactory.FAKE]));
  }

  Soulstone(int id) :super(id, "Soulstone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}



class Timestone extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 0.51;
  @override
  double fraymotifWeight = 1.0;
  @override
  double companionWeight = 0.01;

  @override
  double difficulty = 0.7;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#7ac476"
    ..aspect_light = '#7ac476'
    ..aspect_dark = '#3a5e39'
    ..shoe_light = '#3a5e39'
    ..shoe_dark = '#1b2b1a'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';


  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Quartz", "Clockwork", "Gears", "Melody", "Cesium", "Clocks", "Ticking", "Beats", "Mixtapes", "Songs", "Music", "Vuvuzelas", "Drums", "Pendulums", "Stone"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["MARQUIS MCFLY", "JUNIOR CLOCK BLOCKER", "DEAD KID COLLECTOR"]);

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Stone", "Time", "Paradox", "Chrono", "Moment", "Foregone", "Reset", "Endless", "Temporal", "Shenanigans", "Clock", "Tick-Tock", "Spinning", "Repeat", "Rhythm", "Redshift", "Epoch", "Beatdown", "Slow", "Remix", "Clockwork", "Lock", "Eternal"]);

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }

  @override
  String denizenSongTitle = "The Green Sun";

  @override
  String denizenSongDesc = " The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY";

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>["Paradox Space"]); //Pfffft, I feel bad for these players

  @override
  List<String> symbolicMcguffins = ["stone","time","speed", "inevitability", "paradoxes", "rhythm"];
  @override
  List<String> physicalMcguffins = ["stone","time","clock", "metronome", "beat", "turntables", "music box", "sheet music", "drum", "sundial", "beatbox", "trousers", "river"];

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Grandfather Clock",<ItemTrait>[ItemTraitFactory.WOOD,ItemTraitFactory.CLASSY, ItemTraitFactory.VALUABLE, ItemTraitFactory.ASPECTAL],shogunDesc: "Ticking Tower of Time"))
      ..add(new Item("Drum",<ItemTrait>[ItemTraitFactory.LEATHER, ItemTraitFactory.ASPECTAL,ItemTraitFactory.MUSICAL],shogunDesc: "Ba Dum Tss but without the Tss Part"))
      ..add(new Item("Dead Doppelganger",<ItemTrait>[ItemTraitFactory.UNCOMFORTABLE,ItemTraitFactory.FLESH, ItemTraitFactory.ASPECTAL,ItemTraitFactory.BONE, ItemTraitFactory.SCARY, ItemTraitFactory.DOOMED],shogunDesc: "The Inferior You",abDesc:"Time is truly the worst aspect."))
      ..add(new Item("Music Box",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.ASPECTAL,ItemTraitFactory.MUSICAL,ItemTraitFactory.CLASSY],shogunDesc: "Cube of Noise"))
      ..add(new Item("Turn Tables",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.ASPECTAL,ItemTraitFactory.MUSICAL,ItemTraitFactory.LEGENDARY, ItemTraitFactory.COOLK1D],shogunDesc: "Spinning Noise Discs on a Noise Machine",abDesc:"Do they come with ironic raps?"))
      ..add(new Item("Metronome",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.ASPECTAL,ItemTraitFactory.MUSICAL],shogunDesc: "Never Ending Ticking Device"))
      ..add(new Item("A Stone",<ItemTrait>[ItemTraitFactory.ASPECTAL,ItemTraitFactory.REAL,ItemTraitFactory.FAKE]));
  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.MIN_LUCK, 2.0, true),
    new AssociatedStat(Stats.MOBILITY, 1.0, true),
    new AssociatedStat(Stats.FREE_WILL, -2.0, true)
  ]);

  Timestone(int id) :super(id, "Timestone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}



class Realitystone extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 1.01;
  @override
  double fraymotifWeight = 0.5;
  @override
  double companionWeight = 0.01; //dont' share the spotlihgt

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#ed1c24"
    ..aspect_light = '#ed1c24'
    ..aspect_dark = '#820a0f'
    ..shoe_light = '#820a0f'
    ..shoe_dark = '#4f0609'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';

  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Treasure", "Light", "Knowledge", "Radiance", "Gambling", "Casinos", "Fortune", "Sun", "Glow", "Chance", "Stone"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["SHOWOFF SQUIRT", "JUNGLEGYM SWASHBUCKLER", "SUPERSTITIOUS SCURRYWART"]);

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Lucky", "LIGHT", "Knowledge", "Blinding", "Brilliant", "Break", "Blazing", "Glow", "Flare", "Gamble", "Omnifold", "Apollo", "Helios", "Scintillating", "Horseshoe", "Leggiero", "Star", "Kindle", "Gambit", "Blaze", "Stone"]);


  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }


  @override
  String denizenSongTitle = "The Green Sun";

  @override
  String denizenSongDesc = " The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY";

  @override
  List<String> symbolicMcguffins = ["stone","light","fortune", "knowledge", "illumination", "relevance", "rain", "sun", "rainbow"];

  @override
  List<String> physicalMcguffins = ["stone","light","clover", "horseshoe", "encyclopedia","sun", "dice", "8-ball", "deck of tarot cards"];

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>["Paradox Space"]); //Pfffft, I feel bad for these players


  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("FAQ",<ItemTrait>[ItemTraitFactory.ZAP, ItemTraitFactory.ASPECTAL,ItemTraitFactory.SMART,ItemTraitFactory.LUCKY],shogunDesc: "Questions to Ping JR About",abDesc:"Probably found it on a server in the Furthest Ring."))
      ..add(new Item("Flashlight",<ItemTrait>[ItemTraitFactory.PLASTIC, ItemTraitFactory.ASPECTAL,ItemTraitFactory.GLOWING,ItemTraitFactory.ZAP,ItemTraitFactory.LUCKY],shogunDesc: "Tube of Localised Sun"))
      ..add(new Item("Octet",<ItemTrait>[ItemTraitFactory.ASPECTAL,ItemTraitFactory.GLOWING,ItemTraitFactory.LUCKY,ItemTraitFactory.LEGENDARY,ItemTraitFactory.CRYSTAL],shogunDesc: "D13"))
      ..add(new Item("Horseshoe",<ItemTrait>[ItemTraitFactory.HORSESHOE, ItemTraitFactory.ASPECTAL, ItemTraitFactory.BLUNT],shogunDesc: "Horse Sneaker"))
      ..add(new Item("Rabbits Foot",<ItemTrait>[ItemTraitFactory.RABBITSFOOT, ItemTraitFactory.ASPECTAL],shogunDesc: "Rabbit Remains"))
      ..add(new Item("4 Leaf Clover",<ItemTrait>[ItemTraitFactory.PLANT, ItemTraitFactory.ASPECTAL,ItemTraitFactory.GLOWING,ItemTraitFactory.LUCKY],shogunDesc: "Plant of Luck +4"))
      ..add(new Item("8-Ball",<ItemTrait>[ItemTraitFactory.GLASS, ItemTraitFactory.ASPECTAL,ItemTraitFactory.SENTIENT],shogunDesc: "Worst Characters Only Quality",abDesc:"It seems this is never right. Ask again later or some shit."))
      ..add(new Item("A Stone",<ItemTrait>[ItemTraitFactory.ASPECTAL,ItemTraitFactory.REAL,ItemTraitFactory.FAKE]));

  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.MAX_LUCK, 2.0, true),
    new AssociatedStat(Stats.FREE_WILL, 1.0, true),
    new AssociatedStat(Stats.SANITY, -1.0, true),
    new AssociatedStat(Stats.HEALTH, -1.0, true),
    new AssociatedStat(Stats.SBURB_LORE, 0.2, false) //yes, technically it's from an aspect, but it's not NORMAL.
  ]);

  Realitystone(int id) :super(id, "Realitystone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}



class Gauntlet extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 2.0;
  @override
  double fraymotifWeight = 1.5;
  @override
  double companionWeight = 1.0;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#e19aca"
    ..aspect_light = '#e19aca'
    ..aspect_dark = '#7a546e'
    ..shoe_light = '#7a546e'
    ..shoe_dark = '#473140'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';

  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Stone", "Gauntlet", "Infinite", "Mind", "Space", "Power", "Soul", "Time", "Reality"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["THANOS CAR", "GAUNTLET HOLDER", "STONE COLLECTOR"]);


  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Stone", "Infinite", "Gauntlet", "Thanos", "Mind", "Space", "Power", "Soul", "Time", "Reality"]);

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }

  @override
  String denizenSongTitle = "The Green Sun";

  @override
  String denizenSongDesc = " The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY";

  @override
  List<String> symbolicMcguffins = ["stone","infinite","thanos","gauntlet"];

  @override
  List<String> physicalMcguffins = ["stone","infinite","thanos","gauntlet"];

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Infinity Gauntlet",<ItemTrait>[ItemTraitFactory.ASPECTAL,ItemTraitFactory.METAL,ItemTraitFactory.BONEHURTING],shogunDesc: "THANOS CAR THANOS CAR",abDesc:"..."));

  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.SANITY, -1.0, true),
    new AssociatedStat(Stats.POWER, 2.0, true)
  ]);

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>["Paradox Space"]); //Pfffft, I feel bad for these players




  @override
  void initializeThemes() {

    /*
        new Quest(""),
                new Quest(""),
                new Quest(""),
                new DenizenFightQuest("","","")
         */
    addTheme(new Theme(<String>["Stone","Thanos", "Mind", "Space", "Power","Soul", "Time", "Reality"])
      ..addFeature(FeatureFactory.CONTEMPLATATIVEFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.LOW)
      ..addFeature(FeatureFactory.BLOODSMELL, Feature.LOW)

      ..addFeature(new DenizenQuestChain("Collect The Stones", [
        new Quest("The ${Quest.PLAYER1} is wandering their land, when an imp goes up to them. Expecting a fight, the ${Quest.PLAYER1} raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says \"You must collect the Stones, then you can prove your worth to usssss...\" the imp's eyes go back to normal, and then it dies. The ${Quest.PLAYER1} notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."),
        new Quest("The ${Quest.PLAYER1} is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows \"I am the keeper of the Space Stone, fight me if you dare!\" It then dissapears in a cloud of smoke. The ${Quest.PLAYER1} tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the ${Quest.PLAYER1} was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The ${Quest.PLAYER1} is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows \"FIGHT ME, TO COLLECT THE POWER STONE!!\" It takes many hours, but the ${Quest.PLAYER1} comes out on top... POWERSTONE COLLECTED, 3/6."),
        new Quest("The ${Quest.PLAYER1} is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the ${Quest.PLAYER1} saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the ${Quest.PLAYER1} encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the ${Quest.PLAYER1} eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."),
        new DenizenFightQuest("The ${Quest.PLAYER1} learns it's time to visit their denizen, but when they get there they only see ${Quest.DENIZEN} being [REDACTED].", "Paradox Space has declared the ${Quest.PLAYER1} is worthy, and lets them live.","Paradox Space decrees that the ${Quest.PLAYER1} is not worthy.")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.HIGH)
        , Theme.HIGH); // end theme
  }


  Gauntlet(int id) :super(id, "Gauntlet", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}
