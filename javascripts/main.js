// Use AJAX | Promises to load all 3 JSON files
$(document).ready(function(){

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

let charactersArray = [];


//characters are what i will be printing and will be what data i want to be sorting. 
loadCharacters().then((characterA) => {
	characterA.forEach((characterB) => {
		characterB.matches = [];
		charactersArray.push(characterB);

	});


// console.log(charactersArray); getting this to print. :-) 

});







});