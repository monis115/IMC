const collegesData = [

    {
        name: "Karaganda State Medical University",
        city: "Karaganda",
        country: "Kazakhstan",
        category: "international",
        established: 1950,
        type: "Public Medical University",
        programs: ["MBBS", "Dentistry", "Pharmacy", "Nursing", "Public Health"],
        duration: "5 years",
        recognition: "WHO, NMC, WFME",
        website: "karaganda.html"
    },
    {
        name: "Kazakh Russian Medical University",
        city: "Almaty",
        country: "Kazakhstan",
        category: "international",
        established: 1992,
        type: "Private Medical University",
        programs: ["MBBS", "Dentistry", "Pharmacy"],
        duration: "5 years",
        recognition: "WHO, NMC",
        website: "kazakh_russian.html"
    },
    {
        name: "Kazakh Medical University of Continuing Education",
        city: "Almaty",
        country: "Kazakhstan",
        category: "international",
        established: 1963,
        type: "Public Medical University",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Public Health"],
        duration: "5 years",
        recognition: "WHO, NMC",
        website: "kazakh_continuing.html"
    },
    {
        name: "Kokshetau State University",
        city: "Kokshetau",
        country: "Kazakhstan",
        category: "international",
        established: 1962,
        type: "Public University",
        programs: ["Medicine", "Pedagogy", "Engineering", "Economics"],
        duration: "5 years",
        recognition: "Ministry of Education and Science of Kazakhstan",
        website: "kokshetau_state.html"
    },
    {
        name: "North Kazakhstan State University",
        city: "Petropavl",
        country: "Kazakhstan",
        category: "international",
        established: 1937,
        type: "Public University",
        programs: ["Medicine", "Engineering", "Agriculture", "Education"],
        duration: "5 years",
        recognition: "Ministry of Education and Science of Kazakhstan",
        website: "north_kazakhstan_state.html"
    },
    {
        name: "Semey State Medical University",
        city: "Semey",
        country: "Kazakhstan",
        category: "international",
        established: 1953,
        type: "Public Medical University",
        programs: ["MBBS", "Dentistry", "Pharmacy", "Nursing"],
        duration: "5 years",
        recognition: "WHO, NMC, ECFMG",
        website: "semey_state_medical.html"
    },
    {
        name: "South Kazakhstan State Medical Academy",
        city: "Shymkent",
        country: "Kazakhstan",
        category: "international",
        established: 1979,
        type: "Public Medical University",
        programs: ["MBBS", "Dentistry", "Pharmacy", "Nursing"],
        duration: "5 years",
        recognition: "WHO, NMC",
        website: "south_kazakhstan_medical.html"
    },
    {
        name: "West Kazakhstan Marat Ospanov State Medical University",
        city: "Aktobe",
        country: "Kazakhstan",
        category: "international",
        established: 1957,
        type: "Public Medical University",
        programs: ["MBBS", "Dentistry", "Pharmacy", "Nursing"],
        duration: "5 years",
        recognition: "WHO, NMC, ECFMG",
        website: "west_kazakhstan_medical.html"
    },
    {
        name: "Samarkand State University",
        city: "Samarkand",
        country: "Uzbekistan",
        category: "international",
        established: 1927,
        type: "Public University",
        programs: ["Medicine", "Physics", "Mathematics", "History", "Economics"],
        duration: "5 years",
        recognition: "Ministry of Higher and Secondary Specialized Education of Uzbekistan",
        website: "samarkand.html"
    },
    {
        name: "Bukhara State University",
        city: "Bukhara",
        country: "Uzbekistan",
        category: "international",
        established: 1930,
        type: "Public University",
        programs: ["Engineering", "Economics", "Education", "Natural Sciences"],
        duration: "5 years",
        recognition: "Ministry of Higher and Secondary Specialized Education of Uzbekistan",
        website: "bukhara.html"
    },
    {
        name: "Karshi State University",
        city: "Karshi",
        country: "Uzbekistan",
        category: "international",
        established: 1973,
        type: "Public University",
        programs: ["Education", "Economics", "Agriculture", "Engineering"],
        duration: "5 years",
        recognition: "Ministry of Higher and Secondary Specialized Education of Uzbekistan",
        website: "karshiStateUniversity.html"
    },
    // International Colleges - Uzbekistan
    {
        name: "Tashkent Medical Academy",
        city: "Tashkent",
        country: "Uzbekistan",
        category: "international",
        established: 1919,
        type: "Public Medical University",
        programs: ["MBBS", "MD", "Pharmacy", "Dentistry"],
        duration: "6 years",
        recognition: "WHO, MCI, ECFMG",
        website: "tashkent.html"
    },
    {
        name: "Fergana Medical Institute of Public Health",
        city: "Fergana",
        country: "Uzbekistan",
        category: "international",
        established: 1992,
        type: "Public Medical Institute",
        programs: ["MBBS", "Pediatrics", "Public Health"],
        duration: "5 years",
        recognition: "WHO, MCI",
        website: "Fergana.html"
    },
    {
        name: "Bukhara State Medical Institute",
        city: "Bukhara",
        country: "Uzbekistan",
        category: "international",
        established: 1990,
        type: "State Medical Institute",
        programs: ["MBBS", "Dentistry", "Pharmacy"],
        duration: "5 years",
        recognition: "WHO, MCI, FAIMER",
        website: "bukhara.html"
    },
    {
        name: "Samarkand State Medical Institute",
        city: "Samarkand",
        country: "Uzbekistan",
        category: "international",
        established: 1930,
        type: "Public Medical Institute",
        programs: ["MBBS", "Dentistry", "Pediatrics", "Pharmacy"],
        duration: "5 years",
        recognition: "WHO, NMC",
        website: "samarkand.html"
    },
    {
        name: "Andijan State Medical Institute",
        city: "Andijan",
        country: "Uzbekistan",
        category: "international",
        established: 1955,
        type: "Public Medical Institute",
        programs: ["MBBS", "Dentistry", "Pediatrics", "Pharmacy"],
        duration: "5 years",
        recognition: "WHO, NMC",
        website: "AndijanStateMedicalInstitute.html"
    },
    // International Colleges - Kazakhstan
    {
        name: "Al-Farabi Kazakh National University",
        city: "Almaty",
        country: "Kazakhstan",
        category: "international",
        established: 1934,
        type: "Public University",
        programs: ["MBBS", "MD", "Dentistry"],
        duration: "5 years",
        recognition: "WHO, NMC, WFME",
        website: "AlFarabiKazakhNationalUniversity.html"
    },

    {
        name: "Kazakh National Medical University",
        city: "Almaty",
        country: "Kazakhstan",
        category: "international",
        established: 1931,
        type: "Public Medical University",
        programs: ["MBBS", "Pharmacy", "Nursing"],
        duration: "5 years",
        recognition: "WHO, NMC, ECFMG",
        website: "kazakh_national.html"
    },
    {
        name: "Astana Medical University",
        city: "Nur-Sultan",
        country: "Kazakhstan",
        category: "international",
        established: 1997,
        type: "Public Medical University",
        programs: ["MBBS", "Clinical Medicine"],
        duration: "5 years",
        recognition: "WHO, NMC",
        website: "astana.html"
    },
    // International Colleges - Egypt
    {
        name: "Ain Shams University",
        city: "Cairo",
        country: "Egypt",
        category: "international",
        established: 1950,
        type: "Public University",
        programs: ["Medicine", "Surgery", "Pharmacy", "Nursing"],
        duration: "6 years",
        recognition: "WHO, MCI, ECFMG",
        website: "collegeError.html"
    },
    {
        name: "Alexandria University",
        city: "Alexandria",
        country: "Egypt",
        category: "international",
        established: 1942,
        type: "Public University",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing"],
        duration: "6 years",
        recognition: "WHO, MCI, ECFMG",
        website: "collegeError.html"
    },
    {
        name: "Cairo University",
        city: "Cairo",
        country: "Egypt",
        category: "international",
        established: 1908,
        type: "Public University",
        programs: ["Medicine", "Surgery", "Pharmacy", "Dentistry"],
        duration: "6 years",
        recognition: "WHO, MCI, ECFMG, FAIMER",
        website: "collegeError.html"
    },
    {
        name: "Nahda University",
        city: "Beni Suef",
        country: "Egypt",
        category: "international",
        established: 2006,
        type: "Private University",
        programs: ["Medicine", "Pharmacy", "Engineering"],
        duration: "6 years",
        recognition: "WHO, MCI",
        website: "collegeError.html"
    },
    // International Colleges - Georgia
    {
        name: "New Vision University",
        city: "Tbilisi",
        country: "Georgia",
        category: "international",
        established: 2013,
        type: "Private Medical University",
        programs: ["Medicine", "Dentistry", "Pharmacy"],
        duration: "6 years",
        recognition: "WHO, MCI, ECFMG",
        website: "collegeError.html"
    },
    {
        name: "Georgian American University",
        city: "Tbilisi",
        country: "Georgia",
        category: "international",
        established: 2001,
        type: "Private University",
        programs: ["Medicine", "Business", "Law", "Engineering"],
        duration: "6 years",
        recognition: "WHO, MCI, FAIMER",
        website: "collegeError.html"
    },
    {
        name: "Georgian National University SEU",
        city: "Tbilisi",
        country: "Georgia",
        category: "international",
        established: 2001,
        type: "Private University",
        programs: ["Medicine", "Dentistry", "Pharmacy"],
        duration: "6 years",
        recognition: "WHO, MCI, ECFMG",
        website: "collegeError.html"
    },
    {
        name: "University of Georgia",
        city: "Tbilisi",
        country: "Georgia",
        category: "international",
        established: 2004,
        type: "Private University",
        programs: ["Medicine", "Dentistry", "Public Health"],
        duration: "6 years",
        recognition: "WHO, MCI, FAIMER",
        website: "collegeError.html"
    },
    {
        name: "Tbilisi State Medical University",
        city: "Tbilisi",
        country: "Georgia",
        category: "international",
        established: 1918,
        type: "Public Medical University",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Public Health"],
        duration: "6 years",
        recognition: "WHO, NMC, ECFMG, FAIMER",
        website: "collegeError.html"
    },
    {
        name: "David Tvildiani Medical University",
        city: "Tbilisi",
        country: "Georgia",
        category: "international",
        established: 1989,
        type: "Private Medical University",
        programs: ["Medicine", "Dentistry"],
        duration: "6 years",
        recognition: "WHO, NMC, ECFMG",
        website: "collegeError.html"
    },
    // International Colleges - Kyrgyzstan
    {
        name: "Osh State University",
        city: "Osh",
        country: "Kyrgyzstan",
        category: "international",
        established: 1992,
        type: "Public Medical University",
        programs: ["MBBS", "Dentistry", "Pediatrics"],
        duration: "5 years",
        recognition: "WHO, NMC, ECFMG",
        website: "collegeError.html"
    },
    // International Colleges - Iran
    {
        name: "Arak University of Medical Sciences",
        city: "Arak",
        country: "Iran",
        category: "international",
        established: 1987,
        type: "Public Medical University",
        programs: ["MBBS", "Dentistry", "Pharmacy", "Nursing", "Public Health"],
        duration: "7 years",
        recognition: "WHO, NMC, ECFMG",
        website: "collegeError.html"
    },
    {
        name: "Shaheed Beheshti University of Medical Sciences",
        city: "Tehran",
        country: "Iran",
        category: "international",
        established: 1960,
        type: "Public Medical University",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing", "Public Health"],
        duration: "7 years",
        recognition: "WHO, NMC, ECFMG, FAIMER",
        website: "collegeError.html"
    },
    {
        name: "Islamic Azad University, Tehran Medical Center",
        city: "Tehran",
        country: "Iran",
        category: "international",
        established: 1985,
        type: "Private University",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing"],
        duration: "7 years",
        recognition: "WHO, NMC",
        website: "collegeError.html"
    },
    {
        name: "Tehran University of Medical Sciences",
        city: "Tehran",
        country: "Iran",
        category: "international",
        established: 1934,
        type: "Public Medical University",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing", "Public Health"],
        duration: "7 years",
        recognition: "WHO, NMC, ECFMG, FAIMER",
        website: "collegeError.html"
    },
    {
        name: "Shiraz University of Medical Sciences",
        city: "Shiraz",
        country: "Iran",
        category: "international",
        established: 1946,
        type: "Public Medical University",
        programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing", "Public Health"],
        duration: "7 years",
        recognition: "WHO, NMC, ECFMG",
        website: "collegeError.html"
    },
    // International Colleges - Nepal
    {
        name: "Birat Medical College",
        city: "Morang",
        country: "Nepal",
        category: "international",
        established: 2014,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing"],
        duration: "5.5 years",
        recognition: "WHO, NMC",
        website: "collegeError.html"
    },
    {
        name: "College of Medical Sciences",
        city: "Bharatpur",
        country: "Nepal",
        category: "international",
        established: 1993,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS", "Nursing"],
        duration: "5.5 years",
        recognition: "WHO, NMC",
        website: "collegeError.html"
    },
    {
        name: "Janaki Medical College",
        city: "Janakpur",
        country: "Nepal",
        category: "international",
        established: 2003,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing"],
        duration: "5.5 years",
        recognition: "WHO, NMC",
        website: "collegeError.html"
    },
    {
        name: "Kathmandu Medical College",
        city: "Kathmandu",
        country: "Nepal",
        category: "international",
        established: 1997,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS", "Dentistry"],
        duration: "5.5 years",
        recognition: "WHO, NMC",
        website: "collegeError.html"
    },
    {
        name: "KIST Medical College",
        city: "Kathmandu",
        country: "Nepal",
        category: "international",
        established: 2006,
        type: "Private Medical College",
        programs: ["MBBS", "Dentistry", "Nursing"],
        duration: "5.5 years",
        recognition: "WHO, NMC",
        website: "collegeError.html"
    },
    // International Colleges - Bangladesh
    {
        name: "Dhaka Medical College",
        city: "Dhaka",
        country: "Bangladesh",
        category: "international",
        established: 1946,
        type: "Public Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "6 years",
        recognition: "WHO, NMC, ECFMG",
        website: "collegeError.html"
    },
    {
        name: "Chittagong Medical College",
        city: "Chittagong",
        country: "Bangladesh",
        category: "international",
        established: 1957,
        type: "Public Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "6 years",
        recognition: "WHO, NMC",
        website: "collegeError.html"
    },
    {
        name: "Mymensingh Medical College",
        city: "Mymensingh",
        country: "Bangladesh",
        category: "international",
        established: 1962,
        type: "Public Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "6 years",
        recognition: "WHO, NMC",
        website: "collegeError.html"
    },
    // Indian Colleges - West Bengal
    {
        name: "Gouri Devi Institute of Medical Sciences",
        city: "Rajbandh",
        country: "India",
        category: "india",
        established: 2016,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "ICARE Institute of Medical Sciences",
        city: "Haldia",
        country: "India",
        category: "india",
        established: 2011,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "IQ City Medical College",
        city: "Durgapur",
        country: "India",
        category: "india",
        established: 2013,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "JIS School of Medical Sciences",
        city: "Howrah",
        country: "India",
        category: "india",
        established: 2016,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "JMN Medical College",
        city: "Nadia",
        country: "India",
        category: "india",
        established: 2020,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "KPC Medical College & Hospital",
        city: "Jadavpur",
        country: "India",
        category: "india",
        established: 2008,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Shri Ramkrishna Institute of Medical Sciences",
        city: "Durgapur",
        country: "India",
        category: "india",
        established: 2015,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    // Indian Colleges - Uttar Pradesh
    {
        name: "Career Institute of Medical Sciences",
        city: "Lucknow",
        country: "India",
        category: "india",
        established: 2011,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Era's Lucknow Medical College",
        city: "Lucknow",
        country: "India",
        category: "india",
        established: 1997,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "F.H. Medical College",
        city: "Agra",
        country: "India",
        category: "india",
        established: 2014,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "G.S. Medical College",
        city: "Hapur",
        country: "India",
        category: "india",
        established: 2017,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Heritage Institute of Medical Sciences",
        city: "Varanasi",
        country: "India",
        category: "india",
        established: 2015,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Hind Institute of Medical Sciences",
        city: "Sitapur",
        country: "India",
        category: "india",
        established: 2008,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Integral University",
        city: "Lucknow",
        country: "India",
        category: "india",
        established: 2004,
        type: "Private University",
        programs: ["MBBS", "Nursing", "Pharmacy"],
        duration: "5.5 years",
        recognition: "NMC, UGC",
        website: "collegeError.html"
    },
    {
        name: "K.D. Medical College",
        city: "Mathura",
        country: "India",
        category: "india",
        established: 2015,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Muzaffarnagar Medical College",
        city: "Muzaffarnagar",
        country: "India",
        category: "india",
        established: 2006,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Naraina Medical College",
        city: "Kanpur",
        country: "India",
        category: "india",
        established: 2021,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "National Capital Region Institute",
        city: "Meerut",
        country: "India",
        category: "india",
        established: 2018,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Noida International Institute",
        city: "Noida",
        country: "India",
        category: "india",
        established: 2021,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Rajshree Medical Research Institute",
        city: "Bareilly",
        country: "India",
        category: "india",
        established: 2014,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Rama Medical College (Kanpur)",
        city: "Kanpur",
        country: "India",
        category: "india",
        established: 2008,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Rama Medical College (Hapur)",
        city: "Hapur",
        country: "India",
        category: "india",
        established: 2011,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Rohilkhand Medical College",
        city: "Bareilly",
        country: "India",
        category: "india",
        established: 2006,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Prasad Institute of Medical Sciences",
        city: "Lucknow",
        country: "India",
        category: "india",
        established: 2016,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Santosh Medical College",
        city: "Ghaziabad",
        country: "India",
        category: "india",
        established: 1995,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS", "Dentistry"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Saraswati Institute of Medical Sciences",
        city: "Hapur",
        country: "India",
        category: "india",
        established: 2008,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "School of Medical Sciences & Research",
        city: "Greater Noida",
        country: "India",
        category: "india",
        established: 2009,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "SKS Hospital Medical College",
        city: "Mathura",
        country: "India",
        category: "india",
        established: 2023,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Shri Ram Murti Smarak Institute",
        city: "Bareilly",
        country: "India",
        category: "india",
        established: 2005,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Subharti Medical College",
        city: "Meerut",
        country: "India",
        category: "india",
        established: 2000,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS", "Dentistry"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "T.S. Misra Medical College",
        city: "Lucknow",
        country: "India",
        category: "india",
        established: 2016,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Teerthanker Mahaveer University",
        city: "Moradabad",
        country: "India",
        category: "india",
        established: 2008,
        type: "Private University",
        programs: ["MBBS", "MD", "MS", "Dentistry"],
        duration: "5.5 years",
        recognition: "NMC, UGC",
        website: "collegeError.html"
    },
    {
        name: "United Institute of Medical Sciences",
        city: "Prayagraj",
        country: "India",
        category: "india",
        established: 2020,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Venkateshwara Institute of Medical Sciences",
        city: "Gajraula",
        country: "India",
        category: "india",
        established: 2016,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    // Indian Colleges - Kerala
    {
        name: "Al Azhar Medical College",
        city: "Kumaramangalam",
        country: "India",
        category: "india",
        established: 2010,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC",
        website: ""
    },
    {
        name: "Amala Institute of Medical Sciences",
        city: "Thrissur",
        country: "India",
        category: "india",
        established: 2002,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Azeezia Institute of Medical Sciences",
        city: "Meeyannoor",
        country: "India",
        category: "india",
        established: 2008,
        type: "Private Medical College",
        programs: ["MBBS", "Dentistry", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Believers Church Medical College",
        city: "Thiruvalla",
        country: "India",
        category: "india",
        established: 2016,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Jubilee Mission Medical College",
        city: "Thrissur",
        country: "India",
        category: "india",
        established: 2002,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Karuna Medical College",
        city: "Palakkad",
        country: "India",
        category: "india",
        established: 2006,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Malabar Medical College",
        city: "Modakkallur",
        country: "India",
        category: "india",
        established: 2010,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "MOSC Medical College",
        city: "Kolenchery",
        country: "India",
        category: "india",
        established: 2001,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "MES Academy of Medical Sciences",
        city: "Malaparamba",
        country: "India",
        category: "india",
        established: 2002,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Mount Zion Medical College",
        city: "Ezhankulam",
        country: "India",
        category: "india",
        established: 2012,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "P.K. Das Institute of Medical Sciences",
        city: "Ottapalam",
        country: "India",
        category: "india",
        established: 2014,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Pushpagiri Institute of Medical Sciences",
        city: "Thiruvalla",
        country: "India",
        category: "india",
        established: 2002,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Sree Gokulam Medical College",
        city: "Thiruvananthapuram",
        country: "India",
        category: "india",
        established: 2004,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Sree Narayana Institute of Medical Sciences",
        city: "Kunnukara",
        country: "India",
        category: "india",
        established: 2009,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Sree Uthradom Thirunal Academy",
        city: "Thiruvananthapuram",
        country: "India",
        category: "india",
        established: 2006,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Travancore Medical College",
        city: "Kollam",
        country: "India",
        category: "india",
        established: 2009,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    // Indian Colleges - Haryana
    {
        name: "PGIMS Rohtak",
        city: "Rohtak",
        country: "India",
        category: "india",
        established: 1960,
        type: "Government Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Pt. B.D. Sharma University",
        city: "Rohtak",
        country: "India",
        category: "india",
        established: 1994,
        type: "Public University",
        programs: ["MBBS", "MD", "MS", "Dentistry"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Medanta The Medicity",
        city: "Gurugram",
        country: "India",
        category: "india",
        established: 2009,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Maharishi Markandeshwar Medical College",
        city: "Ambala",
        country: "India",
        category: "india",
        established: 2003,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Shaheed Hasan Khan Mewati Govt Medical College",
        city: "Nalhar",
        country: "India",
        category: "india",
        established: 2013,
        type: "Government Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    // Indian Colleges - Bihar
    {
        name: "Lord Buddha Koshi Medical College & Hospital",
        city: "Saharsa",
        country: "India",
        category: "india",
        established: 2013,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Al-Karim University",
        city: "Katihar",
        country: "India",
        category: "india",
        established: 2019,
        type: "Private University",
        programs: ["MBBS", "Nursing", "Pharmacy"],
        duration: "5.5 years",
        recognition: "NMC, UGC",
        website: "collegeError.html"
    },
    {
        name: "Katihar Medical College",
        city: "Katihar",
        country: "India",
        category: "india",
        established: 1987,
        type: "Government Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Mata Gujri Memorial Medical College",
        city: "Kishanganj",
        country: "India",
        category: "india",
        established: 2017,
        type: "Private Medical College",
        programs: ["MBBS", "Paramedical Courses"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Narayan Medical College & Hospital",
        city: "Sasaram",
        country: "India",
        category: "india",
        established: 2018,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing", "Paramedical"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Netaji Subhas Medical College & Hospital",
        city: "Patna",
        country: "India",
        category: "india",
        established: 2018,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Radha Devi Jageshwari Memorial Medical College",
        city: "Muzaffarpur",
        country: "India",
        category: "india",
        established: 2020,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Shree Narayan Medical Institute & Hospital",
        city: "Saharsa",
        country: "India",
        category: "india",
        established: 2019,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    // Indian Colleges - Chhattisgarh
    {
        name: "Laxmi Chandravansi Medical College & Hospital",
        city: "Bishrampur",
        country: "India",
        category: "india",
        established: 2020,
        type: "Private Medical College",
        programs: ["MBBS"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    {
        name: "Raipur Institute of Medical Sciences",
        city: "Raipur",
        country: "India",
        category: "india",
        established: 2016,
        type: "Private Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Shri Shankaracharya Institute of Medical Sciences",
        city: "Bhilai",
        country: "India",
        category: "india",
        established: 2016,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing", "Pharmacy"],
        duration: "5.5 years",
        recognition: "NMC",
        website: "collegeError.html"
    },
    // Indian Colleges - Rajasthan
    {
        name: "Pacific Medical College",
        city: "Udaipur",
        country: "India",
        category: "india",
        established: 2014,
        type: "Private Medical College",
        programs: ["MBBS", "Nursing"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    },
    {
        name: "Dr. S.N. Medical College",
        city: "Jodhpur",
        country: "India",
        category: "india",
        established: 1965,
        type: "Government Medical College",
        programs: ["MBBS", "MD", "MS"],
        duration: "5.5 years",
        recognition: "NMC, WHO",
        website: "collegeError.html"
    }
];
// DOM Elements
const collegesGrid = document.getElementById('collegesGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const totalCollegesElement = document.getElementById('totalColleges');
const totalCountriesElement = document.getElementById('totalCountries');
const modal = document.getElementById('collegeModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Current filter state
let currentFilter = 'all';
let searchTerm = '';

// Initialize the page
function init() {
    renderColleges();
    updateStats();
    setupEventListeners();
}

// Render colleges based on filter and search
function renderColleges() {
    const filteredColleges = collegesData.filter(college => {
        const matchesFilter = currentFilter === 'all' || college.category === currentFilter;
        const matchesSearch = searchTerm === '' || 
            college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            college.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            college.country.toLowerCase().includes(searchTerm.toLowerCase());
        
        return matchesFilter && matchesSearch;
    });

    collegesGrid.innerHTML = '';
    
    if (filteredColleges.length === 0) {
        collegesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 20px;"></i>
                <h3 style="color: #64748b; font-weight: 500;">No colleges found</h3>
                <p style="color: #94a3b8; margin-top: 10px;">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    filteredColleges.forEach((college, index) => {
        const collegeCard = createCollegeCard(college, index);
        collegesGrid.appendChild(collegeCard);
    });
}

// Create college card element
function createCollegeCard(college, index) {
    const card = document.createElement('div');
    card.className = 'college-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="college-header">
            <h3 class="college-name">${college.name}</h3>
            <div class="college-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${college.city}, ${college.country}</span>
            </div>
        </div>
        <div class="college-body">
            <div class="college-info">
                <div class="info-item">
                    <i class="fas fa-university"></i>
                    <span>${college.type}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-calendar"></i>
                    <span>Established ${college.established}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <span>Duration: ${college.duration}</span>
                </div>
            </div>
            <div class="college-tags">
                ${college.programs.slice(0, 3).map(program => 
                    `<span class="tag">${program}</span>`
                ).join('')}
                ${college.programs.length > 3 ? 
                    `<span class="tag">+${college.programs.length - 3} more</span>` : ''
                }
                <span class="tag country">${college.country}</span>
            </div>
            <a href="${college.website}" class="learn-more-btn" onclick="showSpinner(this, event)">
                <i class="fas fa-external-link-alt"></i>
                Learn More
            </a>
        </div>
    `;
    
    return card;
}

// Show college details in modal
function showCollegeDetails(college) {
    modalBody.innerHTML = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; margin: 0; color: white; position: sticky; top: 0; z-index: 1;">
            <h2 style="font-size: 2rem; margin-bottom: 10px;">${college.name}</h2>
            <p style="font-size: 1.1rem; opacity: 0.9;">
                <i class="fas fa-map-marker-alt"></i> ${college.city}, ${college.country}
            </p>
        </div>
        
        <div style="padding: 40px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 30px;">
                <div>
                    <h4 style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">INSTITUTION TYPE</h4>
                    <p style="font-size: 1.1rem; font-weight: 500;">${college.type}</p>
                </div>
                <div>
                    <h4 style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">ESTABLISHED</h4>
                    <p style="font-size: 1.1rem; font-weight: 500;">${college.established}</p>
                </div>
                <div>
                    <h4 style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">COURSE DURATION</h4>
                    <p style="font-size: 1.1rem; font-weight: 500;">${college.duration}</p>
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3 style="margin-bottom: 15px; color: #1e293b;">Programs Offered</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    ${college.programs.map(program => 
                        `<span style="padding: 8px 16px; background: #f1f5f9; color: #475569; border-radius: 8px; font-weight: 500;">${program}</span>`
                    ).join('')}
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3 style="margin-bottom: 15px; color: #1e293b;">Recognition & Accreditation</h3>
                <p style="color: #64748b; line-height: 1.8;">${college.recognition}</p>
            </div>
            
            ${college.website !== '#' ? `
                <a href="${college.website}" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: #667eea; color: white; text-decoration: none; border-radius: 8px; font-weight: 500; transition: all 0.3s ease;">
                    <i class="fas fa-external-link-alt"></i>
                    Visit Official Website
                </a>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // Scroll to top of modal content
    modalBody.scrollTop = 0;
}

// Update statistics
function updateStats() {
    const totalColleges = collegesData.length;
    const uniqueCountries = [...new Set(collegesData.map(college => college.country))].length;
    
    // Animate numbers
    animateNumber(totalCollegesElement, totalColleges, 1000);
    animateNumber(totalCountriesElement, uniqueCountries, 1000);
}

// Animate number counting
function animateNumber(element, target, duration) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderColleges();
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderColleges();
        });
    });
    
    // Modal close
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Enhanced scroll behavior
    let lastScrollTop = 0;
    let scrollTimeout;
    const searchContainer = document.querySelector('.search-container');
    const filterSection = document.querySelector('.filter-section');
    const heroSection = document.querySelector('.hero-section');
    let isScrolling = false;

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                const scrollDirection = currentScroll > lastScrollTop ? 'down' : 'up';
                const isMobile = window.innerWidth <= 768;
                
                // Add smooth transitions
                if (scrollDirection === 'down' && currentScroll > 100) {
                    if (!isMobile) {
                        searchContainer.classList.add('hide-on-scroll');
                    }
                    filterSection.classList.add('hide-on-scroll');
                    heroSection.style.transform = 'translateY(-20px)';
                } else {
                    if (!isMobile) {
                        searchContainer.classList.remove('hide-on-scroll');
                    }
                    filterSection.classList.remove('hide-on-scroll');
                    heroSection.style.transform = 'translateY(0)';
                }

                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
                isScrolling = false;
            });
        }
        isScrolling = true;
    });

    // Optimize scroll performance
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            // Your scroll handling code here
        });
    }, { passive: true });

    // Remove floating search button if it exists
    const floatingSearchBtn = document.querySelector('.floating-search-btn');
    if (floatingSearchBtn) {
        floatingSearchBtn.remove();
    }
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { collegesData, renderColleges, updateStats };
}




