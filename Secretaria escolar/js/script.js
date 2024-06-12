document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulação de validação simples
    if (username === 'user' && password === 'password') {
        alert('Login bem-sucedido!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos!';
    }
});

function logout() {
    // Lógica para logout, por exemplo, redirecionar para a página de login
    window.location.href = 'login.html';
}

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const registrationNumber = document.getElementById('registrationNumber').value;
    const age = document.getElementById('age').value;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Validação simples
    if (name && cpf && registrationNumber && age) {
        successMessage.textContent = 'Aluno cadastrado com sucesso!';
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});

document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const time = document.getElementById('time').value;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Validação simples
    if (time) {
        successMessage.textContent = `Horário ${time} cadastrado com sucesso!`;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = 'Por favor, selecione um horário.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});

