import "../../../SBURBSim.dart";
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

import "Blood.dart";
import "Breath.dart";
import "Fate.dart";
import "Flow.dart";
import "Heart.dart";
import "Hope.dart";
import "Doom.dart";
import "Law.dart";
import "Life.dart";
import "Light.dart";
import "Might.dart";
import "Mind.dart";
import "Mist.dart";
import "Rage.dart";
import "Rain.dart";
import "Rhyme.dart";
import "Sand.dart";
import "Sky.dart";
import "Snow.dart";
import "Space.dart";
import "Stars.dart";
import "Time.dart";
import "Void.dart";
import "Dream.dart";
import "Sauce.dart";
import "Juice.dart";
import "Taze.dart";
import "Rule.dart";
import "Hippo.dart";
import "Bear.dart";
import "Stone.dart";
import "Meme.dart";
import "Chill.dart";
import "Rune.dart";
import "Haze.dart";
import "Reskin.dart";
import "MoonProspit.dart";
import "MoonDerse.dart";
import "Combo.dart";
import "Tempest.dart";


abstract class Aspects {
    static Aspect SPACE;
    static Aspect TIME;
    static Aspect BREATH;
    static Aspect DOOM;
    static Aspect BLOOD;
    static Aspect HEART;
    static Aspect MIND;
    static Aspect LIGHT;
    static Aspect VOID;
    static Aspect RAGE;
    static Aspect HOPE;
    static Aspect LIFE;
    static Aspect DREAM;
    static Aspect SAUCE; //just shogun [that doesn't mean it has to be a reskin, srsly JR]
    static Aspect JUICE;
    static Aspect TAZE;
    static Aspect RULE;
    static Aspect HIPPO;
    static Aspect BEAR;
    static Aspect MINDSTONE;
    static Aspect SPACESTONE;
    static Aspect POWERSTONE;
    static Aspect SOULSTONE;
    static Aspect TIMESTONE;
    static Aspect REALITYSTONE;
    static Aspect GAUNTLET;
    static Aspect MEME;
    static Aspect CHILL;
    static Aspect RUNE;
    static Aspect HAZE;


    static Aspect MIGHT;
    static Aspect MIST;
    static Aspect RAIN;
    static Aspect SAND;
    static Aspect SKY;
    static Aspect RHYME;
    static Aspect LAW;
    static Aspect FATE;
    static Aspect SNOW;
    static Aspect FLOW;
    static Aspect STARS;

    static Aspect MOONPROSPIT;
    static Aspect MOONDERSE;

    static Aspect RE_BEAR;
    static Aspect RE_HIPPO;
    static Aspect RE_LOCK;
    static Aspect RE_PISS;
    static Aspect RE_PIG;
    static Aspect RE_FROG;
    static Aspect RE_GOLD;
    static Aspect RE_PUPPET;
    static Aspect RE_TRASH;
    static Aspect RE_FOX;
    static Aspect RE_GHOST;
    static Aspect RE_SBURB;

    static Aspect TEMPEST;

    static Aspect COMBO;

    static Aspect NULL;

