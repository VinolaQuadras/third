// Get the modal element and close button
const modal = document.getElementById('myModal');
const closeButton = document.getElementsByClassName('close')[0];

// Open the modal when needed
function openModal() {
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked
closeButton.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form data submission here
    openModal(); // Open the modal after form submission
});
