document.getElementById('generate-button').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const imageOutput = document.getElementById('image-output');
    
    if (textInput.trim() !== '') {
        // Muestra un mensaje de carga mientras la IA "piensa"
        imageOutput.innerHTML = `<p>Generando imagen... Por favor espera.</p>`;
        
        // Simulación de la respuesta de la IA con una imagen Base64
        setTimeout(() => {
            // IMAGEN DE EJEMPLO INCORPORADA DIRECTAMENTE EN EL CÓDIGO (BASE64)
            // La cadena de texto se ha dividido para evitar errores al copiar y pegar.
            const base64Image = "data:image/svg+xml;base64," +
                "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDc2ZmYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+SW1hZ2VuIEFJPC90ZXh0Pjwvc3ZnPg==";
            const generatedImageAlt = `Imagen generada para la frase: "${textInput}"`;
            
            // Crea la imagen y la muestra en la página
            imageOutput.innerHTML = `
                <img src="${base64Image}" alt="${generatedImageAlt}">
                <p class="image-caption">Imagen generada por IA para: <strong>"${textInput}"</strong></p>
            `;
            
        }, 3000); // 3 segundos de espera para simular la generación
        
    } else {
        // Mensaje de error si el campo de texto está vacío
        imageOutput.innerHTML = `<p>Por favor, escribe una frase para empezar a visualizar.</p>`;
    }
});
