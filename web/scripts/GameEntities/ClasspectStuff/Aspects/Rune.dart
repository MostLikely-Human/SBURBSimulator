import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Rune extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 0.5;
  @override
  double fraymotifWeight = 1.0;
  @override
  double companionWeight = 1.0;

  @override
  double difficulty = 0.5;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#007fbf"
    ..aspect_light = '#007fbf'
    ..aspect_dark = '#4d6e80'
    ..shoe_light = '#858585'
    ..shoe_dark = '#707070'
    ..cloak_light = '#52d6fc'
    ..cloak_mid = '#52d6fc'
    ..cloak_dark = '#00a1d8'
    ..shirt_light = '#00a1d8'
    ..shirt_dark = '#008cb4'
    ..pants_light = '#707070'
    ..pants_dark = '#5c5c5c';

  Rune(int id) :super(id, "Rune", isCanon: false, isMLHFanon: true);

  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Rune", "Infinity", "Magic", "Fairies", "Prediction", "Circles", "Majykks", "Systems"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["FAIRY PERSON", "INFIINITELY CONFUSED", "PREDICTIVE LAD"]);

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Rune", "Ruiner", "Red", "Ready", "Retconner", "Respondent"]);

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Infinite", "Magical", "Runely", "Majykkal", "Systematically", "Predictful"]);

  @override
  String denizenSongTitle = "Magicity";

  @override
  String denizenSongDesc = "In a flood of magic, the OWNER is strengthened and healed, and the ENEMY is weakened.";

  @override
  List<String> symbolicMcguffins = ["rune","majykk", "fairies", "infinity", "prediction"];

  @override
  List<String> physicalMcguffins = ["rune","runestones", "magic", "fairies"];

  @override
  List<String> denizenNames = new List<String>.unmodifiable(['Rune', 'Hecate', 'Hekate', 'Heh', 'Huh', 'Athena', 'Oracle']);

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.MOBILITY, 2.0, true),
    new AssociatedStat(Stats.SANITY, -0.5, true),
    new AssociatedStat(Stats.SBURB_LORE, 2.0, true)
  ]);

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }


  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Runestone",<ItemTrait>[ItemTraitFactory.STONE, ItemTraitFactory.MAGICAL, ItemTraitFactory.ASPECTAL]))
      ..add(new Item("Fairy Bottle",<ItemTrait>[ItemTraitFactory.GLASS, ItemTraitFactory.MAGICAL]));
  }


  @override
  void initializeThemes() {
    addTheme(new Theme(<String>["Rune","Magic","Fairy", "Infinite", "Predictions"])
      ..addFeature(FeatureFactory.CONTEMPLATATIVEFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)
      ..addFeature(new DenizenQuestChain("Learn Magic", [
        new Quest("The ${Quest.PLAYER1} is walking around in a village of ${Quest.CONSORT}s, when a Consort walks up to them. It says that The ${Quest.PLAYER1} has to learn magic, so they can fight the ${Quest.DENIZEN}. The ${Quest.PLAYER1} promises to do their best."),
        new Quest("The ${Quest.PLAYER1} is practicing the arcana, they're starting to get pretty good."),
        new Quest("The ${Quest.PLAYER1} is able to fight numerous imps with their magic now, they are ready to fight the ${Quest.DENIZEN}..."),
        new DenizenFightQuest("The ${Quest.PLAYER1} storms into the ${Quest.DENIZEN}'s lair, ready to duel...","The ${Quest.DENIZEN} has been killed by the ${Quest.PLAYER1}'s impressive use of magic.","The ${Quest.PLAYER1}'s magic was not enough to do defeat the ${Quest.DENIZEN}...")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
        ,  Theme.HIGH);
  }



}