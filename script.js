//your JS code here. If required.
// List of sound file names (without extension)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Get the buttons container
const buttonsDiv = document.getElementById('buttons');

// Create buttons for each sound
sounds.forEach(sound => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = sound;

    button.addEventListener('click', () => {
        stopSounds();  // Stop any currently playing sounds
        document.getElementById(sound).play();  // Play the selected sound
    });

    buttonsDiv.appendChild(button);

    // Create audio element for each sound
    const audio = document.createElement('audio');
    audio.id = sound;
    audio.src = `sounds/${sound}.mp3`;
    buttonsDiv.appendChild(audio);
});

// Create a stop button to stop all sounds
const stopButton = document.createElement('button');
stopButton.className = 'stop';
stopButton.textContent = 'Stop All';

stopButton.addEventListener('click', stopSounds);

buttonsDiv.appendChild(stopButton);

// Function to stop all sounds
function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;  // Reset the sound to the start
    });
}
