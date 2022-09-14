/** name, email, contactno, address, nationality, marrital status, passport , gender, school, college, work details, objective
 * name, email, contactno,
 * person_info: address, nationality, marrital status, passport
 * education_info: [{degree,institution,score}, info2]
 * work_info:[{company,role, period, years}, exp2]
 * 
 */

let work_info = [
    { company: "comp1", role: "rol1", "period": "2017-2021", exp: 4 },
    { company: "comp2", role: "rol5", "period": "2021-2022", exp: 1 }
]

let edu1 = {
    schooling: [
        { degree: "sslc", institude: "abc", score: 70 },
        { degree: "hslc", institude: "abc", score: 80 }
    ],
    college: [{ degree: "B.sc", institude: "ufv", score: 70 }]
}


let edu2 = [
    { degree: "sslc", institude: "abc", score: 70, isSchool: true },
    { degree: "hslc", institude: "abc", score: 80, isSchool: true },
    { degree: "B.sc", institude: "ufv", score: 70, isSchool: false }
]

let edu3 = [
    { degree: "sslc", institude: "abc", score: 70, category: "school" },
    { degree: "hslc", institude: "abc", score: 80, category: "school" },
    { degree: "B.sc", institude: "ufv", score: 70, category: "online" }
]

let profile = {
    name: "xyz",
    email: "xyz@test.com",
    contactno: 13213123123,
    personal_info: {
        passport_no: "asjadjksdd",
        marrital_status: "single"
    },
    education_info: edu //edu.education
}

profile["work_info"] = work_info

console.log(profile)