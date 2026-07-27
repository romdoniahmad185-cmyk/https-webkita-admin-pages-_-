// ================================
// Dashboard Admin WEBKITA
// dashboard.js
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Toggle Sidebar
    // ==========================
    const menuBtn = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });
    }

    // ==========================
    // Dropdown Profile
    // ==========================
    const profileBtn = document.getElementById("profileButton");
    const profileMenu = document.getElementById("profileMenu");

    if (profileBtn && profileMenu) {
        profileBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            profileMenu.classList.toggle("show");
        });

        document.addEventListener("click", () => {
            profileMenu.classList.remove("show");
        });
    }

    // ==========================
    // Search Dashboard
    // ==========================
    const search = document.getElementById("searchInput");

    if (search) {
        search.addEventListener("keyup", function () {
            console.log("Cari :", this.value);
        });
    }

    // ==========================
    // Statistik Dashboard
    // ==========================
    const totalOrder = document.getElementById("totalOrder");
    const totalCustomer = document.getElementById("totalCustomer");
    const totalService = document.getElementById("totalService");
    const totalIncome = document.getElementById("totalIncome");

    if (totalOrder) totalOrder.innerText = "0";
    if (totalCustomer) totalCustomer.innerText = "0";
    if (totalService) totalService.innerText = "0";
    if (totalIncome) totalIncome.innerText = "Rp0";

    // ==========================
    // Jam & Tanggal
    // ==========================
    function updateClock() {

        const now = new Date();

        const jam = now.toLocaleTimeString("id-ID");

        const tanggal = now.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        const clock = document.getElementById("clock");
        const date = document.getElementById("date");

        if (clock) clock.innerText = jam;
        if (date) date.innerText = tanggal;

    }

    updateClock();
    setInterval(updateClock, 1000);

    // ==========================
    // Notifikasi
    // ==========================
    const notifBtn = document.getElementById("notifButton");

    if (notifBtn) {

        notifBtn.addEventListener("click", () => {

            alert("Belum ada notifikasi.");

        });

    }

    // ==========================
    // Selamat Datang
    // ==========================
    const adminName = document.getElementById("adminName");

    if (adminName) {

        adminName.innerText = "Administrator";

    }

});