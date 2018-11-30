'use strict';

class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    if (playlist instanceof Playlist) {
      this.playlists.push(playlist);
    }
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    if (track instanceof Track) {
      this.tracks.push(track);
    }
  }

  overallRating() {
    let overall = 0;

    this.tracks.forEach((song) => {
      overall += song.rating;
    });

    return overall / this.tracks.length;
  }

  totalDuration() {
    let total = 0;

    this.tracks.forEach((song) => {
      total += song.length;
    });

    return total;
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const libraryNew = new Library('Coding', 'Jska');
const playlistNew = new Playlist('OOP');
const trackNew = new Track('JS', 15, 360);

playlistNew.addTrack(trackNew);
libraryNew.addPlaylist(playlistNew);

console.log('New library: ', libraryNew);
console.log('New playlist: ', playlistNew);
console.log('New track: ', trackNew);
console.log('playlist1.overallRating(): ', playlistNew.overallRating());
console.log('playlist1.totalDuration(): ', playlistNew.totalDuration());
