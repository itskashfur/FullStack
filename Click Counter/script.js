// Select elements
let counterDisplay = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");
let resetBtn = document.getElementById("resetBtn");
let clearBtn = document.getElementById("clearBtn");
let saveBtn = document.getElementById("saveBtn");
let themeToggle = document.getElementById("themeToggle");

// Load saved counter value from local storage
let count = localStorage.getItem("counterValue") ? parseInt(localStorage.getItem("counterValue")) : 0;
counterDisplay.textContent = count;

// Increase counter
incrementBtn.addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
});

// Decrease counter (not below 0)
decrementBtn.addEventListener("click", function() {
    if (count > 0) {
        count--;
        counterDisplay.textContent = count;
    }
});

// Reset counter
resetBtn.addEventListener("click", function() {
    count = 0;
    counterDisplay.textContent = count;
});

// Clear counter (set to 0 and remove from storage)
clearBtn.addEventListener("click", function() {
    count = 0;
    counterDisplay.textContent = count;
    localStorage.removeItem("counterValue");
});

// Save counter value
saveBtn.addEventListener("click", function() {
    localStorage.setItem("counterValue", count);
    alert("Counter saved!");
});

// Toggle theme (Dark/Light)
themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
