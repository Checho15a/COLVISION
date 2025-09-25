document.getElementById('generate-button').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const imageOutput = document.getElementById('image-output');
    
    if (textInput.trim() !== '') {
        // Muestra un mensaje de carga mientras la IA "piensa"
        imageOutput.innerHTML = `<p>Generando imagen... Por favor espera.</p>`;

        // CONFIGURACIÓN DE LA API DE DALL-E
        const YOUR_API_KEY = "TU_CLAVE_DE_API_AQUI"; 
        const API_ENDPOINT = "https://api.openai.com/v1/images/generations";

        // Llamada a la API de DALL-E
        fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${YOUR_API_KEY}`
            },
            body: JSON.stringify({
                "model": "dall-e-3",
                "prompt": textInput,
                "n": 1,
                "size": "1024x1024"
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta.');
            }
            return response.json();
        })
        .then(data => {
            // Revisa si la respuesta tiene la imagen (la URL de la imagen)
            if (data && data.data && data.data.length > 0) {
                const imageUrl = data.data[0].url;
                const generatedImageAlt = `Imagen generada para la frase: "${textInput}"`;
                
                // Crea la imagen y la muestra en la página
                imageOutput.innerHTML = `
                    <img src="${imageUrl}" alt="${generatedImageAlt}">
                    <p class="image-caption">Imagen generada por IA para: <strong>"${textInput}"</strong></p>
                `;
            } else {
                imageOutput.innerHTML = `<p>Error: No se pudo generar la imagen. Inténtalo de nuevo.</p>`;
            }
        })
        .catch(error => {
            console.error('Error al llamar a la API:', error);
            imageOutput.innerHTML = `<p>Ocurrió un error. Por favor, verifica tu clave de API o los créditos.</p>`;
        });

    } else {
        // Mensaje de error si el campo de texto está vacío
        imageOutput.innerHTML = `<p>Por favor, escribe una frase para empezar a visualizar.</p>`;
    }
});
