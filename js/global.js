/**
 * Global variables
 */

// Scene sizes
var WINDOW_WIDTH						= window.innerWidth,
	WINDOW_HEIGHT						= window.innerHeight - 4;

// Camera settings
var ASPECT								= WINDOW_WIDTH / WINDOW_HEIGHT,
	VIEW_ANGLE							= 45,
	NEAR								= 0.1,
	FAR									= 1000;

ASPECT = 1.7778;	// Manually overridden in order to keep the aspect ratio, which helps making the game look uniform

var WIDTH								= WINDOW_WIDTH,
	HEIGHT								= WIDTH / ASPECT;

// Rendering variables
var renderer = "tset", camera, scene, stats;
var objects								= [];
var lights								= [];
var mouse								= {};

var currLevel							= 0;