# 🛠️ PANDUAN TEKNIS WEBSITE NAZU GROUP

## 📂 STRUKTUR FOLDER

```
/app/
├── frontend/                    # Aplikasi React
│   ├── src/
│   │   ├── components/         # Komponen React
│   │   │   ├── Header.jsx      # Navigasi atas
│   │   │   ├── Hero.jsx        # Section hero
│   │   │   ├── About.jsx       # Visi & Misi
│   │   │   ├── Services.jsx    # 4 Unit Bisnis
│   │   │   ├── CoreValues.jsx  # Nilai Utama
│   │   │   ├── WhyChooseUs.jsx # Keunggulan
│   │   │   ├── Academy.jsx     # NAZU Academy
│   │   │   ├── Contact.jsx     # Form kontak
│   │   │   ├── Footer.jsx      # Footer
│   │   │   └── ui/            # Komponen Shadcn UI
│   │   ├── data/
│   │   │   └── mock.js        # ⭐ FILE KONTEN UTAMA
│   │   ├── App.js             # Main app
│   │   ├── App.css            # Styling global
│   │   └── index.css          # Tailwind & base styles
│   ├── package.json           # Dependencies
│   └── .env                   # Environment variables
├── backend/                   # FastAPI (untuk fitur future)
└── PANDUAN_EDIT_KONTEN.md    # Panduan edit konten
```

---

## 🎨 TEKNOLOGI YANG DIGUNAKAN

### Frontend
- **React 19** - Framework JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Komponen UI modern
- **Lucide React** - Icon library
- **React Router DOM** - Routing (untuk ekspansi future)