    static void init() {
        SPACE = new Space(0);
        TIME = new Time(1);
        BREATH = new Breath(2);
        DOOM = new Doom(3);
        BLOOD = new Blood(4);
        HEART = new Heart(5);
        MIND = new Mind(6);
        LIGHT = new Light(7);
        VOID = new Void(8);
        RAGE = new Rage(9);
        HOPE = new Hope(10);
        LIFE = new Life(11);
        DREAM = new Dream(12);

        JUICE = new Juice(14);
        SAUCE = new Sauce(15);
        TAZE = new Taze(16);
        RULE = new Rule(17);
        HIPPO = new Hippo(18);
        BEAR = new Bear(19);
        MINDSTONE = new Mindstone(20);
        SPACESTONE = new Spacestone(21);
        POWERSTONE = new Powerstone(22);
        SOULSTONE = new Soulstone(23);
        TIMESTONE = new Timestone(24);
        REALITYSTONE = new Realitystone(25);
        GAUNTLET = new Gauntlet(26);
        MEME = new Meme(27);
        CHILL = new Chill(28);
        RUNE = new Rune(29);
        HAZE = new Haze(30);


        MIGHT = new Might(31);
        MIST = new Mist(32);
        RAIN = new Rain(33);
        SAND = new Sand(34);
        SKY = new Sky(35);
        RHYME = new Rhyme(36);
        LAW = new Law(37); //Upstream version
        FATE = new Fate(38);
        SNOW = new Snow(39);
        FLOW = new Flow(40);
        STARS = new Stars(41);

        MOONPROSPIT = new MoonProspit(42);
        MOONDERSE = new MoonDerse(43);

        RE_BEAR = new Re_Bear(44);
        RE_HIPPO = new Re_Hippo(45);
        RE_LOCK = new Re_Lock(46);
        RE_PISS = new Re_Piss(47);
        RE_PIG = new Re_Pig(48);
        RE_FROG = new Re_Frog(49);
        RE_GOLD = new Re_Gold(50);
        RE_PUPPET = new Re_Puppet(51);
        RE_TRASH = new Re_Trash(52);
        RE_FOX = new Re_Fox(53);
        RE_GHOST = new Re_Ghost(54);

        TEMPEST = new Tempest(55);

        RE_SBURB = new Re_Sburb(56);

        COMBO = new Combo(254);
        NULL = new Aspect(255, "Null", isInternal:true);
    }

    // ##################################################################################################

    static Map<int, Aspect> _aspects = <int, Aspect>{};

    static void register(Aspect aspect) {
        if (_aspects.containsKey(aspect.id)) {
            throw "Duplicate aspect id for $aspect: ${aspect.id} is already registered for ${_aspects[aspect.id]}.";
        }
        _aspects[aspect.id] = aspect;
    }

    static Aspect get(int id) {
        if (_aspects.isEmpty) init();
        if (_aspects.containsKey(id)) {
            return _aspects[id];
        }
        return NULL; // return the NULL aspect instead of null
    }

    static List Stone = [MINDSTONE, SPACESTONE, POWERSTONE, SOULSTONE, TIMESTONE, REALITYSTONE, GAUNTLET];
    static List Reskins = [RE_BEAR, RE_HIPPO, RE_LOCK, RE_PISS, RE_PIG, RE_FROG, RE_GOLD, RE_PUPPET, RE_TRASH, RE_FOX, RE_GHOST, RE_SBURB];

    static Aspect getByName(String name) {
        if (_aspects.isEmpty) init();
        for (Aspect aspect in _aspects.values) {
            if (aspect.name == name) {
                return aspect;
            }
        }
        return NULL;
    }

    static findReskin(Aspect a, String name) {
        if(a == Aspects.RAGE && name == "Derse") a.reskinIs = Aspects.RE_BEAR;
        else if(a == Aspects.RAGE && name == "Prospit") a.reskinIs = Aspects.RE_GHOST;
        else if(a == Aspects.DOOM && name == "Derse") a.reskinIs = Aspects.RE_HIPPO;
        else if(a == Aspects.DOOM && name == "Prospit") a.reskinIs = Aspects.RE_LOCK;
        else if(a == Aspects.JUICE) a.reskinIs = Aspects.RE_PISS;
        else if(a == Aspects.TIME) a.reskinIs = Aspects.RE_PIG;
        else if(a == Aspects.SPACE) a.reskinIs = Aspects.RE_FROG;
        else if(a == Aspects.HEART && name == "Derse") a.reskinIs = Aspects.RE_GOLD;
        else if(a == Aspects.LIFE) a.reskinIs = Aspects.RE_PUPPET;
        else if(a == Aspects.LIGHT) a.reskinIs = Aspects.RE_TRASH;
        else if(a == Aspects.BREATH) a.reskinIs = Aspects.RE_FOX;
        else if(a == Aspects.TEMPEST) a.reskinIs = Aspects.RE_SBURB;
        else a.reskinIs = a;
        return a.reskinIs;
    }

