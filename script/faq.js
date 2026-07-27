// ======================================
// WEBKITA ADMIN
// faq.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    let faqs = [];

    const tableBody = document.getElementById("faqTableBody");
    const searchInput = document.getElementById("searchFaq");
    const refreshBtn = document.getElementById("refreshFaq");
    const addBtn = document.getElementById("addFaq");

    // ==========================
    // Load Data FAQ
    // ==========================
    async function loadFaq() {

        try {

            // API nanti
            // const response = await fetch("api/faq.php");
            // faqs = await response.json();

            faqs = [];

            renderTable();

        } catch (error) {

            console.error("Gagal memuat FAQ:", error);

        }

    }

    // ==========================
    // Render Table
    // ==========================
    function renderTable(data = faqs) {

        if (!tableBody) return;

        tableBody.innerHTML = "";

        if (data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="empty">
                        Belum ada FAQ.
                    </td>
                </tr>
            `;

            return;

        }

        data.forEach((item, index) => {

            tableBody.innerHTML += `
                <tr>

                    <td>${index + 1}</td>

                    <td>${item.question}</td>

                    <td>${item.answer}</td>

                    <td>${item.category}</td>

                    <td>${item.status}</td>

                    <td>

                        <button
                            class="btn-edit"
                            onclick="editFaq('${item.id}')">

                            Edit

                        </button>

                        <button
                            class="btn-delete"
                            onclick="deleteFaq('${item.id}')">

                            Hapus

                        </button>

                    </td>

                </tr>
            `;

        });

    }

    // ==========================
    // Search FAQ
    // ==========================
    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const keyword = this.value.toLowerCase();

            const filtered = faqs.filter(item =>

                item.question.toLowerCase().includes(keyword) ||
                item.answer.toLowerCase().includes(keyword) ||
                item.category.toLowerCase().includes(keyword)

            );

            renderTable(filtered);

        });

    }

    // ==========================
    // Refresh
    // ==========================
    if (refreshBtn) {

        refreshBtn.addEventListener("click", () => {

            loadFaq();

        });

    }

    // ==========================
    // Tambah FAQ
    // ==========================
    if (addBtn) {

        addBtn.addEventListener("click", () => {

            alert("Form tambah FAQ akan dibuka.");

        });

    }

    loadFaq();

});

// ==========================
// Edit FAQ
// ==========================
function editFaq(id) {

    alert("Edit FAQ: " + id);

}

//