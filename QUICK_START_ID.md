# ⚡ Quick Start Guide - Oro Plastindo Website

Panduan cepat untuk mulai menggunakan website Oro Plastindo (70% Indonesian, 30% English).

---

## 🚀 Mulai dalam 5 Menit

### 1. Download & Extract Files
```bash
# Extract semua file ke folder kerja
unzip oro-plastindo-website.zip
cd oro-plastindo-website
```

### 2. Buka di Browser
**Option A: Langsung (Simple)**
- Double-click file `index.html`
- Browser akan membuka homepage

**Option B: Local Server (Recommended)**
```bash
# Gunakan Python (sudah installed di kebanyakan system)
python -m http.server 8000

# Kemudian buka di browser:
# http://localhost:8000
```

### 3. Explore Website
- ✅ Klik navigation menu untuk explore semua halaman
- ✅ Test hamburger menu di mobile
- ✅ Klik buttons dan links
- ✅ Scroll untuk lihat animations

---

## 📁 File Structure Overview

```
Folder utama mengandung:
├── index.html              ← Halaman pertama (homepage)
├── about.html              ← About company
├── products.html           ← Product showcase
├── management-system.html  ← Certifications
├── clients.html            ← Our clients
├── news.html               ← News & blog
├── career.html             ← Job listings
├── contact.html            ← Contact form
├── assets/
│   ├── css/                ← Styling files
│   ├── js/                 ← JavaScript code
│   └── images/             ← (untuk ditambahkan)
└── README.md               ← Full documentation
```

---

## 🎨 Customize Company Info

### Update Company Details
**File:** Semua .html files (di bagian footer)

Cari dan update:
```html
<i class="bi bi-geo-alt"></i> Jl. Raya Cidahu – Parung Kuda, Sukabumi
<i class="bi bi-telephone"></i> +62 123 456 789
<i class="bi bi-envelope"></i> info@oroplastindo.com
```

### Update Company Logo/Name
**File:** Semua .html files (di navbar)

Cari:
```html
<a href="index.html" class="navbar-brand">
  <i class="bi bi-box"></i> Oro Plastindo
</a>
```

---

## 🖼️ Add Your Images

### 1. Create Image Folders
```
assets/images/
├── hero/           (untuk hero slider images)
├── products/       (untuk product photos)
├── clients/        (untuk client logos)
├── team/           (untuk team photos)
└── icons/          (untuk SVG/PNG icons)
```

### 2. Add Images to Homepage
**File:** `index.html`

Find section `hero-slider` dan update:
```html
<div class="swiper-slide hero-slide" 
     style="background-image: url('assets/images/hero/your-image.jpg');">
```

### 3. Add Product Images
**File:** `products.html`

Update product image URLs:
```html
<img src="assets/images/products/preform.jpg" alt="Product">
```

---

## 🎨 Change Colors

### Edit Color Scheme
**File:** `assets/css/style.css`

Find `:root` section dan update colors:
```css
:root {
  --primary: #70BD3D;        /* Change primary color (green) */
  --secondary: #F5A623;      /* Change secondary color (orange) */
  --dark: #1a1a1a;           /* Change dark gray */
  /* More color variables below... */
}
```

### Popular Color Combinations
- Green & Orange: `#70BD3D` & `#F5A623` (Current)
- Blue & Green: `#1976D2` & `#00BCD4`
- Purple & Pink: `#9C27B0` & `#E91E63`
- Teal & Cyan: `#009688` & `#00BCD4`

---

## 📝 Edit Content

### Update Homepage Text
**File:** `index.html`

Sections to edit:
```html
<!-- Hero Title -->
<h1>Premium Plastic Packaging Solutions</h1>

<!-- About Section -->
<p>PT Oro Plastindo is a leading plastic packaging...</p>

<!-- Products Section -->
<h4>Preform</h4>
<p>High-quality preforms for PET bottle manufacturing</p>
```

### Update About Page
**File:** `about.html`

Edit company history timeline:
```html
<div class="timeline-year">2010</div>
<div class="timeline-title">Company Founded</div>
<div class="timeline-description">Your company description...</div>
```

### Update Product Listing
**File:** `products.html`

Add/edit products:
```html
<div class="product-item" data-category="preform">
  <div class="product-name">Preform 17g</div>
  <div class="product-description">Your product description</div>
</div>
```

---

## 🔗 Navigation Links

### Update Navigation Menu
**File:** Semua .html files

```html
<li class="nav-item">
  <a href="index.html" class="nav-link">Home</a>
</li>
```

Current links (sudah connected):
- index.html → Homepage
- about.html → About/Company
- products.html → Products
- management-system.html → Certifications
- clients.html → Our Clients
- news.html → News/Blog
- career.html → Careers
- contact.html → Contact

---

## 📱 Test Responsiveness

### Desktop Testing
```
Window sizes to test:
- 1920px (Large desktop)
- 1024px (Tablet landscape)
- 768px (Tablet portrait)
- 480px (Mobile landscape)
- 320px (Mobile portrait)
```

