// Primero, necesito tener todos mis paneles en JS, en variables
const panels = document.querySelectorAll('.panel') // Seleccionamos todos, si dejasemos document.querySelector, seleccionaría solo el primero

panels.forEach(panel => { //recorremos todos los paneles 
    panel.addEventListener ('click' , () => {//Asignamos un evento para cada panel, en este caso que responda al click y ejecute una función
        removeActiveClasses() //Eliminaremos la clase active del panel que la tenga para que no haya dos paneles con la clase active
        panel.classList.add('active') // classList.adc nos permite añadir una clase a cada panel al que hagamos click
    }) 
})
function removeActiveClasses() { //Haremos lo mismo que antes, un loop en todos los paneles y borraremos el panel con la clase active
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}