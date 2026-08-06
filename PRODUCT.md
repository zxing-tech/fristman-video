# Product

<!-- impeccable:product-schema 1 -->

Kebenaran produk Firstman Videos. Hanya fakta terkonfirmasi dan keputusan yang
sengaja dibiarkan terbuka. Tidak ada arah visual di sini — itu milik DESIGN.md.

Diwawancarakan dengan pemilik proyek pada **2026-08-04**.

## Platform

web

## Users

Empat kelompok pembeli, semuanya nyata dan semuanya benar-benar menghubungi.
Ketika kebutuhan mereka bertabrakan di satu halaman, **Project / Construction
Manager yang menang.**

1. **Project / Construction Manager — primer.** Bekerja di fabrication yard,
   site konstruksi, atau proyek O&G yang sedang berjalan. Pekerjaannya:
   membuktikan progres ke stakeholder, JV partner, dan badan regulator yang
   tidak bisa datang ke site. Menilai vendor dari deliverable konkret, format,
   dan apakah kru bisa masuk site tanpa menghentikan operasi.
2. **Corporate Comms / Marketing.** Tim komunikasi korporat operator O&G dan
   industri berat. Butuh brand film, materi investor relations, dan aset
   tender. Menilai dari kualitas sinematik dan siapa saja klien sebelumnya.
3. **HSE / HR & Training.** Manajer HSE atau HR yang butuh video induksi
   keselamatan spesifik per site. Menilai dari kepatuhan prosedur dan
   akurasi teknis, bukan dari keindahan gambar.
4. **Agensi / production house.** Firstman dipakai sebagai subkontraktor
   drone/produksi. Menilai dari keandalan teknis dan kemudahan diajak kerja.

## Product Purpose

Firstman Videos memproduksi sinematografi industri dan dokumentasi visual —
drone dan ground-based — untuk site Oil & Gas dan industri berat di Asia
Tenggara.

Situs ini adalah kanal akuisisi. Sukses = enquiry masuk lewat form konsultasi
di `/contact` (POST ke Web3Forms, tidak ada backend). Tidak ada e-commerce,
tidak ada akun pengguna, tidak ada portal klien.

Kegagalan yang sudah terbukti terjadi: pengunjung membaca banyak prosa,
tidak melihat satu pun pekerjaan nyata, lalu menyimpulkan perusahaannya tidak
punya substansi. Lihat `## Evidence on Hand`.

## Positioning

Empat klaim yang dikonfirmasi pemilik sebagai benar, dan yang rumah produksi
drone lain di Malaysia tidak bisa tiru sekaligus:

1. **Rekam jejak akses site O&G.** Sudah pernah lolos permit-to-work, induksi
   fasilitas, dan syarat akses di site O&G yang sedang beroperasi. Ini bukan
   drone shop umum yang baru belajar prosedurnya.
2. **Kru bersertifikat.** Pilot UAV bersertifikat dan kru dengan pelatihan
   survival offshore (CAAM / BOSIET / HUET). ⚠️ Klaimnya benar, dokumennya
   belum terkumpul — lihat `## Evidence on Hand`.
3. **Warisan 25 tahun corporate video.** Firstman Productions adalah rumah
   produksi corporate video lama yang beralih ke industrial. Kemampuannya
   bercerita, bukan sekadar menerbangkan drone.
4. **Mobilisasi empat negara.** Malaysia (termasuk Sabah & Sarawak),
   Singapura, Indonesia, Brunei. Bukan hanya Klang Valley.

Poin 1 dan 3 adalah yang paling sulit ditiru dan paling murah dibuktikan.

Keempatnya tetap berlaku — pemilik mengonfirmasinya pada 2026-08-04 dan tidak
ada yang dicabut sejak itu. Tapi jangan membacanya sebagai sesuatu yang
dibuktikan oleh enam halaman `/our-work`: keenamnya placeholder (lihat
`## Evidence on Hand`). Rekam jejaknya nyata, tulisan yang menggambarkannya di
situs ini tidak. Satu-satunya bukti terpublikasi yang berdiri di belakang poin 1
saat ini adalah 28 logo klien yang izinnya sudah di tangan.

## Operating Context

Pekerjaannya terjadi di site industri yang sedang beroperasi, bukan di studio.
Yang berikut ini fakta operasional, bukan gaya bahasa pemasaran:

