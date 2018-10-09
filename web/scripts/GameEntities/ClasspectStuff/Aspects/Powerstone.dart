import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Powerstone extends Aspect {
  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#9846cc"
    ..aspect_light = '#9846cc'
    ..aspect_dark = '#4c2366'
    ..shoe_light = '#4c2366'
    ..shoe_dark = '#261233'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';

  Powerstone(int id) :super(id, "Powerstone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}