var app = app || {};

app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var txt1 = document.getElementById('txt1');

    var erasers1 = document.getElementById('erasers1');
    var pencils = document.getElementById('pencils');
    var sharpeners = document.getElementById('sharpeners');
    var crayons = document.getElementById('crayons');
    var erasers = document.getElementById('erasers');

    var cta = document.getElementById('cta');
    var cta_txt = document.getElementById('cta_txt');
    var cta_txt_ovr = document.getElementById('cta_txt_ovr');
    var buttonExit = document.getElementById('button-exit');

	// --------------------------------------------------------------------------------------
	function initialize() {
		t.set(banner, {opacity:1});

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta, .25, {backgroundColor: "#000000"});
            TweenMax.to(cta_txt_ovr, .25, {opacity:1});
            TweenMax.to(cta_txt, .25, {opacity:0});
        });

        buttonExit.addEventListener('mouseout', function () {
            TweenMax.to(cta, .25, {backgroundColor: "#ffffff"});
            TweenMax.to(cta_txt_ovr, .25, {opacity:0});
            TweenMax.to(cta_txt, .25, {opacity:1});
        });

	}
	// --------------------------------------------------------------------------------------
	function start() {
        tl1.from(erasers1, 1, {x: -205, y:250, ease: Cubic.easeOut})
            .from(pencils, 1, {x: -205, y:250, ease: Cubic.easeOut},"-=.9")
            .from(sharpeners, 1, {x: -205, y:250, ease: Cubic.easeOut},"-=.75")
            .from(crayons, 1, {x: -205, y:250, ease: Cubic.easeOut},"-=1")
            .from(erasers2, 1, {x: -205, y:250, ease: Cubic.easeOut},"-=.75")
            .from(txt1, 1, {y: -75, ease: Cubic.easeInOut})
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
