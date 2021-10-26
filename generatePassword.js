// The function works by picking a random element from a string 
// with 67 alphanumeric and special characters
// and assigns it to the pass array
// which is joined into a string at the end
function generatePass(){
    document.getElementById("usr").value='';
    let n=15;
    const charactersAvailable = "abcdefghijklmnopqrstuvwxyz#$%&_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    n=document.getElementById("range").value;
    let pass=[];
    for (let i=0; i<n; i++)
        pass[i]=charactersAvailable[Math.floor(Math.random()*67)+1];
    pass=pass.join('');
    document.getElementById("usr").value=pass;
}