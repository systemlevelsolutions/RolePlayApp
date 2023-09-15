const rolePlays = [
    "You're a detective and your friend is a witness.",
    "You're a chef and your friend is a food critic.",
    "You're an astronaut and your friend is an alien.",
    // ... add as many as you like
];

function generateRolePlay() {
    const randomIndex = Math.floor(Math.random() * rolePlays.length);
    document.getElementById('rolePlayText').textContent = rolePlays[randomIndex];
}
