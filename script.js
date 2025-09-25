document.getElementById('generate-button').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const imageOutput = document.getElementById('image-output');
    
    if (textInput.trim() !== '') {
        // Muestra un mensaje de carga mientras la IA "piensa"
        imageOutput.innerHTML = `<p>Generando imagen... Por favor espera.</p>`;
        
        // Aquí es donde se conectaría la API de la IA en la vida real.
        // Simularemos la respuesta de la IA con un tiempo de espera.
        setTimeout(() => {
            // **NUEVA IMAGEN DE EJEMPLO DE UN SERVICIO ESTABLE (Placeholder.com)**
            // Esta URL genera una imagen gris simple con el tamaño 400x300
            // y el texto "Imagen IA" dentro. Es muy confiable.
            const generatedImageURL = "https://via.placeholder.com/400x300?text=Imagen+IA+Generada";
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
            //     // Lógica para mostrar la imagen real (data.image_url)
            //     imageOutput.innerHTML = `
            //         <img src="${data.image_url}" alt="${generatedImageAlt}">
            //         <p class="image-caption">Imagen generada por IA para: <strong>"${textInput}"</strong></p>
            //     `;
            // });
            
        }, 3000); // 3000 milisegundos = 3 segundos de espera para simular la generación
        
    } else {
        // Mensaje de error si el campo de texto está vacío
        imageOutput.innerHTML = `<p>Por favor, escribe una frase para empezar a visualizar.</p>`;
    }
});
