# Konversi Stitch → firstman-video-next — Design Doc

Tanggal: 2026-07-06. Status: disetujui user (homepage dark, variant versi 2, pendekatan hybrid, "langsung kerjakan").

## Tujuan

Mengonversi 22 screen terpilih dari `../stitch_first_man_videos_website_redesign/` (export Google Stitch, HTML + Tailwind CDN) menjadi situs Next.js production-ready di project ini. Sumber kebenaran desain: `first_man_videos_industrial_cinematic_system/DESIGN.md` (dark cinematic, aksen merah #d12027, Open Sans).

## Keputusan kunci

- Homepage memakai **`homepage_desktop` (dark)**; `homepage_mobile` hanya referensi breakpoint kecil (hamburger menu, bukan bottom-tab). Option B (light) tidak diporting.
- Pasangan variant memakai **versi 2**: `about_team_page_2`, `industry_fabrication_construction_2`, `industry_oil_gas_2`, `service_detail_progression_timelapse_documentation_2`. Versi `_1` tidak diporting.
- Pendekatan **hybrid**: design tokens + Navbar/Footer/komponen yang jelas berulang dibagikan; isi halaman diporting per-screen. Nav/footer yang beda-beda antar screen Stitch diseragamkan ke acuan homepage.
- Situs **dark-only**: class `dark` permanen, toggle next-themes dibuang.
- Ikon **Material Symbols Outlined** via link Google Fonts (fidelitas ke markup Stitch). Font **Open Sans** via `next/font/google` menggantikan Geist.
- Semua gambar `lh3.googleusercontent.com` (±105 URL) **di-download ke `public/images/<slug>/`** dengan manifest URL→path; URL mati diganti placeholder senada dan dicatat.
- Form contact & request access: validasi client-side, submit → redirect ke halaman thank-you. Tanpa backend; mudah disambungkan nanti.

## Peta route (26 halaman + 1 modal)

| Route | Screen sumber |
|---|---|
| `/` | homepage_desktop |
| `/about` | about_page |
| `/about/team` | about_team_page_2 |
| `/services` | services_overview |
| `/services/industrial-cinematography` | service_detail_industrial_cinematography |
| `/services/facility-overview-films` | service_detail_facility_overview_films |
| `/services/fpv-fly-throughs` | service_detail_fpv_fly_throughs |
| `/services/industrial-photography` | service_detail_industrial_photography |
| `/services/progression-timelapse` | service_detail_progression_timelapse_documentation_2 |
| `/services/visual-documentation` | service_detail_visual_documentation |
| `/industries` | industries_page |
| `/industries/oil-gas` | industry_oil_gas_2 |
| `/industries/energy-utilities` | industry_energy_utilities |
| `/industries/marine-offshore` | industry_marine_offshore |
| `/industries/fabrication-construction` | industry_fabrication_construction_2 |
| `/case-studies` | case_studies_portfolio_page |
| `/case-studies/petrofac-kemaman` | case_study_detail_petrofac |
| `/case-studies/mahb-airport-services` | case_study_detail_mahb_airport_services_2018 |
| `/case-studies/servishero-campaign` | case_study_detail_servishero_campaign |
| `/case-studies/syndel-asia` | case_study_detail_syndel_asia_industrial_documentation |
| `/case-studies/ecobalance` | case_study_detail_ecobalance_corporate_story |
| `/case-studies/ben-line-agencies` | case_study_detail_ben_line_agencies_logistics_industrial_media |
| `/contact` | contact_request_consultation |
| `/privacy-policy` | privacy_policy_consent |
| `/thank-you/consultation` | thank_you_consultation_request_received |
| `/thank-you/case-study-access` | thank_you_case_study_access_request_received |
| (komponen, bukan route) | request_access_modal_lead_gen_flow → `RequestAccessModal` |

## Struktur

- `app/globals.css`: Tailwind v4 `@theme` — primary `#d12027`, background `#000`, dark-ui `#080808`, graphite `#1a1a1a`/`#2a2a2a`, industrial-grey `#6f7378`; utility `glass-panel`, `scanning-line`, `text-gradient`.
- `components/site/`: `site-navbar`, `site-footer`, `cta-button`, `section-label`, `service-card`, `case-study-card`, `request-access-modal`, field form.
- `lib/data/`: `case-studies.ts`, `services.ts`, `industries.ts` untuk listing & navigasi silang. Konten detail tetap JSX statis per halaman.
- `public/images/<slug>/`: aset hasil download + `lib/data/image-manifest.json`.

## Verifikasi

`npm run build` + `typecheck` + `lint` hijau; semua link nav resolve ke route yang ada; pemeriksaan visual tiap halaman berjalan dibandingkan `screen.png` acuannya.

## Catatan implementasi

Next.js di sini 16.2.6 dengan breaking changes — baca `node_modules/next/dist/docs/` sebelum menulis kode (per AGENTS.md).
