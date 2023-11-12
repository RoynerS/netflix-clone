document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log(username)
  try {
      const response = await fetch('http://127.0.0.1:8000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
          const data = await response.json();
          alert(data.message); 
          window.location.href = '/Profile.html'; 
      } else {
          alert('Credenciales incorrectas');
      }
  } catch (error) {
      console.error(error);
      alert('Error en la solicitud');
  }
});


