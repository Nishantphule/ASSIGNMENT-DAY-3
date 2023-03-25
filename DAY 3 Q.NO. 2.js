// QUESTION NO.- 2
// Create your own resume data in JSON format.

// CODE -
let Resume = {
    Name: "Nishant Phule",
    birthdate: "8th oct 2000",
    address: "Deepali nagar,Nashik,Maharashtra",
    pincode: "422009",
    mobile: "9960435035",
    email: "nishantphule12@gmail.com",
    CareerObjective: "Pursuing opportunity which will allow me to grow professionally,while effectively utilizing my versatile skill set to help promote your corporate mission and exceed team goals.",
    EducationBackground: {
        college: {
            NAME: "GOKHALE EDUCATION SOCIETY",
            education: "B.E. mech ",
            location: "Nashik",
            Grades: "pursuing",
            batch: "2018-2022",
        },
        Secondary: {
            NAME: "RYK R H SAPAT",
            education: "11th & 12th science",
            location: "Nashik",
            Grades: "62%",
            batch: "2016-2018",
        },
        Primary: {
            NAME: "ST. Francis high school",
            education: "pre-primary and primary",
            location: "Nashik",
            Grades: "82%",
            batch: "2004-2016",
        },
    },
    TechnicalSkills: {
        1: "Javascript",
        2: "MS Word",
        3: "MS Excel",
        4: "MS Powerpoint",
    },
    PersonalSkills: {
        1: "Highly organized and efficient",
        2: "Ability to work Independently or as a part of a team",
        3: "Well disciplined",
        4: "good communication skills",
    },
    Hobbies: {
        1: "Daily gymming and healthy diet eating",
        2: "playing football",
        3: "reading books",
    },
    WorkExperience:
    {
        CompanyName: "ABB Ltd",
        location: "Nashik",
        position: "assembly assistant",
        Duration: "8 months",
    }


}
console.log(Resume)


// OUTPUT -

// {Name: 'Nishant Phule', birthdate: '8th oct 2000', address: 'Deepali nagar,Nashik,Maharashtra', pincode: '422009', mobile: '9960435035', …}