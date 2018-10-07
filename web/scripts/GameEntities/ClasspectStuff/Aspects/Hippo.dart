import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Hippo extends Aspect {
  @override
  double itemWeight = 3.1;
  @override
  double fraymotifWeight = 2.0;
  @override
  double companionWeight = 0.7;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#853dcc"
    ..aspect_light = '#f76261'
    ..aspect_dark = '#913a39'
    ..shoe_light = '#ab4443'
    ..shoe_dark = '#78302f'
    ..cloak_light = '#a54cff'
    ..cloak_mid = '#8c41d9'
    ..cloak_dark = '#7335b3'
    ..shirt_light = '#853dcc'
    ..shirt_dark = '#642e99'
    ..pants_light = '#4c2375'
    ..pants_dark = '#2b1442';

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["RANT EXTRAORDINAIRE", "VENT CRAWLER", "DUCT MASTER"]);


  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Hippo", "Hardboiler", "Homestuck", "Homicide", "Hopeless", "Human", "Hippopotamus", "Hummus"]);


  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Purgatorial", "Rantish", "Cold", "Conditioned", "Lost"]);

  @override
  String denizenSongTitle = "Rant Your Troubles Away";

  @override
  String denizenSongDesc = "The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.";

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>['Mr. Hippo', 'Athena', 'Tawaret', 'Twert', 'Thoeris', 'Set', 'Ipy', 'Ipet', 'Apet', 'Opet', 'Reret']);


  @override
  List<String> symbolicMcguffins = ["Hippo","Ranting"];
  @override
  List<String> physicalMcguffins = ["Vent"];

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Hippo",<ItemTrait>[ItemTraitFactory.LOUD, ItemTraitFactory.REAL, ItemTraitFactory.ASPECTAL]))
      ..add(new Item("Ranting",<ItemTrait>[ItemTraitFactory.BONEHURTING, ItemTraitFactory.LOUD, ItemTraitFactory.GENERIC]))
      ..add(new Item("Vent",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.CHAOTIC]));
  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.MOBILITY, 15.0, true),
    new AssociatedStat(Stats.SANITY, -4.0, true)
  ]);

  Hippo(int id) :super(id, "Hippo", isCanon: false, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.doom(s, p);
  }

  @override
  void initializeThemes() {

    /*
        new Quest(""),
                new Quest(""),
                new Quest(""),
                new DenizenFightQuest("","","")
         */

    addTheme(new Theme(<String>["Confusion", "Ranting", "Cold", "Quiet"])
      ..addFeature(FeatureFactory.CONFUSINGFEELING, Feature.LOW)
      ..addFeature(FeatureFactory.SILENCE, Feature.MEDIUM)
      ..addFeature(FeatureFactory.CLAUSTROPHOBICFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.ECHOSOUND, Feature.MEDIUM)

      ..addFeature(new DenizenQuestChain("Stop the Screamening", [
        new Quest("The ${Quest.PLAYER1} hears the screaming voice of the ${Quest.DENIZEN}, and when they walk into a consort village, a ${Quest.CONSORT} ${Quest.CONSORTSOUND}s about how loud and annoying the ${Quest.DENIZEN} is."),
        new Quest("The ${Quest.PLAYER1} sees another ${Quest.CONSORT}. The ${Quest.CONSORT} also ${Quest.CONSORTSOUND}s about how loud the ${Quest.DENIZEN} is."),
        new Quest("The noise finally gets to The ${Quest.PLAYER1}, and they vow to slay the ${Quest.DENIZEN}."),
        new DenizenFightQuest("The ${Quest.PLAYER1} steps into the ${Quest.DENIZEN}'s lair, The ${Quest.PLAYER1} demands the noise to stop, so they challenge their Denizen to a duel. ", "The ${Quest.DENIZEN} is defeated, and the noise finally stops.","The ${Quest.PLAYER1} is defeated, and the ${Quest.DENIZEN} screeches more.")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

        ,  Theme.HIGH);
  }
}