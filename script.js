document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("loggedIn") === "true") {
        showMainContent();
    }
});

// Open Authentication Modal
function openAuthModal() {
    document.getElementById("authModal").style.display = "flex";
}

// Close Authentication Modal
function closeAuthModal() {
    document.getElementById("authModal").style.display = "none";
}

// Authenticate User (Simulated)
function authenticate() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        localStorage.setItem("loggedIn", "true");
        closeAuthModal();
        showMainContent();
    } else {
        alert("Please enter valid credentials.");
    }
}

// Show Main Content After Login
function showMainContent() {
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("signInBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline-block";
    window.scrollTo({ top: document.getElementById("mainContent").offsetTop, behavior: "smooth" });
}

// Logout User
function logout() {
    localStorage.removeItem("loggedIn");
    location.reload();
}

// Generate Diet Plan
function generateDietPlan() {
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let goal = document.getElementById("goal").value;
    
    if (!age || !weight || !height) {
        alert("Please fill in all fields!");
        return;
    }

    let dietPlan = goal === "loss"
        ? `<h4>Weight Loss Plan</h4><ul><li>Breakfast: Oatmeal</li><li>Lunch: Salad</li><li>Dinner: Fish</li></ul>`
        : `<h4>Weight Gain Plan</h4><ul><li>Breakfast: Eggs & Toast</li><li>Lunch: Chicken & Rice</li><li>Dinner: Beef</li></ul>`;

    document.getElementById("dietPlan").innerHTML = dietPlan;
    document.getElementById("dietPlanContainer").style.display = "block";
    document.getElementById("dietPlanContainer").scrollIntoView({ behavior: "smooth" });
}
