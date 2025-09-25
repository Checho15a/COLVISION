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
                "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iMTAwJSIg" +
                "aGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA3NmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI1MCIg" +
                "dGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiPkl2YWdlbiBBSTwvdGV4dD48L3N2Zz4=";
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
