var bio = {
    "name": "Lisa Hull",
    "role": "Web Developer",
    "contacts": {
        "email": "zenvercoder@gmail.com",
        "github": "https://github.com/zenvercoder",
        "twitter": "https://twitter.com/zenvercoder?lang=en",
        "location": "Denver, CO"
    },
    "welcomeMessage": "Once I discovered my passion for technology, " +
    "I taught myself how to program and now I code almost every day.",
    "skills": ["HTML", "CSS", "Beginner C", "Beginner jQuery", "Beginner JavaScript"],
    "biopic" : "images/profile_pic.jpeg",

    "display": function display() {

        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

        var formattedWelcomeMessage= HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);


        $("#header").prepend(formattedRole).prepend(formattedName);

        $("#topContacts")
            .append(formattedEmail)
            .append(formattedTwitter)
            .append(formattedGithub)
            .append(formattedLocation);

        $("#header").append(formattedBioPic)
            .append(formattedWelcomeMessage)
            .append(HTMLskillsStart);

        var formattedSkills;
        for (var i = 0; i < this.skills.length; i++) {
            formattedSkills = HTMLskills.replace("%data%", this.skills[i]);
            $("#skills").append(formattedSkills);
        }

        $('#footerContacts').append('<li><a target="_blank" href="https://github.com/lHull7">GitHub</a></li>')
            .append('<li><a target="_blank" href="https://twitter.com/zenvercoder?lang=en">Twitter</a></li>')
            .append('<li><a target="_blank" href="http://codepen.io/zenvercoder/">CodePen</a></li>')
            .append('<li><a href="mailto:zenvercoder@gmail.com">Email</a></li>')
    }
};

bio.display();

var education = {
    "schools": [
        {
            "name": "Pikes Peak Community College",
            "location": "Colorado Springs, CO",
            "degree": "Associate of Science in Nursing",
            "majors": ["array of strings"],
            "dates": "2000-2003",
            "url": "https://www.ppcc.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Try Git",
            "school": "Code School",
            "date": 2015,
            "onlineURL": "https://www.codeschool.com/"
        },
        {
            "title": [
                " HTML & CSS",
                " JavaScript",
                " jQuery"
            ],
            "school": "Codecademy",
            "date": 2015,
            "onlineURL": "https://www.codecademy.com/learn"
        },
        {
            "title": "Verified Introduction to Computer Science Certificate",
            "school": "Harvard edX",
            "date": 2016,
            "onlineURL": "https://www.udacity.com/"
        },
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": 2016,
            "onlineURL": "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
        }
    ],

    "display": function display() {

        $("#education").append(HTMLschoolStart);

        for(var i = 0; i < education.schools.length; i++) {
            var school = education.schools[i];

            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

            $(".education-entry:last").append(formattedSchoolName)
                .append(formattedSchoolLocation)
                .append(formattedSchoolDegree);
        }

        $("#education").append(HTMLonlineClasses);

        for(var j = 0; j < education.onlineCourses.length; j++) {
            var onlineSchool = education.onlineCourses[j];

            var formattedOnlineSchoolName = HTMLonlineTitle.replace("%data%", onlineSchool.school).replace("#", onlineSchool.onlineURL);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineSchool.title);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineSchool.dates);

            $("#education").append(HTMLschoolStart);

            $(".education-entry:last")
                .append(formattedOnlineSchoolName)
                .append(formattedOnlineSchool)
                .append(formattedOnlineDates);
        }

    }
};

education.display();

////JEREMY: I love you!

var work = {
    "jobs": [
        {
            "employer": "Amazing Care",
            "title": "Registered Nurse",
            "location": "Aurora, CO",
            "dates": "2013-Present",
            "description": "Worked independently, using the Nursing Process with caring, " +
            "reliable and professional conduct"
        },
        {
            "employer": "NurseCore",
            "title": "Registered Nurse",
            "location": "Denver, CO",
            "dates": "2011-2016",
            "description": "Assessed patients, created treatment plans, implemented nursing plans of care, " +
            "evaluated effectiveness of interventions"
        },
        {
            "employer": "Colorado Schoool for the Deaf and Blind",
            "title": "Registered Nurse",
            "location": "Colorado Springs, CO",
            "dates": "2008-2011",
            "description": "Performed tasks efficiently with exceptional clinical and " +
            "leadership skills"
        },
        {
            "employer": "Per Diem Medical Staffing",
            "title": "Registered Nurse",
            "location": "Colorado Springs, CO",
            "dates": "2006-2008",
            "description": "Worked in the school setting, hospice setting and floor nursing."
        }
    ],

    "display": function display() {
        $("#workExperience").append(HTMLworkStart);

        for(var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer +
                formattedTitle;
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

            $(".work-entry:last").append(formattedEmployerTitle)
                .append(formattedWorkDates)
                .append(formattedWorkLocation)
                .append(formattedWorkDescription);
        }
    }
};

work.display();

var projects = {
    "project": [
        {
            "title": "My First CodePen",
            "dates": "2016",
            "description": "I played around with HTML & CSS in the codepen environment. " +
            "I tried out some CSS features like scale, animate, transform, shadows and translate. " +
            "It was super fun and I especially loved seeing my code in action in real time. " +
            "It made me feel more connected to my code.",
            "images": [
                "images/firstPen.png"
            ],
            "url": "http://codepen.io/zenvercoder/pen/EKrJNj"
        },
        {
            "title": "Animal Trading Card",
            "dates": "2016",
            "description": "This was my first project in Udacity's Front End Developer Program. " +
            "I learned more about HTML and CSS. The Hippogriff art is not mine (found it on pinterest). " +
            "You can also find it here. The most difficult part of this project was positioning.",
            "images": [
                "images/hippoPen.png"
            ],
            "url": "http://codepen.io/zenvercoder/pen/ZWZbyv"
        },
        {
            "title": "Bootstrap Mockup Page",
            "dates": "2016",
            "description": "A side project I did while learning about bootstrap in Udacity's Front End Developer Program. " +
            "I was enamored with bootstrap because it made so much sense with the grids and columns. " +
            "I wanted extra practice with bootstrap, so I decided to do a mockup of the actual boostrap page. " +
            "I had a lot of fun with this one!",
            "images": [
                "images/bootstrapProject.png"
            ],
            "url": "http://zenvercoder.co/bootStrapPage.html"
        },
    ],

    "display": function display() {
        $("#projects").append(HTMLprojectStart);

        for (var i = 0; i < projects.project.length; i++) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title).replace("#", projects.project[i].url);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[i].images);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);

            $(".project-entry:last").append(formattedTitle)
                .append(formattedDates)
                .append(formattedProjectImage)
                .append(formattedDescription);
        }
    }
};

projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

function locationizer(work_obj) {
    var locationArray =[];

    for(jobs in work_obj.jobs) {
        var newLocation = work_obj.jobs.location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

locationizer(work);

$("#mapDiv").append(googleMap);

