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
    return 0.5;
  }

  @override
  double getDefenderModifier() {
    return 1.5;
  }

  @override
  double getMurderousModifier() {
    return 1.0;
  }


  @override
  void initializeThemes() {
    /*
        new Quest(" "),
        new Quest(""),
        new Quest(" ")


        */

    addTheme(new Theme(<String>["Wrights","Building", "Creation", "Extension"])
      ..addFeature(FeatureFactory.RUSTLINGSOUND, Feature.MEDIUM)
      ..addFeature(FeatureFactory.NATURESOUND, Feature.HIGH)
      ..addFeature(FeatureFactory.ZOOSMELL, Feature.MEDIUM)
      ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.NATURESMELL, Feature.HIGH)

      ..addFeature(new PostDenizenFrogChain("Forge the Frogs", [
        new Quest("The defeat of the ${Quest.DENIZEN} has somehow caused the Forge to go quiescent again? What the hell? The ${Quest.PLAYER1} has to start stoking it all over again. "),
        new Quest("The ${Quest.PLAYER1} breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),
        new Quest("The ${Quest.PLAYER1} has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),
        new Quest("The ${Quest.PLAYER1} has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     "),

      ], new FrogReward(), QuestChainFeature.spacePlayer), Feature.WAY_HIGH)

      ..addFeature(new PostDenizenQuestChain("Supply the Consorts", [
        new Quest("Now that the ${Quest.DENIZEN} has been taken care of, the ${Quest.PLAYER1} finds a long line of ${Quest.CONSORT}s who lack the things they need to live their lives. The ${Quest.PLAYER1} gets to work alchemizing them."),
        new Quest("The ${Quest.PLAYER1} sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding ${Quest.CONSORT} might need.  The work is strangely soothing."),
        new Quest(" The ${Quest.CONSORT} finally have the basic necessities taken care of.  The local ${Quest.CONSORT}s dedicate a new Blacksmith Forger in the  ${Quest.PLAYER1}'s honor and vow to make their own goods from now on.")
      ], new RandomReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
        ,  Theme.MEDIUM);
  }


}