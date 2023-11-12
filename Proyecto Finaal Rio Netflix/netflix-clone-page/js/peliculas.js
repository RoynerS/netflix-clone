const loadData = async (containerId) => {
    const options = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/movies',
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    };

    try {
        const response = await axios.request(options);
        const dataContainer = document.getElementById(containerId);
        console.log("Datos recibidos:", response.data);

        // Asegúrate de ajustar la propiedad según la estructura real de tus datos
        const resultados = response.data || [];

        resultados.forEach((pelicula) => {
            const card = document.createElement("div");
            card.classList.add("pelicula");

            const title = pelicula.nombre?.text || "Título no disponible";
            const image = pelicula.portada?.url || "/img/1.jpg";
            const releaseYear = pelicula.fecha_lanzamiento?.year || "Año de lanzamiento desconocido";

            // <h3>${title}</h3>
            // <p>Año de lanzamiento: ${releaseYear}</p>
            card.innerHTML = `
                <a href="#"><img src="${image}" alt="${title}"></a>
            `;

            dataContainer.appendChild(card);
        });
    } catch (error) {
        console.error("HUBO UN ERROR EN LA PETICION:", error);
    } finally {
        console.log("YA SE ACABO EL PROCESAMIENTO DE DATOS");
    }
};

loadData("vistas");
