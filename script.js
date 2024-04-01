let currentState = 1;

document.getElementById("yes-button").addEventListener("click", function() {
    switch (currentState) {
        case 1:
            changeMessage("Congratulations...Proud to be an");
            removeButtons();
            setTimeout(() => {
                changeMessage("Are you Happy Now?");
                createButtons();
                currentState = 2;
            }, 3000);
            break;
        case 2:
            // Add your image tag with the URL to the image in the S3 bucket.
            // Make sure to replace 'YOUR_S3_BUCKET_IMAGE_URL' with the actual image URL.
            changeMessage("Thanks for Joining the Society <img src='https://areyoua.s3.ap-south-1.amazonaws.com/images/heart2.1.png' alt='Society Image' style='width: auto; height: 100px;'>");
            removeButtons();
            playSound();
            setTimeout(clearScreen, 3000);
            break;
    }
});

document.getElementById("no-button").addEventListener("click", function() {
    // Do nothing
});

function changeMessage(htmlContent) {
    document.getElementById("message").innerHTML = htmlContent;
}

function removeButtons() {
    document.getElementById("yes-button").style.display = "none";
    document.getElementById("no-button").style.display = "none";
}

function createButtons() {
    document.getElementById("yes-button").style.display = "inline";
    document.getElementById("no-button").style.display = "inline";
}

function playSound() {
    const sound = document.getElementById("ghanta-sound");
    sound.play().catch(error => console.error("Sound play failed:", error));
}

function clearScreen() {
    document.getElementById("message-container").style.display = "none"; // Hide message container
    let nextButton = document.getElementById("next-button");
    if (!nextButton) {
        nextButton = document.createElement("button");
        nextButton.id = "next-button";
        nextButton.textContent = "Next";
        document.body.appendChild(nextButton);
    }
    nextButton.style.display = "block"; // Make sure the button is visible
    nextButton.onclick = function() { window.location.reload(); };
}