### Styling
- **Warna Brand:**
  - Primary: Cyan (#06B6D4)
  - Dark Background: Slate 900 (#0F172A)
  - Accent: Cyan 400-500
  
### Performance
- Hot reload enabled (perubahan otomatis terlihat)
- Smooth scroll behavior
- Optimized animations
- Responsive design (mobile, tablet, desktop)

---

## 🔧 COMMAND PENTING

### Melihat Status Server
```bash
sudo supervisorctl status
```

### Restart Frontend
```bash
sudo supervisorctl restart frontend
```

### Restart Backend
```bash
sudo supervisorctl restart backend
```

### Restart Semua
```bash
sudo supervisorctl restart all
```

### Cek Log Frontend
```bash
tail -f /var/log/supervisor/frontend.out.log
```

### Cek Log Error Frontend
```bash
tail -f /var/log/supervisor/frontend.err.log
```

---

## 📦 MENAMBAH DEPENDENCIES

### Frontend (React)
```bash
cd /app/frontend
yarn add nama-package
```

### Backend (Python)
```bash
cd /app/backend
pip install nama-package
pip freeze > requirements.txt
```

**⚠️ PENTING:** Setelah install dependencies, restart server!

---

## 🎯 FITUR SAAT INI

### ✅ Sudah Tersedia
- [x] Landing page responsive
- [x] Smooth scroll navigation
- [x] Form kontak (frontend only - simulasi)
- [x] Mobile-friendly design
- [x] Hover animations
- [x] Section-by-section layout
- [x] Logo branding terintegrasi
- [x] Social media links

### 🔄 Perlu Integrasi Backend (Future)
- [ ] Form kontak real (kirim email)
- [ ] Database untuk menyimpan inquiries
- [ ] Admin panel untuk manage konten
- [ ] Blog section
- [ ] Gallery untuk portfolio/projects
- [ ] Halaman karir
- [ ] Multi-language support

---

## 🚀 DEPLOYMENT

Website saat ini berjalan di development mode di:
```
https://natuna-catalyst.preview.emergentagent.com/
```

### Untuk Production Build:
```bash
cd /app/frontend
yarn build
```

Ini akan membuat folder `build/` dengan file optimized untuk production.

---

## 🎨 CUSTOMIZATION LANJUTAN

### Mengubah Warna Brand

Edit file: `/app/frontend/src/index.css`

Cari section `@layer base` dan ubah nilai warna:
```css
:root {
  --primary: 0 0% 9%;           /* Warna primary */
  --secondary: 0 0% 96.1%;      /* Warna secondary */
  /* ... nilai lainnya */
}
```

### Menambah Section Baru

1. Buat file component baru di `/app/frontend/src/components/`
2. Import di `/app/frontend/src/App.js`
3. Tambahkan navigation link di `/app/frontend/src/components/Header.jsx`

### Mengubah Font

Edit file: `/app/frontend/src/index.css`

Tambahkan Google Font atau font custom:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

---

## 📱 RESPONSIVE BREAKPOINTS

Website menggunakan Tailwind breakpoints:
- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablet)
- `lg:` - 1024px and up (laptop)
- `xl:` - 1280px and up (desktop)
- `2xl:` - 1536px and up (large desktop)

---

## 🔍 SEO & META TAGS

Edit file: `/app/frontend/public/index.html`

Tambahkan meta tags untuk SEO:
```html
<head>
  <title>NAZU Group - Transformasi Ekonomi Natuna</title>
  <meta name="description" content="NAZU Group adalah katalisator..." />
  <meta name="keywords" content="IT Solutions Natuna, Finance Natuna, ..." />
  <meta property="og:title" content="NAZU Group" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="URL_GAMBAR_PREVIEW" />
</head>
```

---

## 🐛 DEBUGGING

### Website Blank/Tidak Muncul
1. Cek browser console (F12) untuk error
2. Cek log: `tail -f /var/log/supervisor/frontend.err.log`
3. Pastikan server running: `sudo supervisorctl status frontend`

### Perubahan Tidak Terlihat
1. Hard refresh browser: `Ctrl + Shift + R` (Windows) atau `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Restart frontend: `sudo supervisorctl restart frontend`

### Styling Tidak Sesuai
1. Cek Tailwind classes spelling
2. Pastikan class dalam format yang benar
3. Lihat browser DevTools untuk inspect element

---

## 📊 PERFORMANCE OPTIMIZATION

### Tips untuk Website Cepat:
1. **Compress images** - gunakan format WebP
2. **Lazy loading** - untuk gambar yang banyak
3. **Minify CSS/JS** - otomatis saat build production
4. **CDN** - untuk static assets

### Current Performance:
- ✅ Hot reload enabled (development)
- ✅ CSS in JS dengan Tailwind
- ✅ Component-based architecture
- ✅ Smooth animations (60fps)

---

## 🔐 SECURITY BEST PRACTICES

### Environment Variables
- Jangan expose API keys di frontend
- Gunakan `.env` untuk sensitive data
- Backend akan handle API calls

### Form Security (Future)
- Rate limiting untuk form submission
- CSRF protection
- Input validation & sanitization

---

## 📋 MAINTENANCE CHECKLIST

### Bulanan:
- [ ] Update dependencies: `yarn upgrade`
- [ ] Check for security vulnerabilities: `yarn audit`
- [ ] Review and update konten
- [ ] Check broken links
- [ ] Test contact form

### Triwulanan:
- [ ] Performance audit
- [ ] SEO review
- [ ] Backup full code
- [ ] Review analytics (jika ada)

---

## 🆘 KONTAK DEVELOPER

Untuk bantuan teknis atau customization lebih lanjut:

**Yang perlu disiapkan saat kontak:**
1. Screenshot error (jika ada)
2. Deskripsi masalah
3. Langkah yang sudah dicoba
4. Log error (jika ada)

---

## 📚 RESOURCES

### Dokumentasi
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

### Tools
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging
- [React DevTools](https://react.dev/learn/react-developer-tools) - React debugging

---

## 🎯 ROADMAP DEVELOPMENT

### Phase 1 - Current (✅ Done)
- Landing page design & development
- Responsive layout
- All sections implemented
- Brand integration

### Phase 2 - Near Future
- Backend integration (form submissions)
- Email notification system
- Admin panel untuk edit konten via UI
- Blog/news section
- Image gallery untuk projects

### Phase 3 - Advanced
- Multi-language (Bahasa & English)
- CMS integration
- Analytics dashboard
- Client portal
- Online consultation booking

---

**Website ini dibangun dengan arsitektur yang scalable dan maintainable untuk pertumbuhan jangka panjang NAZU Group.**
