//Pegamos os elementos html e checkbox
const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)
    
const initialColors = {
    //Pegamos as cores do CSS direto pelo HTML
    bg: getStyle(html,"--bg"),
    bgPanel:getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text")
}

const darkColors = {
    //Colocamos as cores do darkMode
    bg: "#333333",
    bgPanel:"#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

/* Fomatando as chaves para alterar a cor no HTML/CSS */
const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
   Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

//Adicionamos ações quando ouver "mudanças - change" no target

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkColors) : changeColors(initialColors)
})


checkbox.addEventListener("change", ({target}) => {
/* target.checked ? changeColors(darkColors) : changeColors(initialColors);*/
    if(checkbox.checked){
        changeColors(darkColors);
    }else{
        changeColors(initialColors);
    }
    
})