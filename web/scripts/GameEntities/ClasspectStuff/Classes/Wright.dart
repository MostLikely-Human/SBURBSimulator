import "../../../SBURBSim.dart";
import "SBURBClass.dart";
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Wright extends SBURBClass {
  @override
  double itemWeight = 0.51;
  @override
  double fraymotifWeight = 0.01;
  @override
  double companionWeight = 1.01;

  @override
  List<String> levels = ["ASPECTIST EXTRAORDINAIRE"];
  @override
  List<String> handles = ["wrongfully","wacky","worriful","worried","worldly"];

  @override
  bool isProtective = true;
  @override
  bool isSmart = false;
  @override
  bool isSneaky = false;
  @override
  bool isMagical = false;
  @override
  bool isDestructive = false;
  @override
  bool isHelpful = true;

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.SBURB_LORE, -0.05, false),
    new AssociatedStat(Stats.ALCHEMY, 0.8, false)

  ]);

  Wright() : super("Wright", 24, false, isMLHFanon: true);


  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Buidlers Guide",<ItemTrait>[ItemTraitFactory.BOOK, ItemTraitFactory.CLASSRELATED,ItemTraitFactory.PAPER,ItemTraitFactory.LEGENDARY,ItemTraitFactory.HEALING],abDesc:""))
      ..add(new Item("Makers Kit",<ItemTrait>[ItemTraitFactory.REAL, ItemTraitFactory.CLASSRELATED,ItemTraitFactory.HEALING],abDesc:""));
  }

  @override
  bool isActive([double multiplier = 0.0]) {
    return false;
  }

}