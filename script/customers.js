// ======================================
// WEBKITA ADMIN
// customers.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    let customers = [];

    const tableBody = document.getElementById("customersTableBody");
    const searchInput = document.getElementById("searchCustomer");
    const refreshBtn = document.getElementById("refreshCustomers");

    // ==========================
    // Load Data
    // ==========================
    async function loadCustomers() {

        try {

            // Ganti dengan API nanti
            // const response = await fetch("api/customers.php");
            // customers = await response.json();

            customers = [];

            renderTable();

        } catch (error) {

            console.error("Gagal memuat data pelanggan:", error);

        }

    }

    // ==========================
    // Render Table
    // ==========================
    function renderTable(data = customers) {

        if (!tableBody) return;

        tableBody.innerHTML = "";

        if (data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="empty">
                        Belum ada data pelanggan.
                    </td>
                </tr>
            `;

            return;

        }

        data.forEach((customer, index) => {

            tableBody.innerHTML += `
                <tr>

                    <td>${index + 1}</td>

                    <td>${customer.name}</td>

                    <td>${customer.email}</td>

                    <td>${customer.phone}</td>

                    <td>${customer.totalOrder}</td>

                    <td>${customer.lastOrder}</td>

                    <td>

                        <button
                            class="btn-detail"
                            onclick="detailCustomer('${customer.id}')">

                            Detail

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

            const filtered = customers.filter(customer =>

                customer.name.toLowerCase().includes(keyword) ||
                customer.email.toLowerCase().includes(keyword) ||
                customer.phone.toLowerCase().includes(keyword)

            );

            renderTable(filtered);

        });

    }

    // ==========================
    // Refresh
    // ==========================
    if (refreshBtn) {

        refreshBtn.addEventListener("click", () => {

            loadCustomers();

        });

    }

    loadCustomers();

});

// ==========================
// Detail Customer
// ==========================
function detailCustomer(id) {

    alert("Detail pelanggan ID : " + id);

}