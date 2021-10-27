// The function works by picking a random element from a string 
// with 67 alphanumeric and special characters
// and assigns it to the pass array
// which is joined into a string at the end
// If the string doesn't have at least one lowercase, one uppercase,
// one number and one special character, it generates a new string again.
function generatePass(){
    document.getElementById("usr").value='';
    let n=15;
    const charactersAvailable = "abcdefghijklmnopqrstuvwxyz#$%&_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    n=document.getElementById("range").value;
    let pass;
    const regex_az = new RegExp("[a-z]");
    const regex_AZ = new RegExp("[A-Z]");
    const regex_09 = new RegExp("[0-9]");
    const regex_special = new RegExp("[#$%&_]");
    do {
        pass=[];
        for (let i=0; i<n; i++)
            pass[i]=charactersAvailable[Math.floor(Math.random()*67)+1];
        pass=pass.join('');
    } while (!(regex_az.test(pass) && regex_AZ.test(pass) && regex_09.test(pass) && regex_special.test(pass)));
    document.getElementById("usr").value=pass;
}