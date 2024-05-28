window.onload = () => {
    const formulario = document.getElementById("formulario")

    formulario.onsubmit = (event) =>{
        event.preventDefault();

        const ladoA = parseFloat(document.getElementById("ladoA").value);
        const ladoB = parseFloat(document.getElementById("ladoB").value);
        const ladoC = parseFloat(document.getElementById("ladoC").value);

        let areaChica = ((ladoA-ladoC)*ladoB)/2
        let areaGrande = ladoC*ladoB

        const resultado = document.getElementById("Resultado")
        resultado.innerHTML = `El resultado del area es: ${areaChica + areaGrande}`
    }
}