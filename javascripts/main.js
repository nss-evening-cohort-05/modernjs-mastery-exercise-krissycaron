// Use AJAX | Promises to load all 3 JSON files
$(document).ready(function(){
const outputContainer = $("#output");


//////////////////////////////////////////////////////////////
//////////////// DOM functions are going here////////////////

const writeToDOM = ((result)=>{
	let domString = "";
		console.log("WTF", result[2]);
	for (let m=0; m < result[2].length; m++) {
		console.log("result", result[2]);
		domString += `<div class="character row">`;
		domString += `<div class="col-sm-4">`;
		domString += `<img src="${result[2][m].image}">`;
		domString += `<p>${result[2][m].name}</p>`;
		domString += `<p>${result[2][m].description}</p>`;
		//If no description you must add one. if/else? 
		domString += `</div>`;
		domString += `</div>`;

	}
	outputContainer.append(domString);


});


// console.log("It's getting  to line 26");
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


let charactersArray = [];
let teamsArray = [];
let genderArray = [];
let characters;


// characters are what i will be printing and will be what data i want to be sorting. 
// loadCharacters().then((characterA) => {
// 	characterA.forEach((characterB) => {
// 		characterB.matches = [];
// 		charactersArray.push(characterB);

// 	});
// console.log(charactersArray); getting this to print. :-) 
	Promise.all([loadGenders(), loadTeams(), loadCharacters()])
	.then((result)=>{
		// console.log("genders",result[0]);
		// console.log("teams",result[1]);
		// console.log("characters",result[2]);
		result[0].forEach((gender)=>{
			// console.log(gender);
			result[1].forEach((teams) => {
				// console.log(teams);
				result[2].forEach((characters)=> {
					// console.log(characters);
				}); 
			});
		});


		writeToDOM(result);
		// for (let i=0; i<characters.length; i++){
		// 	for (let k=0; k<teamsArray.length; k++){
		// 		charactersArray[i].matches.push(teamsArray[k]);
		// 	} 
		// }


});







});