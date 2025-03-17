function closeWelcomeScreen() {
  document.getElementById('welcome-screen').classList.add('hidden');
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Você será direcionado ao local de upload e download');
  });
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
    document.getElementById('login-screen').classList.add('hidden');
    alert('Bem-vindo ao controle de serviços entre PRUDENCO e SEDUC!');
    document.querySelectorAll('.year-navigation a').forEach(link => {
      link.classList.remove('disabled');
    });
  }
});