// Mobile touch improvements
let touchStartY = 0;
let touchEndY = 0;

// Prevent pull-to-refresh on mobile when scrolling modal
modalBody.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

modalBody.addEventListener('touchmove', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    if (modalBody.scrollTop === 0 && touchEndY > touchStartY) {
        e.preventDefault();
    }
}, { passive: false });

// Improve mobile modal closing
if ('ontouchstart' in window) {
    modal.addEventListener('touchstart', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Add viewport height fix for mobile browsers
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewportHeight();
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);



// Show college details in modal - Mobile Optimized
function showCollegeDetails(college) {
    const isMobile = window.innerWidth <= 768;
    
    modalBody.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: ${isMobile ? '60px 20px 24px' : '40px'};
            margin: 0;
            color: white;
            position: relative;
        ">
            <h2 style="
                font-size: ${isMobile ? '1.5rem' : '2rem'};
                font-weight: 600;
                margin-bottom: 8px;
                line-height: 1.2;
            ">${college.name}</h2>
            <p style="
                font-size: ${isMobile ? '0.9rem' : '1.1rem'};
                opacity: 0.9;
                display: flex;
                align-items: center;
                gap: 6px;
            ">
                <i class="fas fa-map-marker-alt" style="font-size: 0.9em;"></i>
                ${college.city}, ${college.country}
            </p>
        </div>
        
        <div style="padding: ${isMobile ? '20px' : '40px'};">
            <!-- Quick Stats Grid -->
            <div style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: ${isMobile ? '12px' : '20px'};
                margin-bottom: ${isMobile ? '24px' : '30px'};
            ">
                <div style="
                    text-align: center;
                    padding: ${isMobile ? '12px 8px' : '16px'};
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                ">
                    <i class="fas fa-university" style="
                        color: #667eea;
                        font-size: ${isMobile ? '1.2rem' : '1.5rem'};
                        margin-bottom: 6px;
                        display: block;
                    "></i>
                    <span style="
                        font-size: ${isMobile ? '0.7rem' : '0.8rem'};
                        color: #64748b;
                        display: block;
                        margin-bottom: 4px;
                    ">TYPE</span>
                    <span style="
                        font-size: ${isMobile ? '0.8rem' : '0.9rem'};
                        font-weight: 600;
                        color: #1e293b;
                        display: block;
                        line-height: 1.2;
                    ">${college.type.split(' ')[0]}</span>
                </div>
                
                <div style="
                    text-align: center;
                    padding: ${isMobile ? '12px 8px' : '16px'};
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                ">
                    <i class="fas fa-calendar" style="
                        color: #667eea;
                        font-size: ${isMobile ? '1.2rem' : '1.5rem'};
                        margin-bottom: 6px;
                        display: block;
                    "></i>
                    <span style="
                        font-size: ${isMobile ? '0.7rem' : '0.8rem'};
                        color: #64748b;
                        display: block;
                        margin-bottom: 4px;
                    ">FOUNDED</span>
                    <span style="
                        font-size: ${isMobile ? '0.8rem' : '0.9rem'};
                        font-weight: 600;
                        color: #1e293b;
                    ">${college.established}</span>
                </div>
                
                <div style="
                    text-align: center;
                    padding: ${isMobile ? '12px 8px' : '16px'};
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                ">
                    <i class="fas fa-clock" style="
                        color: #667eea;
                        font-size: ${isMobile ? '1.2rem' : '1.5rem'};
                        margin-bottom: 6px;
                        display: block;
                    "></i>
                    <span style="
                        font-size: ${isMobile ? '0.7rem' : '0.8rem'};
                        color: #64748b;
                        display: block;
                        margin-bottom: 4px;
                    ">DURATION</span>
                    <span style="
                        font-size: ${isMobile ? '0.8rem' : '0.9rem'};
                        font-weight: 600;
                        color: #1e293b;
                    ">${college.duration}</span>
                </div>
            </div>
            
            <!-- Programs Section -->
            <div style="margin-bottom: ${isMobile ? '24px' : '30px'};">
                <h3 style="
                    font-size: ${isMobile ? '1rem' : '1.2rem'};
                    margin-bottom: ${isMobile ? '12px' : '15px'};
                    color: #1e293b;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <i class="fas fa-graduation-cap" style="color: #667eea; font-size: 0.9em;"></i>
                    Programs Offered
                </h3>
                <div style="
                    display: flex;
                    flex-wrap: wrap;
                    gap: ${isMobile ? '6px' : '10px'};
                ">
                    ${college.programs.map(program => 
                        `<span style="
                            padding: ${isMobile ? '6px 12px' : '8px 16px'};
                            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
                            color: #374151;
                            border-radius: 20px;
                            font-size: ${isMobile ? '0.8rem' : '0.9rem'};
                            font-weight: 500;
                            border: 1px solid #e5e7eb;
                        ">${program}</span>`
                    ).join('')}
                </div>
            </div>
            
            <!-- Recognition Section -->
            <div style="margin-bottom: ${isMobile ? '24px' : '30px'};">
                <h3 style="
                    font-size: ${isMobile ? '1rem' : '1.2rem'};
                    margin-bottom: ${isMobile ? '12px' : '15px'};
                    color: #1e293b;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <i class="fas fa-award" style="color: #667eea; font-size: 0.9em;"></i>
                    Recognition & Accreditation
                </h3>
                <div style="
                    background: #fef3c7;
                    border: 1px solid #fde68a;
                    padding: ${isMobile ? '12px' : '16px'};
                    border-radius: 12px;
                    color: #78350f;
                    font-size: ${isMobile ? '0.85rem' : '0.95rem'};
                    line-height: 1.6;
                ">
                    <i class="fas fa-shield-alt" style="color: #f59e0b; margin-right: 8px;"></i>
                    ${college.recognition}
                </div>
            </div>
            
            ${college.website !== '#' ? `
                <a href="${college.website}" target="_blank" onclick="showSpinner(this, event)" style="
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: ${isMobile ? '12px 20px' : '14px 28px'};
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    text-decoration: none;
                    border-radius: 25px;
                    font-weight: 500;
                    font-size: ${isMobile ? '0.9rem' : '1rem'};
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                    ${isMobile ? 'width: 100%; justify-content: center;' : ''}
                ">
                    <i class="fas fa-external-link-alt"></i>
                    Visit Official Website
                </a>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modalBody.scrollTop = 0;

    // Add swipe to close functionality for mobile
    if (isMobile) {
        addSwipeToClose();
    }
}

// Function to show spinner and handle website link click
function showSpinner(link, event) {
    event.preventDefault();
    
    // Create spinner overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '2000';
    
    // Create spinner
    const spinner = document.createElement('div');
    spinner.style.width = '50px';
    spinner.style.height = '50px';
    spinner.style.border = '5px solid #f3f3f3';
    spinner.style.borderTop = '5px solid #25D366';
    spinner.style.borderRadius = '50%';
    
    // Add spinner to overlay
    overlay.appendChild(spinner);
    document.body.appendChild(overlay);
    
    // Start rotation animation
    let rotation = 0;
    const animate = () => {
        rotation += 10;
        spinner.style.transform = `rotate(${rotation}deg)`;
        if (rotation < 720) { // Rotate twice (2 seconds at 10 degrees per frame)
            requestAnimationFrame(animate);
        }
    };
    requestAnimationFrame(animate);
    
    // Remove spinner and navigate after 2 seconds
    setTimeout(() => {
        document.body.removeChild(overlay);
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
        }
    }, 2000);
}

// Swipe to close functionality
function addSwipeToClose() {
let startY = 0;
let currentY = 0;
let isDragging = false;
const modalContent = document.querySelector('.modal-content');

modalContent.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    isDragging = true;
    modalContent.style.transition = 'none';
});

modalContent.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;
    
    // Only allow dragging down
    if (deltaY > 0) {
        modalContent.style.transform = `translateY(${deltaY}px)`;
        modalContent.style.opacity = 1 - (deltaY / 300);
    }
});

modalContent.addEventListener('touchend', (e) => {
    isDragging = false;
    modalContent.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    
    const deltaY = currentY - startY;
    
    // If dragged down more than 100px, close the modal
    if (deltaY > 100) {
        modalContent.style.transform = 'translateY(100%)';
        modalContent.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            modalContent.style.transform = '';
            modalContent.style.opacity = '';
        }, 300);
    } else {
        // Snap back to position
        modalContent.style.transform = 'translateY(0)';
        modalContent.style.opacity = '1';
    }
    
    startY = 0;
    currentY = 0;
});
}

// Enhanced mobile detection and optimization
function isMobileDevice() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Optimize performance for mobile
if (isMobileDevice()) {
// Reduce animation complexity
document.documentElement.style.setProperty('--animation-duration', '0.2s');

// Add mobile-specific class
document.body.classList.add('is-mobile');
}

// Handle orientation change
window.addEventListener('orientationchange', () => {
setTimeout(() => {
    if (modal.style.display === 'block') {
        const activeCollege = collegesData.find(c => 
            modalBody.innerHTML.includes(c.name)
        );
        if (activeCollege) {
            showCollegeDetails(activeCollege);
        }
    }
}, 300);
});

// Improve scroll performance
let ticking = false;
function updateScrollPerformance() {
if (!ticking) {
    window.requestAnimationFrame(() => {
        // Add/remove classes based on scroll position
        if (window.scrollY > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        ticking = false;
    });
    ticking = true;
}
}

window.addEventListener('scroll', updateScrollPerformance, { passive: true });

// Lazy loading for better performance
const observerOptions = {
root: null,
rootMargin: '50px',
threshold: 0.01
};

const cardObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
    }
});
}, observerOptions);

// Apply lazy loading after cards are rendered
function applyLazyLoading() {
const cards = document.querySelectorAll('.college-card');
cards.forEach(card => {
    card.classList.add('lazy-load');
    cardObserver.observe(card);
});
}

// Update the renderColleges function to include lazy loading
const originalRenderColleges = renderColleges;
renderColleges = function() {
originalRenderColleges();
setTimeout(applyLazyLoading, 100);
};

// Add pull to refresh for mobile
let pullToRefreshStartY = 0;
const pullThreshold = 100;

document.addEventListener('touchstart', (e) => {
if (window.scrollY === 0) {
    pullToRefreshStartY = e.touches[0].clientY;
}
}, { passive: true });

document.addEventListener('touchmove', (e) => {
if (pullToRefreshStartY) {
    const currentY = e.touches[0].clientY;
    const pullDistance = currentY - pullToRefreshStartY;
    
    if (pullDistance > pullThreshold && window.scrollY === 0) {
        // Show refresh indicator
        document.body.style.transform = `translateY(${Math.min(pullDistance * 0.5, 80)}px)`;
    }
}
}, { passive: true });

document.addEventListener('touchend', () => {
if (pullToRefreshStartY) {
    document.body.style.transition = 'transform 0.3s ease';
    document.body.style.transform = 'translateY(0)';
    pullToRefreshStartY = 0;
    
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
init();

// Preload fonts for better performance
if ('fonts' in document) {
    Promise.all([
        document.fonts.load('400 1rem Inter'),
        document.fonts.load('600 1rem Inter'),
        document.fonts.load('700 1rem Inter')
    ]).then(() => {
        document.body.classList.add('fonts-loaded');
    });
}
});









//  js for navbar starts 

document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.edu-navbar__toggler');
    const closeBtn = document.querySelector('.edu-nav-close');
    const navbar = document.querySelector('.edu-navbar');
    const navItems = document.querySelectorAll('.edu-nav__item');

    // Toggle mobile menu
    toggler.addEventListener('click', function() {
        navbar.classList.add('edu-nav--open');
        document.body.style.overflow = 'hidden';
        toggler.style.display = 'none';
        closeBtn.style.display = 'flex';
    });

    // Close mobile menu
    closeBtn.addEventListener('click', function() {
        navbar.classList.remove('edu-nav--open');
        document.body.style.overflow = '';
        toggler.style.display = 'block';
        closeBtn.style.display = 'none';
        // Close all dropdowns when closing menu
        navItems.forEach(item => {
            item.classList.remove('edu-nav__item--open');
            const subdropdowns = item.querySelectorAll('.edu-subdropdown');
            subdropdowns.forEach(sub => sub.classList.remove('edu-subdropdown--open'));
        });
    });

    // Handle dropdown toggles on mobile
    navItems.forEach(item => {
        const link = item.querySelector('.edu-nav__link');
        const dropdown = item.querySelector('.edu-dropdown');
        
        if (dropdown) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 576) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('edu-nav__item--open');
                            const subdropdowns = otherItem.querySelectorAll('.edu-subdropdown');
                            subdropdowns.forEach(sub => sub.classList.remove('edu-subdropdown--open'));
                        }
                    });
                    
                    item.classList.toggle('edu-nav__item--open');
                }
            });
        }

        // Handle subdropdown toggles
        const subdropdowns = item.querySelectorAll('.edu-subdropdown');
        subdropdowns.forEach(sub => {
            const subLink = sub.querySelector('.edu-dropdown__item');
            const subMenu = sub.querySelector('.edu-subdropdown__menu');
            
            if (subMenu) {
                subLink.addEventListener('click', function(e) {
                    if (window.innerWidth <= 576) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Close other subdropdowns
                        subdropdowns.forEach(otherSub => {
                            if (otherSub !== sub) {
                                otherSub.classList.remove('edu-subdropdown--open');
                            }
                        });
                        
                        sub.classList.toggle('edu-subdropdown--open');
                    }
                });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navbar.classList.contains('edu-nav--open') && 
            !e.target.closest('.edu-nav-container') && 
            !e.target.closest('.edu-navbar__toggler')) {
            navbar.classList.remove('edu-nav--open');
            document.body.style.overflow = '';
            toggler.style.display = 'block';
            closeBtn.style.display = 'none';
            // Close all dropdowns
            navItems.forEach(item => {
                item.classList.remove('edu-nav__item--open');
                const subdropdowns = item.querySelectorAll('.edu-subdropdown');
                subdropdowns.forEach(sub => sub.classList.remove('edu-subdropdown--open'));
            });
        }
    });
});


//  js for navbar ends



document.querySelector('.whatsapp-float').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent immediate navigation
    const spinner = document.getElementById('whatsappSpinner');
    spinner.style.display = 'flex'; // Show spinner
    setTimeout(() => {
        spinner.style.display = 'none'; // Hide spinner
        window.open('https://wa.me/+917488919466', '_blank'); // Open WhatsApp link
    }, 1000); // Show spinner for 1 second
});