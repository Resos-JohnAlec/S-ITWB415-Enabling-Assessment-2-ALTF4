"use strict";
var MusicGenre;
(function (MusicGenre) {
    MusicGenre[MusicGenre["Pop"] = 0] = "Pop";
    MusicGenre[MusicGenre["RnB"] = 1] = "RnB";
    MusicGenre[MusicGenre["HipHop"] = 2] = "HipHop";
    MusicGenre[MusicGenre["Rock"] = 3] = "Rock";
    MusicGenre[MusicGenre["Jazz"] = 4] = "Jazz";
})(MusicGenre || (MusicGenre = {}));
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
const memberOne = {
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
