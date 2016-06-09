// Restricting function to not execute unless DOM is fully loaded

 //$( document ).ready(function() {

	//populate selection box with planet options

	var planets = [
  		['Sun', 27.9],
  		['Jupiter', 2.54],
  		['Neptune', 1.19],
		['Saturn', 1.08],
		['Earth', 1],
		['Moon', 0.1655],
		['Mars', 0.3895],
		['Jupiter', 2.640],
		['Saturn', 1.139],
		['Uranus', 0.917],
		['Neptune', 1.148],
		['Pluto', 0.06]
	];

	for (var i = 0; i < planets.length; i++){
   		$('<option/>').val(planets[i][1]).html(planets[i][0]).appendTo('#planetSelector');
	}

	$(document).ready(function(){
		$('#button').on('click', function(){
			// Calling input forms from document

			var myWeight = $('#yourWeight').val();
			var gravity = $('#planetSelector').val();
			var myPlanet = $('#planetSelector option:selected').html();

			// Transforming input forms

			var myNewWeight = myWeight * gravity;
			myNewWeight = myNewWeight.toFixed(2);

			//Outputting grammatically correct answer

			if(myPlanet === "Sun" || myPlanet === "Moon"){
				$('#answer').html("If you were on the " + myPlanet + " you would weigh " + myNewWeight + "lbs!");
				$('#planetHeader').html("Welcome to the " + myPlanet + "!!");

			} 	else{
					$('#answer').html("If you were on " + myPlanet + " you would weigh " + myNewWeight + "lbs!");
					$('#planetHeader').html("Welcome to " + myPlanet + "!!");
			}

			//Adding gray background to answer field when it returns an answer
			
			$('#answer').css('background', '#ddd');
		})
	});
	

// });