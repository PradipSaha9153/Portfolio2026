const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

// email sender
function sendEmail(event) {

    event.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let mailtoLink =
        "mailto:pradipkrsaha9153@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(
            "Name: " + fname + " " + lname + "\n\n" +
            "Message:\n" + message
        );

    window.location.href = mailtoLink;

}

// navbar scroll effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});