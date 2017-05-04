// Use AJAX | Promises to load all 3 JSON files
$(document).ready(function(){
// const outputContainer = $("#output");


//////////////////////////////////////////////////////////////
//////////////// DOM functions are going here////////////////






const writeToDOM = ((result)=>{
	let domString = "";
		
	for (let m=0; m < result[2].length; m++) {
		
		domString += `<div class="container characterCard">`;
		domString += `<img src="${result[2][m].image}">`;
		domString += `<p>${result[2][m].name}</p>`;
		domString += `<p>${result[2][m].description}</p>`;
		//If no row description you must add one. if/else? 
		domString += `</div>`;

	}
	$("#output").append(domString);
});



///////////////////////////////////////////////////////////////////
///// AJAX Calls getting and returning the JSON data files ///////
///////////////////////////////////////////////////////////////////

const loadCharacters =()=> {
	return new Promise((resolve, reject)=>{
		$.ajax("./db/characters.json")
		.done((data1) => resolve(data1.characters))
		.fail((error) => reject(error));
	});
};

const loadGenders=()=> {
	return new Promise((resolve, reject)=>{
		$.ajax("./db/genders.json")
		.done((data1) => resolve(data1.genders))
		.fail((error) => reject(error));
	});
};

const loadTeams=()=> {
	return new Promise((resolve, reject)=>{
		$.ajax("./db/teams.json")
		.done((data1) => resolve(data1.teams))
		.fail((error) => reject(error));
	});
};

///// End of AJAX calls ///////
///////////////////////////////



let teamsArray = [];
let genderArray = [];
let characters;

	const dataGetter = (teamID) => {Promise.all([loadGenders(), loadTeams(), loadCharacters()])
	console.log(teamID);
	.then((result)=>{
		let charactersArray = [];
		result.forEach((chars)=>{
			chars.forEach((teams) => {
				if (teamID === teams.team_id){
					charactersArray.push(teams);
				}
			});
		});
	
	writeToDOM(result);
	});

};


console.log("dataGetter", dataGetter);


});