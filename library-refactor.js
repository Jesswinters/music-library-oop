var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"],
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"],
    }
  },
  printPlaylists: function () {
    for (var list in this.playlists) {
      id = this.playlists[list].id;
      name = this.playlists[list].name;
      tracks = this.playlists[list].tracks.length;
  
      console.log(id + ': ' + name + ' - ' + tracks + ' tracks');
    }
  },
  printTracks: function () {
    for (var songs in this.tracks) {
      id = this.tracks[songs].id;
      name = this.tracks[songs].name;
      artist = this.tracks[songs].artist;
      album = this.tracks[songs].album;
  
      console.log(id + ': ' + name + ' by ' + artist + ' (' + album + ')');
    }
  },
  printPlaylist: function (playlistId) {
    var playlistId = this.playlists[playlistId];
    console.log(playlistId.id + ': ' + playlistId.name + ' - ' + playlistId.tracks.length + ' tracks');
  
    var trackInfo = playlistId.tracks;
  
    for (let i = 0; i < trackInfo.length; i++) {
      var trackData = this.tracks[trackInfo[i]];
      console.log(trackData.id + ': ' + trackData.name + ' by ' + trackData.artist + ' (' + trackData.album + ')');
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    for (var addedTrack in this.tracks) {
      if (addedTrack === trackId) {
        for (var addedPlaylist in this.playlists) {
          if (addedPlaylist === playlistId) {
            this.playlists[playlistId].tracks.push(trackId);
            console.log(this.playlists[playlistId].tracks);
          }
        }
      }
    }
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    id = this.uid();
  
    this.tracks[id] = {
      id: id,
      name: name,
      artist: artist,
      album: album
    };

    console.log(this.tracks);
  },
  addPlaylist: function (name) {
    id = this.uid();
  
    this.playlists[id] = {
      id: id,
      name: name,
      tracks: ""
    };

    console.log(this.playlists);
  },
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist('p02');

// adds an existing track to an existing playlist

library.addTrackToPlaylist('t02', 'p02');

// adds a track to the library

library.addTrack('Dis Test', 'Cool Person', 'Code4Lyf');

// adds a playlist to the library

library.addPlaylist('p03');

// STRETCH:
// given a query string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
