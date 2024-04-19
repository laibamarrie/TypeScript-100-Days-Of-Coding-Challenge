// 40: Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title,and it should return a Object 
// containing these two pieces of information.Use the function to make three dictionaries 
// representing different albums.Print each return value to show that Objects are storing the album 
// information correctly.Add an optional parameter to make album() that allows you to store the 
// number of tracks on an album.If the calling line includes a value for the number of tracks,add
// that value to the album's Object.Make at least one new function call that includes the number of 
// tracks on an album.

function makeAlbum (artist:string, title:string, tracks?:number ):object{
    return {
        artist,
        title,
        tracks,
    };
}
    const album1 = makeAlbum("Doja Cat","Scarlet");
    const album2 = makeAlbum("Selena Gomez","Rare");
    const album3 = makeAlbum("Billie Eilish","Happier Than Ever",16);

    console.log(album1);
    console.log(album2);
    console.log(album3);

// 41: Magicians: Make a array of magician's names.Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

const magicians: string[] = ["Ricky Jay","Harry Kellar","Mac King","David Blaine"];
show_magicians(magicians);

function show_magicians(magicians:string[]):void {
    for (const magician of magicians){
        console.log(magician);
    }
};

// 42: Great Magicians: Start with a copy of your program from Exercise 39.Write a function called make
// _great()that modifies the array of magicians by adding the phrase the Great to each magician's name.
// Call show_magicians() to see that the list has actually been modified.

function make_great (magicians: string[]):void {
    for (let i = 0; i < magicians.length; i++)
    magicians[i] = magicians[i] + " the Great ";
}
const magicians2: string[] = ["Ricky Jay","Harry Kellar","Mac King","David Blaine"];
make_great(magicians);
show_magicians(magicians);
