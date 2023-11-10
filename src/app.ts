//--------------------------------Création d'une grille-------------------------------------------//
function gridCreation (size: number){

    const invader: HTMLElement | null = document.querySelector("#invader");
    document.documentElement.style.setProperty('--size', size.toString());
    
    if(invader){
    for(let i: number = 0 ; i < size ; i++) {
        for (let j:number = 0 ; j < size ; j++) {
            const pixel: HTMLDivElement = document.createElement("div");
            pixel.classList.add("pixel");
            invader.append(pixel);
            }
        }

    // Couleurs des cases au clic
    const pixels: NodeListOf<HTMLElement> = document.querySelectorAll(".pixel");
    if (pixels.length > 0) {
        pixels.forEach((pixel: HTMLElement) => {
            pixel.addEventListener("click", (event: MouseEvent) => {
                if (pixel.classList.contains("black")) {
                    pixel.classList.remove("black");
                    pixel.classList.add("grey");
                } else if (pixel.classList.contains("grey")) {
                    pixel.classList.remove("grey");
                    pixel.classList.add("black");
                } else {
                    pixel.classList.add("black");
                }
            });
        });
} else {
    console.log("Aucun élément avec la classe 'pixel' n'a été trouvé.");
}
    } else {
        console.log("Invader n'existe pas")
    }
}
    
gridCreation(8)

//---------------------------Inputs utilisateur pour générer une grille----------------------------------//

// Création des inputs + button
const form: HTMLElement | null = document.querySelector(".configuration")

if(form){
    const inputGrille: HTMLInputElement = document.createElement("input");
    inputGrille.type="text"
    inputGrille.id = "inputOne"
    inputGrille.placeholder = "Taille de la grille"
    form.append(inputGrille)

    const button: HTMLButtonElement = document.createElement("button");
    button.type ="button"
    button.innerText="Confirm"
    button.id="button"
    form.append(button)

    // Reset des couleurs
    function resetGrille(pixels: NodeListOf<HTMLElement>) {
        pixels.forEach((pixel: HTMLElement) => {
            pixel.classList.remove("black", "grey");
        });
    }

    // Génération de la grille 
    button.addEventListener("click", (event: MouseEvent) => { 
        const invader: HTMLElement | null = document.querySelector("#invader");
        if (invader) {
            invader.innerHTML = "";
    
            const gridSize: number = parseInt(inputGrille.value, 10);
    
            if (!isNaN(gridSize)) {
                gridCreation(gridSize);
            } else {
                console.error("Veuillez saisir un nombre entier valide pour la taille de la grille.");
            }
        }
    });
}