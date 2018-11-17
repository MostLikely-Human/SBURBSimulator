import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class MoonDerse extends Aspect {

  @override
  AspectPalette palette = new AspectPalette()
    ..aspect_light = "#F092FF"
    ..aspect_dark = "#D456EA"
    ..shoe_light = "#D456EA"
    ..shoe_dark = "#a643b8"
    ..cloak_light = "#C87CFF"
    ..cloak_mid = "#AA00FF"
    ..cloak_dark = "#6900AF"
    ..shirt_light = "#DE00FF"
    ..shirt_dark = "#E760FF"
    ..pants_light = "#B400CC"
    ..pants_dark = "#770E87";


  MoonDerse(int id) :super(id, "MoonDerse", isCanon: false, isMLHFanon: true);

}