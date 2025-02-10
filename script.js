const messages = [
    "আপনি কি নিশ্চিত?",
    "সত্যিই নিশ্চিত??",
    "সত্যি কি তুমি নিশ্চিত?",
    "Pookie প্লিজ...",
    "এটা সম্পর্কে একটু চিন্তা করো!",
    "তুমি না বললে আমি, আমি দুঃখ পাবো...",
    "আমি অনেক দুঃখ পেলাম...",
    "সত্যি আমি অনেক অনেক অনেক দুঃখ পেলাম..",
    "আচ্ছা ঠিক আছে, আমি আর জিজ্ঞাসা করবো না...",
    "মজা করলাম, প্লিজ হ্যাঁ বলো! 🥺❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
