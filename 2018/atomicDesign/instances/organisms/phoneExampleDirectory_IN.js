var phoneInstance = function(p5js){

	var phone1;
	var dp;
	var myStatusBar;
	var myToolBar;
	var myBoxTitle;
	var myBoxTitleB;
	var myBoxTitleC;
	var myItemListA;
	var myItemListB;
	var myAndroidBar;
	var mySpacer;
	var myPicture;

	p5js.setup = function() {
		p5js.createCanvas(500, 900);
		dp = 8;
		// Inialize phone 1
		phone1 = new iPhoneX(p5js);
		phone1.setup();

		myStatusBar = new statusBar(8);
		myToolBar = new toolBar("CONTACTS", p5js);
		myItemListA = new list(2, p5js)
		mySpacer = new contentSpacer(8);
		myItemListB = new list(4, p5js)
		myAndroidBar = new androidBar();
		myPicture = new picture("Ali Connors");
	};

	p5js.draw = function() {
		p5js.background(240);

		 // 1st phone
		 phone1.show(40 , 20);
		 exampleA(phone1.screenX, phone1.screenY);

		// Mouse
		p5js.text(p5js.mouseX + " , " + p5js.mouseY, p5js.mouseX, p5js.mouseY);

	}

	var exampleA = function(guideX, guideY){
		var gap = 0;
		myStatusBar.show(guideX, guideY, 375, p5js);
		gap = gap + dp * 4;
		myToolBar.show(guideX, guideY+gap, p5js);
		gap = gap + dp * 7;
		myPicture.show(guideX, guideY+gap, 375, p5js);
		gap = gap + dp * 31;
		mySpacer.show(guideX, guideY+gap, 375, p5js);
		gap = gap + dp;
		myItemListA.show(guideX, guideY+gap, 375, 72, p5js);
		gap = gap + 144;
		mySpacer.show(guideX, guideY+gap, 375, p5js);
		gap = gap + dp;
		mySpacer.show(guideX, guideY+gap, 375, p5js);
		gap = gap + dp;
		myItemListB.show(guideX, guideY+gap, 375, 72, p5js);
		myAndroidBar.show(guideX, guideY + 812 - 48, 375, p5js);
	}
}
var myP5 = new p5(phoneInstance, 'phoneExampleDirectory');