- **Sebelum kamera keluar:** permit-to-work, induksi fasilitas, koordinasi
  dengan HSE manager site soal PPE, zona terlarang, dan izin terbang.
- **Penjadwalan:** kerja marine/offshore dijadwalkan mengikuti weather window
  dan pergerakan kapal, bukan kalender produksi.
- **Kerahasiaan:** layout site, prosedur operasi, dan teknik fabrikasi adalah
  milik klien. NDA dieksekusi sebelum mobilisasi; deliverable sensitif
  dikirim ter-gate, bukan dipublikasikan.
- **Empat sektor yang dilayani:** Oil & Gas, Energy & Utilities,
  Marine & Offshore, Fabrication & Construction. Sektor ini tidak punya route
  sendiri — hidupnya sebagai konten di `lib/data/sectors.ts`.
- **Siklus keputusan panjang.** Izin rilis tertulis di sektor O&G Malaysia
  makan waktu minggu sampai bulan. Perencanaan konten di sini kuartalan,
  bukan sprint.

## Capabilities and Constraints

**Enam layanan yang tayang** (`lib/data/services.ts` — sumber untuk navbar
dropdown dan sitemap): Corporate Videos, Large-Scale Facility Overviews,
Progression & Timelapse, Safety and Induction Videos, AI-Generated Video,
Industrial Photography.

**Batasan teknis:**

- Situs statis, 20 halaman App Router yang di-prerender. Tidak ada backend.
- Form POST ke Web3Forms lalu redirect ke `/thank-you/*`. Satu-satunya form
  lead adalah `app/contact/consultation-form.tsx`.
- Ada alur "Request Access" untuk video ter-gate yang mengirim ke Web3Forms
  tanpa redirect. ⚠️ Saat ini tidak ada file di balik gerbang itu.
- Single-locale (English) secara desain. Tidak ada hreflang.
- Tema terang dan gelap keduanya wajib jalan; default gelap, tidak mengikuti
  preferensi OS.

**Terminologi yang mengikat:**

- "Industrial Cinematography" boleh dipakai sebagai tagline brand, **tidak
  boleh** sebagai nama layanan (layanannya sudah diganti nama).
- "FPV Fly-Throughs" adalah layanan yang sudah dihapus. Jangan dihidupkan lagi.
- Sebut sektor, bukan "industries" sebagai route — `/industries` sudah dihapus
  pada 2026-08-04 dan 308-redirect ke `/#industries`.

**Keputusan yang sengaja terbuka:**

- **Apa yang terjadi pada enam halaman `/our-work`.** Pertanyaan "apakah keenam
  case study itu nyata" sudah **terjawab** pada 2026-08-05: tidak, semuanya
  placeholder (lihat `## Evidence on Hand`). Yang belum diputuskan adalah
  tindakannya — menahan keenam route sampai ada proyek nyata, menggantinya
  dengan roster klien dari 28 logo yang izinnya sudah di tangan, atau
  menganonimkan sampai izin rilis per klien datang. Ini keputusan pemilik,
  bukan keputusan teknis, dan menyentuh `lib/data/our-work.ts`, `app/sitemap.ts`
  serta JSON-LD di tiap halaman.
- **Klaim tanpa dokumen yang sengaja dibiarkan tayang.** Pada 2026-08-05 pemilik
  memilih membiarkannya dan hanya menandainya, jadi ini bukan pekerjaan yang
  belum dikerjakan melainkan pengecualian sadar terhadap Prinsip 3: "100% HSE
  Compliance" dan "0 Incident Record" (servishero), "256-bit encryption" dan
  "Gated Access Required" (mahb), "Limited Onboarding Capacity" dan "Priority
  site assessment slots available this month" (ecobalance/servishero), "Safety
  Compliant — captured under strict industrial safety management systems"
  (ben-line), serta penanda internal `[CONFIRM APPROVED ASSETS]`,
  `[LOGO PERMISSION]` dan `[CLIENT-APPROVED WORDING PENDING]` (syndel). Jangan
  dihapus tanpa instruksi, dan jangan pula ditambah saudaranya.
- Nama asli anggota tim. `/about/team` sekarang hanya menampilkan jabatan.

