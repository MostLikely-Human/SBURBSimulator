import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Taze extends Aspect {
  @override
  double itemWeight = 2.0;
  @override
  double fraymotifWeight = 0.7;
  @override
  double companionWeight = 0.7;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#933100"
    ..aspect_light = '#933100'
    ..aspect_dark = '#682200'
    ..shoe_light = '#4c3a27'
    ..shoe_dark = '#302418'
    ..cloak_light = '#a0562b'
    ..cloak_mid = '#723e20'
    ..cloak_dark = '#442513'
    ..shirt_light = '#963c07'
    ..shirt_dark = '#682a06'
    ..pants_light = '#6d4d3a'
    ..pants_dark = '#422e23';

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["IT'S A METAPHOR", "ABSOLUTE REBEL", "COLD BLOODED"]);


  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Therapist", "Tax", "Talker", "Tailess", "Teammate"]);


  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Rebellion", "Desolate", "Electric", "Metaphorical", "Ravaging"]);

  @override
  String denizenSongTitle = "Rebellion";

  @override
  String denizenSongDesc = "The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.";

  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>['Prometheus', 'Lucifer', 'Zeus', 'Momus', 'Maui', 'Anansi', 'Arachne']);


  @override
  List<String> symbolicMcguffins = ["Lightning","Ice","Taserface"];
  @override
  List<String> physicalMcguffins = ["Taser"];

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Lightning",<ItemTrait>[ItemTraitFactory.LOUD, ItemTraitFactory.REAL, ItemTraitFactory.ASPECTAL]))
      ..add(new Item("Ice",<ItemTrait>[ItemTraitFactory.COLD, ItemTraitFactory.ICECOLD, ItemTraitFactory.GENERIC]))
      ..add(new Item("Taserface",<ItemTrait>[ItemTraitFactory.FAKE, ItemTraitFactory.LOUD]))
      ..add(new Item("Taser",<ItemTrait>[ItemTraitFactory.LOUD, ItemTraitFactory.ASPECTAL, ItemTraitFactory.FAKE]));
  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.MOBILITY, 10.0, true),
    new AssociatedStat(Stats.SANITY, -2.0, true)
  ]);

  Taze(int id) :super(id, "Taze", isCanon: false, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.



}