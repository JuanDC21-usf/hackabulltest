/*const eventDate = new Date("April 25, 2026 09:00:00").getTime();

const countdown = () => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

setInterval(countdown, 1000);
countdown();
*/

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuPopup = document.getElementById("mobileMenuPopup");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

function openMobileMenu(){
    mobileMenuPopup.classList.add("is-open");
    mobileMenuOverlay.classList.add("is-open");
    mobileMenuPopup.setAttribute("aria-hidden", "false");
}

function closeMobileMenu(){
    mobileMenuPopup.classList.remove("is-open");
    mobileMenuOverlay.classList.remove("is-open");
    mobileMenuPopup.setAttribute("aria-hidden", "true");
}

if(mobileMenuBtn && mobileMenuPopup && mobileMenuOverlay){

    mobileMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = mobileMenuPopup.classList.contains("is-open");
        if(isOpen) closeMobileMenu();
        else openMobileMenu();
    });

    mobileMenuOverlay.addEventListener("click", closeMobileMenu);

    // close after clicking any menu link (keeps their normal anchor behavior)
    mobileMenuPopup.addEventListener("click", (e) => {
        if(e.target && e.target.classList.contains("mobile-menu-link")){
            closeMobileMenu();
        }
    });

    // optional: close with Escape
    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape") closeMobileMenu();
    });
}



