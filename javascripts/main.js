// Use AJAX | Promises to load all 3 JSON files
$(document).ready(function(){
const outputContainer = $("#output");


//////////////////////////////////////////////////////////////
//////////////// DOM functions are going here////////////////

const writeToDOM = ((myCharacters)=>{
	let domString = "";
	for (let m=0; m < myCharacters.length; m++) {
		domString += `<div class="character row">`;
		domString += `<div class="col-sm-4">`;
		domString += `<img src="${myCharacters[m].image}">`;
		domString += `</div>,</div>`;
		console.log(myCharacters);

	}
	outputContainer.append(domString);


});


console.log("It's getting  to line 24");
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


//characters are what i will be printing and will be what data i want to be sorting. 
loadCharacters().then((characterA) => {
	characterA.forEach((characterB) => {
		characterB.matches = [];
		charactersArray.push(characterB);

	});
// console.log(charactersArray); getting this to print. :-) 
	Promise.all([loadGenders(), loadTeams()])
	.then((result)=>{
		// console.log(result);
		result.forEach((xhrResults)=> {
			xhrResults.forEach((teamsArray)=> {
				charactersArray.push(teamsArray);
			});
		});

		for (let i=0; i<charactersArray.length; i++){
			for (let k=0; k<teamsArray.length; k++){
		console.log(charactersArray[i], teamsArray[k]);
				// if ()
				// charactersArray[i].matches.push(teamsArray[k]);
		writeToDOM(charactersArray);
			} 
		}

	});


});







});