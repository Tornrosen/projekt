"use strict";

window.onload = () => {
    getWords();
}  

let showBtnEl = document.getElementById("showBtn");
showBtnEl.addEventListener("click", chooseWord);

/**
 * hämtar synonymer från API för förifyllt ord, för att visa upp något när sidan laddar,
 * samt kör funktionerna getPhotos och makeCloud
 * 
 * function getWords
 * @param {} 
 * @return void
 */
async function getWords() {
    let url = 'https://wordsapiv1.p.rapidapi.com/words/light/synonyms';
    let options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': '4147a18a71msh780f3ba99ed6a57p11d9c0jsn4e61f3a1fe94',
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
      }
  };
  
  try {
      let response = await fetch(url, options);
      let result = await response.json();
    let synonyms = result.synonyms;
    let synonym = result.synonyms.slice(0,1);
      getPhotos(synonym);
      makeCloud(synonyms);
  } catch (error) {
      console.error(error);
  }}

/**
 * hämtar synonym från API till ord som skrivits i sökfält
 * 
 * function chooseWord
 * @param {} void
 * @return void
 */

async function chooseWord() {
  let chosenWord = document.querySelector("#inputField").value;
  let url = `https://wordsapiv1.p.rapidapi.com/words/${chosenWord}/synonyms`;
  let options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4147a18a71msh780f3ba99ed6a57p11d9c0jsn4e61f3a1fe94',
		'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
	}
};
try {
	let response = await fetch(url, options);
	let result = await response.json();
  let synonyms = result.synonyms;
  getPhotos(chosenWord);
  makeCloud(synonyms);
} catch (error) {
	console.error(error);
}
}

/**
 * hämtar foton från API utifrån sökord eller synonym till ord (beroende på var funktionen körs),
 * samt kör funktionen showImages
 * @param {array} data 
 * @return void
 */
  async function getPhotos(data) {
    let images = [];
   await fetch(`https://api.pexels.com/v1/search?query=${data}&orientation=landscape&per_page=4`,
  {
    headers: { 'Authorization': "gD1EXTCq3YIuboCH8Jysz1cHQDtcvmITsdpWCJh4PVEJsQ84ntboHjbp" }
  })
  .then(result => result.json())
  .then(json => {
    images = json['photos']
  });
  showImages(images);
  }

  /**
   * skriver ut bilderna med title (fotografnamn) och alt-text
   * 
   * function showImages
   * @param {array} images 
   * @return void
   */

  async function showImages(images) {
    let photoSpaceEl = document.getElementById("photoSpace");
    photoSpaceEl.innerHTML ="";
    images.forEach(image => {
      let imageEl = document.createElement ("img");
      imageEl.src = image.src.original;
      imageEl.height = 400;
      imageEl.width = 600;
      photoSpaceEl.appendChild(imageEl);
      imageEl.title = image.photographer;
      imageEl.alt = image.alt;
    });
  }

/**
 * hämtar ett ordmoln från ett API och skriver ut detta till webbplatsen
 * 
 * function makeCloud
 * @param {array} data 
 * @return void
 */
async function makeCloud(data) {
  fetch("https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud", 
    {method: "POST",
    headers: {
      "x-rapidapi-host": "textvis-word-cloud-v1.p.rapidapi.com",
      "x-rapidapi-key": "4147a18a71msh780f3ba99ed6a57p11d9c0jsn4e61f3a1fe94",
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({
      text: `${data}`,
      scale: 1,
      width: 400,
      height: 400,
      colors: ["#0000CD", "#008000", "#FF8C00", "#8B0000", "#000000"],
      font: "Tahoma",
      use_stopwords: true,
      language: "en",
      uppercase: false
    })
  })
    .then(response => {
      return response.text();
    })
    .then(wordCloud => {
      let img = document.getElementById("wordCloud");
      img.src = wordCloud;
      img.height = 400;
      img.width = 400;
    })
    .catch(err => {
      console.log(err);
    });
}

