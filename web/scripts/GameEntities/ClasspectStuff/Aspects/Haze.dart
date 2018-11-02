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
    ..shoe_light = '#cc6200'
    ..shoe_dark = '#994900'
    ..cloak_light = '#8a9499' //
    ..cloak_mid = '#5c6366' //
    ..cloak_dark = '#2e3133' //
    ..shirt_light = '#86acbf' //
    ..shirt_dark = '#627e8c' //
    ..pants_light = '#8fa7b3' //
    ..pants_dark = '#667780'; //

  Haze(int id) :super(id, "Haze", isCanon: false, isMLHFanon: true);

}