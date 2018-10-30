import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

//Handle, pallete, cata

class Re_Bear extends Aspect {

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#959595"
    ..aspect_light = '#bfbfbf'
    ..aspect_dark = '#959595'
    ..shoe_light = '#805233'
    ..shoe_dark = '#663c1f'
    ..cloak_light = '#805233'
    ..cloak_mid = '#737373'
    ..cloak_dark = '#664d3c'
    ..shirt_light = '#663c1f'
    ..shirt_dark = '#4d2d17'
    ..pants_light = '#68594e'
    ..pants_dark = '#4f443b';

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.rage(s, p);
  }

  Re_Bear(int id) :super(id, "Re_Bear", isCanon: false, isMLHFanon: true, isInternal: true, reskinOf: Aspects.RAGE);

}

class Re_Hippo extends Aspect {

  Re_Hippo(int id) :super(id, "Re_Hippo", isCanon: false, isMLHFanon: true, isInternal: true, reskinOf: Aspects.DOOM);

  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#853dcc"
    ..aspect_light = '#f76261'
    ..aspect_dark = '#913a39'
    ..shoe_light = '#ab4443'
    ..shoe_dark = '#78302f'
    ..cloak_light = '#a54cff'
    ..cloak_mid = '#8c41d9'
    ..cloak_dark = '#7335b3'
    ..shirt_light = '#853dcc'
    ..shirt_dark = '#642e99'
    ..pants_light = '#4c2375'
    ..pants_dark = '#2b1442';


  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.doom(s, p);
  }


}