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
    ..cloak_light = '#cc9766'
    ..cloak_mid = '#99714d'
    ..cloak_dark = '#664b33' 
    ..shirt_light = '#e69245'
    ..shirt_dark = '#b37136'
    ..pants_light = '#cc823d'
    ..pants_dark = '#99622e';

  Haze(int id) :super(id, "Haze", isCanon: false, isMLHFanon: true);

}