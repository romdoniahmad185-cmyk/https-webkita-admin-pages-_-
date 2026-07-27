// ======================================
// WEBKITA ADMIN
// services.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    let services = [];

    const tableBody = document.getElementById("servicesTableBody");
    const searchInput = document.getElementById("searchService");
    const categoryFilter = document.getElementById("categoryFilter");
    const refreshBtn = document.getElementById("refreshServices");
    const addBtn = document.getElementById("addService");

    // ==========================
    // Load Data
    // ==========================
    async function loadServices() {

        try {

            // API nanti
            // const response = await fetch("api/services.php");
            // services = await response.json();

            services = [];

            renderTable();

        } catch (error) {

            console.error("Gagal memuat layanan :", error);

        }

    }

    // ==========================
    // Render Table
    // ==========================
    function renderTable(data = services) {

        if (!tableBody) return;

        tableBody.innerHTML = "";

        if (data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="empty">
                        Belum ada layanan.
                    </td>
                </tr>
            `;

            return;

        }

        data.forEach((item, index) => {

            tableBody.innerHTML += `

                <tr>

                    <td>${index + 1}</td>

                    <td>${item.name}</td>

                    <td>${item.category}</td>

                    <td>${item.provider}</td>

                    <td>${item.price}</td>

                    <td>${item.status}</td>

                    <td>${item.stock}</td>

                    <td>

                        <button
                            class="btn-edit"
                            onclick="editService('${item.id}')">

                            Edit

                        </button>

                        <button
                            class="btn-delete"
                            onclick="deleteService('${item.id}')">

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

            const filtered = services.filter(item =>

                item.name.toLowerCase().includes(keyword) ||
                item.category.toLowerCase().includes(keyword) ||
                item.provider.toLowerCase().includes(keyword)

            );

            renderTable(filtered);

        });

    }

    // ==========================
    // Filter Kategori
    // ==========================
    if (categoryFilter) {

        categoryFilter.addEventListener("change", function () {

            if (this.value === "Semua") {

                renderTable();

                return;

            }

            const filtered = services.filter(item =>

                item.category === this.value

            );

            renderTable(filtered);

        });

    }

    // ==========================
    // Refresh
    // ==========================
    if (refreshBtn) {

        refreshBtn.addEventListener("click", () => {

            loadServices();

        });

    }

    // ==========================
    // Tambah Layanan
    // ==========================
    if (add)