const loadData = async (url) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/movies', {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      console.log("se terminó la petición");
    }
  };
  