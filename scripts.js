//Pegamos os elementos html e checkbox
const html = document.querySelector("html");
const checkbox = document.querySelector("input [name=theme]");

const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style)
    
const initialColors = {
    //Pegamos as cores do CSS direto pelo HTML
    background: getStyle(html,"--bg"),
    backgroundPanel:getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text")
}

const dackColors = {
    //Colocamos as cores do darkMode
    background: "#333333",
    backgroundPanel:"#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const changeColors = (colors) => {
    console.log(colors)
}

//Adicionamos ações quando ouver "mudanças - change" no target
checkbox.addEventListener("change", ({target}) => {
    if(target === checked){
        changeColors();
    }else{
        changeColors();
    }
})