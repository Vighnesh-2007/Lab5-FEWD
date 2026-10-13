
const form = document.getElementById("admissionForm");
const message = document.getElementById("message");
const dob = document.getElementById("dob");

// Prevent selecting a future date of birth.
dob.max = new Date().toISOString().split("T")[0];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("name").value.trim();

    message.textContent =
        `Thank you, ${studentName}! Your application was submitted successfully.`;

    form.reset();
    dob.max = new Date().toISOString().split("T")[0];
});
