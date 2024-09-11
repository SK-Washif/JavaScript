const lyrics = "Tumi bondhu kala pakhi ami jani ki. bosonto kale tomai bolte pari ni. kala kala sada sada";
console.log(lyrics);

const  parts= lyrics.split(" ");
console.log(parts);

const sentences= lyrics.split(".");
console.log(sentences);

const chars= lyrics.split('');
console.log(chars);

const partial= lyrics.slice(15,20);
console.log(partial);

const partial2= lyrics.substring(15,20);
console.log(partial2);

//join
const lines= [
  'Tumi bondhu kala pakhi ami jani ki',
  ' bosonto kale tomai bolte pari ni',
  ' kala kala sada sada'
];

const newSong= lines.join(':');
console.log(newSong);

