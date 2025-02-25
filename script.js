// Firebase Realtime Database URL (Replace with your actual URL)
const dbUrl = "https://mywebpage-978cb-default-rtdb.firebaseio.com/visitorCount.json"; // 🔹 REPLACE THIS

async function updateVisitorCount() {
    try {
        // Get the current visitor count from Firebase
        let response = await fetch(dbUrl);
        let currentCount = await response.json();

        if (currentCount === null) {
            currentCount = 1; // If database is empty, start from 1
        } else {
            currentCount++; // Otherwise, increment count
        }

        // Update Firebase database with the new count
        await fetch(dbUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(currentCount)
        });

        // Display the updated visitor count
        document.getElementById("visitor-count").innerText = currentCount;
    } catch (error) {
        console.error("Error updating visitor count:", error);
    }
}

// Run visitor count function when page loads
updateVisitorCount();

// -------------------------------------------
// 🌓 DARK MODE TOGGLE (If present in your script)
document.addEventListener("DOMContentLoaded", function () {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        document.body.classList.add("dark-mode");
    }
});

// -------------------------------------------
// 🎯 TYPING EFFECT FOR HEADER TEXT (If present in your script)
const textArray = ["Researcher", "Cybersecurity Expert", "Educator"];
let textIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typingText.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
    }
}

// Run typing effect
typeText();

