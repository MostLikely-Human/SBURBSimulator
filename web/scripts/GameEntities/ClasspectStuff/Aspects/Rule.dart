import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Rule extends Aspect {
  @override
  double itemWeight = 0.9;
  @override
  double fraymotifWeight = 1.1;
  @override
  double companionWeight = 2.0;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#990000"
    ..aspect_light = '#ff0200'
    ..aspect_dark = '#dd0000'
    ..shoe_light = '#25334f'
    ..shoe_dark = '#07090f'
    ..cloak_light = '#c64f4f'
    ..cloak_mid = '#a33f3f'
    ..cloak_dark = '#843333'
    ..shirt_light = '#d5e1f2'
    ..shirt_dark = '#b3bdcc'
    ..pants_light = '#3c3e42'
    ..pants_dark = '#202123';

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["ABSOLUTE LOYALTY", "ARROW EXTRAORDINAIRE", "EMPATHETIC WARRIOR"]);


  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Relaxer", "Respondant", "Rememberer", "Restless", "Rasengan"]);


  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Empathetic", "Arrowed", "Emotioanal", "Literal", "Ravaging"]);

  @override
  String denizenSongTitle = "A Song Of Arrows";

  @override
  String denizenSongDesc = "The OWNER has dozens of arrows fly above their head, and right onto the ENEMY";

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>['Artemus','Apollo','Eros','Cupid','Actaeon','Atalanta','Hippolytus','Orion','Paris','Philoctetes','Poeas','Teucher']);


  @override
  List<String> symbolicMcguffins = ["Arrow","Yondu","Empathy"];
  @override
  List<String> physicalMcguffins = ["Arrow","Bow"];

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Arrow",<ItemTrait>[ItemTraitFactory.POINTY, ItemTraitFactory.WOOD, ItemTraitFactory.ARROW]))
      ..add(new Item("Bow",<ItemTrait>[ItemTraitFactory.WOOD, ItemTraitFactory.BLUNT, ItemTraitFactory.GENERIC]))
      ..add(new Item("Yondu",<ItemTrait>[ItemTraitFactory.FAKE, ItemTraitFactory.ASPECTAL]))
      ..add(new Item("Empathy",<ItemTrait>[ItemTraitFactory.ASPECTAL, ItemTraitFactory.BONEHEALING, ItemTraitFactory.FAKE]));
  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.MOBILITY, 2.0, true),
    new AssociatedStat(Stats.SANITY, 5.0, true)
  ]);

  Rule(int id) :super(id, "Rule", isCanon: false, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.rage(s, p); //I don't like coding Gnosises
  }

  @override
  void initializeThemes() {

    /*
        new Quest(""),
                new Quest(""),
                new Quest(""),
                new DenizenFightQuest("","","")
         */

    addTheme(new Theme(<String>["Empathy", "Arrows", "Emotions", "Bows"])
      ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.SILENCE, Feature.LOW)
      ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.CONTEMPLATATIVEFEELING, Feature.LOW)

      ..addFeature(new DenizenQuestChain("Be the Yondu", [
        new Quest("The ${Quest.PLAYER1} is walking around on their land, when a ${Quest.CONSORT} walks up to them, and tells them about ${Quest.DENIZEN} and how it's destroying the land. The ${Quest.PLAYER1} doesn't care."),
        new Quest("The ${Quest.PLAYER1} sees another ${Quest.CONSORT}. The ${Quest.CONSORT} starts ${Quest.CONSORTSOUND}ing about how urgent it is to fight ${Quest.DENIZEN}. Again The ${Quest.PLAYER1} doesn't care in the slightest."),
        new Quest("The ${Quest.PLAYER1} is told about the great treasure that the ${Quest.DENIZEN} holds, The ${Quest.PLAYER1} decides to travel to the ${Quest.DENIZEN}'s lair. To fight the ${Quest.DENIZEN}."),
        new DenizenFightQuest("The ${Quest.PLAYER1} thunders into the ${Quest.DENIZEN}'s lair, and they demand a prize.", "The ${Quest.DENIZEN} is defeated, The ${Quest.PLAYER1} takes the grist without a second glance.","The ${Quest.PLAYER1} is defeated, maybe they should've played the game the right way.")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

        ,  Theme.HIGH);
  }
}