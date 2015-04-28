console.log('init');

new WOW().init();


$('#left-box').click(function(){
	console.log('left');
	customKano();
	
});

$('#center-box').click(function(){
	console.log('center');
	buyKano();
	
});

$('#right-box').click(function(){
	console.log('right');	
	accessories();
});
	


function accessories(){

	$('#left-box').addClass('fadeOutDown');
	$('#center-box').addClass('fadeOutDown');	
	$('#right-box').delay(1000).animate({ "margin-left": "-=450px", backgroundColor: "white"}, 'slow' );
	$('#right-box h4').delay(1000).animate({color:"black"});
	returnShow();
}

function buyKano(){
	$('#left-box').addClass('fadeOutDown');
	$('#right-box').addClass('fadeOutDown');
	$('#center-box').delay(1000).animate({backgroundColor:"white"});
	$('#center-box h4').delay(1000).animate({color:"black"});
	returnShow();
}

function customKano(){
	$('#center-box').addClass('fadeOutDown');
	$('#right-box').addClass('fadeOutDown');
	$('#left-box').delay(1000).animate({ "margin-left": "+=450px", backgroundColor: "white"}, 'slow' );
	$('#left-box h4').delay(1000).animate({color:"black"});
	returnShow();	
}

function returnShow(){
	$('#return').fadeIn('slow');	
	console.log('fade');
}

