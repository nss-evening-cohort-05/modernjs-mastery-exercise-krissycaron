// Use AJAX | Promises to load all 3 JSON files
$(document).ready(function(){
// const outputContainer = $("#output");


//////////////////////////////////////////////////////////////
//////////////// DOM functions are going here////////////////

///// click events on the 3 buttons to call the data from the db files 
$("#btn0").on("click", ()=> {
	dataGetter("X-Men");
	$(".marvel_logo_load").hide();
});

$("#btn1").on("click", ()=> {
	dataGetter("The Avengers");
	$(".marvel_logo_load").hide();
});

$("#btn2").on("click", ()=> {
	dataGetter("Guardians of the Galaxy");
	$(".marvel_logo_load").hide();
});


const writeToDOM = ((chars, name)=>{
	let domString = "";
		
	for (let m=0; m < chars.length; m++) {
		if (chars[m].team_name === name){
			if(m%3===0){
			domString += `<div class="row">`
		}
			domString += `<div class="container characterCard col-sm-3">`;
			domString += `<div class="panel">`;
		if (chars[m].gender_id === 0){
			domString += `<img class="pinkBorder" src="${chars[m].image}">`;
		} else {
			domString += `<img class="blueBorder" src="${chars[m].image}">`;
		}
			domString += `<div class="panel-heading">`
			domString += `<h3>${chars[m].name}</h3>`;
			domString += `</div>`
			domString += `<div class="panel-body">`
			domString += `<p>${chars[m].description}</p>`;
			domString += `</div>`;
			domString += `</div>`;
			domString += `</div>`;	
			
		if(m%3===2){	
			domString += `</div>`;
		}
		}
	}
	$("#output").html(domString);
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

///////////////////////////////////////////////////////////////////
///// function dataGetter = Promise taking the objects returns by ajax 
//  pulling them together and seperating them to be accessed   ///////
///////////////////////////////////////////////////////////////////

const dataGetter = (teamName) => {Promise.all([loadGenders(), loadTeams(), loadCharacters()])
	.then((result)=>{
		let genders = result[0];
		let teams= result[1];
		let characters = result[2];	
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