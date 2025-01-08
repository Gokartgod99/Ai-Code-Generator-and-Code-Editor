let cookies = 0;
let cookiesPerClick = 1;

function clickCookie() {
    cookies += cookiesPerClick;
    updateDisplay();
}

function buyUpgrade() {
    if (cookies >= 10) {
        cookies -= 10;
        cookiesPerClick += 1;
        updateDisplay();
    } else {
        alert('Not enough cookies!');
    }
}

function updateDisplay() {
    document.getElementById('cookieCount').innerText = `Cookies: ${cookies}`;
    document.getElementById('upgradeBtn').innerText = `Upgrade (Cost: 10 Cookies)`;
}

// Initialize the game on page load
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    document.getElementById('cookieBtn').addEventListener('click', clickCookie);
    document.getElementById('upgradeBtn').addEventListener('click', buyUpgrade);
});

// HTML part:
// <button id='cookieBtn'>Click me!</button>
// <button id='upgradeBtn'>Upgrade (Cost: 10 Cookies)</button>
// <div id='cookieCount'>Cookies: 0</div>