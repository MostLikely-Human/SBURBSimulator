import "../../GameEntity.dart";
import "SBURBClass.dart";
import "../../../SBURBSim.dart";

import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Hussie extends SBURBClass {
  @override
  double itemWeight = 20.0;
  @override
  double fraymotifWeight = 20.0;
  @override
  double companionWeight = 0.5;


  @override
  List<String> levels = <String>["4TH WALL AFICIONADO", "CATACLYSM COMMANDER", "AUTHOR"];
  @override
  List<String> quests = <String>["being a useless piece of shit and reading FAQs to skip the hard shit in levels", "causing ridiculous amounts of destruction trying to skip quest lines", "learning that sometimes you have to do things right, and can't just skip ahead"];
  @override
  List<String> postDenizenQuests = <String>["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule", "being a useless piece of shit and not joining cleanup efforts.", "accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"];
  @override
  List<String> handles = <String>["hussie"];

  @override
  bool isProtective = false;
  @override
  bool isSmart = true;
  @override
  bool isSneaky = false;
  @override
  bool isMagical = true;
  @override
  bool isDestructive = true;
  @override
  bool isHelpful = false;

  Hussie() : super("Hussie", 22, false, isMLHFanon: true, isInternal: true);

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.SBURB_LORE, 41.3, false), //basically all Wastes have.
    new AssociatedStat(Stats.EXPERIENCE, 41.3, false)
  ]);

  @override
  bool highHinit() {
    return true;
  }

  @override
  bool isActive([double multiplier = 0.0]) {
    return true;
  }

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Yardstick",<ItemTrait>[ItemTraitFactory.STICK, ItemTraitFactory.CLASSRELATED,ItemTraitFactory.PLYWOOD, ItemTraitFactory.LEGENDARY],abDesc:"Wait. Did you beat LORAS?"))
      ..add(new Item("SBURB Hacking Guide",<ItemTrait>[ItemTraitFactory.BOOK, ItemTraitFactory.CLASSRELATED,ItemTraitFactory.SMARTPHONE,ItemTraitFactory.PAPER],shogunDesc: "The Shoguns Guide to Winning",abDesc:"Hell no, you leave your grubby fucking mitts outta the code."))
      ..add(new Item("Body Pillow of Hussie",<ItemTrait>[ItemTraitFactory.CLOTH, ItemTraitFactory.CLASSRELATED,ItemTraitFactory.PILLOW, ItemTraitFactory.IRONICSHITTYFUNNY, ItemTraitFactory.COMFORTABLE],shogunDesc: "The Shoguns Vessel",abDesc:"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer."));
  }



  @override
  num modPowerBoostByClass(num powerBoost, AssociatedStat stat) {
    if (stat.isFromAspect || stat.stat != Stats.SBURB_LORE) {
      powerBoost = powerBoost * 0; //wasted aspect
    } else {
      powerBoost = powerBoost * 1;
    }
    return powerBoost;
  }
}