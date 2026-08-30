"use strict";
var MusicGenre;
(function (MusicGenre) {
    MusicGenre[MusicGenre["Pop"] = 0] = "Pop";
    MusicGenre[MusicGenre["RnB"] = 1] = "RnB";
    MusicGenre[MusicGenre["HipHop"] = 2] = "HipHop";
    MusicGenre[MusicGenre["Rock"] = 3] = "Rock";
    MusicGenre[MusicGenre["Jazz"] = 4] = "Jazz";
})(MusicGenre || (MusicGenre = {}));
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
const memberTwo = {
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
const memberThree = {
    title: "Why'd You Only Call Me When You're High?",
    artist: "Arctic Monkeys",
    genre: MusicGenre.Rock,
    releaseYear: 2013,
    addedBy: "Eunice Grace O. Revillas",
    print() {
        console.log(`Title: ${this.title}`);
        console.log(`Artist: ${this.artist}`);
        console.log(`Genre: ${MusicGenre[this.genre]}`);
        console.log(`Release Year: ${this.releaseYear}`);
        console.log(`Added By: ${this.addedBy}`);
    }
};
memberThree.print();
const memberFour = {
    title: "Love Yourself: Tear",
    artist: "BTS",
    genre: MusicGenre.Pop,
    releaseYear: 2018,
    addedBy: "Bianca Lauryn H. Magno",
    print() {
        console.log(`Title: ${this.title}`);
        console.log(`Artist: ${this.artist}`);
        console.log(`Genre: ${MusicGenre[this.genre]}`);
        console.log(`Release Year: ${this.releaseYear}`);
        console.log(`Added By: ${this.addedBy}`);
    }
};
memberFour.print();
