import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

//not  a real aspect, it's just a shitty fucking clone of rage
class Juice extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 13.00;
  @override
  double fraymotifWeight = 13.0;
  @override
  double companionWeight = 13.0;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#ff0000"
    ..aspect_light = '#ffff00'
    ..aspect_dark = '#ffff00'
    ..shoe_light = '#508b2d'
    ..shoe_dark = '#316c0d'
    ..cloak_light = '#dddd00'
    ..cloak_mid = '#afaf00'
    ..cloak_dark = '#8f8f00'
    ..shirt_light = '#ff0000'
    ..shirt_dark = '#a8000a'
    ..pants_light = '#b8151f'
    ..pants_dark = '#8c1d1d';


  @override
  List<String> levels = new List<String>.unmodifiable(<String>["PURIFICATOR", "NOT SHOGUN", "WHO IS SHOGUN?"]);


  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Juice", "Joke", "Jespacito"]);


  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Pure", "Juice", "Juicey", "Juiced", "Small Might", "Juicepacito"]);


  @override
  String denizenSongTitle = "Juiceification"; // a musical piece full of emotion;

  @override
  String denizenSongDesc = "The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.";


  @override
  List<String> denizenNames = new List<String>.unmodifiable(<String>['Juice', 'Februus', 'Dyonisus', 'Bacchus', 'Epidotes', 'Juno Februtis', 'Ea', 'Marduk', 'Asaluhhi', 'Wadjet']);

  @override
  List<String> symbolicMcguffins = ["Juice Box","Shogun body pillow"];
  @override
  List<String> physicalMcguffins = ["Juice Box","Shogun body pillow"];


  @override
  void initializeItems() {
    items = new WeightedList<Item>()
      ..add(new Item("Juice Box",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.ASPECTAL, ItemTraitFactory.REAL, ItemTraitFactory.FAKE]))
      ..add(new Item("Shogun Body Pillow",<ItemTrait>[ItemTraitFactory.PILLOW, ItemTraitFactory.COMFORTABLE, ItemTraitFactory.ASPECTAL]));

  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
    new AssociatedStat(Stats.SBURB_LORE, 13.0, true)
  ]);

  Juice(int id) :super(id, "Juice", isCanon: false, isMLHFanon: true);

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.juice(s, p);
  }

  @override
  void initializeThemes() {

    /*
        new Quest(""),
                new Quest(""),
                new Quest(""),
                new DenizenFightQuest("","","")
         */
    addTheme(new Theme(<String>["Juice", "Faith", "Determination", "Calming", "Peaceful", "Freedom"])
      ..addFeature(FeatureFactory.CONFUSINGFEELING, Feature.WAY_HIGH)
      ..addFeature(FeatureFactory.MUSICSOUND, Feature.MEDIUM)
      ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.HIGH)
      ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.CONTEMPLATATIVEFEELING, Feature.HIGH)

      ..addFeature(new DenizenQuestChain("Talk to your Juice entity", [
        new Quest("The ${Quest.PLAYER1} sees a floating sentient ${Quest.PHYSICALMCGUFFIN}, the ${Quest.PHYSICALMCGUFFIN} says it's a 'Juice Entity'. It then suddenly dissapears. "),
        new Quest("The ${Quest.PLAYER1} notices their Juice Entity again, a ${Quest.CONSORT} notices it, and starts ${Quest.CONSORTSOUND}ing. The ${Quest.PHYSICALMCGUFFIN} tells The ${Quest.PLAYER1} some weird stuff about Juice and Sauce, before leaving again. This leaves The ${Quest.PLAYER1} very confused."),
        new Quest("The ${Quest.PLAYER1} learns more about Sauce and Juice from the ${Quest.PHYSICALMCGUFFIN}, and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."),
        new DenizenFightQuest("${Quest.DENIZEN} challenges the ${Quest.PLAYER1} to a fight. The ${Quest.PLAYER1} calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The ${Quest.PLAYER1} on.", "${Quest.DENIZEN} is defeated, The ${Quest.PLAYER1} rejoices, while the ${Quest.PHYSICALMCGUFFIN} dissapears again.","The ${Quest.PLAYER1} is defeated, ${Quest.DENIZEN} rejoices. Well, the Juice Entity never really helped The ${Quest.PLAYER1} learn to fight, what did you expect?")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

      ..addFeature(new DenizenQuestChain("Be The Wingman", [ //Thanks to Modern#5598 on Discord
        new Quest("The ${Quest.PLAYER1} is greeted by a young adolescent ${Quest.CONSORT} looking down on his luck. Apparently, he wants to go out with this pretty ${Quest.CONSORT} girl, but can’t muster up the courage to ask her out. It seems the ${Quest.PLAYER1} will have to provide the ${Quest.CONSORT} with some dating advice."),
        new Quest("The ${Quest.PLAYER1} is doing a pretty good job of being a wingman. They teach the nervous ${Quest.CONSORT} everything they know about love and how it works. The ${Quest.PLAYER1} makes plans to have the two ${Quest.CONSORT}s meet at a local consort diner tonight."),
        new Quest("The ${Quest.PLAYER1} is hiding in a bush, watching their tutelage from afar. The now dapper-looking ${Quest.CONSORT}, though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The ${Quest.PLAYER1} feels good about themselves for having done a nice thing today."),
        new DenizenFightQuest("The ${Quest.PLAYER1} treavels to ${Quest.DENIZEN}'s lair, the lovebird ${Quest.CONSORT}s follow the ${Quest.PLAYER1}, ${Quest.CONSORTSOUND}ing excitedly. They cheer The ${Quest.PLAYER1} as he begins the fight...","${Quest.DENIZEN} lies defeated, the ${Quest.CONSORT}s are still ${Quest.CONSORTSOUND}ing, even more now.","The ${Quest.PLAYER1} is defeated, ${Quest.DENIZEN} laughs, while the ${Quest.CONSORT}s run away.")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

      ..addFeature(new DenizenQuestChain("Pilot The Mech", [ //Thanks again to Modern
        new Quest("The ${Quest.PLAYER1} arrives to find a consort city in total ruins! A nearby ${Quest.CONSORT} informs them that ${Quest.DENIZEN} has somehow grown themselves to massive proportions and is wrecking havock all over the city. The ${Quest.PLAYER1} offers to help take care of it, but the ${Quest.CONSORT} informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."),
        new Quest("Inside the bunker, the ${Quest.PLAYER1} is greeted by another ${Quest.CONSORT} in a scientist’s robe. He explains to them that they have been working diligently on a giant ${Quest.CONSORT} mech that would be able to take ${Quest.DENIZEN} down, and that preparations are almost complete. The ${Quest.PLAYER1} agrees to pilot the mech to stop the Denizen."),
        new Quest("Sitting inside the controls of the giant ${Quest.CONSORT} robot, the ${Quest.PLAYER1} finds themselves going up to ${Quest.DENIZEN} and punching them square in the face! ${Quest.DENIZEN} quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny ${Quest.CONSORT}s watch in awe."),
        new DenizenFightQuest("With one well-timed ROBO-PUNCH, the ${Quest.PLAYER1} deals the finishing blow to ${Quest.DENIZEN}, as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The ${Quest.PLAYER1} hops out of the mech as they and ${Quest.DENIZEN} prepare to fight each other in their true sizes.","The ${Quest.PLAYER1} has defeated their denizen! The ${Quest.CONSORT}s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success.","Alas, the ${Quest.PLAYER1} was not strong enough to defeat ${Quest.DENIZEN}. ${Quest.DENIZEN} steals the giant mech and keeps it as a memento of the ${Quest.PLAYER1}’s failure.")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
        ,  Theme.HIGH);

    //guys. I think maybe all these clowns aren't actually happy. smell blood rarely, but it's there.
    /*addTheme(new Theme(<String>["Whimsy", "Mirth","Circuses", "Tents","Clowns", "Wackiness", "Laughter"])
      ..addFeature(FeatureFactory.HAPPYFEELING, Feature.HIGH)
      ..addFeature(FeatureFactory.CREEPYFEELING, Feature.MEDIUM)
      ..addFeature(FeatureFactory.DECEITSMELL, Feature.HIGH)
      ..addFeature(FeatureFactory.MUSICSOUND, Feature.HIGH)
      ..addFeature(FeatureFactory.LAUGHINGSOUND, Feature.HIGH)
      ..addFeature(FeatureFactory.CLAPPINGSOUND, Feature.MEDIUM)
      ..addFeature(FeatureFactory.FOOTSTEPSOUND, Feature.LOW)
      ..addFeature(FeatureFactory.BLOODSMELL, Feature.MEDIUM)
      ..addFeature(FeatureFactory.ZOOSMELL, Feature.HIGH)
      ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.HIGH)
      ..addFeature(FeatureFactory.STUPIDFEELING, Feature.LOW) //THIS IS STUPID.

      ..addFeature(new DenizenQuestChain("Do a Stupid Dance", [
        new Quest("The ${Quest.CONSORTSOUND}ing and capering ${Quest.CONSORT}s are...OKAY, you guess? They keep asking the ${Quest.PLAYER1} to do a stupid ${Quest.MCGUFFIN} Dance, though. They politely decline."),
        new Quest("A capering ${Quest.CONSORT} tells the ${Quest.PLAYER1} that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  ${Quest.MCGUFFIN} Dance off. The ${Quest.PLAYER1} politiely declines and defeats them in a good old fashioned beat down. The ${Quest.CONSORT}s seem less than enthused about getting their stolen property back. Something about the ${Quest.PLAYER1} being a spoilsport?"),
        new Quest("A crying ${Quest.CONSORT} child asks why the ${Quest.PLAYER1} is such a meany head. Why won't they dance? Defeated, the ${Quest.PLAYER1} hangs their head, and then begins doing an extremely stupid ${Quest.MCGUFFIN} Dance, well below their dignity. The ${Quest.CONSORT} child is estatic and begins ${Quest.CONSORTSOUND} in time to the music that only the ${Quest.PLAYER1} can hear. "),
        new DenizenFightQuest("The ${Quest.DENIZEN} approaches the ${Quest.PLAYER1}, complimenting them on their stupid ${Quest.MCGUFFIN} Dance. Mortified, the ${Quest.PLAYER1} initiates strife.","It is done. Now NO ONE but that ${Quest.CONSORT} child knows of the blow to the ${Quest.PLAYER1}'s dignity. No one at all.","You just KNOW that that shitty ${Quest.DENIZEN} is gonna somehow post videos of the ${Quest.PLAYER1}'s stupid ${Quest.MCGUFFIN} dance online. They must be stopped.")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

        , Theme.HIGH);


    //TODO make sure to have pre and post denizen quests for this one too, so it can be eXTRA bullshit.
    addTheme(new Theme(<String>["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance", "Allowance", "Frustration"])
      ..addFeature(FeatureFactory.ANGRYFEELING, Feature.HIGH)
      ..addFeature(FeatureFactory.STUPIDFEELING, Feature.HIGH) //THIS IS STUPID.
      ..addFeature(FeatureFactory.DECEITSMELL, Feature.HIGH)
      ..addFeature(FeatureFactory.ZOOSMELL, Feature.MEDIUM)
      ..addFeature(FeatureFactory.LAUGHINGSOUND, Feature.HIGH) //we are laughing at you, asshole.
      ..addFeature(new DenizenQuestChain("Hate This Bullshit Land", [
        new Quest("The ${Quest.PLAYER1} has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "),
        new Quest("The ${Quest.PLAYER1} feels like someone is laughing at them. Not like....a ${Quest.CONSORT}, as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The ${Quest.PLAYER1} is so fucking pissed."),
        new Quest("The ${Quest.PLAYER1} has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned ${Quest.PLAYER1}. 'You win, teleport to fight ${Quest.DENIZEN}? Y/N'. God DAMN it. "),
        new DenizenFightQuest("This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the ${Quest.PLAYER1} presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The ${Quest.PLAYER1} is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. ","Fucking YES. Finally some goddamned CATHARSIS! Maybe the ${Quest.PLAYER1} can finally put this bullshit chapter of their land behind them.","God FUCKING DAMN IT. After all that the ${Quest.PLAYER1} LOSES!? ")
      ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
        , Theme.HIGH); // end theme
  */
  }

}