function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greetingMessage").textContent = 'Hi ' + name + '!';
}