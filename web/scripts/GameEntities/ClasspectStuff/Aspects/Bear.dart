import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Bear extends Aspect {
  @override
  double itemWeight = 0.7;
  @override
  double fraymotifWeight = 2.0;
  @override
  double companionWeight = 3.1;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#959595"
    ..aspect_light = '#bfbfbf'
    ..aspect_dark = '#959595'
    ..shoe_light = '#805233'
    ..shoe_dark = '#663c1f'
    ..cloak_light = '#805233'
    ..cloak_mid = '#737373'
    ..cloak_dark = '#664d3c'
    ..shirt_light = '#663c1f'
    ..shirt_dark = '#4d2d17'
    ..pants_light = '#68594e'
    ..pants_dark = '#4f443b';

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["DOORWAY CLEARER", "THINKY PERSON", "THE FAZ"]);


  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Bear", "Boiler", "Bean", "Bepis", "Boneless", "Bop"]);


  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Purgatorial", "Clear", "Criterion", "Fazbear", "Doorway"]);

  @override
  String denizenSongTitle = "Persaude the Enemy";

  @override
  String denizenSongDesc = "The OWNER convinces the ENEMY to get hurt.";

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>['Freddy Fazbear', 'Callisto', 'Nandi', 'Nanook', 'Otso', 'Onikuma', 'Jambavan', 'Ungnyeo']);


  @override
  List<String> symbolicMcguffins = ["Bear","Thought"];
  @override
  List<String> physicalMcguffins = ["Doorway"];

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Bear",<ItemTrait>[ItemTraitFactory.LOUD, ItemTraitFactory.REAL, ItemTraitFactory.ASPECTAL]))
      ..add(new Item("Thought",<ItemTrait>[ItemTraitFactory.BONEHURTING, ItemTraitFactory.SILENCED, ItemTraitFactory.GENERIC]))
      ..add(new Item("Doorway",<ItemTrait>[ItemTraitFactory.GENERIC, ItemTraitFactory.ASPECTAL]));
  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.MOBILITY, 5.0, true),
    new AssociatedStat(Stats.SANITY, 5.0, true)
  ]);

  Bear(int id) :super(id, "Bear", isCanon: false, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.rage(s, p);
  }

  @override
  void initializeThemes() {

    /*
        new Quest(""),
                new Quest(""),
                new Quest(""),
                new DenizenFightQuest("","","")
         */

    addTheme(new Theme(<String>["Contemplative", "Transitions", "Quiet"])
      ..addFeature(FeatureFactory.CONTEMPLATATIVEFEELING, Feature.HIGH)
      ..addFeature(FeatureFactory.SILENCE, Feature.MEDIUM)
      ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.OILSMELL, Feature.WAY_LOW)

      ..addFeature(new DenizenQuestChain("Revenge on the Denizen", [
        new Quest("The ${Quest.PLAYER1} hears a ${Quest.CONSORT} ${Quest.CONSORTSOUND} up to him, it talks about how the imps keep jumpscaring it, and how The ${Quest.PLAYER1} needs to stop the Denizen."),
        new Quest("The ${Quest.PLAYER1} has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the ${Quest.DENIZEN}."),
        new Quest("The ${Quest.PLAYER1} starts trekking to the ${Quest.DENIZEN}'s lair."),
        new DenizenFightQuest("The ${Quest.PLAYER1} arrives in the ${Quest.DENIZEN}'s lair, they challenge it to a fight.", "The ${Quest.DENIZEN} is slain... And the consorts aren't jumpscared any more","The ${Quest.PLAYER1} is defeated, and the ${Quest.DENIZEN}'s minions keep jumpscaring the innocent imps.")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

        ,  Theme.HIGH);
  }
}