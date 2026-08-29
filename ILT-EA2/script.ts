enum MusicGenre {
  Pop,
  RnB,
  HipHop,
  Rock,
  Jazz
}

type Album = {
  title: string;
  artist: string;
  genre: MusicGenre;
  releaseYear?: number;
  addedBy: string; 
  print: () => void;
};


// Template: copy this block, rename the variable, and replace the values after each ":"
// Do NOT edit the shared "Album" type or "MusicGenre" enum above.

// const member(Number): Album = {
//   title: "",            // Album title, e.g. "1989"
//   artist: "",            // Artist name, e.g. "Taylor Swift"
//   genre: MusicGenre.Pop, // Pick one: Pop, RnB, HipHop, Rock, Jazz
//   releaseYear: 0,         // Year the album was released, e.g. 2014
//   addedBy: "",            // Your full name
//   print() {
//     console.log(`Title: ${this.title}`);
//     console.log(`Artist: ${this.artist}`);
//     console.log(`Genre: ${MusicGenre[this.genre]}`);
//     console.log(`Release Year: ${this.releaseYear}`);
//     console.log(`Added By: ${this.addedBy}`);
//   }
// };
//
// member(Number).print();


const memberOne: Album = {
  title: "After Hours",
  artist: "The Weeknd",
  genre: MusicGenre.RnB,
  releaseYear: 2020,
  addedBy: "John Alec L. Resos", 
  print() {
    console.log(`Title: ${this.title}`);
    console.log(`Artist: ${this.artist}`);
    console.log(`Genre: ${MusicGenre[this.genre]}`);
    console.log(`Release Year: ${this.releaseYear}`);
    console.log(`Added By: ${this.addedBy}`);
  }
};

memberOne.print();


//PUT YOUR CODE BELOW THIS LINE

const memberTwo: Album = {
  title: "Magnolia",
  artist: "Magnolia Celebration",
  genre: MusicGenre.Rock,
  releaseYear: 2022,
  addedBy: "Patrick James S. Lauron", 
  print() {
    console.log(`Title: ${this.title}`);
    console.log(`Artist: ${this.artist}`);
    console.log(`Genre: ${MusicGenre[this.genre]}`);
    console.log(`Release Year: ${this.releaseYear}`);
    console.log(`Added By: ${this.addedBy}`);
  }
};

memberTwo.print();


//PUT YOUR CODE BELOW THIS LINE
