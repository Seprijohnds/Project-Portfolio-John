console.log("Script Loaded");

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    initWelcome();
    initMessageForm();
});

// ===== WELCOME =====
function initWelcome() {
    const greetingSpan = document.getElementById("user-greeting");
    if (!greetingSpan) return;

    const userName = prompt("Please enter your name:");
    if (userName && userName.trim() !== "") {
        greetingSpan.textContent = userName.trim();
    }
}

// ===== MESSAGE FORM =====
function initMessageForm() {
    const messageInput = document.getElementById("message-text");
    const nameInput = document.getElementById("user-name");
    const sendBtn = document.getElementById("send-btn");

    if (!messageInput || !nameInput || !sendBtn) {
        console.warn("Message form elements not found");
        return;
    }

    sendBtn.addEventListener("click", () => {
        sendMessage(messageInput, nameInput);
    });
}

// ===== SEND MESSAGE =====
function sendMessage(messageInput, nameInput) {
    const message = messageInput.value.trim();
    const name = nameInput.value.trim();

    if (!name) {
        alert("Please enter your name.");
        nameInput.focus();
        return;
    }

    if (!message) {
        alert("Please enter a message.");
        messageInput.focus();
        return;
    }

    alert(`Message sent!\nFrom: ${name}\nMessage: ${message}`);

    // reset form
    messageInput.value = "";
    nameInput.value = "";
}
