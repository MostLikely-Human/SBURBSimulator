import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Rune extends Aspect {

  //what sort of quests rewards do I get?
  @override
  double itemWeight = 0.5;
  @override
  double fraymotifWeight = 1.0;
  @override
  double companionWeight = 1.0;

  @override
  double difficulty = 0.5;

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#007fbf"
    ..aspect_light = '#007fbf'
    ..aspect_dark = '#4d6e80'
    ..shoe_light = '#999999'
    ..shoe_dark = '#666666'
    ..cloak_light = '#8a9499'
    ..cloak_mid = '#5c6366'
    ..cloak_dark = '#2e3133'
    ..shirt_light = '#86acbf'
    ..shirt_dark = '#627e8c'
    ..pants_light = '#8fa7b3'
    ..pants_dark = '#667780';

  Rune(int id) :super(id, "Rune", isCanon: false, isMLHFanon: true);

  @override
  List<String> landNames = new List<String>.unmodifiable(<String>["Rune", "Infinity", "Magic", "Fairies", "Prediction", "Circles", "Majykks", "Systems"]);

  @override
  List<String> levels = new List<String>.unmodifiable(<String>["FAIRY PERSON", "INFIINITELY CONFUSED", "PREDICTIVE LAD"]);

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Rune", "Ruiner", "Red", "Ready", "Retconner", "Respondent"]);

  @override
  List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Infinite", "Magical", "Runely", "Majykkal", "Systematically", "Predictful"]);

  @override
  String denizenSongTitle = "Refrain";

  @override
  String denizenSongDesc = " A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ";


}