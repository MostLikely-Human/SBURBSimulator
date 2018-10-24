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
      if(this.isGauntlet(p)){
        this.gauntletPlayers.add(p);
      }
    }
    return this.gauntletPlayers.length == 2;
  }

  bool isGauntlet(Player player) {
    if ((player.class_name == SBURBClassManager.LORD || player.class_name == SBURBClassManager.MUSE) && player.aspect == Aspects.GAUNTLET) {return true;}
    return false;
  }

  @override
  void renderContent(Element div){
    appendHtml(div,"<br><img src = 'images/sceneIcons/gauntlet_icon.png'>"+this.content(div));
  }

  void renderMurder(Element div, Player murderer, Player victim){
    var divID = (div.id) + "_${victim.id}";
    CanvasElement canvas = new CanvasElement(width: canvasWidth, height: canvasHeight);
    div.append(canvas);

    var pSpriteBuffer = Drawing.getBufferCanvas(SimController.spriteTemplateWidth, SimController.spriteTemplateHeight);
    Drawing.drawSprite(pSpriteBuffer,murderer);

    var dSpriteBuffer = Drawing.getBufferCanvas(SimController.spriteTemplateWidth, SimController.spriteTemplateHeight);
    Drawing.drawSprite(dSpriteBuffer,victim);

    Drawing.copyTmpCanvasToRealCanvasAtPos(canvas, pSpriteBuffer,0,0);
    Drawing.copyTmpCanvasToRealCanvasAtPos(canvas, dSpriteBuffer,200,0);

  }

  String content(Element div) {
    String ret = " FIGHT FOR THE STONES: The ${getPlayersTitles(gauntletPlayers)} challenge each other, to fight for the Stones... ";
    
    if(gauntletPlayers[0].getStat(Stats.POWER) > gauntletPlayers[1].getStat(Stats.POWER)) {
        ret += "<br><Br>The ${gauntletPlayers[0].htmlTitle()} won in strife, they decide to turn The ${gauntletPlayers[1].htmlTitle()} into a ${gauntletPlayers[0].specibus.baseName} that could carry the Stones, and they put it in their ${gauntletPlayers[0].specibus.name} Specibus";
        Specibus oldSpecibus = gauntletPlayers[0].specibus;
        gauntletPlayers[0].specibus = new Specibus("Stone Container ${oldSpecibus.baseName}", oldSpecibus.requiredTrait, new List.from(oldSpecibus.traits));
        session.logger.info(gauntletPlayers[0].specibus);
        gauntletPlayers[1].canGodTierRevive = false;
        gauntletPlayers[1].makeDead("A duel for the Stones.", gauntletPlayers[0]);
        session.removeAvailablePlayer(gauntletPlayers[1]);
        this.renderMurder(div, gauntletPlayers[0], gauntletPlayers[1]);

        Fraymotif f = new Fraymotif("${oldSpecibus.baseName} of the Stones", 4);
        f.effects.add(new FraymotifEffect(Stats.POWER, 1, false));
        f.desc = "A powerful ${oldSpecibus.baseName}... ";
        gauntletPlayers[0].fraymotifs.add(f);

    } else if(gauntletPlayers[1].getStat(Stats.POWER) > gauntletPlayers[0].getStat(Stats.POWER)) {
        ret += "<br><Br>The ${gauntletPlayers[1].htmlTitle()} won in strife, they decide to turn The ${gauntletPlayers[0].htmlTitle()} into a ${gauntletPlayers[1].specibus.baseName} that could carry the Stones, and they put it in their ${gauntletPlayers[1].specibus.name} Specibus";
        Specibus oldSpecibus = gauntletPlayers[1].specibus;
        gauntletPlayers[1].specibus = new Specibus("Stone Container ${oldSpecibus.baseName}", oldSpecibus.requiredTrait, new List.from(oldSpecibus.traits));
        session.logger.info(gauntletPlayers[1].specibus);
        gauntletPlayers[0].canGodTierRevive = false;
        gauntletPlayers[0].makeDead("A duel for the Stones.", gauntletPlayers[1]);
        session.removeAvailablePlayer(gauntletPlayers[0]);
        this.renderMurder(div, gauntletPlayers[1], gauntletPlayers[0]);

        Fraymotif f = new Fraymotif("${oldSpecibus.baseName} of the Stones", 4);
        f.effects.add(new FraymotifEffect(Stats.POWER, 1, false));
        f.desc = "A powerful ${oldSpecibus.baseName}... ";
        gauntletPlayers[1].fraymotifs.add(f);
    }

    return ret;
  }

}