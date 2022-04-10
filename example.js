//create a new instance of the class
var godisdead = new Ogre();


//cursify with shreks onions.
function cursify() {
    var victim = document.getElementById('victim').value;
    var result = godisdead.Generate(victim);
    document.getElementById('ogre').innerHTML = result;
}