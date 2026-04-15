// 1. Setup greeting
let rawName = prompt("What is your name?");
let username = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
document.getElementById("greeting").textContent = "Hi there, " + username + "!"; 

// 2. Data arrays
let legs = ["barbell back squats", "Romanian deadlifts", "Bulgarian split squats", "leg presses", "walking lunges", "a"];
let arms = ["bicep curls", "tricep dips", "hammer curls", "skull crushers", "bench press", "a"];
let chest = ["bench press", "incline dumbbell press", "decline bench press", "push-ups", "chest flyes", "a"];
let core = ["planks", "Russian twists", "bicycle crunches", "leg raises", "mountain climbers", "a"];

// 3. The function with a parameter
function showResult(category) {
    let exercises = "";

    // The 'category' parameter tells the function which array to use
    if (category === "legs") {
        for (let i = 0; i < legs.length - 1; i++) {
            exercises += legs[i] + ", ";
        }
        // Remove the trailing comma and space
        exercises = exercises.slice(0, -2);
    } else if (category === "arms") {
        for (let i = 0; i < arms.length - 1; i++) {
            exercises += arms[i] + ", ";
        }
        // Remove the trailing comma and space
        exercises = exercises.slice(0, -2);
    } else if (category === "chest") {
        for (let i = 0; i < chest.length - 1; i++) {
            exercises += chest[i] + ", ";
        }
        // Remove the trailing comma and space
        exercises = exercises.slice(0, -2);
    } else if (category === "core") {
        for (let i = 0; i < core.length - 1; i++) {
            exercises += core[i] + ", ";
        }
        // Remove the trailing comma and space
        exercises = exercises.slice(0, -2);
    }


    // Update the UI with the final string
    document.getElementById("result").textContent = "Best exercises are: " + exercises;
}

// 4. The Event Listener with a wrapper
document.getElementById("exercisesBtn").addEventListener("click", () => {
    // Find the currently checked radio button
    let selectedRadio = document.querySelector("input[type='radio']:checked");
    
    if (selectedRadio) {
        // Pass the ID of the radio button (e.g., "legs") as the parameter
        showResult(selectedRadio.id);
    } else {
        document.getElementById("result").textContent = "Please select a body part first!";
    }
});