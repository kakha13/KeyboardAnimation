function key(keypress,code){
array = {
    8: ["backspace", "15"],
    9: ["tab", "1"],
    13: ["enter", "15"],
    16: ["shift", "15"],
    17: ["ctrl", "14"],
    18: ["alt", "12"],
    19: "pause/break",
    20: ["caps lock", "1"],
    27: ["esc", "1"],
    32: ["space", "7"],
    33: ["page up", "14"],
    34: ["page down", "14"],
    35: ["end", "14"],
    36: ["home", "13"],
    37: ["left arrow", "13"],
    38: ["up arrow", "14"],
    39: ["right arrow", "15"],
    40: ["down arrow", "14"],
    45: ["insert", "14"],
    46: ["delete", "15"],
    48: ["0", "11"],
    49: ["1", "2"],
    50: ["2", "3"],
    51: ["3", "4"],
    52: ["4", "5"],
    53: ["5", "6"],
    54: ["6", "7"],
    55: ["7", "8"],
    56: ["8", "9"],
    57: ["9", "10"],
    65: ["a", "2"],
    66: ["b", "6"],
    67: ["c", "4"],
    68: ["d", "4"],
    69: ["e", "4"],
    70: ["f", "5"],
    71: ["g", "6"],
    72: ["h", "7"],
    73: ["i", "9"],
    74: ["j", "8"],
    75: ["k", "9"],
    76: ["l", "10"],
    77: ["m", "8"],
    78: ["n", "7"],
    79: ["o", "10"],
    80: ["p", "11"],
    81: ["q", "2"],
    82: ["r", "5"],
    83: ["s", "3"],
    84: ["t", "6"],
    85: ["u", "8"],
    86: ["v", "5"],
    87: ["w", "3"],
    88: ["x", "3"],
    89: ["y", "7"],
    90: ["z", "2"],
    91: ["left window key", "3"],
    92: ["right window key", "10"],
    93: ["select key", ""],
    96: ["0", "13"],
    97: ["1", "13"],
    98: ["2", "14"],
    99: ["3", "15"],
    100: ["4", ""],
    101: ["5", "14"],
    102: ["6", "16"],
    103: ["7", "13"],
    104: ["8", "14"],
    105: ["9", "15"],
    106: ["*", "15"],
    107: ["+", "15"],
    109: ["-", "15"],
    110: [".", "15"],
    111: ["/", "14"],
    112: ["f1", "2"],
    113: ["f2", "3"],
    114: ["f3", "4"],
    115: ["f4", "5"],
    116: ["f5", "6"],
    117: ["f6", "7"],
    118: ["f7", "8"],
    119: ["f8", "9"],
    120: ["f9", "10"],
    121: ["f10", "11"],
    122: ["f11", "12"],
    123: ["f12", "13"],
    144: ["num lock", "14"],
    145: ["scroll lock", "15"],
    186: [";", "11"],
    187: ["=", "14"],
    188: [",", "9"],
    189: ["-", "12"],
    190: [".", "12"],
    191: ["/", "14"],
    192: ["'", "1"],
    219: ["[", "14"],
    220: ["&#92;", "15"],
    221: ["]", "14"],
    222: ['"', "12"]

};
	return array[keypress][code];
}

heightofwindow = $(window).height(); // window height

var windowWidth = $(window).width();

var id = 0;
window.shadow = "";

$(function(){

	// color function
	colored = 0;
	$("#colored").click(function(){
		if(colored == 1){
			window.shadow = "";
			colored = 0;
		} else {
			colored = 1;
			window.shadow = "box-shadow:none !important;text-shadow:none";
		}

		//$(this).addClass("colored");
		$( this ).toggleClass( "colored" );

	});

$( "body" ).keydown(function(event) {
	event.preventDefault();
	console.log(event.which+"="+key(event.which,"0"));
	var thiskey = key(event.which,"0").toUpperCase();
	var thiskeynumber = key(event.which,"1").toUpperCase();

	// color start
	var rgb = [];
	for(var i = 0; i < 3; i++)
	    rgb.push(Math.floor(Math.random() * 255));
	if(window.shadow!=""){
		var background = 'rgb('+ rgb.join(',') + ')';
	} else var background = "";
	// color end

	var style="margin-left:"+5*thiskeynumber+"%;background:"+background+";"+shadow;
 	$("body").append('<kbd class="dark animation" id="'+id+'" style="'+style+'">'+thiskey+'</kbd>');

 	if(event.which==32)
		$("#"+id).css("width","20%");



var animateObj = {
    opacity: 0.15,
    bottom: "+="+heightofwindow,
    marginLeft : Math.floor(Math.random() * (windowWidth-100))+"px"
  };

	$(".animation").animate(
    animateObj,
    2000,
    function() {
			$(this).remove();
		});


	id++;
	});


});
