import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class MoonProspit extends Aspect {

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#FFFF00"
    ..aspect_light = "#FFFF00"
    ..aspect_dark = "#FFC935"
    ..shoe_light = "#FFC935"
    ..shoe_dark = "#cca12a"
    ..cloak_light = "#FFCC00"
    ..cloak_mid = "#FF9B00"
    ..cloak_dark = "#C66900"
    ..shirt_light = "#FFD91C"
    ..shirt_dark = "#FFE993"
    ..pants_light = "#FFB71C"
    ..pants_dark = "#C67D00";


  MoonProspit(int id) :super(id, "MoonProspit", isCanon: false, isMLHFanon: true);

}