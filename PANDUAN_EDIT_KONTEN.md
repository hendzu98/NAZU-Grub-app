# 📝 PANDUAN EDIT KONTEN WEBSITE NAZU GROUP

Website NAZU Group telah dibuat dengan struktur yang mudah untuk diedit. Semua konten yang perlu Anda ubah terpusat di satu file utama.

## 🎯 LOKASI FILE UTAMA

**File untuk edit semua konten:**
```
/app/frontend/src/data/mock.js
```

File ini berisi SEMUA data yang ditampilkan di website, termasuk:
- Informasi kontak
- Konten hero section
- Visi & Misi
- Unit bisnis
- Core values
- Program NAZU Academy
- Testimoni
- Dan lainnya

---

## 📋 PANDUAN EDIT PER SECTION

### 1. INFORMASI KONTAK & MEDIA SOSIAL
**Lokasi:** Baris 3-13 di `/app/frontend/src/data/mock.js`

```javascript
export const contactInfo = {
  phone: '+62 812-3456-7890',           // ← Ganti dengan nomor telepon asli
  email: 'info@nazugroup.com',          // ← Ganti dengan email asli
  address: 'Jl. Raya Natuna No. 123...', // ← Ganti dengan alamat lengkap
  socialMedia: {
    facebook: 'https://facebook.com/nazugroup',    // ← Link Facebook
    instagram: 'https://instagram.com/nazugroup',  // ← Link Instagram
    linkedin: 'https://linkedin.com/company/nazugroup', // ← Link LinkedIn
    whatsapp: 'https://wa.me/628123456789'        // ← Link WhatsApp
  }
};
```

**Yang perlu diubah:**
- ✅ Nomor telepon
- ✅ Email bisnis
- ✅ Alamat lengkap
- ✅ Link semua media sosial

---

### 2. HERO SECTION (Halaman Utama)
**Lokasi:** Baris 15-21 di `/app/frontend/src/data/mock.js`

```javascript
export const heroData = {
  title: 'Transformasi Ekonomi Natuna',
  subtitle: 'Melalui Teknologi, Manajemen...',
  description: 'NAZU Group adalah katalisator...',
  ctaText: 'Hubungi Kami',
  ctaSecondary: 'Pelajari Lebih Lanjut'
};
```

**Yang perlu diubah:**
- Judul utama (jika perlu)
- Subjudul
- Deskripsi singkat perusahaan
- Text tombol CTA

---

### 3. VISI & MISI
**Lokasi:** Baris 23-46 di `/app/frontend/src/data/mock.js`

Sudah sesuai dengan profil yang Anda berikan. Jika ada perubahan visi/misi di masa depan, edit di bagian ini.

---

### 4. UNIT BISNIS (4 Pilar)
**Lokasi:** Baris 48-103 di `/app/frontend/src/data/mock.js`

**Struktur setiap unit:**
```javascript
{
  id: 1,
  name: 'NAZU IT Solutions',
  shortDesc: 'Solusi Teknologi Informasi Terpadu',
  description: 'Infrastruktur Jaringan...',
  services: [
    'Instalasi & Maintenance Jaringan',
    // ... layanan lainnya
  ],
  icon: 'monitor'  // ← Jangan ubah ini (icon otomatis)
}
```

**Yang perlu diubah:**
- ✅ Nama unit bisnis
- ✅ Deskripsi singkat
- ✅ Deskripsi lengkap
- ✅ Daftar layanan (tambah/kurangi sesuai kebutuhan)

---

### 5. CORE VALUES
**Lokasi:** Baris 105-136 di `/app/frontend/src/data/mock.js`

Sudah sesuai dengan profil (Integritas, Sinergi, Edukasi, Keunggulan). Edit jika ada perubahan nilai perusahaan.

---

### 6. NAZU ACADEMY
**Lokasi:** Baris 138-166 di `/app/frontend/src/data/mock.js`

