// ======================================
// WEBKITA ADMIN
// portfolio.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    let portfolios = [];

    const tableBody = document.getElementById("portfolioTableBody");
    const searchInput = document.getElementById("searchPortfolio");
    const refreshBtn = document.getElementById("refreshPortfolio");
    const addBtn = document.getElementById("addPortfolio");

    // ==========================
    // Load Data
    // ==========================
    async function loadPortfolio() {

        try {

            // API nanti
            // const response = await fetch("api/portfolio.php");
            // portfolios = await response.json();

            portfolios = [];

            renderTable();

        } catch (error) {

            console.error(error);

        }

    }

    // ==========================
    // Render Table
    // ==========================
    function renderTable(data = portfolios) {

        if (!tableBody) return;

        tableBody.innerHTML = "";

        if (data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="empty">
                        Belum ada portfolio.
                    </td>
                </tr>
            `;

            return;

        }

        data.forEach((item, index) => {

            tableBody.innerHTML += `
                <tr>

                    <td>${index + 1}</td>

                    <td>${item.title}</td>

                    <td>${item.category}</td>

                    <td>${item.client}</td>

                    <td>${item.date}</td>

                    <td>${item.status}</td>

                    <td>

                        <button
                            class="btn-edit"
                            onclick="editPortfolio('${item.id}')">

                            Edit

                        </button>

                        <button
                            class="btn-delete"
                            onclick="deletePortfolio('${item.id}')">

                            Hapus

                        </button>

                    </td>

                </tr>
            `;

        });

    }

    // ==========================
    // Search
    // ==========================
    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const keyword = this.value.toLowerCase();

            const filtered = portfolios.filter(item =>

                item.title.toLowerCase().includes(keyword) ||
                item.category.toLowerCase().includes(keyword) ||
                item.client.toLowerCase().includes(keyword)

            );

            renderTable(filtered);

        });

    }

    // ==========================
    // Refresh
    // ==========================
    if (refreshBtn) {

        refreshBtn.addEventListener("click", () => {

            loadPortfolio();

        });

    }

    // ==========================
    // Tambah Portfolio
    // ==========================
    if (addBtn) {

        addBtn.addEventListener("click", () => {

            alert("Form tambah portfolio akan dibuka.");

        });

    }

    loadPortfolio();

});

// ==========================
// Edit
// ==========================
function editPortfolio(id) {

    alert("Edit portfolio : " + id);

}

// ==========================
// Hapus
// ==========================
function deletePortfolio(id) {

    if (confirm("Hapus portfolio ini?")) {

        alert("Portfolio berhasil dihapus.");

    }

}