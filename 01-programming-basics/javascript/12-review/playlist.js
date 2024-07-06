/* 
  Array and Object Manipulation
  Objective: Practice working with arrays and objects.
  Exercise:

  Create an array (playlist) of objects representing songs (title, artist).

  Write functions to:

  CRUD

  - Add a new song to the array.
  - Find a song by title.
  - Print the playlist.
  - Update a song's artist/title.
  - Remove a song by title.
*/

// WHAT TO DO BEFORE WE FIGURE OUT HOW TO DO IT

// PSEUDOCODE - english
/* 
  THOUGHTS

  Create an array to contain the song objects.
  
  ADD:
  Create a function to add a song object to the array.
  This function should accept playlist, title and artist parameters.
  Create an object with title and artist properties.
  The title and artist arguments will be the properties' values.
  Push the song object into the playlist array.
*/

const playlist = [];

function addToPlaylist(playlist, title, artist) {
  const song = { title: title, artist: artist };
  playlist.push(song);
}

addToPlaylist(playlist, 'Stay Up, Stay Lifted', 'Seeso and DPG35000');
addToPlaylist(playlist, 'Help!', 'Beatles');
addToPlaylist(playlist, 'Single Ladies', 'Beyoncé');

console.log(playlist);

/* 
  FIND A SONG BY TITLE

  Create a function to find a song by its title.
  This function should accept playlist and title parameters.
  Iterate through the array with a for loop.
  Inside the loop, write a condition that compares each title with the title argument.
  Inside the loop, log the song if we find it.
  Outside the loop, log "Song not found."
*/

function findSong(playlist, title) {
  for (let song of playlist) {
    if (song.title === title) {
      console.log('Song found!');
      console.log(`Title: ${song.title}, Artist: ${song.artist}`);
      return; // the function exits
    }
  }
  console.log('Song not found.');
}

findSong(playlist, 'Single Ladies');
findSong(playlist, 'Barbie');

function printPlaylist(playlist) {
  for (let i = 0; i < playlist.length; i++) {
    // template literal syntax
    console.log(
      `Track ${i + 1}: Title: ${playlist[i].title}, Artist: ${
        playlist[i].artist
      }`
    );

    // string concatenation
    console.log(
      'Track ' +
        (i + 1) +
        ': Title: ' +
        playlist[i].title +
        ', Artist: ' +
        playlist[i].artist
    );
  }
}

printPlaylist(playlist);

/*
  Difference between "in" and "of:

  console.log('THIS IS THE IN LOOP');
  for (let mystery in playlist) {
    console.log(mystery);
  }

  console.log('\n');

  console.log('THIS IS THE OF LOOP');
  for (let mystery of playlist) {
    console.log(mystery);
  }
*/
