(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"aniShake_atlas_", frames: [[0,0,1290,1294],[0,1896,1760,768],[1292,1126,1760,768],[1762,1896,656,412],[0,1296,656,412],[1292,0,1392,1124],[2686,0,1024,1124],[3054,1126,1024,768]]}
];


// symbols:



(lib.Bowl = function() {
	this.spriteSheet = ss["aniShake_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Copy_02 = function() {
	this.spriteSheet = ss["aniShake_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Copy_03 = function() {
	this.spriteSheet = ss["aniShake_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Ing_Butter = function() {
	this.spriteSheet = ss["aniShake_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Ing_Milk = function() {
	this.spriteSheet = ss["aniShake_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Ing_Milk_Bowl = function() {
	this.spriteSheet = ss["aniShake_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mix = function() {
	this.spriteSheet = ss["aniShake_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ShakenBake_Step_1 = function() {
	this.spriteSheet = ss["aniShake_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.txt_wellDone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Copy_03();
	this.instance.parent = this;
	this.instance.setTransform(-584,-217);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-584,-217,1760,768);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Copy_02();
	this.instance.parent = this;
	this.instance.setTransform(-609,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-609,-200,1760,768);


(lib.mixEnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Mix();
	this.instance.parent = this;
	this.instance.setTransform(-241,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-203,1024,1124);


(lib.ing2Splash_G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Ing_Milk_Bowl();
	this.instance.parent = this;
	this.instance.setTransform(-687,-582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-687,-582,1392,1124);


(lib.ing2G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Ing_Milk();
	this.instance.parent = this;
	this.instance.setTransform(-247,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247,-208,656,412);


(lib.ing1G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Ing_Butter();
	this.instance.parent = this;
	this.instance.setTransform(-247,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247,-208,656,412);


(lib.btnGen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bowlG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bowl();
	this.instance.parent = this;
	this.instance.setTransform(-299,-355);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299,-355,1290,1294);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ShakenBake_Step_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


(lib.txtMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{txt1:1,txt2:28});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(43).call(this.frame_69).wait(16));

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(4,-1028);
	this.instance._off = true;

	this.instance_1 = new lib.txt_wellDone("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,-1028);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:-24},17,cjs.Ease.bounceOut).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({y:8},15,cjs.Ease.bounceOut).to({_off:true},15).wait(1));

	// Layer 4
	this.instance_2 = new lib.mixEnd("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.1,-1.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({alpha:1},15).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.in2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{goBowl:9,doShake:24,slowToStop:40,fade:60});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//
		this.btn1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			console.log('btn1 clicked');
			//window.sendPMToGorilla('continue');
			exportRoot.ing2Used = true;
			//exportRoot.checkFunc();
			this.gotoAndPlay('goBowl');
		}
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		if(!exportRoot.shakeStarted){
			this.gotoAndPlay('slowToStop');
		}else{
			this.gotoAndPlay('doShake');
		}
	}
	this.frame_59 = function() {
		if(!exportRoot.shakeComplete){
			this.stop();
		}
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(19).call(this.frame_39).wait(20).call(this.frame_59).wait(10).call(this.frame_69).wait(2));

	// buttons
	this.btn1 = new lib.btnGen();
	this.btn1.parent = this;
	this.btn1.setTransform(-225.9,-143,3.401,2.861,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btnGen(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).to({_off:true},1).wait(70));

	// Layer 1
	this.instance = new lib.ing2G("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-55.5,0);

	this.instance_1 = new lib.ing2Splash_G("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1059.7,272.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).to({scaleX:2,scaleY:2,x:1059.7,y:272.1},8,cjs.Ease.quadInOut).to({_off:true},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(6).to({startPosition:0},0).wait(35).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.5,-208,656,412);


(lib.in1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"goBowl":9,"doShake":24,"slowToStop":37,"fade":57});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//
		this.btn1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			console.log('btn1 clicked');
			//window.sendPMToGorilla('continue');
			exportRoot.ing1Used = true;
			//exportRoot.checkFunc();
			this.gotoAndPlay('goBowl');
		}
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		if(!exportRoot.shakeStarted){
			this.gotoAndPlay('slowToStop');
		}else{
			this.gotoAndPlay('doShake');
		}
	}
	this.frame_56 = function() {
		if(!exportRoot.shakeComplete){
			this.stop();
		}
	}
	this.frame_66 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(16).call(this.frame_36).wait(20).call(this.frame_56).wait(10).call(this.frame_66).wait(2));

	// buttons
	this.btn1 = new lib.btnGen();
	this.btn1.parent = this;
	this.btn1.setTransform(-225.9,-143,3.401,2.861,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btnGen(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).to({_off:true},1).wait(67));

	// Layer 1
	this.instance = new lib.ing1G("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-55.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).to({x:918.1,y:505.7},10,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({x:1357.3,y:420.3},4).to({x:1042.6,y:956.5},4).to({x:873.5,y:476},4).wait(1).to({x:866.1,y:457.5},0).to({x:906.3,y:208.1},19,cjs.Ease.quadOut).to({x:1062.2,y:48.5,alpha:0},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.5,-208,656,412);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// txtMC
	this.txtMC = new lib.txtMC();
	this.txtMC.parent = this;
	this.txtMC.setTransform(972.6,542.7);

	this.timeline.addTween(cjs.Tween.get(this.txtMC).wait(3));

	// ing1
	this.ing1 = new lib.in1();
	this.ing1.parent = this;
	this.ing1.setTransform(300.5,228.3);

	this.timeline.addTween(cjs.Tween.get(this.ing1).wait(3));

	// ing2
	this.ing2 = new lib.in2();
	this.ing2.parent = this;
	this.ing2.setTransform(300.5,578.9);

	this.timeline.addTween(cjs.Tween.get(this.ing2).wait(3));

	// bowl
	this.instance = new lib.bowlG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(977.3,544);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// bg
	this.instance_1 = new lib.bg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(512,384,1,1,0,0,0,512,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,2050,1536);


// stage content:
(lib.aniShake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.shakeStarted = false;
		this.shakeCount = 0;
		this.shakeStartCount = 0;
		this.shakeComplete = false;
		this.ing1Used = false;
		this.ing2Used = false;
		
		this.init = function() {
			exportRoot.shakeStarted = false;
			exportRoot.shakeCount = 0;
			exportRoot.ing1Used = false;
			exportRoot.ing2Used = false;
			//
			this.mainMC.txtMC.gotoAndStop(0);
			this.mainMC.ing1.gotoAndStop(0);
			this.mainMC.ing2.gotoAndStop(0);
		};
		
		this.doShake = function(n) {
			if(!exportRoot.shakeComplete){
				exportRoot.shakeCount = n;
			
				console.log("doShake");
				console.log("ing1Used:"+exportRoot.ing1Used);
				console.log("shakeStarted:"+exportRoot.shakeStarted);
				
				if(!exportRoot.shakeStarted){
					this.mainMC.txtMC.gotoAndStop(0);
					if(exportRoot.ing1Used){
						this.mainMC.ing1.gotoAndPlay('doShake');
					}
					if(exportRoot.ing2Used){
						this.mainMC.ing2.gotoAndPlay('doShake');
					}
					if(anyIngsUsed()){
						exportRoot.shakeStarted = true;
						if(exportRoot.shakeStartCount==0){
							exportRoot.shakeStartCount = exportRoot.shakeCount;
						}
						
					}
					
				}
			}
		};
		
		this.shakeStopped = function() {
			console.log("shakeStopped");
			console.log("exportRoot.shakeCount:"+exportRoot.shakeCount);
				if(!exportRoot.shakeComplete){
					
				
					exportRoot.shakeStarted = false;
		
					if(anyIngsUsed()){
						if((exportRoot.shakeCount-exportRoot.shakeStartCount)<20){
							this.mainMC.txtMC.gotoAndPlay('txt1');
						}else{
							//stop shake on window
							exportRoot.shakeComplete = true;
							this.mainMC.txtMC.gotoAndPlay('txt2');
						}
					}
				}
		};
		
		this.checkFunc = function() {
			console.log("checkFunc");
			console.log("ing1Used:"+exportRoot.ing1Used);
		};
		
		function anyIngsUsed() {
			if(exportRoot.ing1Used||exportRoot.ing2Used){
				return(true);
			}else{
				return(false);
			}
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1022,768,2050,1536);
// library properties:
lib.properties = {
	id: 'EDEE2F7BDA724F9F88DCEA9607090FE7',
	width: 2048,
	height: 1536,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/aniShake_atlas_.png?1502052707879", id:"aniShake_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EDEE2F7BDA724F9F88DCEA9607090FE7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;