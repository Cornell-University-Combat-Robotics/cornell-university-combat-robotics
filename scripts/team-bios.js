const bios = {
    "name" : "bio",
    "sofie" : "Outside of CRC, I am involved in the Engineering Leadership Program. In 2020, I took the leadership courses, and since finishing the courses, I have been trained in leadership coaching and will be teaching some teamwork and leadership seminars in 2022. I also play the flute in the Big Red Marching Band!",
    "bruno" : "I love running  distances, playing video games, reading manga, and watching anime!",
    "ricky" : "I am also a member of Cornell Shogi Club.",
    "michelle" : "Outside of CRC, I'm involved in BreakFree, a dance team, and Alpha Chi Omega, a sorority. ",
    "rochelle" : "I am a member of Cornell Chamber Flute Ensemble and College Mentors for Kids.",
    "edith" : "I work in the Lammerding Lab, DEBUT (Design by Biomedical Undergraduate Teams), Alpha Phi Omega, Cornell Writing Center! I enjoy hosting movie nights!",
}

let flip = (card) => {
    let front = card.getElementsByClassName('front-card')[0];
    let back = card.getElementsByClassName('back-card')[0];
    if (front.className == 'front-card') {
        front.className = 'front-card hidden'
        back.className = 'back-card'
    } else {
        front.className = 'front-card'
        back.className = 'back-card hidden'
    }
}

for (let card of document.getElementsByClassName("card")) {
    // get name
    let name = card.getElementsByTagName("img")[0].id.split("_")[0].toLocaleLowerCase();
    // get bio
    let bio = name in bios ? bios[name] : "" // default to blank
    // set bio
    let back = card.getElementsByClassName('back-card')[0]
    back.getElementsByTagName('p')[0].innerHTML = bio;
    if (bio) {
        card.getElementsByClassName("card_button")[0].onclick = () => flip(card)
    }
}

