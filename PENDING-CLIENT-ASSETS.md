# Pending: Aset Klien untuk `/our-work`

**Status:** ⏸️ Redesign `/our-work` **ditunda** menunggu klien menyediakan video asli.
**Tanggal dicatat:** 2026-08-04
**Sumber:** feedback klien + audit menyeluruh codebase (semua temuan di bawah sudah diverifikasi langsung di repo).

---

## 1. Feedback klien (verbatim)

> "When we click on this, it doesn't just go to the video but goes into another page that tells a really long story. Our clients will want to see the actual work we've done and not just read fancy words. It's just all too much worded content everywhere and not enough actual work highlighted. Overall feels like we are a company with all flowery talk and no substance! For example, when you click oil and gas work, it just goes down to page with all oil and gas projects we've done with a brief description of the work."

Perhatikan frasa **"it doesn't just go to the video"** — klien mengira videonya ada di situs. Tidak ada.

---

## 2. Hasil audit — apa yang sebenarnya ada di situs

| Temuan | Bukti di repo |
|---|---|
| **Nol video di seluruh situs** | Tidak ada `<video>`, iframe YouTube/Vimeo, atau file `.mp4`/`.webm` di `public/` |
| 7 ikon play yang tidak memutar apa pun | `app/industries/oil-gas/page.tsx` ("View Sector Reel" → grid foto), `app/industries/page.tsx`, `app/industries/fabrication-construction/page.tsx`, `app/our-work/syndel-asia/page.tsx` (×2), `app/our-work/servishero-campaign/page.tsx`, `app/services/ai-generated-video/page.tsx` |
| Semua 88 gambar = render AI, bukan foto proyek | `public/images/stitch/` — asalnya `lh3.googleusercontent.com/aida-public/` (Google Stitch), lihat `lib/data/image-manifest.json`. Maks **512px** sisi terpanjang, direntangkan jadi hero 819px |
| Teks placeholder internal tayang di production | `app/our-work/ecobalance/page.tsx:124-148` → `[CONFIRM CLIENT APPROVAL]`, `[REPLACE PLACEHOLDER TEXT]`, `[APPROVED IMAGERY ONLY]`. Juga di `app/our-work/syndel-asia/page.tsx` |
| Portofolio berisi tebakan, bukan pekerjaan | Judul section **"Likely Deliverables"** (`ecobalance:200`), "Standard Visual Deliverables" (`mahb-airport-services`) |
| Angka & prop karangan | `Ref: 2024-EB-CS`, `256-bit encryption`, `Operational Reference 04`, progress bar "Protocol Status" dengan `scale-x-75` hardcoded |
| Klaim tak terbukti | `app/page.tsx:269` → **"500+ Projects"** tepat di atas portofolio berisi 6 item |
| Nol testimonial | Tidak ada satu pun kutipan klien di `app/our-work/` |
| Homepage tidak punya section portofolio | `app/page.tsx` sama sekali tidak menampilkan pekerjaan |
| Belum terkonfirmasi | Apakah 6 "case study" yang ada memang proyek nyata, atau karangan Stitch |

### Akar masalah

Situs ini dikonversi dari mockup Google Stitch dan di-ship **sebelum aset asli klien pernah dikumpulkan.** Sekitar 1.635 kata prosa di 6 halaman `/our-work/*` adalah tulisan untuk menutupi lubang tempat footage seharusnya berada. Klien tidak bereaksi terhadap jumlah kata — mereka sadar portofolio mereka sendiri tidak ada di sana.

---

## 3. ⚠️ Jebakan pada permintaan klien

Klien minta: klik "oil and gas work" → daftar semua proyek oil & gas.

Dengan data hari ini, hasilnya:

- **Oil & Gas → 1 proyek, dan itu yang tergembok** (Petrofac)
- **Marine & Offshore → 0 proyek**
- Energy & Utilities, Fabrication & Construction → ~1 proyek yang bisa diperdebatkan

Tombol "Lihat proyek Oil & Gas" yang berujung ke satu kartu bergembok **lebih buruk** daripada esai yang digantikannya — itu mengubah kekosongan yang kabur jadi kekosongan yang terhitung.

**Aturan:** jangan ship rail per-sektor sebelum sektor itu punya minimal **2 proyek yang benar-benar bisa ditonton.** Jangan pernah menggembok satu kategori penuh.

---

## 4. Yang perlu ditagih ke klien

Salin bagian di bawah ini apa adanya untuk dikirim ke klien.

