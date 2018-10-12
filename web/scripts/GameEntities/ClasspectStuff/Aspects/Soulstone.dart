import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Soulstone extends Aspect {
  @override
  AspectPalette palette = new AspectPalette()
    ..accent = "#ffcb6f"
    ..aspect_light = '#ffcb6f'
    ..aspect_dark = '#997a42'
    ..shoe_light = '#997a42'
    ..shoe_dark = '#66512c'
    ..cloak_light = '#d0c217'
    ..cloak_mid = '#9e9311'
    ..cloak_dark = '#6b640c'
    ..shirt_light = '#c3c3c3'
    ..shirt_dark = '#8f8f8f'
    ..pants_light = '#a88e00'
    ..pants_dark = '#756300';

  @override
  List<String> handles = new List<String>.unmodifiable(<String>["Stone", "Sauron", "Stupid", "Selfish", "Sock", "Stuck", "Selian", "Sandals", "Sans"]);
  
  Soulstone(int id) :super(id, "Soulstone", isCanon: false, isInternal: true, isMLHFanon: true); //It's Proxxima's and Egg's, but I'm coding it.
}