    static combobThing(Aspect a1, Aspect a2, int id) {
        Aspect NewA;
        NewA = new Combo(id);

        NewA.a1 = a1;
        NewA.a2 = a2;

        NewA.name = a1.name + a2.name;

        AspectPalette palette = new AspectPalette()
            ..accent = a1.palette.accent
            ..aspect_light = a1.palette.aspect_light
            ..aspect_dark = a1.palette.aspect_dark
            ..shoe_light = a1.palette.shoe_light
            ..shoe_dark = a1.palette.shoe_dark
            ..cloak_light = a2.palette.cloak_light
            ..cloak_mid = a2.palette.cloak_mid
            ..cloak_dark = a2.palette.cloak_dark
            ..shirt_light = a1.palette.shirt_light
            ..shirt_dark = a1.palette.shirt_dark
            ..pants_light = a2.palette.pants_light
            ..pants_dark = a2.palette.pants_dark;

        NewA.palette = palette;

        //NewA.items = a1.items + a2.items;

        NewA.symbolImgLocation = NewA.a1.symbolImgLocation;
        NewA.bigSymbolImgLocation = NewA.a1.bigSymbolImgLocation;

        return NewA;
    }

    static makeReskin(Aspect Original, Aspect Reskin) {

        Reskin.itemWeight = Original.itemWeight;
        Reskin.fraymotifWeight = Original.fraymotifWeight;
        Reskin.companionWeight = Original.companionWeight;

        Reskin.difficulty = Original.difficulty;

        Reskin.landNames = Original.landNames;

        Reskin.levels = Original.levels;

        Reskin.fraymotifNames = Original.fraymotifNames;

        Reskin.denizenSongTitle = Original.denizenSongTitle;
        Reskin.denizenSongDesc = Original.denizenSongDesc;

        Reskin.symbolicMcguffins = Original.symbolicMcguffins;
        Reskin.physicalMcguffins = Original.physicalMcguffins;

        Reskin.denizenNames = Original.denizenNames;

        Reskin.stats = Original.stats;

        return Reskin;
    }

    static Iterable<Aspect> get all => _aspects.values.where((Aspect a) => !a.isInternal);

    static Iterable<Aspect> get everything => _aspects.values;

    static Iterable<Aspect> get canon => _aspects.values.where((Aspect a) => a.isCanon);

    static Iterable<Aspect> get fanon => _aspects.values.where((Aspect a) => !a.isCanon);

    static Iterable<Aspect> get mlh_fanon => _aspects.values.where((Aspect a) => a.isMLHFanon);

    static Iterable<int> get ids => _aspects.keys;

    static Iterable<String> get names => _aspects.values.map((Aspect a) => a.name);

    static Aspect stringToAspect(String id) {
        List<Aspect> values = new List<Aspect>.from(_aspects.values);
        for (Aspect a in values) {
            if (a.name == id) return a;
        }
        return NULL;
    }
}

// ####################################################################################################################################

class Aspect {

    //what sort of quests rewards do I get?
    double itemWeight = 0.01;
    double fraymotifWeight = 0.01;
    double companionWeight = 0.01;


    //difficulty of class + aspect results in odds of getting yaldobooger/abraxus equivlent.
    //.5 is normal. .5 + .5 = 1.0, equals 5% chance of  getting either (>95 or < 5)
    double difficulty = 0.5;

    /// Used for OCData save/load.
    final int id;
    ///each aspect has it's own associated themes it can donate towards land creation based on strength.
    Map<Theme, double> themes = new Map<Theme, double>();
    FAQFile faqFile;
    String symbolImgLocation = "";
    String bigSymbolImgLocation = "";
    bool internal = false; //if you're an internal aspect or class you shouldn't show up in lists.

