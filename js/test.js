async function cargarPreguntas() {
    try {
        const response = await fetch('preguntas.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const preguntas = await response.json();
        console.log(preguntas); // Verifica en la consola si las preguntas se cargan correctamente
        const contenedor = document.getElementById("pregunta-container");

        preguntas.forEach((pregunta, index) => {
            const divPregunta = document.createElement('div');
            divPregunta.classList.add('pregunta');
            divPregunta.innerHTML = `
                <label for="pregunta${index + 1}">${pregunta.pregunta}</label><br>
                <input type="radio" name="respuesta${index}" value="1" id="pregunta${index + 1}_1"> Nunca
                <input type="radio" name="respuesta${index}" value="2" id="pregunta${index + 1}_2"> Casi nunca
                <input type="radio" name="respuesta${index}" value="3" id="pregunta${index + 1}_3"> A veces
                <input type="radio" name="respuesta${index}" value="4" id="pregunta${index + 1}_4"> Casi siempre
                <input type="radio" name="respuesta${index}" value="5" id="pregunta${index + 1}_5"> Siempre
            `;
            contenedor.appendChild(divPregunta);
        });
    } catch (error) {
        console.error('Error al cargar las preguntas:', error);
    }
}
