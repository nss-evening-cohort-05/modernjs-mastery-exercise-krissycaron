# ModernJS Mastery Exercise
### Marvel Comic Characters
#### Modern Javascript Mastery
###### April 2017 

#### What We Learned
This was the end of our Morder Javascript Milestone. These are the technologies and elements we learned and used in this milestone challenge.  
	- JQUERY
	- Bower 
	- NPM
	- Promises
	- AJAX calls
	- ES6 Syntax

Also used in this assignment: 
	- HTML
	- CSS 
	- Javascript
	- JQUERY

#### Description of Challenge: 
	The Challenge was broken into two peices, the behavior of the page and the technical requirements. The general concept was to build a used car lot website where the cars could be selected and then on selection the text box would gain focus and whatever was typed would be mirrored in the description area of the card. 

###### **Behavior**
	###### Requirements for page load: 
	* There should be a bootstrap navbar
	* Should have marvel logo for brand
	* Should be a button for each team in the teams.json file (go ahead and hard code these for now - if you have extra time see if you can add them dynamically)
	* There should be a large Marvel logo
	Screenshot
	###### Required click events:
	* The large Marvel logo should go away (use a jQuery method for this)
	* The click event should call a function called dataGetter that has a Promise.all
	* The Promise.all should resolve 3 functions that get the data from the json files
	* dataGetter should pass a SINGLE array to the writeDom function
	* The writeDom function should write everything to the DOM 


###### **Technical Requirements**

	###### Data Requirements:
	* You can't change ANY of the JSON files
	* If there is no description for a character (ie description is "") your code should change the description as follows:
		* A female character with no description should get a description of "abcde fghij klmno pqrst uvwxy z"
		* A male character with no description should get a description of "1234567890"
	###### Style Requirements:
	* Each character should be displayed in a bootstrap panel
	* Each character's image should be a circle and have a border color of:
	* Blue if the character is Male
	* Pink if the character is Female
	* There should be 4 panels in each row
	* Each row should have a bootstrap row class




##### Viewing the Site 
	- Clone and pull down repo and then run your local server. 
	- run bower and npm install



##### Contributors

Krissy Caron