    /// Used for string representations of the aspect.
    String name;
    String savedName;  //for AB restoring an aspects name after a hope player fucks it up

    /// Only canon aspects will appear in random sessions.
    final bool isCanon;
    bool isInternal; //don't let null show up in lists.
    final bool isMLHFanon;

    Aspect reskinOf = null; //doesn't apply to this aspect
    Aspect reskinIs = null;

    Aspect a1;
    Aspect a2;

    // ##################################################################################################
    // Tags

    /// Deadpan aspects are mentally immune to trickster mode. Heart style.
    /// true prevents a player with this aspect receiving massive relationship boosts in trickster mode.
    bool deadpan = false;

    /// ULTIMATE deadpan aspects are immune to physical trickster foolery! Doom style.
    /// true prevents a player with this aspect getting stat boosts or graphics changes in trickster mode.
    /// Should set deadpan true when setting this true or they'll still start macking on everyone!
    bool ultimateDeadpan = false;


    void addTheme(Theme t, double weight) {
        themes[t] = weight;
    }
    /// Do god-tier trolls of this aspect have wings?
    bool trollWings = true;

    // ##################################################################################################
    // Values

    /// Multiplier to Player.increasePower magnitude.
    double powerBoostMultiplier = 1.0;

    // ##################################################################################################
    // Colours

    AspectPalette palette = new AspectPalette()
        ..accent = '#FF9B00'
        ..aspect_light = '#FF9B00'
        ..aspect_dark = '#FF8700'
        ..shoe_light = '#7F7F7F'
        ..shoe_dark = '#727272'
        ..cloak_light = '#A3A3A3'
        ..cloak_mid = '#999999'
        ..cloak_dark = '#898989'
        ..shirt_light = '#EFEFEF'
        ..shirt_dark = '#DBDBDB'
        ..pants_light = '#C6C6C6'
        ..pants_dark = '#ADADAD';

    // ##################################################################################################
    // Lists

    //TODO maybe eventually quest lines are in charge of levels, so two pages of breath with the same interest don't have exact same ladder?
    List<String> levels = new List<String>.unmodifiable(<String>[
        "SNOWMAN SAVIOR",
        "NOBODY NOWHERE",
        "NULLZILLA"
    ]);
    List<String> denizenNames = new List<String>.unmodifiable(<String>[
        "ERROR 404: DENIZEN NOT FOUND"
    ]);
    List<String> fraymotifNames = new List<String>.unmodifiable(<String>[
        "Blank",
        "Null",
        "Boring",
        "Error"
    ]);
    List<String> landNames = new List<String>.unmodifiable(<String>[
        "Blank",
        "Null",
        "Boring",
        "Error"
    ]);

    //what do interacting effects claim to modify, what do land quests reference?
    List<String> symbolicMcguffins = new List<String>.unmodifiable(<String>[
        "Nothing",
        "Errors",
        "Glitches"
    ]);

    List<String> physicalMcguffins = new List<String>.unmodifiable(<String>[
        "Nothing",
        "Errors",
        "Glitches"
    ]);

    String denizenSongTitle = "Song";
    String denizenSongDesc = "A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ";

    List<String> handles = new List<String>.unmodifiable(
        <String>["Null", "Nothing", "Mystery"]);



    /// DO NOT transfer these directly to a Player - they may not be valid for use and require processing!
    /// Use initAssociatedStats for adding stats to a Player!
    List<AssociatedStat> stats = <AssociatedStat>[];

    /// Perma-buffs for modifying stat growth and distribution - page growth curve etc.
    List<Buff> statModifiers = <Buff>[];
    //starting items, quest rewards, etc.
    WeightedList<Item> items = new WeightedList<Item>();
    // ##################################################################################################
    // Constructor

