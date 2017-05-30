//best part of this is that if i want some OTHER scene to be able to have romantic dialgoue (say i write a general purpose dialogue scene)
//it's render function can just call new QuadrantDialogue(this.session).renderContent(div); and be done.
//resuability, yo
//http://www.neoseeker.com/forums/26839/t1277308-random-npc-conversations/   (or i guess i could just play oblivion, but I want a LIST dammit, of memes to add.)
function QuadrantDialogue(session){
	this.session=session;
	this.canRepeat = true;
	this.player1 = null;
	this.player2 = null;
	this.player1Start = null;
	this.player2Start = null;
	this.conversationalPairEngine = new ConversationalPairEngine();

	//this should have a higher priority than land quests, 'cause the point is relationships distract you from playing the damn game.
	this.trigger = function(){
		this.player1 = null;
		this.player2 = null;

		if(Math.seededRandom() > 0.0001){ //fiddle with rate later, for now, i want to see this happen.
			findSemiRandomQuadrantedAvailablePlayer();
			findQuardrantMate();
		}
		return false;
	}

	this.findSemiRandomQuadrantedAvailablePlayer =function(){
		//set this.player1 to be a random quadranted player.
		//BUT, if there is a player in a moiralligence who is on the verge of flipping their shit, return them.  so not completely random.
	}

	this.findQuardrantMate =function(){
		//set this.player2 to be one of player1's quadrant mates. first diamond, then heart, then spade, then clubs.
	}

	this.getDiscussSymbol =function(){
		//TODO, turn which quadrant player1 and player2 are in into a png to pass.  Create pngs for diamonds and clubs.
	}

	this.getQuadrant = function(){
		var r = this.player1.getRelationshipWith(this.player2);
		return r;
	}

	this.chatAboutInterests = function(trait,relationship){
		return  "\n<insert random 'interest in common' ( " + trait + ") chat here>\n"
		//calls different methods depending on trait, THOSE methods determine what they randomly talk about (based on relationship value)
		//trolls talking about pop culture should just list out a huge movie title because i am trash.
		//maybe randomly generate the movie title because holy fuck does that sound amazing.
		//if i do that, i should have an easter egg page that is nothing BUT listing out bullshit movie titles
		//which means the code to do that should live in NOT this scene. Maybe??????????

		//having interests in common keeps the relationship from getting too boring.
		relationship.moreOfSame();
		relationship.moreOfSame();
		relationship.moreOfSame();
	}

	/*
		The itnerest functions should pick p1 or p2 to start. If starting player isn't interested in subject, they say "umm" or "uh" or whatever.

		IMPORTANT: two ways these can be called, can be called by sharing a trait. OR by "lackOfInterest";

		//nice. double nice

	*/
	this.chatAboutAcademic = function(relationship){

	}

	this.chatAboutMusic = function(relationship){
			//if both characters like rap/hiphop, etc, they rap here????
	}

	//did you get to the cloud district recently, what am i saying of course you didn't.
	this.chatAboutCulture = function(relationship){

	}

	//oh lord, tell bad jokes here.  especially puns
	this.chatAboutComedy = function(relationship){

	}

	this.chatAboutDomestic = function(relationship){

	}

	this.chatAboutAthletic = function(relationship){

	}

	this.chatAboutTerrible = function(relationship){

	}

	this.chatAboutFantasy = function(relationship){

	}

	//stop right there, criminal scum
	this.chatAboutJustice = function(relationship){

	}

	this.chatAboutLackOfInterests = function(relationship){
		//either p1 or p2 will try to say something about their interests.
		//other player will be bored to tears.
		//other player MUST be able to respond with "hrmm", "yes" and "interesting". and "horrible creatures, I hate the things."
		//call an interest directly (chatAboutJustice)
		//it'll handle responses no matter who is interested in what.
		return  "\n<insert random 'lack of interest' chat here>\n"
	}

	this.chatAboutQuadrant = function(relationship){
		//calls different methods based on quadrant.  THOSE methods have different shit in them based on value (foreshadows break up.)
		if(relationship.saved_type == relationship.diamond)return this.diamondsChat(relationship);
		if(relationship.saved_type == relationship.heart)return this.heartChat(relationship);
		if(relationship.saved_type == relationship.clubs)return this.clubsChat(relationship);
		if(relationship.saved_type == relationship.spades) return this.spadesChat(relationship);
	}

	//skyrim joke exists about how easy it is to steal from an NPC after putting a bucket on their head (now they can't see you stealing)
	//how scandalous

	this.getQuadrantASCII = function(relationship){
		//calls different methods based on quadrant.  THOSE methods have different shit in them based on value (foreshadows break up.)
		if(relationship.saved_type == relationship.diamond)return " <> "
		if(relationship.saved_type == relationship.heart)return " <3 "
		if(relationship.saved_type == relationship.clubs)return " c3< "
		if(relationship.saved_type == relationship.spades) return " <3< "
	}


	this.clubsChat = function(relationship){
		console.log("Clubs Chat in: " + this.session.session_id)
		conversationalPair
		return  "\n<insert random 'clubs' chat here>\n"
	}

	this.spadesChat = function(relationship){
		console.log("Spades Chat  in: " + this.session.session_id)
		return  "\n<insert random 'spades' chat here>\n"
	}

	this.heartChat = function(relationship){
		console.log("Heart Chat  in: " + this.session.session_id)
		return  "\n<insert random 'heart' chat here>\n"
	}

	this.diamondsChat = function(relationship){
		console.log("Diamonds Chat  in: " + this.session.session_id)
		return  "\n<insert random 'diamond' chat here>\n"
	}

	this.feelingsJam = function(relationship){
		console.log("Feelings Jam in: " + this.session.session_id)
		//figure out which player is flipping out, make them "flippingOut", make other player "shoosher"
		//have them talk about flipOUtREason.  flippingOut has triggerLevel reduced by a good amount.
		//maybe even parse out flipOUtReason a bit. if they mention "dead" that's gonna be a different convo than ultimate riddle bullshit, right? same with time clones.
		//if i can't parse out what it's about, or don't care, then have a generic thing where they generically talk about flipOutReason
		return  "\n<insert random 'diamond flipping the fuck out' chat here>\n"
	}


	this.interestAndQuadrantChat = function(trait, relationship){
		var ret = "";
		for(var i = 0; i<3; i++){
			if(Math.seededRandom() > 0.3){ //maybe make them MORE likely to chat about interests?
				ret += this.chatAboutInterests(trait,relationship); //more likely to talk about interests.
			}else{
				ret += this.chatAboutQuadrant(relationship);
			}
		}
		return ret;
	}

	this.lackOfInterestAndQuadrantChat = function(relationship){
		var ret = "";
		for(var i = 0; i<3; i++){
		if(Math.seededRandom() > 0.5){
				ret += this.chatAboutLackOfInterests(relationship); //one character tries to talk about something that interests them, other character is bored as fuck.
			}else{
				ret += this.chatAboutQuadrant(relationship);
			}
		}
		return ret;
	}

	this.getChat =function(relationship){

		relationship.moreOfSame(); //strengthens bonds in whatever direction.
		//feelings jams have highest priority.
		if(relationship.saved_type == relationship.diamond && (this.player1.flipOutReason || this.player2.flipOutReason)){
			return this.feelingsJam(relationship);  //whole convo
		}
		var trait = whatDoPlayersHaveInCommon(this.player1, this.player2);
		if(trait != "nice"){
			return this.interestAndQuadrantChat(trait, relationship);
		}else{  //no option to chat about interests.
			return this.lackOfInterestAndQuadrantChat(relationship);
		}
	}


	this.getGreeting = function(relationship){
		var ret = "";
		var r1 = relationship;
		var r2 = this.player2.getRelationshipWith(this.player1);
		ret += chatLine(this.player1Start, this.player1,getRelationshipFlavorGreeting(r1, r2, this.player1, this.player2) + this.getQuadrantASCII(relationship))
		ret += chatLine(this.player2Start, this.player2,getRelationshipFlavorGreeting(r2, r1, this.player2, this.player1)+ this.getQuadrantASCII(relationship))
		return ret;
	}

	this.fareWell = function(relationship){
		//fuck yes oblivion, you taught me what a good AI "goodbye" is.
		var goodByes = ["Good day.","Farewell.","Bye bye.","Bye.", "Talk to you later!", "ttyl", "seeya"];
		var badByes = ["I have nothing more to say to you.","I've heard others say the same.","Yeah, I'm done here.","I'm out.","I'm going to ollie outtie.","I'm through speaking with you."];
		var ret = "";

		var r2 = this.player2.getRelationshipWith(this.player1);
		if(relationship.value > 0){
			ret += chatLine(this.player1Start, this.player1, getRandomElementFromArray(goodByes) + this.getQuadrantASCII(relationship));
		}else{
			ret += chatLine(this.player1Start, this.player1, getRandomElementFromArray(badByes) + this.getQuadrantASCII(relationship));
		}

		if(r2.value > 0){
			ret += chatLine(this.player2Start, this.player2, getRandomElementFromArray(badByes)+ this.getQuadrantASCII(relationship));
		}else{
			ret += chatLine(this.player2Start, this.player2, getRandomElementFromArray(badByes)+ this.getQuadrantASCII(relationship));
		}

		return ret;
	}



	this.chat = function(div){
		var canvasHTML = "<br><canvas id='canvas" + (div.attr("id")) +"' width='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
		div.append(canvasHTML);
		var relationship = this.getQuadrant();
		var chatText = this.getGreeting(relationship);
		chatText += this.getChat(relationship);
		chatText += this.fareWell(relationship); //<-- REQUIRED for ultimate oblivion shittieness. "I have nothing more to say to you." "good day."
		drawChat(document.getElementById("canvas"+ (div.attr("id"))), this.player1, this.player2, chatText, 0,this.getDiscussSymbol());
	}

	//have test page (link to easter eggs) where it generates some players and shoves them into relationships and
	//makes thiem this.player1 and 2 and then calls renderContent.
	this.renderContent = function(div){
		if(this.player1.aspect != "Time") removeFromArray(this.player1, this.session.availablePlayers);
		if(this.player2.aspect != "Time") removeFromArray(this.player2, this.session.availablePlayers);
		this.player1Start = this.player1.chatHandleShort()+ ": "
		this.player2Start = this.player2.chatHandleShortCheckDup(this.player1.chatHandleShort())+ ": "; //don't be lazy and usePlayer1Start as input, there's a colon.

		/*
				Since this dialogue has no "purpose", no information that HAS to be conveyed, can treat it as more dynamic.
				Go for bullshit elder scrolls pairs.

				Greeting (based on quadrant, not generic greetings)
				Greeting

				chatPair1, chatPair2, chatPair3

				where chatPair is a call and response about one of several topics, each of which have multiple random call/response things it can deploy

				Have you heard about Kvatch?
				No.

				I have been to the Imperial City recently.
				I've heard others say the same.

				I have nothing more to say to you.
				Good day.

				<3<3<3 elder scrolls. They are such ASSHOLES to each other.

				Chat pairs can be generated from: interests in common, quadrants
				ALSO, flipOutReason is special case. highest priority.


		*/
		this.chat(div);

	}

	this.content = function(){
		return "NEVER RUN IN 1.0 YOU DUNKASS. Seriously, I don't support it anymore."
	}


}

//can't have engine create these things 'cause needs to be dynamic, not made ahead of time
function conversationalPair(line1, responseLines){
	this.line1 = line1;
	this.responseLines = responseLines;
}
