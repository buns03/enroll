document.addEventListener("DOMContentLoaded", function () {
    const enrollBtn = document.getElementById("enroll-btn");
    const modal = document.getElementById("terms-modal");
    const closeBtn = document.getElementById("decline-btn");
    const acceptBtn = document.getElementById("accept-btn");

    enrollBtn.addEventListener("click", function () {
        modal.style.display = "flex"; // Show modal
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Close modal
    });

    acceptBtn.addEventListener("click", function () {
        alert("You have accepted the terms.");
        modal.style.display = "none"; // Close modal
    });

    // Close modal if user clicks outside content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
