let AgeArtist = prompt("Enter the age of your favorite artist:"); 
if (AgeArtist < 25) { 
    document.write(`They're ${AgeArtist} old and they're younger than Google`); 
}

else if (AgeArtist === 25) { 
    console.log(`They're ${AgeArtist} and they're as old as Google`); 
}

else { 
    alert(`They're ${AgeArtist} and they're older than Google`); 
}
