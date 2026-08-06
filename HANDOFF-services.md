# Keputusan terbuka — `/services/*` dan homepage

Dicatat **2026-08-05**, setelah rebuild `/services/*` dan pemindahan bento
homepage ke `PhotoCard` selesai. Semua yang sudah dikerjakan ada di riwayat git;
file ini hanya memuat hal yang **menunggu keputusan pemilik**, bukan pekerjaan
teknis yang tertunda. Hapus begitu daftarnya habis.

## 1. Gerbang "Request Access" tanpa isi

`/services/facility-overview-films` punya tombol "Request Access to Portfolio"
yang membuka form, tapi tidak ada file apa pun di baliknya — lihat `PRODUCT.md`
→ *Evidence on Hand*. Sudah diturunkan jadi aksi sekunder dengan `/contact`
sebagai yang utama, tapi gerbangnya sendiri masih buntu.

Sama halnya dengan `/our-work/petrofac-kemaman`.

## 2. Copy rusak di Progression & Timelapse

Dua judul deliverable jelas kacau susunannya dan perlu ditulis ulang oleh
pemilik, bukan ditebak:

- "Milestone Reels To Reports"
- "Drone Aerial Photographs "

## 3. Navbar pecah di sekitar 834px

Nama brand turun dua baris, "OUR WORK" dan "GET AN ESTIMATE" ikut membungkus.
Ini `SiteNavbar` yang dipakai 20 halaman, jadi memperbaikinya berarti mengubah
breakpoint chrome bersama dan perlu verifikasi ulang seluruh situs — sengaja
tidak disentuh di tengah pekerjaan `/services`.

## 4. Kredit Pexels yang terlihat

`ATTRIBUTIONS.md` dan `public/images/pexels/CREDITS.md` sudah mencatat
fotografer per file. Lisensi Pexels **tidak mewajibkan** atribusi secara hukum,
tapi panduan mereka memintanya bila memungkinkan. Apakah perlu satu baris kredit
di footer — keputusan pemilik, bukan blocker teknis.

## 5. Nada foto yang lebih terang dari tetangganya

Foto refinery di Facility dan platform lepas pantai keduanya diambil siang hari,
jadi lebih terang dan lebih berwarna dari kartu di sebelahnya. Subjeknya terbaca
dengan jelas, jadi ini soal selera bukan cacat. Tidak didesaturasi karena
homepage menampilkan fotonya berwarna penuh — kalau mau diseragamkan,
keputusannya sebaiknya berlaku untuk seluruh situs, bukan `/services` saja.

## 6. Aset yang masih ditunggu

`/our-work/*` dan `/about` masih memakai render AI Google Stitch sepenuhnya.
Sebagian render itu punya teks HUD palsu ter-bake di pikselnya — periksa dulu
sebelum memakainya di area terang. Daftar tagihan asetnya ada di
`PENDING-CLIENT-ASSETS.md`.
