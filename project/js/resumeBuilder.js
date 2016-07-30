var bio = {
    "name": "Corina Suicon",
    "role": "Software Developer",
    "contacts": {
        "mobile": "+1(650)123-1234",
        "email": "corinasuicon@gmail.com",
        "github": "https://github.com/test",
        "twitter": "https://twitter.com/test",
        "location": "Redwood City, CA"
    },
    "welcomeMessage": "Solutions-driven computer analyst and programmer with experience and knowledge in designing and implementing innovative technical business solutions.",
    "skills": ["C#", "ASP.Net", "MSSQL", "C", "VB", "JavaScript"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var tempHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var tempHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(tempHTMLheaderName + tempHTMLheaderRole);

        var tempHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var tempHTMLwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(tempHTMLbioPic + tempHTMLwelcomeMessage);

        var tempHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var tempHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
        var tempHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var tempHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var tempHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(tempHTMLmobile + tempHTMLemail + tempHTMLtwitter + tempHTMLgithub + tempHTMLlocation);
        $("#footerContacts").append(tempHTMLmobile + tempHTMLemail + tempHTMLtwitter + tempHTMLgithub + tempHTMLlocation);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var tempHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(tempHTMLskills);
            }
        }
        //to follow the layout in the project details
        $("#skills").toggleClass("flex-box");
    }
};

var education = {
    "schools": [{
        "name": "University of the Philippines",
        "location": "Diliman, Quezon City, Philippines",
        "degree": "Bachelor of Science",
        "majors": ["Computer Engineering"],
        "dates": "1996-2001",
        "url": "http://www.up.edu.ph/"
    }, {
        "name": "Sacred Heart School",
        "location": "Tacloban City, Leyte, Philippines",
        "degree": "High School Diploma",
        "majors": ["none", "test"],
        "dates": "1986-1996",
        "url": "http://wikimapia.org/610553/Sacred-Heart-College-of-Tacloban-City"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }],
    display: function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var tempHTMLschoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var tempHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var tempHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var tempHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var tempHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.majors.join(", "));
            $(".education-entry:last").append(tempHTMLschoolName + tempHTMLschoolDegree + tempHTMLschoolDates + tempHTMLschoolLocation + tempHTMLschoolMajor);
        });
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            education.onlineCourses.forEach(function(course) {
                $("#education").append(HTMLschoolStart);
                var tempHTMLonlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
                var tempHTMLonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
                var tempHTMLonlineDates = HTMLonlineDates.replace("%data%", course.dates);
                var tempHTMLonlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
                $(".education-entry:last").append(tempHTMLonlineTitle + tempHTMLonlineSchool + tempHTMLonlineDates + tempHTMLonlineURL);
            });
        }
    }
};

var work = {
    "jobs": [{
        "employer": "ABS-CBN International",
        "title": "IPTV Developer",
        "location": "Redwood City, CA",
        "dates": "2010-current",
        "description": " Performs requirements analysis of applications and enhancements that are being embedded into the IPTV system. Responsible for systems integration, the IPTV system is engineered to integrate with the company's back-end processing system, including ordering, inventory and invoicing.",
        "url": "http://news.abs-cbn.com/"
    }, {
        "employer": "ABS-CBN Global",
        "title": "IPTV Developer",
        "location": "Quezon City, Philippines",
        "dates": "2009-2010",
        "description": "Involved in the system design, analysis, development, and testing for the ABS-CBN Internet Protocol Television (IPTV) product.",
        "url": "http://news.abs-cbn.com/"
    }, {
        "employer": "ABS-CBN Interactive",
        "title": "Programmer",
        "location": "Quezon City, Philippines",
        "dates": "2004-2008",
        "description": "In charge of developing and maintaining the TFCnow website (now rebranded as TFC.tv), a website that offers audio and video on demand streaming service of the local programs of the ABS-CBN television network.",
        "url": "http://news.abs-cbn.com/"
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var tempHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
            var tempHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);
            var tempHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);
            var tempHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
            var tempHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(tempHTMLworkEmployer + tempHTMLworkTitle + tempHTMLworkDates + tempHTMLworkLocation + tempHTMLworkDescription);
        });
    }
};

var projects = {
    "projects": [{
        "title": "IPTV",
        "dates": "2009-current",
        "description": "The Set-Top-Box version of ABS-CBNNow!",
        "images": ["images/flowers.jpg", "images/succulents.jpg"],
        "url": "https://www.tfc-usa.com/tfc-video-on-demand-new/"
    }, {
        "title": "ABS-CBNNow!",
        "dates": "2004-2008",
        "description": "ABS-CBNNow! was the original ABS-CBN website that offered audio and video on demand streaming service of the local programs of the ABS-CBN television network.  This has since been rebranded as TFC.tv.",
        "images": ["images/bracelet.jpg", "images/flowers.jpg"],
        "url": "http://tfc.tv"
    }],
    display: function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var tempHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
            var tempHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);
            var tempHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(tempHTMLprojectTitle + tempHTMLprojectDates + tempHTMLprojectDescription);
            project.images.forEach(function(img) {
                var tempHTMLprojectImage = HTMLprojectImage.replace("%data%", img);
                $(".project-entry:last").append(tempHTMLprojectImage);
            });
        });
    }
};

function showMap(){
    $("#mapDiv").append(googleMap);
    //initializeMap();
}

bio.display();
work.display();
projects.display();
education.display();
showMap();

