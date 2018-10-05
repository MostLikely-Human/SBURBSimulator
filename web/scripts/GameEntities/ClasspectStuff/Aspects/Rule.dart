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
    ..shirt_light = '#b5c1d2'
    ..shirt_dark = '#939dac'
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
    return s.mutator.hope(s, p);
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
        new Quest("The ${Quest.PLAYER1} is walking around their land, when suddenly an arrow starts floating, The ${Quest.PLAYER1} figures out they can control it with their mind."),
        new Quest("The ${Quest.PLAYER1} is practicing in using their arrows, they see an imp walk close to them. The ${Quest.PLAYER1} tries to strife it, on their second attempt, The ${Quest.PLAYER1} is able to defeat the imp with their arrow, they have improved in their abilities."),
        new Quest("The ${Quest.PLAYER1} has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The ${Quest.PLAYER1} is now able to take on their denizen."),
        new DenizenFightQuest("The ${Quest.PLAYER1} walks into the ${Quest.DENIZEN}'s lair, arrows flying behind them.", "The ${Quest.DENIZEN} is slain, it looks like it was accupunctured.","The power of the arrows was not enough to help The ${Quest.PLAYER1}...")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

        ,  Theme.HIGH);
  }
}