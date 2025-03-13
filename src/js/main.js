"use strict";

window.onload = () => {
    getWords();
}

async function getWords() {let url = 'https://wordsapiv1.p.rapidapi.com/words/inspire/synonyms';
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
    console.log(synonyms);
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
      width: 800,
      height: 800,
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
      var img = document.getElementById("wordCloud");
      img.src = wordCloud;
      img.height = 800;
      img.width = 800;
    })
    .catch(err => {
      console.log(err);
    });
}
