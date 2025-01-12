// Array database nama
const namaDatabase = ['atta', 'kudanil', 'monhet'];
// Variabel untuk menyimpan objek audio secara global
let music;

// Event listener untuk tombol "Let's go!" (form login)
document.getElementById('submitBtn').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value.toLowerCase();

    // Cek apakah nama ada dalam database
    if (namaDatabase.includes(name)) {
        Swal.fire({
            title: 'Mau Memutar Lagu?',
            text: 'Apakah Anda ingin memutar lagu?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak'
        }).then((result) => {
            if (result.isConfirmed) {
                // Membuat objek audio dan memulai musik
                music = new Audio('Asset/bgmusic.mp3'); // Ganti dengan path file musik yang benar
                music.play();

                // Setelah musik mulai diputar, lanjutkan ke halaman animasi
                music.onplay = function() {
                    document.getElementById('loginPage').style.display = 'none';
                    document.getElementById('animatedPage').style.display = 'block';

                    // Tampilkan nama pada halaman animasi
                    document.getElementById('userName').textContent = name;

                    // Menghilangkan alert setelah memutar lagu
                    Swal.close();
                };
            } else {
                Swal.fire('Tidak ada lagu yang diputar.', '', 'info');
            }
        });
    } else {
        Swal.fire('Nama tidak ditemukan dalam database!', '', 'error');
    }
});

// Tombol Kembali ke halaman login
document.getElementById('backBtn').addEventListener('click', function() {
    // Mengubah tampilan halaman animasi kembali ke halaman login
    document.getElementById('animatedPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
});

// Tombol Stop Lagu
document.getElementById('stopBtn').addEventListener('click', function() {
    if (music) {
        music.pause();  // Hentikan musik
        music.currentTime = 0;  // Reset ke awal lagu
        Swal.fire('Lagu berhenti', '', 'success');  // Konfirmasi bahwa lagu dihentikan
    }
});