### Browser DevTools Method
1. Press `F12` pada keyboard
2. Click device icon (top-left)
3. Select different devices
4. Check layout responsiveness

### Mobile Testing
1. Buka di smartphone
2. Test touch interactions
3. Verify hamburger menu
4. Check form inputs

---

## 🎬 Common Tasks

### Add New Product
1. Open `products.html`
2. Find `<div class="products-grid">`
3. Copy existing product card
4. Update: image, name, category, description
5. Save file

### Add New Job Listing
1. Open `career.html`
2. Find `<div class="job-listings">`
3. Copy existing job card
4. Update: position, location, description, requirements
5. Save file

### Add News Article
1. Open `news.html`
2. Find `<div class="news-grid">`
3. Copy existing article card
4. Update: date, category, title, excerpt, image
5. Save file

### Update Contact Information
1. Open `contact.html`
2. Find contact info boxes
3. Update: address, phone, email, hours
4. Update Google Maps coordinates (optional)

---

## 🔧 Troubleshooting

### Problem: Images Not Showing
**Solution:**
- Check image file path is correct
- Use forward slashes: `assets/images/photo.jpg`
- Verify image file exists in folder
- Try: `./assets/images/photo.jpg` (add ./)

### Problem: Links Not Working
**Solution:**
- Check href attribute spelling
- File names are case-sensitive
- Use relative paths from root: `products.html`
- Check navigation menu links

### Problem: Styles Not Applying
**Solution:**
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check CSS file path in HTML head
- Verify `<link>` tag syntax

### Problem: Mobile Menu Not Working
**Solution:**
- Make sure you're below 768px width
- Check hamburger icon is visible
- Try refreshing page
- Clear browser cache

---

## 📦 Deployment Checklist

### Before Going Live

#### Content
- [ ] Update company information (name, address, phone, email)
- [ ] Add your real images (replace Unsplash placeholders)
- [ ] Update job listings if applicable
- [ ] Update contact information
- [ ] Verify all text is accurate

#### Technical
- [ ] Test all links working
- [ ] Test all forms (contact, career)
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check no console errors (F12)
- [ ] Verify images load properly

#### Performance
- [ ] Compress images (< 100KB each)
- [ ] Test page load speed
- [ ] Check animations are smooth
- [ ] Verify all CDN links working

#### SEO (Search Engine Optimization)
- [ ] Add proper page titles
- [ ] Add meta descriptions
- [ ] Update keywords
- [ ] Add sitemap (optional)
- [ ] Submit to Google Search Console

### Upload to Server
```bash
1. Get FTP/SFTP credentials dari hosting provider
2. Use FTP client (FileZilla, WinSCP, dll)
3. Connect ke server
4. Upload semua files ke public_html or www folder
5. Set permissions: 644 for files, 755 for directories
6. Test di browser dengan domain Anda
```

---

## 💡 Pro Tips

### Tip 1: Backup Files
```bash
# Always backup sebelum edit
cp -r oro-plastindo-website oro-plastindo-website-backup
```

### Tip 2: Use Code Editor
Download free code editors:
- VS Code (Windows/Mac/Linux)
- Sublime Text
- Atom
- Notepad++

**Keuntungan:**
- Syntax highlighting
- Find & replace
- Multi-file editing
- Version control integration

### Tip 3: Local Server Benefits
```bash
# Instead of opening .html directly:
python -m http.server 8000

# Benefits:
- Proper CORS headers
- Relative paths work correctly
- HTTPS testing possible
- More realistic environment
```

### Tip 4: Browser Developer Tools
```
Shortcuts:
- F12 atau Ctrl+Shift+I    : Buka DevTools
- Ctrl+Shift+M             : Toggle device mode (mobile)
- Ctrl+Shift+C             : Inspect element
- Ctrl+Shift+K             : Console
```

---

## 📞 Getting Help

### If Something Breaks
1. Check browser console (F12)
2. Look for error messages
3. Verify file paths are correct
4. Check HTML syntax (< > proper)
5. Clear cache dan refresh (Ctrl+F5)

### Resources
- [Bootstrap Docs](https://getbootstrap.com/docs)
- [CSS-Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Stack Overflow](https://stackoverflow.com/)

---

## ✅ Next Steps

1. **Explore:** Buka semua halaman, klik buttons, test forms
2. **Customize:** Update company info, images, colors
3. **Test:** Test di desktop, tablet, mobile
4. **Deploy:** Upload ke server hosting
5. **Monitor:** Check analytics, user feedback

---

## 📚 More Information

Untuk dokumentasi lengkap, see:
- **README.md** - English version (detailed)
- **DOKUMENTASI_ID.md** - Full Indonesian docs
- **COMPLETION_REPORT.md** - Project completion details

---

**Website Oro Plastindo Anda siap untuk digunakan!** 🎉

Semoga sukses! 🚀

---

*Quick Start Guide v1.0 - October 2, 2026*
