var firstName = "Alter";
var lastName = "Harris";
var fullName = firstName + lastName


function displayPosition(companyName, jobTitle, jobDesc) {
    console.log("Company: " + companyName);
    console.log("Career: " + jobTitle);
    console.log("Job Description: " + jobDesc);

}

function sayName(fullName) {
    console.log("\nName:" + fullName.toUpperCase());
}
function sayCareer(career) {
    console.log("\nCareer: " + career);
}
function sayDescription(description) {
    console.log("\nDescription: " + description);
}
function sayInterests(interests) {
    console.log("\nMy Interests:");
    console.log("* Technology");
    console.log("* Computers");
    console.log("* Music");
}
function sayExperience(experience) {
    console.log("\nMy Previous Experience: ");
    displayPosition("Regions Bank", "Client Technical Support and Training Specialist", "Provide support to commercial banking clients.")

}
function saySkills(skillName, isCool) {
    if (isCool == true) {
        console.log("Check it: " + skillName);
    } else {
        console.log(skillName);
    }

}


sayName("Alter Harris");
sayCareer("Software Developer Trainee");
sayDescription("I am a quiet individual who is intrigued by current technology");
sayInterests();
sayExperience();
console.log("\nMy Skills:");
saySkills("Problem Solver", true);
saySkills("Analytical Thinker", false);
saySkills("Tech Savvy", true);
