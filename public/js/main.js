let btnConnexion = document.querySelector(".connexion");
console.log(btnConnexion);
let divConnexion = document.querySelector("#pageConnexion")
console.log(divConnexion);
let btnClose = document.querySelector("#closeWindow")
console.log(btnClose);
let inscription = document.querySelector("#inscription")
let divInscri = document.querySelector("#formulaireNvx")
let subCo = document.querySelector("#subCo")

btnConnexion.addEventListener("click", () => {
    divConnexion.style.display = "block";
})

btnClose.addEventListener("click", () => {
    divConnexion.style.display ="none";
})

inscription.addEventListener("click", () =>{
    divInscri.style.display = "flex";
})

subCo.addEventListener("click", () =>{
    divInscri.style.display = "none";
})



let btnNoir = document.querySelector('.noir');
let btnBlanc = document.querySelector('.blanc');

let sombre = () => {
    document.body.style = "background-color:black"
    // logo.style.color = "white"
}


btnNoir.addEventListener('click', sombre)

let blanc = () => {
    document.body.style = "background-color:white"
    // logo.style.color ="black"
}
btnBlanc.addEventListener('click', blanc)
