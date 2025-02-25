document.addEventListener("DOMContentLoaded", function () {
    // Auto Dark Mode
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        document.body.classList.add("dark-mode");
    }

    // Visitor Counter
    if (localStorage.getItem("visitorCount")) {
        let count = parseInt(localStorage.getItem("visitorCount"));
        count++;
        localStorage.setItem("visitorCount", count);
        document.getElementById("visitor-count").innerText = count;
    } else {
        localStorage.setItem("visitorCount", 1);
        document.getElementById("visitor-count").innerText = 1;
    }

    // Typing Effect
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

    typeText();
});

