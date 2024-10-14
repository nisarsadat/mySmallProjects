document.addEventListener('DOMContentLoaded', () => {
    // Function to generate a single random password
    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Function to generate and display passwords
    function generatePasswords() {
        const password1 = generatePassword(12); // You can change the length
        const password2 = generatePassword(12); // You can change the length
        document.getElementById('password1').value = password1;
        document.getElementById('password2').value = password2;
        document.getElementById('password1').style.paddingLeft = '12px';
        document.getElementById('password2').style.paddingLeft = '12px';
        document.getElementById('password2').style.color = '#909';
        document.getElementById('password1').style.color = '#870';
        document.getElementById('password1').style.fontSize = '18px';
        document.getElementById('password2').style.fontSize = '18px';
    }

    // Select the button and add an event listener
    const generateButton = document.querySelector('button');
    generateButton.addEventListener('click', generatePasswords);
});
