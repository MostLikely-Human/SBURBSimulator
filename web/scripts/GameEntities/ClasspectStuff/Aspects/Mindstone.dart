import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Mindstone extends Aspect {
  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#ebd837"
    ..aspect_light = '#ebd837'
    ..aspect_dark = '#857a1f'
    ..shoe_light = '#857a1f'
    ..shoe_dark = '#524b13'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';

  Mindstone(int id) :super(id, "Mindstone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
  }