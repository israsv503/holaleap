document.addEventListener('DOMContentLoaded', () => {
    // Select the quiz elements using their IDs
    const checkBtn = document.getElementById('check-btn');
    const feedback = document.getElementById('feedback');
    const correctRadio = document.getElementById('q1b'); // Assuming q1b is the correct answer

    // Add an event listener to the "Check Answer" button
    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            
            // Check if the correct radio button is selected
            if (correctRadio && correctRadio.checked) {
                // Correct Answer Logic
                feedback.textContent = "¡Correcto! That's a perfect start.";
                feedback.style.color = '#3CB371'; // A friendly green
            } else {
                // Incorrect Answer Logic
                feedback.textContent = "¡Inténtalo de nuevo! Try again.";
                feedback.style.color = '#FF7F50'; // A warm orange/red for warning
            }
        });
    }

    // You can add the audio player function here later!
    // function playAudio(filename) { ... }
});