> **Asset request — Firstman Videos website**
>
> To show real work on the site instead of written descriptions, we need the following. Item 1 and 2 unblock the most and cost the least.
>
> 1. **Check for an existing archive first.** YouTube, Vimeo, Facebook, Google Drive, old hard drives. Nobody has checked yet — one hour here may unblock the entire project.
> 2. **One showreel, 60–90 seconds, cleared for public use.** An unlisted YouTube link is enough. This single asset is worth more than every other change on this list.
> 3. **Per project:** the master film (unlisted link), one poster frame ≥1920px, and 4+ stills ≥1600px.
> 4. **Per project, in writing:** site name + town/state, year, what was delivered (count × duration × aspect ratio), and one 15-word line on what the client used it for. One 30-minute call with whoever ran the shoot covers this.
> 5. **Confirm the six existing case studies are real projects** and the client names are correct.
> 6. **2–3 client quotes** with real name, job title, and company.
> 7. **Written permission** to display the 26 client logos currently on the site.
> 8. **For Petrofac:** a 20–30 second watermarked excerpt with faces, badges, and plates blurred, cleared for public display — or we remove the project. A "Request Access" form with no file behind it is the most damaging thing on the site right now.

**Catatan timeline:** izin rilis tertulis di sektor O&G Malaysia biasanya makan waktu minggu sampai bulan. Ini pekerjaan kuartalan, bukan sprint.

---

## 5. Rencana bertahap

### Fase 1 — bisa jalan tanpa aset baru

Ini **triase kejujuran**, bukan perbaikan. Situs akan terasa lebih kosong setelahnya, dan itu memang tujuannya: bingkai mengkilap yang isinya kosong persis itulah yang terbaca sebagai "flowery talk".

- [ ] Perbaiki build yang rusak (lihat §6)
- [ ] Hapus 7 ikon play mati. **Aturan baru: ikon play hanya muncul di tempat playback benar-benar dimulai**
- [ ] Hapus 6 chip placeholder di `ecobalance` + `syndel-asia`
- [ ] Hapus semua prop karangan (`Ref: 2024-EB-CS`, `256-bit encryption`, `Operational Reference 04`, progress bar palsu)
- [ ] Ganti judul hedged "Likely Deliverables" / "Standard Visual Deliverables"
- [ ] Pangkas prosa halaman `app/industries/*` sekitar 50%
- [ ] Selesaikan klaim `500+ Projects` di `app/page.tsx:269` — buktikan atau hapus
- [ ] Tambah grid "Recent Work" di homepage
- [ ] **Roster klien** — 26 logo di `public/images/clients/` adalah aset nyata paling tidak terpakai. Satu baris per klien: logo, tahun, scope 1 kalimat, deliverable. Nol fotografi dibutuhkan. Ini satu-satunya *bukti* baru yang bisa diproduksi Fase 1
- [ ] Berhenti merentangkan sumber 512px jadi hero 819px

### Fase 2 — jangan dimulai sebelum ≥3 film asli + poster ada di tangan

Kalau container-nya di-ship duluan, hasilnya grid cantik yang kosong — versi lebih buruk dari masalah sekarang.

- [ ] `lib/data/our-work.ts` sebagai satu-satunya sumber data proyek; hapus array `publicCards` yang duplikat di `components/site/our-work-portfolio.tsx`
- [ ] `/our-work` jadi satu halaman panjang dengan section per sektor ber-`id` + `scroll-mt-28` (pola yang sudah dipakai di `/#services`); chip filter jadi anchor link — persis yang diminta klien, dan crawlable
- [ ] Anatomi kartu: media 16:9 (frame asli) → judul ≤6 kata → satu baris ≤18 kata → satu baris metadata `Client · Sector · Year · Format`
- [ ] 6 detail page **dikecilkan jadi satu template, jangan dihapus** — cap ~120 kata, urutan wajib: player dulu → spec strip (Client / Site / Year / Deliverable) → stills → 3 bullet → next/prev. Menghapusnya cuma mengubah keluhan dari "banyak omong" jadi "kalian tidak punya apa-apa", dan route-nya sudah terindeks
- [ ] Rail proyek di 4 halaman `app/industries/*`, sektor demi sektor saat lolos ambang 2 proyek. Arahkan ulang CTA yang salah alamat: "View Sector Reel" (oil-gas), "View Energy Portfolio" (energy-utilities), "View Sector Portfolio" (fabrication-construction) — ketiganya sekarang mendarat di hub tanpa filter
- [ ] `lib/seo.ts` — tambah `videoObjectSchema`; regenerate sitemap dari data file baru
- [ ] `app/privacy-policy/cookie-banner.tsx` — kalau video di-embed dari YouTube/Vimeo, banner harus benar-benar menggerbang iframe-nya atau dihapus. Sekarang tidak mempersist apa pun

---

## 6. Tidak terblokir klien: build sedang rusak

Branch `feat/services-restructure`:

```
app/sitemap.ts(3,29): error TS2307: Cannot find module '@/lib/data/our-work'
```

`app/sitemap.ts:3` mengimpor `@/lib/data/our-work`, tapi `lib/data/` hanya punya `case-studies.ts`. Sisa rename `case-studies` → `our-work` yang belum selesai. Perbaikannya satu baris dan memblokir semua pekerjaan lain.
