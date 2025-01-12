// Array database nama
const namaDatabase = ['atta', 'kudanil', 'monhet'];

// Event listener untuk tombol "Let's go!"
document.getElementById('submitBtn').addEventListener('click', function() {
    // Ambil nilai input nama
    const name = document.getElementById('nameInput').value.trim().toLowerCase();

    // Simpan nama ke localStorage untuk database sementara
    localStorage.setItem('userName', name);

    // Cek apakah nama ada dalam database
    if (namaDatabase.includes(name)) {
        // Tampilkan konfirmasi untuk memutar lagu
        const userConfirmed = confirm('Nama ditemukan! Apakah Anda ingin memutar lagu?');

        if (userConfirmed) {
            // Jika user setuju, memutar lagu
            alert('Lagu akan diputar!');
            // Kode untuk memutar lagu bisa ditambahkan di sini
            playSong();
        } else {
            alert('Tidak ada lagu yang diputar.');
        }
    } else {
        alert('Nama tidak ditemukan dalam database!');
    }
});

// Fungsi untuk memutar lagu
function playSong() {
    // Menambahkan elemen audio untuk memutar lagu
    const audioPlayer = new Audio('Asset/bgmusic.mp3');
    audioPlayer.play();
}
