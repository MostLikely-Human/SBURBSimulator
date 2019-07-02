import "../../../SBURBSim.dart";
import "SBURBClass.dart";
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Soul extends SBURBClass {

  @override
  double itemWeight = 0.51;
  @override
  double fraymotifWeight = 1.01;
  @override
  double companionWeight = 0.01;

  @override
  List<String> handles = ["soulful","souless","souly"];

  @override
  bool isProtective = false;
  @override
  bool isSmart = true;
  @override
  bool isSneaky = false;
  @override
  bool isMagical = true;
  @override
  bool isDestructive = false;
  @override
  bool isHelpful = true;

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.SANITY, 2.0, false),
    new AssociatedStat(Stats.SBURB_LORE, 1.5, false)

  ]);

  Soul() : super("Soul", 27, false, isMLHFanon: true);

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Whisperings of Aspect",<ItemTrait>[ItemTraitFactory.ASPECTAL, ItemTraitFactory.MAGICAL,ItemTraitFactory.LEGENDARY],abDesc:""));
  }

  @override
  bool isActive([double multiplier = 0.0]) {
    return false;
  }

  @override
  num modPowerBoostByClass(num powerBoost, AssociatedStat stat) {
    if (stat.multiplier > 0) {
      powerBoost = powerBoost * 0.5;
    } else {
      powerBoost = powerBoost * -0.5;
    }
    return powerBoost;
  }

  @override
  double getAttackerModifier() {
    return 1.0;
  }

  @override
  double getDefenderModifier() {
    return 1.0;
  }

  @override
  double getMurderousModifier() {
    return 0.5;
  }
}