    Aspect(int this.id, String this.name, {this.isMLHFanon = false, this.isCanon = false, this.isInternal = false, this.reskinOf = null, this.reskinIs = null}) {
        this.savedName = this.name;

        //not dynamically calculated because of Hope players (there IS no Dick.png), but still needs to be known.
        if(this.reskinOf == null && this != Aspects.COMBO && this.id < 256) {
            faqFile = new FAQFile("Aspects/$name.xml");
            initializeItems();
            this.initializeThemes();
            this.symbolImgLocation = "$name.png";
            this.bigSymbolImgLocation = "${name}Big.png";
        }if(name == "Combo"){
            initializeItems();
            initializeThemes();
            faqFile = new FAQFile("Aspects/Time.xml");
            symbolImgLocation = "Time.png";
            bigSymbolImgLocation = "TimeBig.png";
        }if(this.reskinOf != null) {
            initializeItems();
            initializeThemes();
            Aspects.makeReskin(this, reskinOf);
            faqFile = new FAQFile("Aspects/$reskinOf.xml");
            this.symbolImgLocation = "Reskins/$name.png";
            this.bigSymbolImgLocation = "Reskins/${name}Big.png";
        }
        Aspects.register(this);
    }

    void processCard() {

    }

    void initializeItems() {
        items = new WeightedList<Item>()
            ..add(new Item("Perfectly Generic Object",<ItemTrait>[],shogunDesc: "I Think Is The Starbound Item For Debugging Unused Item IDs"));
    }

    // ##################################################################################################
    // Methods

    /// Sets up associated stats for this Aspect
    /// Prefer to override [stats] instead.
    void initAssociatedStats(Player player) {
        for (AssociatedStat stat in stats) {
            stat.applyToPlayer(player);
        }
    }

    /// Executed when a player with this aspect dies.
    /// e.g. Doom prophecies
    void onDeath(Player player) {}



    //each aspect has a unique Cataclysm.  Just call appropriate mutator method
    String activateCataclysm(Session s, Player p) {
        return s.mutator.abjectFailure(s, p);
    }



    /// Returns an opening font tag with the class text colour.
    String fontTag() {
        return "<font color='${this.palette.text.toStyleString()}'> ";
    }

