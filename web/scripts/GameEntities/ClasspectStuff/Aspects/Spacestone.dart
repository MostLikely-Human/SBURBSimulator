import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Spacestone extends Aspect {
  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#74a4ff"
    ..aspect_light = '#74a4ff'
    ..aspect_dark = '#466299'
    ..shoe_light = '#466299'
    ..shoe_dark = '#2f4166'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';
  
  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);

  Spacestone(int id) :super(id, "Spacestone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}
