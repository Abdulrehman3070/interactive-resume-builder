document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeform') as HTMLFormElement;
    const cvContent = document.getElementById('cv-content') as HTMLDivElement;
    const clearBtn = document.getElementById('clear-cv') as HTMLButtonElement;
    
    form.addEventListener('submit', (event) => 
    {
        event.preventDefault(); 

        
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('Education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Generate CV content
        if (!name || !email || !phone || !education || !experience || !skills) {
            alert('Please fill out all fields.');}
        else {
        const cvHtml = `
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
            
        // Display CV content
        cvContent.innerHTML = cvHtml;
            }
            clearBtn.addEventListener('click', () => {
                cvContent.innerHTML = ''; // Clear the CV content
            });
    });
});
