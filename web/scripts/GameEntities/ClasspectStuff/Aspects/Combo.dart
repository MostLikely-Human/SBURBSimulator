import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";
class Combo extends Aspect {


  
  Combo(int id) :super(id, "Combo", isCanon: false, isMLHFanon: true, isInternal: true);

  @override
  String activateCataclysm(Session s, Player p) {
    return s.mutator.abjectFailure(s, p);
  }

}
