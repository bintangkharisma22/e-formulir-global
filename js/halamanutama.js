// Script untuk form pengisian data mahasiswa
document.getElementById("mahasiswaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let nim = document.getElementById("nim").value;
    let program = document.getElementById("program").value;
    let semester = document.getElementById("semester").value;
    let status = document.getElementById("status").value;

    alert("Formulir berhasil dikirim! \n" +
        "Nama: " + nama + "\n" +
        "NIM: " + nim + "\n" +
        "Program Studi: " + program + "\n" +
        "Semester: " + semester + "\n" +
        "Status: " + status);
});

function logout() {
    // Misalnya, menghapus sessionStorage atau localStorage
    sessionStorage.removeItem('userLoggedIn'); // atau cara lain sesuai kebutuhan

    // Mengarahkan ke halaman login
    window.location.href = 'index.html'; // Ubah dengan halaman login Anda
}