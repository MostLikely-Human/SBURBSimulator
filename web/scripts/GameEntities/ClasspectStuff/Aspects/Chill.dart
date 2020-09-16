import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Chill extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 0.5;
  @override
  double fraymotifWeight = 0.7;
  @override
  double companionWeight = 1.0;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#010067"
    ..aspect_light = '#010067'
    ..aspect_dark = '#000033'
    ..shoe_light = '#0000ff'
    ..shoe_dark = '#002b7c'
    ..cloak_light = '#c3c3c3'
    ..cloak_mid = '#c3c3c3'
    ..cloak_dark = '#9a9a9a'
    ..shirt_light = '#303030'
    ..shirt_dark = '#000000'
    ..pants_light = '#0000ff'
    ..pants_dark = '#002b7c';


  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Chill", "Fear", "Subordinance", "Cold", "Solids"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["SOLIDIFIER", "FEAR MAKER", "ABSOLUTE DESTROYER"]);


  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Child", "Chimpanzee", "Choler", "Cauliflower", "Changer", "Cake", "Cone"]);


  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Chill", "Rock", "Cold", "Fearing", "Solidifying"]);

  @override
  String denizenSongTitle = "Fear ";

  @override
  String denizenSongDesc = " A shiver of fear is sent to the ENEMY, but the OWNER is strengthened.";

  @override
  List<String> symbolicMcguffins = ["chill","cold", "fear", "subordination"];

  @override
  List<String> physicalMcguffins = ["chill","stone", "solids"];

  @override
  List<String> denizenNames = new List<String>.unmodifiable(['Thanos', 'Phobos', 'Deimos', 'Boreas']);

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.MOBILITY, 2.0, true),
    new AssociatedStat(Stats.SANITY, -1.0, true),
    new AssociatedStat(Stats.RELATIONSHIPS, -1.0, true),
  ]);

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("A Rock",<ItemTrait>[ItemTraitFactory.REAL, ItemTraitFactory.STONE, ItemTraitFactory.COLD, ItemTraitFactory.ASPECTAL]));
  }



  Chill(int id) :super(id, "Chill", isCanon: false, isMLHFanon: true);

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.chill(s, p);
  }

  @override
  void initializeThemes() {
    addTheme(new Theme(<String>["Chill", "Stone", "Cold", "Fear"])
      ..addFeature(FeatureFactory.CLAUSTROPHOBICFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.BLOODSMELL, Feature.HIGH)
      ..addFeature(new DenizenQuestChain("Make An Army", [
        new Quest("The ${Quest.PLAYER1} decides enough is enough, and that they need to fight the ${Quest.DENIZEN}. They decide to amass an army of consorts to fight it..."),
        new Quest("The ${Quest.PLAYER1} figures out that the ${Quest.CONSORT}s are very disinclined to fight, so the ${Quest.PLAYER1} has to use a bit more force..."),
        new Quest("The ${Quest.PLAYER1} has created an army of fearful consorts, it may fall apart during the Denizen fight though..."),
        new DenizenFightQuest("Now that the ${Quest.PLAYER1} has amassed an army of ${Quest.CONSORT}s, they think it's time to fight the ${Quest.DENIZEN}...","The ${Quest.DENIZEN} lies slain, but the ${Quest.CONSORT}s still lie under the power of the ${Quest.PLAYER1}.","The ${Quest.PLAYER1} lies dead, in a surprising twist, the ${Quest.DENIZEN} takes care of the living members of the consort army.")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
        ,  Theme.HIGH);
  }

}