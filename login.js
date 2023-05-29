$(function () {
    $("#loginForm").submit(function (e) {
        e.preventDefault();
        const username = $("#username").val();
        const password = $("#password").val();

        // Perform authentication logic here
        // For now, let's assume the login always succeeds

        localStorage.setItem("username", username);
        window.location.href = "index.html";
    });
});
