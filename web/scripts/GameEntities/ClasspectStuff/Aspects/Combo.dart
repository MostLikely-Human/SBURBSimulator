import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";
class Combo extends Aspect {

  Aspect firstAspect;
  Aspect secondAspect;
  
  Combo(int id) :super(id, "Combo", isCanon: false, isMLHFanon: true);

  static void combobMaker(Aspect a1, Aspect a2) {
    @override
    AspectPalette palette = new AspectPalette()
      ..accent = a1.palette.accent
      ..aspect_light = a1.palette.aspect_light
      ..aspect_dark = a1.palette.aspect_dark
      ..shoe_light = a1.palette.shoe_light
      ..shoe_dark = a1.palette.shoe_dark
      ..cloak_light = a2.palette.cloak_light
      ..cloak_mid = a2.palette.cloak_mid
      ..cloak_dark = a2.palette.cloak_dark
      ..shirt_light = a1.palette.shirt_light
      ..shirt_dark = a1.palette.shirt_dark
      ..pants_light = a2.palette.pants_light
      ..pants_dark = a2.palette.pants_dark;

  }
}
