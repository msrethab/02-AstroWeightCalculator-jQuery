
//Wrapping entire function in document.ready 

$(function(){

	//populate selection box with planet options

	var planets = [
		['Sun', 27.9],
		['Mercury', 0.377],
		['Venus', 0.9032],
		['Earth', 1],
		['Moon', 0.1655],
		['Mars', 0.3895],
		['Jupiter', 2.640],
		['Saturn', 1.139],
		['Uranus', 0.917],
		['Neptune', 1.148],
		['Pluto', 0.06]
	];

	var planetSelector = $("#planetSelector");

	$.each(planets, function(i) {
    	planetSelector.append($("<option />").val(planets[i][1]).html(planets[i][0]));
	});

	//defining button functionality with on click event

	$('#button').on('click', function(){

		// Calling input forms from document

		var myWeight = $('#yourWeight').val();
		var gravity = $('#planetSelector').val();
		var myPlanet = $('#planetSelector option:selected').html();

		// Transforming input forms and rounding value

		var myNewWeight = myWeight * gravity;
		myNewWeight = Math.round(myNewWeight *100) / 100;

		//Outputting grammatically correct answer by adding "the" to Sun and Moon

		if(myPlanet === "Sun" || myPlanet === "Moon"){
			$('#answer').html("If you were on the " + myPlanet + " you would weigh " + myNewWeight + " lbs!");

		} 	else{
				$('#answer').html("If you were on " + myPlanet + " you would weigh " + myNewWeight + " lbs!");
		}

		//Adding gray background to answer field when it returns an answer
		
		$('#answer').css('background', '#ddd');
	})
});