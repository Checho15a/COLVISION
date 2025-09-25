document.getElementById('generate-button').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const imageOutput = document.getElementById('image-output');
    
    if (textInput.trim() !== '') {
        // Muestra un mensaje de carga mientras la IA "piensa"
        imageOutput.innerHTML = `<p>Generando imagen... Por favor espera.</p>`;
        
        // Aquí es donde se conectaría la API de la IA en la vida real.
        // Simularemos la respuesta de la IA con un tiempo de espera.
        setTimeout(() => {
            // Ejemplo de cómo la IA respondería con una imagen
            // La URL de Imgur anterior dejó de funcionar, esta es una nueva.
            const generatedImageURL = "https://cdn.pixabay.com/photo/2021/08/17/14/43/hello-6552943_1280.png";
            const generatedImageAlt = `Imagen generada para la frase: "${textInput}"`;
            
            // Crea la imagen y la muestra en la página
            imageOutput.innerHTML = `
                <img src="${generatedImageURL}" alt="${generatedImageAlt}">
                <p class="image-caption">Imagen generada por IA para: <strong>"${textInput}"</strong></p>
            `;
            
            // Aquí iría el código para manejar la respuesta real de tu IA
            // fetch('URL_DE_TU_API', {
            //     method: 'POST',
            //     body: JSON.stringify({ text: textInput })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     // Lógica para mostrar la imagen real
            // });
            
        }, 3000); // 3000 milisegundos = 3 segundos de espera para simular la generación
        
    } else {
        // Mensaje de error si el campo de texto está vacío
        imageOutput.innerHTML = `<p>Por favor, escribe una frase para empezar a visualizar.</p>`;
    }
});