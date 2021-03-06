// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var timoduleshare = require('ma.car.ti.module.share');
Ti.API.info("module is => " + timoduleshare);

label.text = timoduleshare.example();

Ti.API.info("module exampleProp is => " + timoduleshare.exampleProp);
timoduleshare.share({
	text: "share carma!",
	facebook: "share carma on facebook!",
	twitter: "share carma on twitter!",
	callback: function(res){
		console.log( res );
		if( res.state === "SUCCESS" ){
			console.log( "share successed" );
		}
		else{
			console.log( "share failed" );
		}
	}
});

if (Ti.Platform.name === "android") {
	var proxy = timoduleshare.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}

