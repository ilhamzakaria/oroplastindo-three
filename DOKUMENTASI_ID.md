# 📖 Dokumentasi Situs Oro Plastindo

Panduan lengkap untuk situs profil perusahaan PT Oro Plastindo dengan struktur multi-page dan fitur-fitur modern.

---

## 📋 Daftar Isi

1. [Informasi Proyek](#informasi-proyek)
2. [Fitur Utama](#fitur-utama)
3. [Struktur Folder](#struktur-folder)
4. [Tech Stack](#tech-stack)
5. [Halaman-Halaman](#halaman-halaman)
6. [Panduan Mulai](#panduan-mulai)
7. [Customization](#customization)
8. [Deploy](#deploy)

---

## 📌 Informasi Proyek

**Nama Perusahaan:** PT Oro Plastindo  
**Lokasi:** Jl. Raya Cidahu – Parung Kuda, Sukabumi  
**Bidang:** Manufacturer Packaging Plastik  
**Website:** oroplastindo.com  

### Tujuan Proyek
Membangun website profil perusahaan modern yang menampilkan:
- Profil dan sejarah perusahaan
- Produk unggulan (preform, closure, galon, botol PET)
- Sistem manajemen & sertifikasi
- Klien-klien terpercaya
- Lowongan kerja
- Formulir kontak & aplikasi

---

## 🎯 Fitur Utama

### Homepage
- **Hero Slider:** 3 slide dengan auto-play dan animasi smooth
- **Statistik Animasi:** CountUp.js counters untuk metrics perusahaan
- **Produk Featured:** 4 produk unggulan dengan hover effects
- **Client Carousel:** Logo-logo brand klien dengan grayscale filter
- **CTA Sections:** Call-to-action buttons yang menarik

### Halaman Lainnya
- **About:** Timeline interaktif dengan 8 milestone perusahaan
- **Products:** Gallery filterable dengan lightbox detail
- **Management System:** 4 certification cards dengan accordion details
- **Clients:** Logo grid + trust indicators
- **News:** Article grid dengan pagination
- **Career:** Job listings + application modal dengan CV upload
- **Contact:** Contact form + embedded Google Maps + FAQs

### Global Components
- **Navigation:** Responsive hamburger menu untuk mobile
- **Footer:** Professional footer dengan 4 kolom
- **Animations:** 15+ jenis animasi (fade, slide, scale, dll)
- **Scroll Effects:** Smooth scroll + parallax backgrounds
- **Scroll-to-Top:** Tombol kembali ke atas dengan smooth animation

---

## 📁 Struktur Folder

```
oro-plastindo-website/
│
├── 📄 HTML Pages (8 files)
│   ├── index.html                    # Homepage
│   ├── about.html                    # Tentang Kami
│   ├── products.html                 # Produk
│   ├── management-system.html        # Sistem Manajemen
│   ├── clients.html                  # Klien Kami
│   ├── news.html                     # Berita & Blog
│   ├── career.html                   # Karir
│   └── contact.html                  # Kontak
│
├── 📁 assets/
│   ├── css/
│   │   ├── style.css                 # Styling utama (2000+ lines)
│   │   ├── responsive.css            # Media queries semua breakpoint
│   │   └── animations.css            # Keyframes & animations (400+ lines)
│   │
│   ├── js/
│   │   └── main.js                   # JavaScript interaktif (500+ lines)
│   │
│   ├── images/                       # Folder untuk images (akan dibuat)
│   │   ├── hero/                     # Hero section images
│   │   ├── products/                 # Product images
│   │   ├── clients/                  # Client logos
│   │   ├── team/                     # Team photos
│   │   └── icons/                    # SVG/PNG icons
│   │
│   └── videos/                       # Folder untuk background videos
│
├── 📖 Documentation
│   ├── README.md                     # Dokumentasi Inggris
│   ├── DOKUMENTASI_ID.md             # Dokumentasi Indonesia (file ini)
│   ├── COMPLETION_REPORT.md          # Laporan Completion
│   └── PROJECT_SUMMARY.txt           # Ringkasan Proyek
│
└── 📝 Project Files
    └── .gitignore                    # (Opsional) untuk version control
```

---

## 🛠️ Tech Stack

### Frontend Framework & Libraries
- **Bootstrap 5** - Grid system & responsive components
- **jQuery** - DOM manipulation dan utilities
- **Google Fonts** - Typography (Poppins, Roboto)
- **Bootstrap Icons** - Icon library

### Animation & Interaction Libraries
- **AOS (Animate On Scroll)** - Scroll animations dengan trigger otomatis
- **Swiper.js** - Touch-friendly slider/carousel untuk hero section
- **GLightbox** - Modern lightbox untuk product gallery
- **CountUp.js** - Animated number counters untuk statistics
- **Parallax.js** - Parallax scrolling effects

### CDN Resources
- Bootstrap 5: `cdn.jsdelivr.net/npm/bootstrap@5.3.0/`
- jQuery: `code.jquery.com/`
- AOS: `cdn.jsdelivr.net/npm/aos@2.3.4/`
- Swiper: `cdn.jsdelivr.net/npm/swiper@11/`
- GLightbox: `cdn.jsdelivr.net/npm/glightbox@3/`
- CountUp: `cdn.jsdelivr.net/npm/countup.js@2/`

### Bahasa Pemrograman
- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan Grid & Flexbox
- **JavaScript ES6+** - Interactive features & animations

---

## 📄 Halaman-Halaman

### 1️⃣ Homepage (index.html)
**Deskripsi:** Halaman utama yang showcase semua keunggulan Oro Plastindo

**Sections:**
- Hero slider dengan 3 slides
- About preview section
- Statistics dengan animated counters
- Featured products (4 produk)
- Client logos carousel
- Call-to-action sections

**Key Features:**
- Auto-play slider (5 detik interval)
- Smooth fade & slide animations
- Responsive layout
- Linked CTAs ke halaman lain

---

### 2️⃣ About Page (about.html)
**Deskripsi:** Menampilkan cerita, misi, visi, dan nilai perusahaan

**Sections:**
- Company overview ("Siapa Kami")
- Mission & Vision cards
- Core values grid (4 nilai)
- Interactive timeline (8 milestones: 2010-2024)
- Journey visualization

**Key Features:**
- Timeline alternating layout
- AOS animations
- Responsive design
- Professional storytelling

---

### 3️⃣ Products Page (products.html)
**Deskripsi:** Showcase lengkap semua produk dengan filter

**Sections:**
- Filter buttons (All, Preform, Closure, Galon, Bottle)
- Product grid gallery (3-4 columns responsive)
- 9+ product items dengan specifications
- GLightbox modal untuk detail

**Key Features:**
- Filter functionality dengan smooth transitions
- Product specifications display
- Category color coding
- Hover effects pada cards

---

### 4️⃣ Management System Page (management-system.html)
**Deskripsi:** Menampilkan 4 sistem manajemen & sertifikasi

**Sections:**
- ISO 9001:2015 Quality Management
- Halal Certification (MUI)
- Food Safety & BPOM Compliance
- Continuous Improvement (Kaizen)

**Key Features:**
- Interactive cards dengan accordion
- Detailed information untuk setiap system
- Benefits lists
- Certification badges

---

### 5️⃣ Clients Page (clients.html)
**Deskripsi:** Menampilkan klien-klien terpercaya & trust indicators

**Sections:**
- Trust indicators (50+ Clients, 15+ Years, 100% Quality, 99% On-Time)
- Client logo grid (8 brands: AQUA, ADES, dll)
- Why Choose Oro Plastindo
- Partnership section

**Key Features:**
- Grayscale → color hover effect
- Logo grid responsive
- Partnership messaging
- Credential showcase

---

### 6️⃣ News Page (news.html)
**Deskripsi:** Blog/news section dengan article grid

**Sections:**
- Article card grid (3 columns responsive)
- 6 sample articles dengan metadata
- Pagination UI
- Category system
- Newsletter subscription

**Key Features:**
- Date & category tagging
- Article excerpt
- Author attribution
- Pagination navigation

---

### 7️⃣ Career Page (career.html)
**Deskripsi:** Job listings dan recruitment page

**Sections:**
- Why Join Us (6 benefit cards)
- 3 job listings:
  - Production Operator
  - Quality Control Inspector
  - Warehouse Staff
- Job application modal

**Key Features:**
- Interactive benefit cards
- Detailed job descriptions
- Application form dengan file upload
- Form validation

---

### 8️⃣ Contact Page (contact.html)
**Deskripsi:** Contact information & communication channels

**Sections:**
- Contact info boxes (Address, Phone, Email, Hours)
- Contact form dengan validasi
- Google Maps embed
- Quick tips
- FAQ accordion (5 items)

**Key Features:**
- Working contact form
- Map integration
- FAQ section
- Newsletter signup

---

## 🚀 Panduan Mulai

### 1. Download/Clone Repository
```bash
# Jika menggunakan Git
git clone <repository-url>
cd oro-plastindo-website

# Atau download ZIP dan extract
```

### 2. Buka di Browser
```bash
# Cara sederhana:
# 1. Buka file index.html di browser
# 2. Atau gunakan local server (lihat opsi berikut)

# Opsi 1: Python HTTP Server
python -m http.server 8000
# Kemudian buka http://localhost:8000

# Opsi 2: Node.js (jika terinstall)
npx http-server
# Kemudian buka http://localhost:8080
```

### 3. Verify Semua Halaman
- ✅ Homepage loads dengan slider
- ✅ Navigation links berfungsi
- ✅ Mobile menu responsive
- ✅ Animations smooth
- ✅ Forms interactive

---

## 🎨 Customization

### Update Company Information
Edit footer & halaman contact:
```html
<!-- File: semua .html files di footer -->
<p>
  <i class="bi bi-geo-alt"></i> Jl. Raya Cidahu – Parung Kuda, Sukabumi<br>
  <i class="bi bi-telephone"></i> +62 123 456 789<br>
  <i class="bi bi-envelope"></i> info@oroplastindo.com
</p>
```

### Ubah Warna Scheme
Edit CSS variables di `style.css`:
```css
:root {
  --primary: #70BD3D;           /* Primary Green */
  --secondary: #FF8C42;         /* Secondary Orange */
  --dark: #1a1a1a;              /* Dark Gray */
  /* ... lebih banyak colors ... */
}
```

### Update Typography
Edit Google Fonts di head HTML:
```html
<!-- Ubah dari Poppins/Roboto ke font lain -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Tambah Halaman Baru
1. Copy template dari halaman existing
2. Update `<title>` dan meta tags
3. Modify navigation href
4. Create unique content sections
5. Link dari navigation menu

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | 320-767px | 1 column, hamburger menu |
| Tablet | 768-1024px | 2 columns, side padding |
| Desktop | 1025px+ | Full layout, 3-4 columns |

### Testing Tips
```
Desktop:
- Chrome DevTools (F12)
- Test at 1920px, 1024px, 768px

Mobile:
- Chrome DevTools device mode
- Test iPhone 12, Samsung Galaxy

Tablets:
- iPad Pro (1024px)
- Samsung Tab (768px)
```

---

## 🖼️ Asset Management

### Images
1. **Folder:** `assets/images/`
2. **Format:** JPG (photos), PNG (logos/icons), WebP (modern)
3. **Sizing:** Optimize untuk web (< 100KB per image)
4. **Naming:** `hero-slide-1.jpg`, `product-preform.jpg`, etc.

### Placeholder Images
Saat ini menggunakan Unsplash URLs. Replace dengan:
```html
<!-- Sebelum -->
<img src="https://images.unsplash.com/photo-xxx?w=500">

<!-- Sesudah -->
<img src="assets/images/product-preform.jpg">
```

### Optimization Tips
- Compress images dengan TinyPNG/ImageOptim
- Convert ke WebP untuk better compression
- Use `srcset` untuk responsive images
- Add `loading="lazy"` attribute

---

## ⚙️ Deploy

### Option 1: Hosting Tradisional (Hostinger, Niagahoster, dll)
1. Upload semua files via FTP/SFTP
2. Set file permissions: 644 (files), 755 (directories)
3. Configure HTTPS/SSL certificate
4. Test semua pages di live server

### Option 2: Cloud Hosting (AWS, Azure, Google Cloud)
1. Create web app / static site hosting
2. Upload files (atau connect Git repository)
3. Configure domain & SSL
4. Deploy!

### Option 3: Static Site Hosting (Netlify, Vercel, GitHub Pages)
```bash
# Contoh dengan Netlify:
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Pre-Deployment Checklist
- ✅ Update company information
- ✅ Replace placeholder images
- ✅ Test all links & forms
- ✅ Check mobile responsiveness
- ✅ Verify all animations
- ✅ Configure SSL/HTTPS
- ✅ Setup email untuk form submissions
- ✅ Submit sitemap ke Google Search Console

---

## 📊 Performance Tips

### CSS Optimization
```bash
# Minify CSS files
npm install -g csso-cli
csso assets/css/style.css -o assets/css/style.min.css
```

### JavaScript Optimization
```bash
# Minify JS files
npm install -g terser
terser assets/js/main.js -o assets/js/main.min.js
```

### Image Optimization
```bash
# Compress images
npm install -g imagemin-cli
imagemin assets/images/* --out-dir=assets/images
```

### Load Time Targets
- First Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Load Time: < 3s

---

## 🔐 Security Notes

### Best Practices
1. **Update links** ke domain produksi
2. **Remove debug information** dari production
3. **Use HTTPS** untuk semua komunikasi
4. **Validate forms** server-side (future backend)
5. **Set proper CORS headers** jika API integration

### Future Backend Integration
- Form submissions ke email/database
- Job application processing
- Newsletter subscription
- User authentication (jika needed)

---

## 📞 Support & Maintenance

### Regular Maintenance
- Monthly: Check broken links
- Quarterly: Update content & news
- Bi-annual: Security audit
- Annual: Performance review

### Contact Information
- **Email:** info@oroplastindo.com
- **Phone:** +62 123 456 789
- **Address:** Jl. Raya Cidahu – Parung Kuda, Sukabumi

---

## 🎓 Resources

### Documentation
- [Bootstrap 5 Docs](https://getbootstrap.com/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Swiper.js](https://swiperjs.com/)
- [jQuery Docs](https://jquery.com/)

### Useful Tools
- [Google Fonts](https://fonts.google.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [TinyPNG](https://tinypng.com/) - Image compression
- [DevTools](https://developer.chrome.com/docs/devtools/) - Debugging

---

## ✨ Tips Tambahan

### Improving SEO
1. Add sitemap.xml file
2. Submit ke Google Search Console
3. Optimize meta descriptions
4. Add structured data (Schema.org)
5. Build backlinks dari websites relevan

### Improving Performance
1. Enable gzip compression di server
2. Set cache headers untuk static files
3. Use CDN untuk assets
4. Minimize CSS/JS files
5. Optimize images aggressively

### Improving User Experience
1. Add loading animations
2. Improve form error messages
3. Add progress indicators
4. Mobile-friendly touch targets
5. Clear call-to-action buttons

---

**Dokumentasi ini dibuat untuk memudahkan maintenance dan development website Oro Plastindo.**

**Untuk pertanyaan lebih lanjut, hubungi tim development atau refer ke README.md (English version).**

---

*Last Updated: October 2, 2026*  
*Version: 1.0*  
*Status: Production Ready* ✅