    //TODO remember to give space only Frogs and give it a stupid high weighting.
    //TODO have some branches of the quest chain not end in a denizen fight, but in a Choice. (and somehow failing the choice means you ahve to fight them)
    void initializeThemes() {
        addTheme(new Theme(<String>["Decay","Rot","Death"])
            ..addFeature(FeatureFactory.ROTSMELL, Feature.HIGH)
            ..addFeature(FeatureFactory.RUSTLINGSOUND, Feature.LOW)
            ..addFeature(FeatureFactory.SKELETONCONSORT, Feature.HIGH)
            ..addFeature(FeatureFactory.CREEPYFEELING, Feature.MEDIUM)
            ..addFeature(FeatureFactory.CROCODILECONSORT, Feature.LOW)
            ..addFeature(new DenizenQuestChain("Revive the Consorts", [
                new Quest("The ${Quest.PLAYER1} learns that all of the local ${Quest.CONSORT}s are dead. This is....really depressing, actually. "),
                new Quest("The ${Quest.PLAYER1} has found a series of intriguing block puzzles and symbols. What could it all mean? "),
                new Quest("With a satisfying CLICK, the ${Quest.PLAYER1} has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of ${Quest.CONSORTSOUND}ing.  The ${Quest.CONSORT}s are alive again!  "),
                new DenizenFightQuest("It is time for the ${Quest.PLAYER1}  to finally face the ${Quest.DENIZEN}. ","The ${Quest.DENIZEN} lies slain by the ${Quest.PLAYER1}'s ${Quest.WEAPON}. The ${Quest.PLAYER1} has won! ","The tyranny of ${Quest.DENIZEN} continues with the defeat of the ${Quest.PLAYER1}.")

            ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.HIGH);
        addTheme(new Theme(<String>["Factories", "Manufacture", "Assembly Lines"])
            ..addFeature(FeatureFactory.ROBOTCONSORT, Feature.HIGH)
            ..addFeature(FeatureFactory.IGUANACONSORT, Feature.LOW)
            ..addFeature(FeatureFactory.OILSMELL, Feature.MEDIUM)
            ..addFeature(FeatureFactory.CLANKINGSOUND, Feature.HIGH)
            ..addFeature(FeatureFactory.FRANTICFEELING, Feature.LOW)
            ..addFeature(new DenizenQuestChain("Produce the Goods", [
                new Quest("The ${Quest.PLAYER1} learns that all of the local ${Quest.CONSORT}s have a severe shortage of gears and cogs. It is up to the ${Quest.PLAYER1} to get the assembly lines up and running again. "),
                new Quest("The ${Quest.PLAYER1} is running around and fixing all the broken down equipment. This sure is tiring! "),
                new Quest("The ${Quest.PLAYER1} is training the local ${Quest.CONSORT}s to operate the manufacturing equipment. There is ${Quest.CONSORTSOUND}ing and chaos everywhere. "),
                new Quest("The ${Quest.PLAYER1} manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The ${Quest.CONSORT}s name a national holiday after the ${Quest.PLAYER1}. "),
                new DenizenFightQuest("It is time for the ${Quest.PLAYER1}  to finally face the ${Quest.DENIZEN}. ","The ${Quest.DENIZEN} lies slain by the ${Quest.PLAYER1}'s ${Quest.WEAPON}. The ${Quest.PLAYER1} has won! ","The tyranny of ${Quest.DENIZEN} continues with the defeat of the ${Quest.PLAYER1}.")
            ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            , Theme.HIGH);

        addTheme(new Theme(<String>["Peace","Tranquility","Rest"])
            ..addFeature(FeatureFactory.CALMFEELING, Feature.HIGH)
            ..addFeature(FeatureFactory.RUSTLINGSOUND, Feature.LOW)
            ..addFeature(FeatureFactory.NATURESMELL, Feature.MEDIUM)
            ..addFeature(new PreDenizenQuestChain("Relax the Consorts According to Prophecy", [
                new Quest("The ${Quest.PLAYER1} learns that all of the local ${Quest.CONSORT}s have been too stressed about an impending famine to relax. They vow to help however they can."),
                new Quest("The ${Quest.PLAYER1} fluffs more pillows than any other Player ever has before them. Huh, what is this ${Quest.CONSORT} ${Quest.CONSORTSOUND}ing about? A prophecy?  "),
                new Quest("The ${Quest.PLAYER1} finds the foretold RELAXING MIX TAPE and plays it for all the local ${Quest.CONSORT}s, who become so chill they do not even ${Quest.CONSORTSOUND} once. "),
                new DenizenFightQuest("It is time for the ${Quest.PLAYER1}  to finally face the ${Quest.DENIZEN}. ","The ${Quest.DENIZEN} lies slain by the ${Quest.PLAYER1}'s ${Quest.WEAPON}. The ${Quest.PLAYER1} has won! ","The tyranny of ${Quest.DENIZEN} continues with the defeat of the ${Quest.PLAYER1}.")

            ], new FraymotifReward(), QuestChainFeature.playerIsFateAspect), Feature.LOW)
            ..addFeature(new DenizenQuestChain("Relax the Consorts", [
                new Quest("The ${Quest.PLAYER1} learns that all of the local ${Quest.CONSORT}s have been too stressed about an impending famine to relax. They vow to help however they can."),
                new Quest("The ${Quest.PLAYER1} fluffs more pillows than any other Player ever has before them. "),
                new Quest("The ${Quest.PLAYER1}  teaches the local ${Quest.CONSORT}s to find their chill. "),
                new DenizenFightQuest("It is time for the ${Quest.PLAYER1}  to finally face the ${Quest.DENIZEN}. ", "The ${Quest.DENIZEN} lies slain by the ${Quest.PLAYER1}'s ${Quest.WEAPON}. The ${Quest.PLAYER1} has won! ","The tyranny of ${Quest.DENIZEN} continues with the defeat of the ${Quest.PLAYER1}.")
            ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            , Theme.HIGH); // end theme
    }

    // ##################################################################################################
    // Utility

    @override
    String toString() => this.name;
}

/// Convenience class for getting/setting aspect palettes
class AspectPalette extends Palette {
    static String _ACCENT = "accent";
    static String _ASPECT_LIGHT = "aspect1";
    static String _ASPECT_DARK = "aspect2";
    static String _SHOE_LIGHT = "shoe1";
    static String _SHOE_DARK = "shoe2";
    static String _CLOAK_LIGHT = "cloak1";
    static String _CLOAK_MID = "cloak2";
    static String _CLOAK_DARK = "cloak3";
    static String _SHIRT_LIGHT = "shirt1";
    static String _SHIRT_DARK = "shirt2";
    static String _PANTS_LIGHT = "pants1";
    static String _PANTS_DARK = "pants2";

    static Colour _handleInput(Object input) {
        if (input is Colour) {
            return input;
        }
        if (input is int) {
            return new Colour.fromHex(input, input
                .toRadixString(16)
                .padLeft(6, "0")
                .length > 6);
        }
        if (input is String) {
            if (input.startsWith("#")) {
                return new Colour.fromStyleString(input);
            } else {
                return new Colour.fromHexString(input);
            }
        }
        throw "Invalid AspectPalette input: colour must be a Colour object, a valid colour int, or valid hex string (with or without leading #)";
    }

    Colour get text => this[_ACCENT];

    Colour get accent => this[_ACCENT];

    void set accent(dynamic c) => this.add(_ACCENT, _handleInput(c), true);

    Colour get aspect_light => this[_ASPECT_LIGHT];

    void set aspect_light(dynamic c) => this.add(_ASPECT_LIGHT, _handleInput(c), true);

    Colour get aspect_dark => this[_ASPECT_DARK];

    void set aspect_dark(dynamic c) => this.add(_ASPECT_DARK, _handleInput(c), true);

    Colour get shoe_light => this[_SHOE_LIGHT];

    void set shoe_light(dynamic c) => this.add(_SHOE_LIGHT, _handleInput(c), true);

    Colour get shoe_dark => this[_SHOE_DARK];

    void set shoe_dark(dynamic c) => this.add(_SHOE_DARK, _handleInput(c), true);

    Colour get cloak_light => this[_CLOAK_LIGHT];

    void set cloak_light(dynamic c) => this.add(_CLOAK_LIGHT, _handleInput(c), true);

    Colour get cloak_mid => this[_CLOAK_MID];

    void set cloak_mid(dynamic c) => this.add(_CLOAK_MID, _handleInput(c), true);

    Colour get cloak_dark => this[_CLOAK_DARK];

    void set cloak_dark(dynamic c) => this.add(_CLOAK_DARK, _handleInput(c), true);

    Colour get shirt_light => this[_SHIRT_LIGHT];

    void set shirt_light(dynamic c) => this.add(_SHIRT_LIGHT, _handleInput(c), true);

    Colour get shirt_dark => this[_SHIRT_DARK];

    void set shirt_dark(dynamic c) => this.add(_SHIRT_DARK, _handleInput(c), true);

    Colour get pants_light => this[_PANTS_LIGHT];

    void set pants_light(dynamic c) => this.add(_PANTS_LIGHT, _handleInput(c), true);

    Colour get pants_dark => this[_PANTS_DARK];

    void set pants_dark(dynamic c) => this.add(_PANTS_DARK, _handleInput(c), true);
}
