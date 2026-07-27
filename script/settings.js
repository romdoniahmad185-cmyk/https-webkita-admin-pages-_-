// ======================================
// WEBKITA ADMIN
// settings.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Form Settings
    // ==========================
    const form = document.getElementById("settingsForm");

    const saveButton = document.getElementById("saveSettings");
    const resetButton = document.getElementById("resetSettings");

    // ==========================
    // Load Settings
    // ==========================
    async function loadSettings() {

        try {

            // API nanti
            // const response = await fetch("api/settings.php");
            // const data = await response.json();

            console.log("Settings berhasil dimuat.");

        } catch (error) {

            console.error(error);

        }

    }

    // ==========================
    // Simpan Pengaturan
    // ==========================
    if (saveButton) {

        saveButton.addEventListener("click", function (e) {

            e.preventDefault();

            const data = {

                websiteName:
                    document.getElementById("websiteName")?.value || "",

                websiteDescription:
                    document.getElementById("websiteDescription")?.value || "",

                email:
                    document.getElementById("websiteEmail")?.value || "",

                whatsapp:
                    document.getElementById("websiteWhatsapp")?.value || "",

                address:
                    document.getElementById("websiteAddress")?.value || "",

                instagram:
                    document.getElementById("instagram")?.value || "",

                facebook:
                    document.getElementById("facebook")?.value || "",

                youtube:
                    document.getElementById("youtube")?.value || ""

            };

            console.log(data);

            alert("Pengaturan berhasil disimpan.");

            // fetch("api/settings.php",{
            //     method:"POST",
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body:JSON.stringify(data)
            // });

        });

    }

    // ==========================
    // Reset Form
    // ==========================
    if (resetButton) {

        resetButton.addEventListener("click", () => {

            if (confirm("Reset semua pengaturan?")) {

                if (form) {

                    form.reset();

                }

            });

        });

    }

    // ==========================
    // Preview Logo
    // ==========================
    const logoInput = document.getElementById("websiteLogo");
    const logoPreview = document.getElementById("logoPreview");

    if (logoInput && logoPreview) {

        logoInput.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = function (e) {

                logoPreview.src = e.target.result;

            };

            reader.readAsDataURL(file);

        });

    }

    // ==========================
    // Preview Favicon
    // ==========================
    const faviconInput = document.getElementById("websiteFavicon");
    const faviconPreview = document.getElementById("faviconPreview");

    if (faviconInput && faviconPreview) {

        faviconInput.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = function (e) {

                faviconPreview.src = e.target.result;

            };

            reader.readAsDataURL(file);

        });

    }

    loadSettings();

});