export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
}

export const posts: BlogPost[] = [
  {
    slug: "landing-page-vs-website-company",
    title:
      "Landing Page vs Website Company: Mana yang Tepat untuk Bisnis Anda?",
    excerpt:
      "Memahami perbedaan fungsi, tujuan, dan investasi antara landing page dan website perusahaan untuk strategi digital yang tepat.",
    content: `
Memilih antara landing page dan website company adalah keputusan strategis yang sering membingungkan pebisnis. Keduanya memiliki fungsi berbeda dan tujuan yang spesifik.

## Apa itu Landing Page?

Landing page adalah halaman tunggal yang dirancang khusus untuk kampanye marketing. Fokusnya adalah satu tujuan: konversi. Baik itu pendaftaran, pembelian, atau download.

## Apa itu Website Company?

Website company adalah multi-halaman yang menyajikan informasi lengkap tentang perusahaan Anda. Mulai dari profil, layanan, portofolio, hingga kontak.

## Kapan Menggunakan Landing Page?

- Campaign produk baru
- Event pendaftaran
- Promosi terbatas
- A/B testing marketing

## Kapan Menggunakan Website Company?

- Brand awareness jangka panjang
- Informasi lengkap perusahaan
- SEO organic traffic
- Credibility & trust building

Keduanya saling melengkapi. Landing page untuk kampanye spesifik, website company untuk pondasi digital bisnis Anda.
    `,
    author: "Tim RYNEX",
    date: "12 Jun 2026",
    readTime: "5",
    category: "Panduan",
    cover: "https://picsum.photos/seed/blog1/1200/600",
  },
  {
    slug: "meningkatkan-konversi-micro-interactions",
    title: "Cara Meningkatkan Konversi Landing Page dengan Micro-Interactions",
    excerpt:
      "Micro-interactions kecil dapat membuat perbedaan besar dalam tingkat konversi. Pelajari implementasinya.",
    content: `
Micro-interactions adalah animasi kecil dan umpan balik visual yang terjadi saat pengguna berinteraksi dengan elemen UI. Meskipun terlihat sepele, dampaknya terhadap konversi sangat signifikan.

## Mengapa Micro-Interactions Penting?

Pengguna modern memiliki ekspektasi tinggi terhadap pengalaman digital. Setiap interaksi harus terasa responsif dan intuitif. Micro-interactions memberikan:

### 1. Umpan Balik Instan
Tombol yang berubah warna saat diklik, loading spinner yang halus, atau animasi sukses setelah submit form.

### 2. Panduan Visual
Animasi halus yang mengarahkan perhatian pengguna ke elemen penting seperti CTA atau form.

### 3. Kepuasan Pengguna
Micro-interactions yang dirancang dengan baik menciptakan rasa puas dan profesionalisme.

## Implementasi Praktis

Beberapa micro-interactions yang bisa langsung diterapkan:

- Button hover & click feedback
- Form validation实时
- Scroll-triggered animations
- Loading states yang halus
- Success/error animations

Hasilnya? Klien kami melihat peningkatan konversi hingga 25% setelah mengimplementasikan micro-interactions yang tepat.
    `,
    author: "Tim RYNEX",
    date: "5 Jun 2026",
    readTime: "7",
    category: "Optimasi",
    cover: "https://picsum.photos/seed/blog2/1200/600",
  },
  {
    slug: "nextjs-16-apa-yang-baru",
    title: "Next.js 16: Apa yang Baru dan Mengapa Harus Beralih?",
    excerpt:
      "Review fitur-fitur terbaru Next.js 16 dan bagaimana framework ini terus mendefinisikan ulang pengembangan web modern.",
    content: `
Next.js 16 hadir dengan sejumlah peningkatan signifikan yang membuat pengembangan web semakin efisien. Berikut adalah fitur-fitur utama yang perlu Anda ketahui.

## Partial Prerendering (PPR)

PPR memungkinkan halaman memiliki konten statis dan dinamis dalam satu request. Bagian statis langsung di-cache, bagian dinamis di-stream.

## Improved Turbopack

Turbopack kini 2x lebih cepat untuk development. Hot Module Replacement (HMR) hampir instan, bahkan untuk proyek besar.

## Enhanced Server Actions

Server Actions sekarang lebih matang dengan dukungan form validation, revalidation selektif, dan error handling yang lebih baik.

## Bundle Size Optimizations

Next.js 16 secara otomatis melakukan tree-shaking yang lebih agresif. Bundle size berkurang hingga 30% untuk aplikasi rata-rata.

## Migrasi dari v15

Proses migrasi relatif mulus. Sebagian besar API backward-compatible. Upgrade sekarang untuk memanfaatkan performa terbaru.
    `,
    author: "Tim RYNEX",
    date: "28 Mei 2026",
    readTime: "6",
    category: "Teknologi",
    cover: "https://picsum.photos/seed/blog3/1200/600",
  },
  {
    slug: "panduan-memilih-tech-stack",
    title: "Panduan Memilih Tech Stack untuk Startup Digital",
    excerpt:
      "Bagaimana memilih kombinasi teknologi yang tepat untuk produk digital Anda tanpa over-engineering.",
    content: `
Memilih tech stack adalah salah satu keputusan paling penting dalam pengembangan produk digital. Pilihan yang salah bisa menghambat pertumbuhan dan membuang sumber daya.

## Prinsip Dasar

### 1. Match dengan Produk
Frontend-heavy? Pilih React/Next.js. API-intensive? Go atau Node.js. Data-heavy? Python dengan pandas.

### 2. Tim & Keahlian
Gunakan teknologi yang sudah dikuasai tim. Belajar sambil jalan bisa memperlambat pengembangan 2-3x.

### 3. Ekosistem & Komunitas
Pilih stack dengan komunitas besar. Dokumentasi lengkap, banyak library, dan mudah mencari developer.

## Stack Rekomendasi untuk Startup

**Frontend:** Next.js + TypeScript + Tailwind CSS
**Backend:** Node.js (Express/Hono) atau Go
**Database:** PostgreSQL (default), Redis (caching)
**Infrastructure:** Vercel / AWS + Docker

## Yang Harus Dihindari

- Over-engineering untuk MVP
- Microservices sebelum perlu
- Database NoSQL tanpa alasan jelas
- Framework terlalu baru (belum mature)
    `,
    author: "Tim RYNEX",
    date: "20 Mei 2026",
    readTime: "8",
    category: "Panduan",
    cover: "https://picsum.photos/seed/blog4/1200/600",
  },
  {
    slug: "website-perusahaan-vs-social-media",
    title: "Mengapa Website Perusahaan Masih Penting di Era Social Media",
    excerpt:
      "Social media bukan pengganti website perusahaan. Simak 5 alasan mengapa bisnis tetap membutuhkan website profesional.",
    content: `
Di era digital yang didominasi media sosial, banyak bisnis mulai meragukan perlunya website perusahaan. Namun, kenyataannya website tetap menjadi fondasi identitas digital yang tidak bisa digantikan.

## 1. Kepemilikan Penuh

Social media hanyalah platform pinjaman. Aturan bisa berubah kapan saja, algoritma bisa mengurangi jangkauan Anda, dan akun bisa di-suspend tanpa alasan jelas.

## 2. Kredibilitas Profesional

Survey menunjukkan 84% konsumen menganggap website perusahaan lebih kredibel daripada profil social media. Website adalah tanda bisnis serius.

## 3. Kontrol Brand

Website memberi Anda kendali penuh atas brand experience. Dari desain, konten, hingga user journey — semuanya sesuai visi Anda.

## 4. SEO & Organic Traffic

Website yang dioptimasi dengan baik bisa menjadi aset pemasaran jangka panjang. Traffic organik dari Google terus mengalir tanpa biaya iklan.

## 5. Data & Analitik

Dengan website, Anda memiliki data pengunjung yang lengkap. Bandingkan dengan social media yang hanya memberikan data terbatas.

Social media dan website bukan pilihan, melainkan kombinasi yang saling melengkapi.
    `,
    author: "Tim RYNEX",
    date: "14 Mei 2026",
    readTime: "4",
    category: "Wawasan",
    cover: "https://picsum.photos/seed/blog5/1200/600",
  },
  {
    slug: "optimasi-performa-web-2026",
    title: "Optimasi Performa Web: Panduan Lengkap 2026",
    excerpt:
      "Teknik optimasi performa website terkini untuk mencapai skor Lighthouse 90+ dan pengalaman pengguna yang superior.",
    content: `
Performa web adalah faktor kritis dalam kesuksesan digital. Google menggunakan Core Web Vitals sebagai ranking signal, dan pengguna mengharapkan halaman loading di bawah 2 detik.

## Core Web Vitals

### LCP (Largest Contentful Paint)
Target: < 2.5 detik. Optimasi: kompresi gambar, preload font, server response time.

### FID (First Input Delay) / INP
Target: < 200ms. Optimasi: code splitting, lazy loading, web workers.

### CLS (Cumulative Layout Shift)
Target: < 0.1. Optimasi: ukuran eksplisit untuk media, font display swap.

## Teknik Optimasi Terkini

### Image Optimization
Gunakan WebP/AVIF, implementasikan responsive images, dan lazy loading native.

### Code Splitting
Next.js sudah melakukan code splitting otomatis. Pastikan dynamic imports untuk komponen besar.

### Caching Strategy
Service worker untuk PWA, CDN untuk static assets, dan Redis untuk API caching.

### Bundle Analysis
Gunakan tools seperti next/bundle-analyzer untuk mengidentifikasi dependency yang tidak perlu.

Hasil dari optimasi menyeluruh? Loading time turun 60%, bounce rate turun 35%, dan konversi naik 20%.
    `,
    author: "Tim RYNEX",
    date: "7 Mei 2026",
    readTime: "10",
    category: "Teknologi",
    cover: "https://picsum.photos/seed/blog6/1200/600",
  },
];