```javascript
export const nazuAcademy = {
  title: 'NAZU Academy',
  subtitle: 'Program CSR - Bimbingan Belajar Gratis',
  description: '...',
  programs: [
    {
      name: 'Pelatihan Akuntansi',
      description: '...',
      duration: '3 Bulan'  // ← Edit durasi jika berubah
    },
    // ... program lainnya
  ],
  stats: [
    { label: 'Siswa Terlatih', value: '150+' },  // ← Update statistik real
    { label: 'Program Aktif', value: '3' },
    { label: 'Tahun Berjalan', value: '2+' }
  ]
};
```

**Yang perlu diubah:**
- ✅ Statistik aktual (jumlah siswa, program, tahun)
- ✅ Durasi program
- ✅ Deskripsi program (jika ada update)

---

### 7. TESTIMONI
**Lokasi:** Baris 168-193 di `/app/frontend/src/data/mock.js`

```javascript
export const testimonials = [
  {
    id: 1,
    name: 'Bapak Ahmad Yani',           // ← Ganti nama asli
    position: 'Kepala Desa Ranai',     // ← Ganti posisi
    text: 'NAZU IT Solutions sangat...',  // ← Ganti testimoni asli
    rating: 5
  },
  // ... testimoni lainnya
];
```

**⚠️ PENTING:** Ganti SEMUA testimoni dengan testimoni asli dari klien Anda!

---

### 8. WHY CHOOSE US
**Lokasi:** Baris 195-220 di `/app/frontend/src/data/mock.js`

Bagian ini menjelaskan keunggulan NAZU Group. Sudah sesuai dengan profil Anda, tapi bisa diedit jika ada keunggulan tambahan.

---

## 🎨 CARA MENGUBAH LOGO

Logo sudah digunakan di website. Jika Anda ingin mengubah logo di masa depan:

**File yang perlu diedit:**
1. `/app/frontend/src/components/Header.jsx` - Line 37
2. `/app/frontend/src/components/Footer.jsx` - Line 21

**Cara:**
- Upload logo baru ke hosting
- Ganti URL logo di kedua file tersebut

---

## 🚀 CARA MELIHAT PERUBAHAN

Setelah mengedit `/app/frontend/src/data/mock.js`:

1. **Simpan file**
2. **Website akan auto-reload** (hot reload aktif)
3. **Refresh browser** jika perubahan tidak langsung terlihat

---

## ⚡ TIPS EDIT

### DO ✅
- Simpan backup file sebelum edit besar-besaran
- Edit satu section, cek hasilnya, baru lanjut ke section berikutnya
- Perhatikan format JavaScript (tanda koma, petik, kurung)
- Gunakan text editor seperti VS Code untuk menghindari error

### DON'T ❌
- Jangan hapus tanda koma, kurung kurawal, atau bracket
- Jangan ubah nama variabel (misalnya: `contactInfo`, `heroData`)
- Jangan ubah nilai `icon` di business units
- Jangan hapus struktur object

---

## 🆘 TROUBLESHOOTING

### Jika Website Error Setelah Edit:

1. **Cek syntax JavaScript** - pastikan tidak ada kurung/koma yang hilang
2. **Lihat console browser** (F12) untuk melihat error message
3. **Revert ke backup** jika error tidak bisa diperbaiki
4. **Restart server** dengan command: `sudo supervisorctl restart frontend`

---

## 📞 BANTUAN LEBIH LANJUT

Jika Anda kesulitan mengedit atau ada yang ingin ditambahkan:
1. Screenshot bagian yang ingin diubah
2. Jelaskan perubahan yang diinginkan
3. Hubungi developer

---

## 📌 CHECKLIST EDIT AWAL

Sebelum launching website, pastikan sudah mengedit:

- [ ] Nomor telepon
- [ ] Email
- [ ] Alamat lengkap
- [ ] Link media sosial (Facebook, Instagram, LinkedIn, WhatsApp)
- [ ] Testimoni klien (ganti dengan testimoni asli)
- [ ] Statistik NAZU Academy (jumlah siswa aktual, dll)
- [ ] Foto/konten tambahan (jika ada)

---

**Semua data saat ini adalah PLACEHOLDER yang siap untuk diganti dengan data asli Anda.**
