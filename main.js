
// logic and Objects
var appController = (function(){

// function constructor Artist data
// var TrackList = function(name, track1, track2, track3, track4) {
// 	this.name = name;
// 	this.track1 = track1;
// 	this.track2 = track2;
// 	this.track3 = track3;
// 	this.track4 = track4;
// };

// // artist database 
// var artist1 = new TrackList("Sourabh", "abc", "abc", "abc", "abc");
// var artist1 = new TrackList("Sourabh", "abc", "abc", "abc", "abc");
var johnTracks = ["abc", "abc", "abc", "abc"];
var mikeTracks = ["abc", "abc", "abc", "abc"];


})();


// For UI && user input
var UIController = (function() {

var DOMstrings = {
	inputName: ".name",
	inputTracks: ".tracks",
	artistButton: ".artist-button",
	submitButton: ".submit-button"
};
 
return {
	getInputData: function() {
		return {
			name: document.querySelector(DOMstrings.inputName).value,
			tracks: document.querySelector(DOMstrings.inputTracks).value
		};
			
	},

	getDOMstrings : function() {
		return DOMstrings;
	}
};
})();



//Global App Controlller
var Controlller = (function(appCtrl, UICtrl) {

var DOM = UICtrl.getDOMstrings();

var ctrlAddItem = function() {
	
	// get the user Input data
		// var input = UICtrl.getInputData();
		// console.log(input);  

	// display the data of particulat Artist
		//user data


		//user data

}

document.querySelector(DOM.submitButton).addEventListener("click", ctrlAddItem);
	 
}) (appController, UIController);

