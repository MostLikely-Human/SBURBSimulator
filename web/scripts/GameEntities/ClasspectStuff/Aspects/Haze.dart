import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Haze extends Aspect {

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#ff7a00"
    ..aspect_light = '#ff7a00'
    ..aspect_dark = '#cc6200'
    ..shoe_light = '#02c7fc'
    ..shoe_dark = '#008cb4'
    ..cloak_light = '#ff7f00'
    ..cloak_mid = '#ff7f00'
    ..cloak_dark = '#da5100'
    ..shirt_light = '#474747'
    ..shirt_dark = '#333333'
    ..pants_light = '#707070'
    ..pants_dark = '#5c5c5c';

  Haze(int id) :super(id, "Haze", isCanon: false, isMLHFanon: true);

}