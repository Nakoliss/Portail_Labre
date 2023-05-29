$(function () {
    $("#navbar").load("navbar.html");
});
$(function () {
    const username = localStorage.getItem("username");

    if (!username) {
        showLoginPopup();
    } else {
        updateNavbarGreetings(username);
    }
});
