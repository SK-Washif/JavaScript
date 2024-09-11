const lyrics = "Tumi bondhu kala pakhi ami jani ki. bosonto kale tomai bolte [ari ni. kala kala sada sada";

const doesExist = lyrics.includes("Pakhi");
console.log(doesExist);

const searchString= "PaKhi";
const doesExistOneLine= lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);

console.log(lyrics.indexOf("kala"));

if(lyrics.indexOf("sada") != -1){
  console.log("condition sotto hobe ekhane. and ai jinis ta lyrrics a ache ");
}
else{
  console.log("condition sotto na hole eta print dibe. and ai jinish ta lyrics a nai");
}

console.log(lyrics.startsWith("Tumi"));

// end check
const fileName = "myBioData.pdf";
const show= fileName.endsWith(".pdf");
console.log(show);
