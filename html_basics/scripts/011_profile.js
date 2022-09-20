// let profile = {
//     "email": "prabakaranaug93@gmail.com", "objective": "To learn and function effetively in an organization where i would be able to utilize my capabilities to deliver the bottom line and in the process add value to the organization and my career",
//     "personal_information": {
//         "sex": "male", "passport_no": "l8783957", "nationality": "indian", "date_of_birth": "23.08.1993",
//         "marital_status": "single", "address": "48,north masi street, madurai"
//     },
//     "education_information": {
//         "ug degree": "bachelor of computer application",
//         "pg degree": "master of business administration"
//     },
//     "working_experience": {
//         "comapny name": "mycon marketing", "experience": "7months", "role": "relationship officer",
//         "comapny name1": "star media llp - followads", "experience1": "2 years", "role1": "business development executive",
//         "comapny name2": "sjr enterpraises", "experience2": "2 years", "role2": "business development manager"
//     }
// }

let profile_new = {
    "email": "prabakaranaug93@gmail.com", "objective": "my objective",
    "mobileno": 18718293123, "name": "Prabakaran",
    "personal_information": {
        "sex": "male", "passport_no": "l8783957", "nationality": "indian", "date_of_birth": "23.08.1993",
        "marital_status": "single", "address": "48,north masi street, madurai"
    },
    "interests": ["music", "fishing", "trecking", "biking", "chatting"],
    "education_information": [
        { "qualification": "+2", "year": 2010 },
        { "qualification": "BCA", "year": 2013 },
        { "qualification": "MCA", "year": 2016 }
    ],
    "working_experience": [
        { "company_name": "xyz", "experience": 1, "role": "role 1" },
        { "company_name": "abc", "experience": 3, "role": "role 2" },
        { "company_name": "qwe", "experience": 1, "role": "role 3" },
    ]
}


function init() {
    setHeaderInformation();
    setInterests();
}

function setHeaderInformation() {
    document.getElementById("name").innerText = profile_new["name"]
    document.getElementById("emailid").innerText = profile_new["email"]
    document.getElementById("mobileno").innerText = profile_new["mobileno"]
    document.getElementById("objective").innerText = profile_new["objective"]
}

function setInterests() {
    const interestsEl = document.getElementById("interest");

    profile_new["interests"].forEach(function (name) {
        const liEl = document.createElement("li");
        liEl.textContent = name
        interestsEl.appendChild(liEl);
    })

}












