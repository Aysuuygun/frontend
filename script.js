let isLoggedIn = false;
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

document.getElementById("aramaBtn").addEventListener("click", function () {
    const aramaKutusu = document.getElementById("aramaKutusu");
    aramaKutusu.classList.toggle("arama-kutusu-goster");
  });





showPopupBtn.addEventListener("click",() => {
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());


signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id == 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

document.getElementById("add-book").addEventListener("click", () => {
    alert("Kitap eklendi!");
});

document.getElementById("delete-book").addEventListener("click", () => {
    const confirmDelete = confirm("Kitap silinsin mi?");
    if (confirmDelete) {
        alert("Kitap silindi!");
    }
});

document.getElementById("comment-book").addEventListener("click", () => {
    const comment = prompt("Kitap hakkında yorum yapın:");
    if (comment) {
        alert("Yorumunuz: " + comment);
    }
});

document.getElementById("like-book").addEventListener("click", () => {
    alert("Kitap beğenildi!");
});

document.querySelector(".form-content form").addEventListener("submit", function(e) {
    e.preventDefault();
    isLoggedIn = true;
    alert("Giriş başarılı!");
    document.body.classList.remove("show-popup");
});


document.querySelectorAll(".icon-bar span").forEach(icon => {
    icon.addEventListener("click", (e) => {
        if (!isLoggedIn) {
            alert("Lütfen önce giriş yapın.");
            return;
        }

        const action = e.target.textContent.trim();

        switch(action) {
            case "library_add":
                alert("Kitap eklendi!");
                break;
            case "delete":
                alert("Kitap silindi!");
                break;
            case "chat":
                alert("Yorum yapıldı!");
                break;
            case "favorite":
                alert("Beğenildi!");
                break;
        }
    });
});

