import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Realitystone extends Aspect {
  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#ed1c24"
    ..aspect_light = '#ed1c24'
    ..aspect_dark = '#820a0f'
    ..shoe_light = '#820a0f'
    ..shoe_dark = '#4f0609'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';

  Realitystone(int id) :super(id, "Realitystone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}