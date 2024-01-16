const textarea = document.getElementById('passwordInput');

textarea.addEventListener('keydown', (e) => {
  if (e.key === 13) {
    e.preventDefault();
  }
});

function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const passwords = ['gockelhahn', 'yaraxtendo', 'bulachi'];

  if (passwords.includes(password)) {
    window.location.href = 'success.html';
  } else {
    document.getElementById('message').textContent = 'try again bro';
  }
}