## Brand Commitments

- **Nama dagang:** Firstman Videos. **Badan hukum:** Firstman Productions,
  Co Reg 200203019239 (001335693-M). Keduanya harus muncul benar; jangan
  disamakan. Dua nomor itu satu perusahaan yang sama: 200203019239 adalah nomor
  di bawah Companies Act 2016, 001335693-M nomor SSM lama yang digantikannya dan
  yang masih tercetak di kontrak serta dokumen tender lama — keduanya tayang
  berdampingan, jangan salah satunya dibuang.
- **Tagline:** "Industrial Cinematography for Oil & Gas and Heavy Industry."
- **Kontak resmi** (`lib/seo.ts` → `SITE`): info@firstmanvideos.com,
  +6017 356 3598 (nomor utama, ini yang diterbitkan JSON-LD),
  +6012 327 6737, facebook.com/firstmanvideos, S-025, 2nd Floor, Seasons Square,
  Jalan PJU 10/3C, Damansara Damai, 47830 Petaling Jaya, Selangor, Malaysia.
  Alamat dan nomor registrasi diperbarui pemilik pada **2026-08-06** —
  menggantikan alamat Kelana Jaya yang lama, yang tidak boleh muncul lagi di
  mana pun. Pada tanggal yang sama pemilik **mencabut nomor kantor
  +603 7968 6737**; nomor itu jangan dihidupkan lagi, termasuk di JSON-LD.
- **Batasan suara — mengikat, dari klien sendiri (2026-08-04, verbatim):**

  > "Our clients will want to see the actual work we've done and not just read
  > fancy words. It's just all too much worded content everywhere and not
  > enough actual work highlighted. Overall feels like we are a company with
  > all flowery talk and no substance!"

  Menambah copy untuk menutupi halaman yang terasa kosong memperparah keluhan
  ini, bukan menjawabnya.

## Evidence on Hand

Bagian ini adalah pagar. Semua yang tercatat sebagai **tidak ada** di bawah ini
tidak boleh dikarang, disiratkan, atau digambarkan seolah ada.

**Terkonfirmasi benar dan bisa dibuktikan ke klien:**

- 25+ tahun corporate video, 15+ tahun sektor Oil & Gas, 500+ proyek.
  Dikonfirmasi pemilik pada 2026-08-04. Angka ini boleh tayang.

**Ada di tangan sekarang:**

- Izin tertulis memakai 28 logo klien & agensi di `public/images/clients/`.
  Dikonfirmasi ulang pemilik pada 2026-08-05. Ini satu-satunya aset bukti yang
  lengkap dan belum dimanfaatkan maksimal. `PENDING-CLIENT-ASSETS.md` item 7
  ("Written permission to display the 26 client logos") sudah **selesai** dan
  angkanya keliru — 28, bukan 26. Chip `[LOGO PERMISSION]` yang masih tayang di
  `/our-work/syndel-asia` adalah sisa penanda internal, bukan pekerjaan terbuka.
- Satu klip hero, `public/videos/hero.mp4` (4,4 MB) + `hero-poster.jpg`. Stok
  Pexels 856627, lisensi komersial tanpa atribusi — **bukan** rekaman Firstman.
  Rinciannya di `lib/hero-media.ts`. Jangan pernah diberi caption sebagai karya
  sendiri.
- 11 still Pexels berlisensi di `public/images/pexels/`, kredit lengkap di
  `CREDITS.md` di direktori yang sama. Dipakai enam halaman `/services` dan satu
  kartu di `/our-work`. Stok, bukan dokumentasi proyek.

**Klaim benar, dokumen pendukung belum terkumpul:**

- Sertifikat CAAM / BOSIET / HUET. Boleh disebut sebagai kapabilitas; **jangan**
  tampilkan nomor sertifikat, badge, atau logo otoritas sampai dokumennya ada.

**Tidak ada — jangan dikarang:**

