import '../../../SBURBSim.dart';
import 'Aspect.dart';

class Rain extends Aspect {
  @override
  AspectPalette palette = new AspectPalette()
    ..accent = getRandomColor()
    ..aspect_light = getRandomColor()
    ..aspect_dark = getRandomColor()
    ..shoe_light = getRandomColor()
    ..shoe_dark = getRandomColor()
    ..cloak_light = getRandomColor()
    ..cloak_mid = getRandomColor()
    ..cloak_dark = getRandomColor()
    ..shirt_light = getRandomColor()
    ..shirt_dark = getRandomColor()
    ..pants_light = getRandomColor()
    ..pants_dark = getRandomColor();


  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Neon", "Headaches", "Puddles", "Drip", "Mess", "Ice cream", "Sweets", "Boredom"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["PUDDLE PUMMELLER", "FLOOD FINISHER", "RAINBRO"]);

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Rainer", "Retriever", "Rower", "Redux", "Rapport"]);

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Chaos", "disorder", "puddle", "Rain", "error", "color", "Swirl", "LOL",]);

  /*@override
  String denizenSongTitle = ;
*/
  @override
  String denizenSongDesc = "BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ";


  @override
    @override
    List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
        new AssociatedStat(Stats.RELATIONSHIPS, -2.0, true),
        new AssociatedStat(Stats.SANITY, -1.0, true),
        new AssociatedStat(Stats.MAX_LUCK, 3.0, true)
    ]);

  Rain(int id) :super(id, "Rain", isCanon: false);

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.rain(s, p);
  }
}