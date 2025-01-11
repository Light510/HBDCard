// List of valid names
const validNames = ["Alice", "Bob", "Charlie"];

// Handle Form Submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("name-input").value;

  // Check if name is in the valid list
  if (validNames.includes(nameInput)) {
    document.querySelector(".form-card").classList.add("hidden");
    document.getElementById("birthday-message").style.visibility = "visible";
    playBackgroundMusic();
  } else {
    alert("Name not found in database. Please try again!");
  }
});

// Play Background Music
function playBackgroundMusic() {
  const music = document.getElementById("bg-music");
  music.play();
}
