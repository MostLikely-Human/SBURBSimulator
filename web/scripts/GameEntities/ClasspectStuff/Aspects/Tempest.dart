import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Tempest extends Aspect {

    //what sort of quests rewards do I get?
    @override
    double itemWeight = 0.51;
    @override
    double fraymotifWeight = 1.0;
    @override
    double companionWeight = 0.01;

    @override
    double difficulty = 0.9;

    @override
    AspectPalette palette = new AspectPalette()
      ..accent = "#c44c50"
      ..aspect_light = '#c44c50'
      ..aspect_dark = '#91383b'
      ..shoe_light = '#91383b'
      ..shoe_dark = '#5e2527'
      ..cloak_light = '#c44c50'
      ..cloak_mid = '#91383b'
      ..cloak_dark = '#5e2527'
      ..shirt_light = '#4757b3'
      ..shirt_dark = '#333e80'
      ..pants_light = '#4d5899'
      ..pants_dark = '#333a66';

    @override
    List<String> landNames = new List<String>.unmodifiable(<String>["Tempest", "Souls", "Artificiality"]);

    @override
    List<String> handles = new List<String>.unmodifiable(<String>["Tempest", "Traveler", "Tailor", "Taster", "Target", "Teacher", "Therapist", "Testicle"]);

    @override
    List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Tempest"]);

    @override
    String denizenSongTitle = "Tempest"; //A whirlwind

    @override
    String denizenSongDesc = "  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ";

    Tempest(int id) :super(id, "Tempest", isCanon: false, isMLHFanon: true);

    @override
    String activateCataclysm(Session s, Player p) {
      return s.mutator.abjectFailure(s, p);
    }
}