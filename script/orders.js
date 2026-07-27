// ======================================
// WEBKITA ADMIN
// orders.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    let orders = [];

    const tableBody = document.getElementById("ordersTableBody");
    const searchInput = document.getElementById("searchOrder");
    const statusFilter = document.getElementById("statusFilter");

    // ==========================
    // Load Data
    // ==========================
    async function loadOrders() {

        try {

            // Ganti dengan API nanti
            // const response = await fetch("api/orders.php");
            // orders = await response.json();

            orders = [];

            renderTable();

        } catch (error) {

            console.error(error);

        }

    }

    // ==========================
    // Render Table
    // ==========================
    function renderTable() {

        if (!tableBody) return;

        tableBody.innerHTML = "";

        if (orders.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="empty">
                        Belum ada pesanan.
                    </td>
                </tr>
            `;

            return;
        }

        orders.forEach((item, index) => {

            tableBody.innerHTML += `
                <tr>

                    <td>${index + 1}</td>

                    <td>${item.invoice}</td>

                    <td>${item.customer}</td>

                    <td>${item.product}</td>

                    <td>${item.price}</td>

                    <td>
                        <span class="status ${item.status.toLowerCase()}">
                            ${item.status}
                        </span>
                    </td>

                    <td>${item.date}</td>

                    <td>

                        <button class="btn-detail"
                            onclick="detailOrder('${item.invoice}')">

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

            const filtered = orders.filter(item =>

                item.invoice.toLowerCase().includes(keyword) ||
                item.customer.toLowerCase().includes(keyword) ||
                item.product.toLowerCase().includes(keyword)

            );

            renderFiltered(filtered);

        });

    }

    // ==========================
    // Filter Status
    // ==========================
    if (statusFilter) {

        statusFilter.addEventListener("change", function () {

            if (this.value === "Semua") {

                renderTable();

                return;

            }

            const filtered = orders.filter(item =>

                item.status === this.value

            );

            renderFiltered(filtered);

        });

    }

    // ==========================
    // Render Filter
    // ==========================
    function renderFiltered(data) {

        tableBody.innerHTML = "";

        if (data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="empty">
                        Data tidak ditemukan.
                    </td>
                </tr>
            `;

            return;
        }

        data.forEach((item, index) => {

            tableBody.innerHTML += `
                <tr>

                    <td>${index + 1}</td>

                    <td>${item.invoice}</td>

                    <td>${item.customer}</td>

                    <td>${item.product}</td>

                    <td>${item.price}</td>

                    <td>${item.status}</td>

                    <td>${item.date}</td>

                    <td>

                        <button class="btn-detail"
                            onclick="detailOrder('${item.invoice}')">

                            Detail

                        </button>

                    </td>

                </tr>
            `;

        });

    }

    // ==========================
    // Refresh
    // ==========================
    const refreshBtn = document.getElementById("refreshOrders");

    if (refreshBtn) {

        refreshBtn.addEventListener("click", () => {

            loadOrders();

        });

    }

    loadOrders();

});

// ==========================
// Detail Pesanan
// ==========================
function detailOrder(invoice) {

    alert("Detail pesanan : " + invoice);

}