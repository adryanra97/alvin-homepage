# Adryan Rizky Alviano — Homepage

Homepage pribadi (Next.js 15 + TypeScript) yang jadi "pintu depan" ke semua proyek.
Klik proyek → buka site Vercel proyek itu (project Vercel lain, tetap terpisah).

## Jalankan lokal

```bash
npm install
npm run dev      # http://localhost:3000
```

## Struktur halaman

| URL | Isi |
| --- | --- |
| `/` | Ringkasan: hero, about, pengalaman terbaru, proyek unggulan, skill |
| `/about` | Tentang, sertifikasi, penghargaan, bahasa |
| `/experience` | Timeline lengkap |
| `/projects` | Daftar semua proyek (memanjang ke bawah) |
| `/projects/<slug>` | Detail per proyek |
| `/skills` | Semua kategori skill |

## Edit konten (tanpa menyentuh komponen)

Semua teks ada di **`data/site.ts`**:

| Mau ubah | Cari di `data/site.ts` |
| --- | --- |
| Tambah proyek | array `projects` (copy satu blok, ganti `slug` + isinya). Otomatis muncul di `/projects`, dapat halaman detail `/projects/<slug>`, dan masuk sitemap |
| Tambah / ubah skill | array `skillGroups` (tab "AI & Agentic" sudah ada) |
| Pengalaman | array `experiences` |
| Link LinkedIn / GitHub, email, CV | objek `profile` |

Foto (opsional, otomatis dipakai kalau ada): taruh di `public/images/`
`hero.jpg`, `profile.jpg`, `contact.jpg`. Kalau tidak ada, dipakai ilustrasi bawaan.
Screenshot proyek: taruh di `public/projects/` lalu isi field `image` pada proyeknya.
CV: taruh `public/cv.pdf`, lalu isi `cvUrl: "/cv.pdf"` agar tombol Download CV muncul.

## Deploy

1. Buat repo GitHub baru (mis. `adryan-homepage`), push folder ini.
2. vercel.com → **Add New → Project** → import repo itu → Deploy (tanpa setting tambahan).
3. Di Vercel → Settings → Domains kamu bisa mengganti nama `*.vercel.app` (mis. `adryanrizky.vercel.app`).

## Agar muncul di Google

1. Buka <https://search.google.com/search-console> → Add property → **URL prefix** → isi URL Vercel-mu → verifikasi.
2. Menu **Sitemaps** → submit `sitemap.xml`. Lalu **URL Inspection → Request indexing**.
3. Pasang link homepage ini di LinkedIn, GitHub profile, dan README repo proyek (backlink membantu).

Sitemap, robots.txt, metadata, Open Graph, dan JSON-LD (Person) sudah disiapkan otomatis.
Kalau nanti pakai domain sendiri, set env `NEXT_PUBLIC_SITE_URL` di Vercel.
