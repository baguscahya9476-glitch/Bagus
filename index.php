<?php
// GANTI dengan email kamu
$ke_email = "cahyabagus118@gmail.com";  

// Ambil data dari form
$nama  = $_POST['nama'];
$kelas = $_POST['kelas'];

// Subjek email
$subject = "Data Baru dari Form Siswa";

// Isi email
$body = "
Hai! Ada data baru dari form website:

Nama: $nama
Kelas: $kelas
";

// Header email
$headers = "From: Form Website <no-reply@DJBSREMIX.com>\r\n";
$headers .= "Reply-To: no-reply@websitemu.com\r\n";

// Kirim email
if (mail($ke_email, $subject, $body, $headers)) {
    echo "<script>
            alert('Data berhasil dikirim ke email!');
            window.location.href='https://www.tiktok.com/@djbsremix';
          </script>";
} else {
    echo "<script>
            alert('Gagal mengirim data. Silakan coba lagi.');
            window.history.back();
          </script>";
}
?>
