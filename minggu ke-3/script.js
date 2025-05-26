document.addEventListener('DOMContentLoaded', function() {

    // 1. Inisialisasi Peta Leaflet
    // =============================
    // Menggunakan koordinat tengah Indonesia sebagai pusat awal
    const map = L.map('map').setView([-2.548926, 118.0148634], 5); // [-2.5, 118], zoom 5

    // Menambahkan Tile Layer OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Menambahkan Marker Contoh (misal: Jakarta)
    const jakartaMarker = L.marker([-6.2088, 106.8456]).addTo(map)
        .bindPopup('<b>Jakarta</b><br>Ibu Kota Indonesia.')
        .openPopup();

    // Placeholder: Di sini Anda akan menambahkan logika untuk:
    // - Memuat data GeoJSON/GIS dari BPS, data.go.id, HDX
    // - Menambahkan layer data ke peta (misal: choropleth, heatmap, marker cluster)
    // - Menambahkan kontrol peta (legenda, filter, search)

    console.log("Peta Leaflet berhasil diinisialisasi.");


    // 2. Logika Sederhana untuk Modal (Contoh)
    // =======================================
    // Bootstrap sudah menangani buka/tutup modal.
    // Anda bisa menambahkan validasi form atau AJAX call ke backend di sini.

    const loginForm = document.querySelector('#loginModal form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit default
            console.log("Login attempt...");
            // Placeholder: Kirim data ke backend untuk autentikasi.
            // Jika berhasil, tutup modal dan update UI.
            // Jika gagal, tampilkan pesan error.
            alert("Fitur login memerlukan backend!");
            // const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            // loginModal.hide();
        });
    }

    const registerForm = document.querySelector('#registerModal form');
     if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit default
            console.log("Register attempt...");
            // Placeholder: Kirim data ke backend untuk registrasi.
            alert("Fitur registrasi memerlukan backend!");
        });
    }


    // 3. Logika UI/UX Lainnya
    // ========================
    // Tambahkan event listener atau fungsi lain yang diperlukan
    // untuk membuat UI lebih intuitif.
    // Contoh: Tooltip, highlight saat hover, dll.

    console.log("Aplikasi web siap!");

});