//--------------------------------ETAPE 1 (Créer notre grille de 8x8)-------------------------------------------//


function creationGrille (taille){

const invader = document.querySelector("#invader");

for (let i = 0 ; i < taille ; i++) {
    for (let j = 0 ; j < taille ; j++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        invader.append(pixel);
        }
    }
}

creationGrille(8)


//----------------------------ETAPE 2 (Evenement des couleurs sur les pixels)------------------------------//

invader.addEventListener("click",(event) => {
    const target = event.target;
    if(target.classList.contains("black")){
        target.classList.remove("black")
        target.classList.add("grey")
    }
    else if (target.classList.contains("grey")){
        target.classList.remove("grey")
        target.classList.add("black");
    }
    else {
        target.classList.add("black");
    }
});


//-----------------------------------ETAPE 3 (Créer 2 inputs + un button)-------------------------------------------//


const header = document.querySelector("header")
const form = document.querySelector(".configuration")

const inputGrille = document.createElement("input");
inputGrille.type="text"
inputGrille.id = "input1"
inputGrille.placeholder = "Taille de la grille"
form.append(inputGrille)

const inputPixel = document.createElement("input");
inputPixel.type="text"
inputPixel.id = "input2"
inputPixel.placeholder = "Taille des pixels"
form.append(inputPixel)

const button = document.createElement("button");
button.type ="button"
button.value="valider"
button.id="button"
form.append(button)

//-----------------------ETAPE 3 (Ajouter évènement créationGrille au contenu des inputs)-------------------------------------------//

button.addEventListener("click", () => { 
    const invader = document.querySelector("#invader");
    invader.innerHTML=""
    creationGrille(inputGrille.value)
})
















