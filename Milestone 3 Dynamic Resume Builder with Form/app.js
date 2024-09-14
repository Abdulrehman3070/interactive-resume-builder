document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeform');
    var cvContent = document.getElementById('cv-content');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('Education').value;
        var experience = document.getElementById('Experience').value;
        var skills = document.getElementById('skills').value;
        // Generate CV content
        if (!name || !email || !phone || !education || !experience || !skills) {
            alert('Please fill out all fields.');
        }
        else {
            var cvHtml = "\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
            // Display CV content
            cvContent.innerHTML = cvHtml;
            form.reset();
        }
    });
});
