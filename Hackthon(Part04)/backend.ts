//step No : 01

const resumeholder = document.getElementById("resume-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
const resumeContainer = document.getElementById('resume-container') as HTMLElement;

    const FullnameElement = document.getElementById("name-input") as HTMLInputElement;
    const emailElement = document.getElementById("mail-input") as HTMLInputElement;
    const phoneElement = document.getElementById("number-input") as HTMLInputElement;
    const educationElement = document.getElementById("study-input") as HTMLInputElement;
    const workElement = document.getElementById("work-box") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills-box") as HTMLTextAreaElement;
    const achievementsElement = document.getElementById("award-input") as HTMLInputElement;
    const summaryElement = document.getElementById("summary-txtarea") as HTMLTextAreaElement;

    //step no : 02  Check if all fields are filled
    if (
        FullnameElement && 
        emailElement && 
        phoneElement && 
        educationElement && 
        workElement && 
        skillsElement && 
        achievementsElement && 
        summaryElement
    ) {
        //for fill all required information

    const name = FullnameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const workExperience = workElement.value;
    const skills = skillsElement.value;
    const achievements = achievementsElement.value;
    const summary = summaryElement.value;

    //step no : 03  Resume Output
    const resumeOutput = `
        <h2><u>DYNAMIC RESUME:</u></h2>
        <h3><u>CONTACT INFORMATION</u></h3>
        <p contenteditable="true"><strong>Full Name:</strong><span> ${name} </span></p>
        <p contenteditable="true"><strong>Email:</strong><span> ${email} </span></p>
        <p contenteditable="true"><strong>Phone Number:</strong><span>  ${phone} </span></p>

        <h3><u>EDUCATION:</u></h3>
        <p contenteditable="true">${education.replace(/\n/g, '<br>')}</p>

        <h3><u>WORK EXPERIENCE:</u></h3>
        <p contenteditable="true">${workExperience.replace(/\n/g, '<br>')}</p>

        <h3><u>Skills:</u></h3>
        <p contenteditable="true">${skills.replace(/\n/g, '<br>')}</p>

        <h3><u>ACHIEVEMENTS/PROJECTS:</u></h3>
        <p contenteditable="true">${achievements.replace(/\n/g, '<br>')}</p>

        <h3><u>Summary</u></h3>
        <p contenteditable="true">${summary.replace(/\n/g, '<br>')}</p>
    `;

        //for make resume editable.

    const outputResume = document.getElementById("resumeOutput");
    if (outputResume) {
        outputResume.innerHTML = resumeOutput;
    }
    else {
        console.error('one or more form elements are not filled');
    }
    } else {
        console.error("The resume required Information are missing");
    }
    });
