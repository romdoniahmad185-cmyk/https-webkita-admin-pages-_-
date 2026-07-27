// ======================================
// WEBKITA ADMIN
// profile.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const profileForm = document.getElementById("profileForm");
    const saveButton = document.getElementById("saveProfile");
    const resetButton = document.getElementById("resetProfile");

    const photoInput = document.getElementById("profilePhoto");
    const photoPreview = document.getElementById("photoPreview");

    // ==========================
    // Load Profile
    // ==========================
    async function loadProfile() {

        try {

            // API nanti
            // const response = await fetch("api/profile.php");
            // const data = await response.json();

            console.log("Profile berhasil dimuat.");

        } catch (error) {

            console.error(error);

        }

    }

    // ==========================
    // Simpan Profile
    // ==========================
    if (saveButton) {

        saveButton.addEventListener("click", function (e) {

            e.preventDefault();

            const profile = {

                fullname:
                    document.getElementById("fullname")?.value || "",

                username:
                    document.getElementById("username")?.value || "",

                email:
                    document.getElementById("email")?.value || "",

                phone:
                    document.getElementById("phone")?.value || "",

                address:
                    document.getElementById("address")?.value || ""

            };

            console.log(profile);

            alert("Profil berhasil diperbarui.");

            // fetch("api/profile.php",{
            //     method:"POST",
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body:JSON.stringify(profile)
            // });

        });

    }

    // ==========================
    // Reset Form
    // ==========================
    if (resetButton) {

        resetButton.addEventListener("click", () => {

            if (confirm("Reset perubahan?")) {

                if (profileForm) {

                    profileForm.reset();

                }

            });

        });

    }

    // ==========================
    // Preview Foto
    // ==========================
    if (photoInput && photoPreview) {

        photoInput.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = function (e) {

                photoPreview.src = e.target.result;

            };

            reader.readAsDataURL(file);

        });

    }

    // ==========================
    // Ganti Password
    // ==========================
    const changePassword = document.getElementById("changePassword");

    if (changePassword) {

        changePassword.addEventListener("click", () => {

            alert("Fitur ganti password akan dibuka.");

        });

    }

    loadProfile();

});