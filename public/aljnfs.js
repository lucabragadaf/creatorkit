




document.getElementById('publishButton').addEventListener('click', function() {
// Retrieve and clean input
const username = document.getElementById('customLinkInput').value.trim(); // Renamed to username

// Input validation
if (!username) {
    alert('Por favor, insira um link personalizado.');
    return;
}

// Generate the unique URL
const baseURL = 'https://creatorkit-304c3.web.app/';
const kit_url = baseURL + encodeURIComponent(username);

// Display the result
alert(`Seu Media Kit está disponível em: ${kit_url}`);
console.log(`Custom URL generated: ${kit_url}`);
});