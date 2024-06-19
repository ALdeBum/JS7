document.getElementById('username').addEventListener('input', function(event) {
    const inputField = event.target;
    const filteredValue = inputField.value.replace(/\d/g, ''); // Удаляем цифры
    if (inputField.value !== filteredValue) {
        inputField.value = filteredValue;
    }
});
