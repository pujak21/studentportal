function addAttendance() {
    // Get input values
    const name = document.getElementById('student-name').value.trim();
    const status = document.getElementById('attendance-status').value;

    // Check if name is provided
    if (!name) {
        alert('Please enter the student name.');
        return;
    }

    // Create new list item and add to attendance list
    const attendanceList = document.getElementById('list');
    const newEntry = document.createElement('li');
    newEntry.textContent = `${name}: ${status}`;
    attendanceList.appendChild(newEntry);

    // Reset form fields
    document.getElementById('attendance-form').reset(); // Resets all fields within the form
}
document.getElementById('teacher-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === "" || password === "") {
        document.getElementById('error-message').textContent = "Please fill in both fields.";
        return;
    }

    // Mock login check (Replace this with real authentication logic)
    if (username === "teacher" && password === "password") {
        alert("Login successful!");
        window.location.href = "teacher-dashboard.html"; // Redirect to a dashboard or main page after login
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password.";
    }
});
// Teacher Login Form Handler (already exists in script.js)
document.getElementById('teacher-login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        document.getElementById('error-message').textContent = "Please fill in both fields.";
        return;
    }

    if (username === "teacher" && password === "password") {
        alert("Login successful!");
        window.location.href = "teacher-dashboard.html";
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password.";
    }
});

// Student Login Form Handler
document.getElementById('student-login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('student-username').value;
    const password = document.getElementById('student-password').value;

    if (username === "" || password === "") {
        document.getElementById('student-error-message').textContent = "Please fill in both fields.";
        return;
    }

    if (username === "student" && password === "password") {
        alert("Login successful!");
        window.location.href = "student-dashboard.html";
    } else {
        document.getElementById('student-error-message').textContent = "Invalid username or password.";
    }
});
