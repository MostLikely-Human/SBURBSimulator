import "dart:html";
import "../../SBURBSim.dart";



class GauntletFight extends Scene{
  List<Player> playerList = [];
  List<Player> gauntletPlayers = [];

  GauntletFight(Session session): super(session);

  @override
  bool trigger(List<Player> playerList){
    this.playerList = playerList;
    this.gauntletPlayers = [];
    for(Player p in session.getReadOnlyAvailablePlayers()){
      if(this.isGauntlet(p) && rand.nextDouble() >.75 ){
        this.gauntletPlayers.add(p);
        session.logger.info("Works well");
      }
    }
    session.logger.info("Works well");
    return this.gauntletPlayers.length == 2;
  }

  bool isGauntlet(Player player) {
    if ((player.class_name == SBURBClassManager.LORD || player.class_name == SBURBClassManager.MUSE) && player.aspect == Aspects.GAUNTLET) return true;
    return false;
  }

  @override
  void renderContent(Element div){
    appendHtml(div,"<br><img src = 'images/sceneIcons/flipout_icon_animated.gif'>"+this.content());
  }

  String content() {
    String ret = "AAAAAAAAAAAAAAAAAAAAAAAAAA";
    return ret;
  }

}