- **Enam "case study" di `/our-work` seluruhnya placeholder.** Dikonfirmasi
  pemilik pada 2026-08-05: Petrofac Kemaman, MAHB Airport Services, EcoBalance,
  ServisHero, Syndel Asia, dan Ben Line Agencies **bukan** proyek nyata. Ini
  pagar tertinggi di dokumen ini, karena keenam halaman itu menamai perusahaan
  yang benar-benar ada dan menyatakan fakta tentang mereka dalam dua lapis:
  strip spesifikasi yang terbaca manusia (Client / Sector / Service / Region),
  dan `creativeWorkSchema` di `lib/seo.ts` yang mengemisi JSON-LD
  `CreativeWork` dengan `creator` = Firstman Videos dan
  `about: { Organization, name: "<perusahaan>" }` — pernyataan terbaca mesin ke
  mesin pencari bahwa Firstman mengerjakan proyek untuk klien-klien itu.
  Halaman hub juga membukanya dengan "Real projects. Real results."
  Jangan tambah case study, testimonial, angka, atau atribusi klien apa pun di
  atas fondasi ini. Keputusan apa yang harus terjadi pada keenam halaman itu
  ada pada pemilik dan **belum diambil** — lihat `## Capabilities and
  Constraints`.
- **Nol footage klien.** Yang ada hanya klip stok Pexels di atas. Tidak ada satu
  detik pun rekaman Firstman di repo ini: tidak ada master film, showreel,
  embed YouTube/Vimeo, atau `.mp4`/`.webm` selain `hero.mp4`. Jangan pasang ikon
  play di tempat yang tidak benar-benar memulai playback.
- **Nol foto proyek asli.** 88 gambar di `public/images/stitch/` adalah render
  AI Google Stitch, maksimal 512px. Jangan diperlakukan sebagai dokumentasi
  proyek saat menulis alt text, caption, atau OG image.
- **13 dari 88 gambar itu bahkan bukan foto** — melainkan tangkapan layar mockup
  Stitch dengan catatan karangan terbakar di pikselnya: klaim performa
  "Achieving 25% faster turnaround times", panel aset berisi
  `SH_OP_CAMPAIGN_FINAL_SECURE.mp4 / AES-256bit / Oct 24, 2023 by Admin`,
  spesifikasi kamera `SHOT ON: ARRI ALEXA LF / LENS: 24MM T1.5`, nama proyek
  `PINDAH OFFSHORE PIPING`, header salah eja `CASE STIUDY DETAIL`, tombol play
  yang digambar ke dalam still, dan satu screenshot halaman portfolio. Semuanya
  berhenti dirender pada 2026-08-05; jangan dihidupkan lagi. Satu file yang
  masih dipakai, `stitch/ab775bb3c7.jpg` di kartu ServisHero, memuat merek pihak
  ketiga karangan ("AETNA", "24/7 SERVICE") di latarnya.
- **Nol testimonial.** Tidak ada satu pun kutipan klien bernama.
- **Arsip footage belum pernah dicek** (YouTube, Vimeo, Facebook, Drive, hard
  disk lama). Dikonfirmasi masih belum dicek pada 2026-08-05. Ini item termurah
  yang bisa membuka seluruh proyek.
- **Petrofac Kemaman** punya form "Request Access" tanpa file di baliknya.

Daftar tagihan aset lengkap dan rencana bertahapnya ada di
`PENDING-CLIENT-ASSETS.md`. Redesign `/our-work` ditunda sampai footage datang;
per 2026-08-05 belum ada satu pun aset baru yang masuk dan daftar itu belum
dikirim ke klien.

## Product Principles

1. **Bukti mengalahkan prosa.** Satu klip 30 detik yang bisa ditonton bernilai
   lebih dari seribu kata yang menjelaskan seperti apa klip itu. Kalau sebuah
   halaman terasa kosong, jawabannya aset — bukan paragraf tambahan.
2. **Manajer proyek yang menang.** Saat empat pembeli menarik ke arah berbeda,
   optimalkan untuk orang yang butuh bukti progres konkret.
3. **Hanya klaim yang bisa dibuktikan.** Angka, sertifikat, dan nama klien
   hanya tayang kalau dokumennya ada. Kekosongan bukti dinyatakan, bukan
   ditutupi.
4. **Akses site adalah produknya.** PTW, induksi, koordinasi HSE, dan weather
   window bukan syarat administratif — itu justru yang dibeli klien.
5. **Kerahasiaan adalah fitur.** Menggerbang materi sensitif membangun
   kepercayaan di sektor ini — tapi hanya kalau ada sesuatu di balik gerbangnya.
