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
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

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

  Soulstone(int id) :super(id, "Soulstone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}



class Timestone extends Aspect {
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
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

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

  Timestone(int id) :super(id, "Timestone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}



class Realitystone extends Aspect {
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
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

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

  Realitystone(int id) :super(id, "Realitystone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}



class Gauntlet extends Aspect {
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
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

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

  Gauntlet(int id) :super(id, "Gauntlet", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}
