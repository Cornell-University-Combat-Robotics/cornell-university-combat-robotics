const bios = {
    "name" : "bio",
    "sofie" : "Outside of CRC, I play the flute in the Big Red Marching Band and am involved in the Engineering Leadership Program. In my free time, you can find me jamming out to dance bops from 2012, visiting a nearby alpaca farm, or eating bread and fancy cheese with my friends.",
    "bruno" : "I love running  distances, playing video games, reading manga, and watching anime!",
    "ricky" : "I am also a member of Cornell Shogi Club.",
    "michelle" : "Outside of CRC, I'm involved in BreakFree, a dance team, and Alpha Chi Omega, a sorority. ",
    "rochelle" : "I am a member of Cornell Chamber Flute Ensemble and College Mentors for Kids.",
    "edith" : "I work in the Lammerding Lab, DEBUT (Design by Biomedical Undergraduate Teams), Alpha Phi Omega, Cornell Writing Center! I enjoy hosting movie nights!",
    "isaac" : "I write electronic pop songs and post them at https://soundcloud.com/isaacnewcomb. I'm also in a band with Mo called The Fuse. We play rock with influences from metal, alternative and other genres.",
    "anna" : "I play the violin and the piano, and sometimes I write my own music.",
    "e2" : "I'm a member of NSBE and NSA on campus. I like to play volleyball and watch anime.",
    "james" : "Hobbies: Basketball, volleyball. Clubs: Digital Humanities (NLP research).",
    "mo" : "My hobbies are playing guitar (guitarist/founder of The Fuse, a student Rock band), Experimental Research in Electric Propulsion (ASTRA lab), Persian Student Organization, Snowboarding (Cornell Skiing and Snowboarding club).",
    "spencer" : "Outside of CRC, I'm involved in Life Changing Labs, Speech and Debate Society, in addition to ACSU. One of my passions is making Videogames for which I lead a game dev group and lead a strategy gaming group. ",
    "marcus" : "Outside of school, I am a part of NROTC and enjoy spending time outdoors, model making with LEGOs, reading, and other general nerd activities.",
    "claire" : "I enjoy performing Chinese yoyo, painting, and playing Terraria",
    "charles" : "I like to play piano outside of CRC",
    "kevin" : "Dance, Mechanical keyboards",
    "molly" : "I play sax in the marching band and I also like to play violin and guitar.",
    "richardj" : "Outside CRC, I play chess, draw, do personal projects and practice coding.",
    "shubham" : "Can't wait to battle these robots. I hope I dont get hurt too bad.",
    "blaze" : "Electric skateboarding, unicycling, cyber security, linguistics, video games.",
    "ash": "Outside of CRC, member of Autoboat",
    "eshita" : "",
    "katie": "Outside of CRC I work part-time at Mac's Cafe and the Terrace Restaurant, and I volunteer as a mentor and transportation officer for College Mentors for Kids. In my spare time I also enjoy running, rock climbing, and painting",
    "luke": "Skateboarding, videogame development.",
    "richardk": "I play the violin, and generally enjoy playing/listening to music. One of my hobbies is also film photography.",
    "sebastian": "Outside of CRC I'm a soon to be RA, Mews Hall Representative, and honorary club swim member. Also, I'm the proud champion of the 2017 Ardsley High School SSB4 Doubles Tournament.",
    "shawn": "Meinig Cornell Family National Scholar, Global Market Analysts Cornell, Mapping Society at Cornell",
    "maya": "I am an RA in Just About Music, I write newletters for CU IMAGE, and I'm a Meinig Scholar. I also love to sing and write songs on the piano in my free time!",
    "alex": "Video Games, Phi Delta Theta, TA'ing for classes, cooking, personal finance",
    "ashley": "APO, playing the flute/piccolo",
    "kaitlyn": "Outside of CRC, I am involved in Cornell Financial Analysts, my social sorority, and a Dyson peer mentor. Some of my hobbies include drawing, hiking, and making pasta from scratch.",
    "lucien": "Outside of CRC, I design video games, go on walks/runs, and cook real food.",
    "ruby": "Outside of CRC I'm a part of Science Olympiad at Cornell and GMAC",
    "william": "Meow meow meow, meow meow meow meow. Meow meow mow -- CRC meow meow. Mrrm.",
}

let flip = (card) => {
    let back = card.getElementsByClassName('team-bio')[0];
    console.log(back)
    if (back.className == 'team-bio hidden') {
        back.className = 'team-bio'
    } else {
        back.className = 'team-bio hidden'
    }
}

for (let card of document.getElementsByClassName("card")) {
    // get name
    let name = card.getElementsByTagName("img")[0].id.split("_")[0].toLowerCase();
    // get bio
    let bio = name in bios ? bios[name] : "" // default to blank
    // set bio
    let back = card.getElementsByClassName('team-bio')[0]
    back.innerHTML = bio;
    if (bio) {
        card.onclick = () => flip(card) //.getElementsByClassName("card_button")[0].onclick = () => flip(card)
    } else {
        card.style = "cursor: auto";
    }
}

