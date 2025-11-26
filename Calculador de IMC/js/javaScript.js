// Clase que realiza el cálculo del IMC
class CalculadoraIMC {

    calcularIMC(peso, altura) {
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            return null;
        }

        return (peso / (altura * altura)).toFixed(2);
    }

    obtenerCategoria(imc) {
        if (imc < 18.5) return "Bajo peso";
        if (imc >= 18.5 && imc < 25) return "Normal";
        if (imc >= 25 && imc < 30) return "Sobrepeso";
        return "Obesidad";
    }

    // Retorna la imagen según la categoría
    obtenerImagen(categoria) {
        const imagenes = {
            "Bajo peso": "https://static.misionesonline.news/wp-content/uploads/2017/09/bajo-peso-61i7f7jofk70.jpg",
            "Normal": "https://www.colmena.cl/source/wp-content/uploads/2018/01/IMC.jpg",
            "Sobrepeso": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-q1Xrt0mZCNOVhDs90goQMhmXxgjL-yCqg&s",
            "Obesidad": "https://www.clikisalud.net/wp-content/uploads/2016/08/shutterstock_263824958.jpg"
        };

        return imagenes[categoria];
    }
}

// -------------------------
// --- Lógica del DOM ---
// -------------------------

const btn = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");
const imgCategoria = document.getElementById("imagenCategoria");

// Crear instancia de la clase
const calculadora = new CalculadoraIMC();

// Evento click
btn.addEventListener("click", () => {

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = calculadora.calcularIMC(peso, altura);

    if (imc === null) {
        resultado.textContent = "Por favor ingresa valores numericos validos.";
        imgCategoria.style.display = "none";
        return;
    }

    const categoria = calculadora.obtenerCategoria(imc);
    const imagen = calculadora.obtenerImagen(categoria);

    // Mostrar en el DOM
    resultado.textContent = `Tu IMC es ${imc} → Categoria: ${categoria}`;
    
    imgCategoria.src = imagen;
    imgCategoria.style.display = "block";
});
