# Keputusan terbuka — `/services/*` dan homepage

Dicatat **2026-08-05**, setelah rebuild `/services/*` dan pemindahan bento
homepage ke `PhotoCard` selesai. Semua yang sudah dikerjakan ada di riwayat git;
file ini hanya memuat hal yang **menunggu keputusan pemilik**, bukan pekerjaan
teknis yang tertunda. Hapus begitu daftarnya habis.

## 1. ~~Gerbang "Request Access" tanpa isi~~ — ✅ selesai 2026-08-27

`/services/facility-overview-films` sudah tidak ada, dan gerbangnya tidak lagi
buntu: 11 film ter-gate di `lib/data/our-work.ts` adalah film asli yang memang
tidak boleh tayang publik (ditandai `(LOCKED)` oleh pemilik). Tombol Request
Access sekarang menunjuk ke sesuatu yang benar-benar ada di baliknya, yang juga
menutup Prinsip 5 di `PRODUCT.md`.

`petrofac-kemaman` termasuk di dalamnya — filmnya `kIaq3sz3_Nk`.

## 2. ~~Copy rusak di Progression & Timelapse~~ — ✅ ditulis ulang 2026-08-27

Halamannya sekarang `/services/long-term-timelapse`. Tiga judul deliverable
ditulis ulang jadi nama barang yang diterima klien: "Interval Cutdowns",
"Milestone Films", "Aerial Stills". Kalau pemilik punya istilah sendiri,
ini tempat menggantinya.

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

## 6. ~~Aset yang masih ditunggu~~ — ✅ datang 2026-08-27

Pengiriman `xxx_Website 2026 Assets/` menutup ini: delapan film jadi (satu per
hero, termasuk `/about`) dan 30 tautan film asli. Render Stitch terakhir di
`/our-work` ikut hilang bersama dua entri placeholder-nya. Yang tersisa dari
daftar itu bukan lagi aset, melainkan **izin klien** — lihat
`PENDING-CLIENT-ASSETS.md`.

## 7. Nada foto Pexels yang kini menganggur

`facility-fabrication-yard.jpg`, `facility-offshore-module.jpg`,
`facility-refinery.jpg` dan `photo-structural-phase.jpg` kehilangan pemanggilnya
saat dua layanan dihapus 2026-08-27. Filenya masih di repo dan masih ikut
ter-deploy. Menghapusnya menutup satu baris di `ATTRIBUTIONS.md`; keputusan
pemilik, bukan blocker.
