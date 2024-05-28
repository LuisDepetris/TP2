window.onload = () => {
    const formulario = document.getElementById("formulario")

    formulario.onsubmit = (event) => {
        event.preventDefault();

        const inputPeso = document.getElementById("peso");
        const peso = inputPeso.value
        const inputAltura = document.getElementById("altura");
        const altura = inputAltura.value

        const resultado = document.getElementById("resultado");

        console.log(peso);
        console.log(altura);
        let calculo = peso / (altura**2);

        resultado.innerHTML = `Tu IMC es: ${calculo}`;

    }
}