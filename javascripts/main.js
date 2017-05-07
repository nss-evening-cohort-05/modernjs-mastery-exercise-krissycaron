// Use AJAX | Promises to load all 3 JSON files
$(document).ready(function(){
// const outputContainer = $("#output");


//////////////////////////////////////////////////////////////
//////////////// DOM functions are going here////////////////

///// click events on the 3 buttons to call the data from the db files 
$("#btn0").on("click", ()=> {
	console.log("xmen clicked");
	dataGetter("X-Men");
	$(".marvel_logo_load").hide();
});

$("#btn1").on("click", ()=> {
	console.log("avengers clicked");
	dataGetter("The Avengers");
	$(".marvel_logo_load").hide();
});

$("#btn2").on("click", ()=> {
	console.log(" gardians clicked");
	// console.log("print to dom", writeToDOM());
	dataGetter("Guardians of the Galaxy");
	$(".marvel_logo_load").hide();
});


const writeToDOM = ((chars, name)=>{
	let domString = "";
		
	for (let m=0; m < chars.length; m++) {
		if (chars[m].team_name === name){
		
			domString += `<div class="container characterCard row col-sm-3">`;
			domString += `<img src="${chars[m].image}">`;
			domString += `<h3>${chars[m].name}</h3>`;
			domString += `<p>${chars[m].description}</p>`;
				if (chars[m].gender_id === 0){
					characterCard.addClass(".pinkBorder");
				}
			domString += `</div>`;
			
		}
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



// let teamsArray = [];
// let genderArray = [];
// let characters;


///////////////////////////////////////////////////////////////////
///// function dataGetter = Promise taking the objects returns by ajax 
//  pulling them together and seperating them to be accessed   ///////
///////////////////////////////////////////////////////////////////

const dataGetter = (teamName) => {Promise.all([loadGenders(), loadTeams(), loadCharacters()])
	.then((result)=>{
		let genders = result[0];
		let teams= result[1];
		let characters = result[2];
		console.log(result);	
		// let charactersArray = [];
		characters.forEach((char)=>{
			teams.forEach((team) => {
				genders.forEach((gender) => {
					if (char.team_id === team.id){
						char.team_name = team.name;
					}
					if (char.gender_id === gender.id){
						char.gender_name = gender.type;
					}
					if(char.description === ""){
						if(char.gender_name === "Female"){
							char.description = "abcde fghij klmno pqrst uvwxy z";
						}else {
							char.description = "1234567890";
						}

					}
				});		
			});
		});
	writeToDOM(characters, teamName);
	});

};


});