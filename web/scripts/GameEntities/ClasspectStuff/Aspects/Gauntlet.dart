import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Gauntlet extends Aspect {
  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#e19aca"
    ..aspect_light = '#e19aca'
    ..aspect_dark = '#7a546e'
    ..shoe_light = '#7a546e'
    ..shoe_dark = '#473140'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';
  
  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

  Gauntlet(int id) :super(id, "Gauntlet", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}
