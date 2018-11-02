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
    ..shoe_light = '#999999'
    ..shoe_dark = '#666666'
    ..cloak_light = '#8a9499'
    ..cloak_mid = '#5c6366'
    ..cloak_dark = '#2e3133'
    ..shirt_light = '#86acbf'
    ..shirt_dark = '#627e8c'
    ..pants_light = '#8fa7b3'
    ..pants_dark = '#667780';

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
    return s.mutator.rune(s, p);
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
        new Quest("The ${Quest.PLAYER1} tries posting a letter through the ${Quest.PHYSICALMCGUFFIN} mail system only to find the letter caught in a plug of oil!  ${Quest.DENIZEN} has screwed with the mail system, crippling the ${Quest.CONSORT} economy!"),
        new Quest("The ${Quest.PLAYER1} cleans out oil from the nearby ${Quest.PHYSICALMCGUFFIN}s, opening up a few more channels between villages. "),
        new Quest("The ${Quest.PLAYER1} gets sick of all the fucking oil in the ${Quest.PHYSICALMCGUFFIN} mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront ${Quest.DENIZEN}."),
        new DenizenFightQuest("It is time for the ${Quest.PLAYER1}  to finally face the ${Quest.DENIZEN}. The mail is too vital to the ${Quest.CONSORT}s to risk having them reclog.","The ${Quest.DENIZEN} lies slain by the ${Quest.PLAYER1}'s ${Quest.WEAPON}. The ${Quest.PLAYER1} has won! The ${Quest.CONSORT}s have a bustling mail based economy once again.","The tyranny of ${Quest.DENIZEN} continues with the defeat of the ${Quest.PLAYER1}.")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
        ,  Theme.HIGH);
  }



}