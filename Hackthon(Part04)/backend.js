//step No : 01
var _a;
var resumeholder = (_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var resumeContainer = document.getElementById('resume-container');
    var FullnameElement = document.getElementById("name-input");
    var emailElement = document.getElementById("mail-input");
    var phoneElement = document.getElementById("number-input");
    var educationElement = document.getElementById("study-input");
    var workElement = document.getElementById("work-box");
    var skillsElement = document.getElementById("skills-box");
    var achievementsElement = document.getElementById("award-input");
    var summaryElement = document.getElementById("summary-txtarea");
    //step no : 02  Check if all fields are filled
    if (FullnameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        workElement &&
        skillsElement &&
        achievementsElement &&
        summaryElement) {
        //for fill all required information
        var name_1 = FullnameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var workExperience = workElement.value;
        var skills = skillsElement.value;
        var achievements = achievementsElement.value;
        var summary = summaryElement.value;
        //step no : 03  Resume Output
        var resumeOutput = "\n        <h2><u>DYNAMIC RESUME:</u></h2>\n        <h3><u>CONTACT INFORMATION</u></h3>\n        <p contenteditable=\"true\"><strong>Full Name:</strong><span> ".concat(name_1, " </span></p>\n        <p contenteditable=\"true\"><strong>Email:</strong><span> ").concat(email, " </span></p>\n        <p contenteditable=\"true\"><strong>Phone Number:</strong><span>  ").concat(phone, " </span></p>\n\n        <h3><u>EDUCATION:</u></h3>\n        <p contenteditable=\"true\">").concat(education.replace(/\n/g, '<br>'), "</p>\n\n        <h3><u>WORK EXPERIENCE:</u></h3>\n        <p contenteditable=\"true\">").concat(workExperience.replace(/\n/g, '<br>'), "</p>\n\n        <h3><u>Skills:</u></h3>\n        <p contenteditable=\"true\">").concat(skills.replace(/\n/g, '<br>'), "</p>\n\n        <h3><u>ACHIEVEMENTS/PROJECTS:</u></h3>\n        <p contenteditable=\"true\">").concat(achievements.replace(/\n/g, '<br>'), "</p>\n\n        <h3><u>Summary</u></h3>\n        <p contenteditable=\"true\">").concat(summary.replace(/\n/g, '<br>'), "</p>\n    ");
        //for make resume editable.
        var outputResume = document.getElementById("resumeOutput");
        if (outputResume) {
            outputResume.innerHTML = resumeOutput;
        }
        else {
            console.error('one or more form elements are not filled');
        }
    }
    else {
        console.error("The resume required Information are missing");
    }
});
