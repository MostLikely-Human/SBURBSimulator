import "../../../SBURBSim.dart";
import "SBURBClass.dart";

class Muse extends SBURBClass {
    @override
    List<String> levels = ["AMUSING AMATEUR", "SPOTLIGHT POINTER", "GREEK GOD"];
    @override
    List<String> quests = ["inspiring the consorts to produce great works of art", "causing events to transpire such that the consorts improve themselves", "avidly learning about consort history and art"];
    @override
    List<String> postDenizenQuests = ["inspiring the consorts to rebuild their land", "showing the consorts what strength through adversity means", "hanging back and watching the consorts rebuild", "making sure the recovery process is going as intended"];
    @override
    List<String> handles = ["magical", "musing", "majestic", "managerial"];

    @override
    List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
        new AssociatedStat(Stats.SBURB_LORE, 0.1, false)
    ]);

    Muse() : super("Muse", 18, false);


    @override
    bool highHinit() {
        return false;
    }
    //TODO okay i think i know what i want to do. have isActive take in an optional parameter of multiplier. if positive muse is passive, if negative muse is active
    //and vice versa for lord.
    @override
    bool isActive([double multiplier = 0.0]) {
        if(multiplier < 0) {
            print("Muse taking in the bad of stat");
            return true; //muse applies it to self if bad.
        }
        print("Muse distributing the good of stat");
        return false; //to others if good.
    }


    @override
    num modPowerBoostByClass(num powerBoost, AssociatedStat stat) {
        return powerBoost; //no change.
    }

    //you don't expect a muse to start shit
    @override
    double getAttackerModifier() {
        return 0.1;
    }

    @override
    double getDefenderModifier() {
        return 3.0;
    }

    @override
    double getMurderousModifier() {
        return 0.1;
    }

    @override
    bool hasInteractionEffect() {
        return true;
    }

    @override
    String interactionFlavorText(Player me, GameEntity target, Random rand) {
        return " The ${me.htmlTitle()} takes on the burdens of ${me.aspect.name} while leaving the blessings for ${target.htmlTitle()}. ";
    }

    //TODO using the existing framework, how would i make it so that regular things matter based on target, too? i want to be lazy here. prefer caring about land update.
    @override
    void processStatInteractionEffect(Player p, GameEntity target, AssociatedStat stat) {
        num powerBoost = 2 * p.getPowerForEffects() / 20;

        powerBoost = this.modPowerBoostByClass(powerBoost, stat);
        if(p.session.mutator.bloodField) powerBoost = powerBoost * p.session.mutator.bloodBoost;
        //give bad to me and good to you.
        if(powerBoost <0) {
            p.modifyAssociatedStat(powerBoost, stat);
        }else {
            target.modifyAssociatedStat(powerBoost, stat);
        }
    }

}