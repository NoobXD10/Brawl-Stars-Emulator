// Create an audio context
const audioContext = new AudioContext();

// Create an audio element
const audioElement = document.getElementById('audio');

// Create a source node
const sourceNode = audioContext.createMediaElementSource(audioElement);

// Create a gain node
const gainNode = audioContext.createGain();

// Connect the nodes
sourceNode.connect(gainNode);
gainNode.connect(audioContext.destination);

// Play the audio
audioElement.play();
