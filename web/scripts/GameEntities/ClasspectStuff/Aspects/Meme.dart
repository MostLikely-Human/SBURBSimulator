import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Meme extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 2.00;
  @override
  double fraymotifWeight = 0.5;
  @override
  double companionWeight = 1.0;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#c55555"
    ..aspect_light = '#c55555'
    ..aspect_dark = '#090404'
    ..shoe_light = '#ba872e'
    ..shoe_dark = '#8e694e'
    ..cloak_light = '#b59e5d'
    ..cloak_mid = '#837243'
    ..cloak_dark = '#4f4528'
    ..shirt_light = '#9fbfbf'
    ..shirt_dark = '#95b5b5'
    ..pants_light = '#956f6f'
    ..pants_dark = '#714b4b';

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["MEME STEALER", "THANOS CAR", "AGGRESIVE MEMER"]);

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Meme", "Memetastic", "Mesmerizing", "Mop", "Memelord", "Mashedpotato"]);


  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Meme", "Funny", "Stealing", "Despacito", "Meme Stealing", "Cursed"]);


  @override
  String denizenSongTitle = "cURSED";

  @override
  String denizenSongDesc = "Some cursed meme music starts to play.";


  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>['Shogun', 'Memelord', 'Air Horn', '420', 'Thanos Car', 'Luis Fonsi', 'Bowsette']);


  @override
  List<String> symbolicMcguffins = ["memes"];

  @override
  List<String> physicalMcguffins = ["memes"];

  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("memes",<ItemTrait>[ItemTraitFactory.REAL, ItemTraitFactory.BONEHEALING,ItemTraitFactory.DUMBSMART,ItemTraitFactory.CHAOTIC],shogunDesc: ";)",abDesc:"No. Just no."));
  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.SANITY, -1.0, true),
  ]);

  Meme(int id) :super(id, "Meme", isCanon: false, isMLHFanon: true); //GA's Aspect

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }

  @override
  void initializeThemes() {

    /*
        new Quest(""),
                new Quest(""),
                new Quest(""),
                new DenizenFightQuest("","","")
         */
    addTheme(new Theme(<String>["Memes"])
      ..addFeature(FeatureFactory.LUCKYFEELING, Feature.HIGH)

      ..addFeature(new DenizenQuestChain("Become Shrek", [
        new Quest("The ${Quest.PLAYER1} decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."),
        new Quest("The ${Quest.PLAYER1} finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant ${Quest.CONSORT}-looking dragon. They notice that it's chained up, so The ${Quest.PLAYER1} decides to free it, and it brings them to the top of the tallest tower in the castle. "),
        new Quest("The dragon leads The ${Quest.PLAYER1} to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The ${Quest.PLAYER1} unveils it, they see a sleeping consort, The ${Quest.PLAYER1} yeets it out the window, and rides the Dragon towards the ${Quest.DENIZEN}. "),
        new DenizenFightQuest("The ${Quest.PLAYER1} rides up to the ${Quest.DENIZEN}'s lair, and they challenge it to a battle. ", "The ${Quest.PLAYER1} wins, with the added help of the Dragon, there was no chance they would lose. ","Even with the added help of the Dragon, The ${Quest.PLAYER1} wasn't enough to defeat the ${Quest.DENIZEN}")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
      ,Theme.HIGH);
  }
}