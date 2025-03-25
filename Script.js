// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working!");

    // Example: Handling a button click
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", function () {
            alert("Button clicked!");
        });
    }

    // Example: Changing text content dynamically
    const heading = document.getElementById("heading");
    if (heading) {
        heading.textContent = "Welcome to My Website!";
    }
});
  
