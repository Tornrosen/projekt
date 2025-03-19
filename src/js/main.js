"use strict";

window.onload = () => {
    getWords();
}  

let showBtnEl = document.getElementById("showBtn");
showBtnEl.addEventListener("click", chooseWord);

async function chooseWord() {
  let chosenWord = document.querySelector("#inputField").value;
  let url = `https://wordsapiv1.p.rapidapi.com/words/${chosenWord}/synonyms`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4147a18a71msh780f3ba99ed6a57p11d9c0jsn4e61f3a1fe94',
		'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
    const synonyms = result.synonyms;
    const synonym = result.synonyms.slice(0,1);
    getPhotos(synonym);
    makeCloud(synonyms);
} catch (error) {
	console.error(error);
}
}

  async function getPhotos(data) {
    let images = [];
   await fetch(
  `https://api.pexels.com/v1/search?query=${data}&orientation=landscape&per_page=4`,
  {
    headers: { 'Authorization': "gD1EXTCq3YIuboCH8Jysz1cHQDtcvmITsdpWCJh4PVEJsQ84ntboHjbp" }
  }).then(result => result.json())
  .then(json => {
    images = json['photos']
  });
  showImages(images);
  }

  async function showImages(images) {
    let photoSpaceEl = document.getElementById("photoSpace");
    photoSpaceEl.innerHTML ="";
    images.forEach(image => {
      let imageEl = document.createElement ("img");
      imageEl.src = image.src.original;
      imageEl.height = 400;
      imageEl.width = 600;
      console.log (photoSpaceEl);
      photoSpaceEl.appendChild(imageEl);
    });
      console.log(images);
  }

async function getWords() {let url = 'https://wordsapiv1.p.rapidapi.com/words/light/synonyms';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4147a18a71msh780f3ba99ed6a57p11d9c0jsn4e61f3a1fe94',
		'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    const synonyms = result.synonyms;
    const synonym = result.synonyms.slice(0,1);
    getPhotos(synonym);
    makeCloud(synonyms);
} catch (error) {
	console.error(error);
}}

async function makeCloud(data) {fetch("https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud", {
    method: "POST",
    headers: {
      "x-rapidapi-host": "textvis-word-cloud-v1.p.rapidapi.com",
      "x-rapidapi-key": "4147a18a71msh780f3ba99ed6a57p11d9c0jsn4e61f3a1fe94",
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({
      text: `${data}`,
      scale: 1,
      width: 500,
      height: 500,
      colors: ["#375E97", "#FB6542", "#FFBB00", "#3F681C"],
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
      img.height = 500;
      img.width = 500;
    })
    .catch(err => {
      console.log(err);
    });
}

