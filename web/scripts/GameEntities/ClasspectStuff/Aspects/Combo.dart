import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";
class Combo extends Aspect {


  
  Combo(int id) :super(id, "Combo", isCanon: false, isMLHFanon: true, isInternal: true);

  @override
  String activateCataclysm(Session s, Player p) {
    Aspect a = s.rand.pickFrom([a1, a2]);
    if(a.activateCataclysm(s, p) == s.mutator.abjectFailure(s, p)) {
      if(a == a1) {
        a = a2;
      }else {
        a = a1;
      }
    }
    return a.activateCataclysm(s, p);
  }

}
