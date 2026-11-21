
// ==========================================
// PAGE NAVIGATION
// ==========================================

const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

function showPage(id) {
    pages.forEach(page => {
        page.classList.toggle("active", page.id === id);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// SECRET CODE - PAGE 1
// ==========================================

document.getElementById("codeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const code = document.getElementById("secretCode").value.trim();
    const error = document.getElementById("codeError");

    if (code === "26") {
        startBirthdayMusic();
        error.textContent = "";
        showPage("questionPage");
    } else {
        error.textContent = "Incorrect password. Please try again! 💗";

        document.getElementById("secretCode").value = "";
        document.getElementById("secretCode").focus();
    }
});


// ==========================================
// CAT QUESTION - PAGE 2
// ==========================================

document.getElementById("noBtn").addEventListener("click", () => {
    alert("Please cutie, see it once! 🥺💗");
});

document.getElementById("yesBtn").addEventListener("click", () => {
    showPage("birthdayPage");
});


// ==========================================
// NEXT PAGE BUTTONS
// ==========================================

document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.go);
    });
});


// ==========================================
// GIFT BUTTONS
// ==========================================

document.querySelectorAll("[data-gift]").forEach(button => {
    button.addEventListener("click", () => {
        const giftId = button.dataset.gift;
        showPage(giftId);
    });
});


// ==========================================
// BACK TO GIFTS BUTTON
// ==========================================

document.querySelectorAll(".back-btn").forEach(button => {
    button.addEventListener("click", () => {
        showPage("giftsPage");
    });
});


// ==========================================
// BACKGROUND MUSIC
// ==========================================

function startBirthdayMusic() {
    if (!music) return;

    music.volume = 0.4;

    music.play().then(() => {
        if (musicToggle) {
            musicToggle.textContent = "♫ Music on";
        }
    }).catch(error => {
        console.log("Music could not start:", error);
    });
}

if (musicToggle && music) {
    musicToggle.addEventListener("click", async () => {
        try {
            if (music.paused) {
                await music.play();
                musicToggle.textContent = "♫ Music on";
            } else {
                music.pause();
                musicToggle.textContent = "♫ Music";
            }
        } catch (error) {
            alert("Please check your song file: static/music/song.mp3 🎵");
        }
    });
}


// ==========================================
// GIFT 5 - 50 REASONS
// ==========================================

const reasons = [

    "Aapse baat karke genuinely mood achha ho jaata hai.",
    "Aapki smile mein kuch alag hi baat hai.",
    "Aap bina kuch special kiye bhi special lagti hain.",
    "You have a really sweet personality.",
    "Aapka baat karne ka tareeka kaafi achha hai.",
    "Your smile is genuinely beautiful.",
    "Aapki simplicity mujhe achhi lagti hai.",
    "You have your own unique charm.",
    "Aapki random baatein bhi interesting lagti hain.",
    "You seem like a genuinely kind person.",

    "Aapki voice kaafi sweet hai.",
    "Aapki cute si reactions achhi lagti hain.",
    "You have a really nice sense of humour.",
    "Aapka innocent sa nature kaafi cute hai.",
    "You make conversations feel comfortable.",
    "Aapki personality mein kuch alag sa hai.",
    "You have a beautiful way of expressing yourself.",
    "Aapki smile aap par bahut suit karti hain.",
    "Aapki chhoti-chhoti baatein notice karne layak hain.",
    "You seem like someone worth knowing better.",

    "Aapke replies ka wait kabhi-kabhi rehta hai.",
    "Your presence makes conversations better.",
    "Aapka sense of humour kaafi achha hai.",
    "You seem to have a positive vibe.",
    "Aapki simplicity hi aapki beauty hai.",
    "You are effortlessly charming.",
    "Aapki baaton mein ek alag sa apnapan hai.",
    "You have a really refreshing personality.",
    "Aapki little gestures bhi achhi lagti hain.",
    "You are interesting in your own way.",

    "Aap thodi si cute aur thodi si funny hain.",
    "Your random messages can make someone smile.",
    "Aapka nature kaafi sweet lagta hai.",
    "You don't have to try hard to be impressive.",
    "Aapki aankhon mein ek alag si khoobsurati hai.",
    "You have a lovely way of making people feel comfortable.",
    "Aapse baat karna is actually quite fun.",
    "Aapki smile honestly compliment deserve karti hai.",
    "You seem like a person with a good heart.",
    "Aapki personality ko aur jaanne ka mann karta hai.",

    "You deserve genuine appreciation.",
    "Aapki har baat perfect ho, zaroori nahi, bas aap real lagti hain.",
    "You have a charm that's hard to describe.",
    "Aapki little imperfections bhi aapko unique banati hain.",
    "You seem more interesting with every conversation.",
    "Aapki presence achhi vibes lekar aati hai.",
    "You are someone I would genuinely like to know better.",
    "Aapki smile dekhkar compliment dene ka mann karta hai.",
    "There is always something nice to notice about you.",
    "Simply because you're YOU. ❤️"

];

let openedReasons = 0;
let shuffledReasons = [];

function pickReason() {

    const note = document.getElementById("revealedNote");
    const reasonText = document.getElementById("reasonText");
    const counter = document.getElementById("noteCounter");
    const button = document.getElementById("pickNoteBtn");
    const finalMessage = document.getElementById("finalMessage");

    if (!note || !reasonText || !counter || !button || !finalMessage) {
        console.error("Gift 5 HTML elements are missing.");
        return;
    }

    // Shuffle the reasons only once
    if (openedReasons === 0) {

        shuffledReasons = [...reasons];

        for (let i = shuffledReasons.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [shuffledReasons[i], shuffledReasons[j]] =
                [shuffledReasons[j], shuffledReasons[i]];

        }
    }

    // Reveal the next reason
    if (openedReasons < 50) {

        reasonText.textContent = shuffledReasons[openedReasons];

        openedReasons++;

        counter.textContent =
            openedReasons + " / 50 notes opened";

        note.classList.remove("show");

        void note.offsetWidth;

        note.classList.add("show");

        // After all 50 reasons
        if (openedReasons === 50) {

            button.textContent = "All 50 notes opened 💗";

            button.disabled = true;

            finalMessage.classList.add("show");

        }
    }
}


// ==========================================
// GIFT 7 - FINAL MYSTERY BOX
// ==========================================

function unlockMystery() {

    const enteredCode =
        document.getElementById("mysteryCode").value.trim();

    const error =
        document.querySelector("#gift7 .code-error");

    const box =
        document.getElementById("mysteryBox");

    const codeArea =
        document.getElementById("codeArea");

    const surprise =
        document.getElementById("mysterySurprise");

    const video =
        document.getElementById("finalBirthdayVideo");

    if (enteredCode === "26") {

        error.textContent = "";

        box.classList.add("open");

        codeArea.style.display = "none";

        setTimeout(() => {

            surprise.classList.add("show");

            box.style.display = "none";

            video.muted = true;

            video.currentTime = 0;

            video.play().catch(() => {

                error.textContent =
                    "Please press Play to watch your surprise 💗";

            });

        }, 1000);

    } else {

        error.textContent =
            "Oops! Wrong code. Try again! 💗";

    }
}


// ==========================================
// GIFT 6 - VIDEO
// ==========================================

function playGift6Video() {

    const video = document.getElementById("gift6Video");

    if (video) {

        video.muted = true;

        video.play().catch(() => {
            console.log("Gift 6 autoplay blocked.");
        });

    }
}
