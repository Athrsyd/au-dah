/**
 * ============================================================
 *  DATA.JS — Grand Line Initiative Campaign Site
 *  Edit semua konten di sini. Tidak perlu menyentuh index.html.
 * ============================================================
 */

const SITE_DATA = {

  // ----------------------------------------------------------
  // NAVIGASI
  // ----------------------------------------------------------
  nav: {
    brandName: "pilih #3",       // Nama organisasi / tim kampanye
    links: [
      { label: "HOME", href: "#hero" },
      { label: "Rencana", href: "#misi" },
      { label: "Kandidat", href: "#prestasi" },
      { label: "PROGRAM", href: "#program" },
    ],
    ctaLabel: "GABUNG BERSAMA KAMI",
    ctaHref: "https://chat.whatsapp.com/DrnoSwFa88w7KNDNaahTN9?s=sw&p=a&mlu=4",
  },

  // ----------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------
  hero: {
    eyebrow: "pilih #3",               // Label di atas judul besar
    headlinePart1: "Beriman dalam prinsip, berani dalam tindakan,",
    headlinePart2: "bertanggung jawab dalam perubahan.",            // Bagian headline berwarna merah
    candidateName: "Dafa Khasyi Zhafar | XI TITL 1",     // Nama kandidat
    tagline: "Siap merombak OSIS? Gabung bersama kami dan mari berlayar menuju akademi yang lebih seru dan baik. Pengecut dilarang ikut. Hadiri pemilihannya, pilih #3 dan buktikan bahwa kita bisa membuat perubahan yang positif di sekolah.",
    cta: {
      primary: { label: "PILIH daffa", href: "https://chat.whatsapp.com/DrnoSwFa88w7KNDNaahTN9?s=sw&p=a&mlu=4" },
      secondary: { label: "Siapa dia?", href: "#prestasi" },
    },
    wantedPoster: {
      label: "DICARI",               // Teks di header poster
      imageSrc: "./image.png",                     // ← Isi dengan path foto kandidat, contoh: "./foto.jpg"
      imageAlt: "Foto Kandidat",
      rewardLabel: "HADIAH",
      rewardValue: "3,000,000,000",       // Angka "bounty" — boleh simbol, teks, dll.
    },
  },

  // ----------------------------------------------------------
  // VISI & MISI
  // ----------------------------------------------------------
  visiMisi: {
    sectionTitle: "RENCANA BESAR KAMI",
    visi: "\"Mewujudkan SMKN 26 Jakarta sebagai wadah ruang inovatif untuk mengembangkan potensi, menyuarakan aspirasi, serta membangun kolaborasi yang aktif dan berkelanjutan guna menciptakan lingkungan sekolah yang positif untuk kemajuan bersama.\"",
    misi: [
      {
        nomor: "1",
        judul: "Tingkatkan Iman & Taqwa",
        deskripsi: "Meningkatkan keimanan dan ketakwaan kepada Tuhan Yang Maha Esa serta menjunjung tinggi toleransi dan nilai-nilai Pancasila di SMK NEGERI 26 JAKARTA.",
        tag: "#IMTAQ | MISI 1",
        variant: "surface",              // "surface" | "secondary" | "primary"
      },
      {
        nomor: "2",
        judul: "RUANG ASPIRASI",
        deskripsi: "Menyediakan ruang penyampaian aspirasi siswa-siswi serta menindaklanjutinya melalui program kerja OSIS yang tepat dan bertanggung jawab.",
        tag: "#aspirasi | MISI 2",
        variant: "secondary",
      },
      {
        nomor: "3",
        judul: "menggali potensi siswa",
        deskripsi: "Menjadi wadah untuk mendukung potensi dan prestasi siswa siswi melalui kegiatan Akademik maupun Non akademik.",
        tag: "#potensi | MISI 3",
        variant: "surface",
      },
      {
        nomor: "4",
        judul: "Meningkatkan kedisiplinan & kebersihan",
        deskripsi: "Meningkatkan kedispilinan serta memperketat budaya kebersihan sekolah dengan membangun kesadaran siswa untuk menjaga lingkungan secara konsisten.",
        tag: "#kedisiplinan | MISI 4",
        variant: "surface",
      },
      {
        nomor: "5",
        judul: "sekolah yang nyaman, aman, positif, dan harmonis",
        deskripsi: "Menciptakan suasana sekolah yang nyaman, aman, positif, dan harmonis agar setiap siswa dapat belajar, berkembang, dan mempersiapkan diri menghadapi dunia industri",
        tag: "#harmonis | MISI 5",
        variant: "secondary",
      },

    ],
  },

  // ----------------------------------------------------------
  // PROFIL KANDIDAT
  // ----------------------------------------------------------
  kandidat: {
    sectionTitle: "MENGENAL SANG KAPTEN",
    bio: "Nama saya Dafa Khasyi Zhafar. Saya adalah siswa SMKN 26 Jakarta yang saat ini duduk di kelas XI TITL 1. Saya merupakan pribadi yang bertanggung jawab, berani mencoba hal baru, dan senang bekerja sama dengan orang lain. Saya juga memiliki hobi bermain futsal, karena dari futsal saya belajar tentang kerja sama tim, komunikasi, kedisiplinan, dan sportivitas. Selain itu, saya terus berusaha mengembangkan kemampuan diri, baik dalam bidang akademik maupun nonakademik.",
    bio2: "Sebagai seorang pelajar, saya ingin menjadi pribadi yang lebih baik dan memberikan dampak positif bagi lingkungan sekitar. Saya percaya bahwa kerja sama, komunikasi, dan tanggung jawab merupakan hal penting untuk mencapai tujuan bersama. Saya juga ingin terus belajar dari pengalaman, menerima kritik dan saran, serta berani mengambil langkah untuk mewujudkan perubahan yang positif di sekolah."
  },

  // ----------------------------------------------------------
  // TIMELINE ORGANISASI
  // ----------------------------------------------------------
  timeline: {
    sectionTitle: "Rekam jejak organisasi",
    items: [
      {
        tahun: "2026 - 2027",
        judul: "OSIS SMKN 26 JAKARTA",
        deskripsi: "Saya telah menjadi anggota OSIS SMKN 26 Jakarta selama satu tahun, di mana saya aktif berpartisipasi dalam berbagai kegiatan dan program yang diselenggarakan oleh organisasi ini. Pengalaman ini telah memberikan saya wawasan yang berharga tentang kepemimpinan, kerja sama tim, dan tanggung jawab.",
        rotate: "rotate-2",
        variant: "secondary",
      },
    ],
  },

  // ----------------------------------------------------------
  // PROGRAM UNGGULAN
  // ----------------------------------------------------------
  program: {
    sectionTitle: "PROGRAM UNGGULAN",
    items: [
      {
        icon: "group",
        inisial: "S",
        judul: "26 COLLAB/CONNECT",
        deskripsi: "kolaborasi antara OSIS, ekstrakurikuler, jurusan, dan organisasi siswa dalam membuat kegiatan bersama.",
        variant: "surface",
      },
      {
        icon: "lightbulb",
        inisial: "A",
        judul: "26 PROJECT",
        deskripsi: "proyek kolaboratif antarkelas, jurusan, atau ekskul untuk menghasilkan karya atau kegiatan yang bermanfaat bagi sekolah",
        variant: "secondary",
      },
      {
        icon: "forum",
        inisial: "P",
        judul: "26 ASPIRASI",
        deskripsi: "wadah penyampaian aspirasi siswa yang tidak hanya menampung, tetapi juga memberikan tindak lanjut yang jelas.",
        variant: "surface",
      },
    ],
  },

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faq: {
    sectionTitle: "TANYA JAWAB (FAQ)",
    items: [
      {
        pertanyaan: "1. Apa yang ingin kamu bawa jika terpilih menjadi Ketua OSIS?",
        jawaban: "Jika saya terpilih, saya ingin membawa budaya kolaborasi dan keterbukaan di lingkungan sekolah. Saya ingin OSIS tidak hanya menjadi pelaksana kegiatan, tetapi juga menjadi penghubung antara siswa, ekstrakurikuler, organisasi, dan pihak sekolah agar setiap pihak dapat ikut berkontribusi dan berkembang bersama.",
      },
      {
        pertanyaan: "2. Apa program unggulan yang kamu tawarkan?",
        jawaban: "Program unggulan saya adalah kolaborasi, yaitu membangun kerja sama antara OSIS, ekstrakurikuler, organisasi, jurusan, dan siswa. Bentuknya dapat berupa kegiatan bersama, proyek antarekskul atau jurusan, serta kegiatan yang memberikan kesempatan bagi siswa untuk menunjukkan kemampuan dan kreativitasnya.",
      },
      {
        pertanyaan: "3.  Apa yang membuat kamu layak menjadi Ketua OSIS?",
        jawaban: "Saya tidak ingin mengatakan bahwa saya yang paling hebat atau paling mampu. Namun, saya siap belajar, bertanggung jawab, menerima kritik, dan bekerja bersama orang lain. Saya ingin membuktikan bahwa seorang pemimpin  bukan hanya soal jabatan, tetapi tentang bagaimana kita mampu membawa perubahan melalui kerja sama dan berdampak.",
      },
    ],
  },

  // ----------------------------------------------------------
  // CALL TO ACTION / KONTAK
  // ----------------------------------------------------------
  kontak: {
    headline: "AYO BERGABUNG SEKARANG",
    subtext: "Kapal akan segera meninggalkan pelabuhan. Apakah kamu ikut naik atau tertinggal?.",
    socialLinks: [
      // { icon: "forum", label: "WHATSAPP", href: "https://chat.whatsapp.com/DrnoSwFa88w7KNDNaahTN9?s=sw&p=a&mlu=4" },
    ],
    ctaCard: {
      logoSrc: "./image1.png",                     // ← Isi dengan path logo tim, contoh: "./logo.png"
      logoAlt: "Logo Tim Kampanye",
      ctaLabel: "GABUNG BERSAMA KAMI",
      ctaHref: "https://chat.whatsapp.com/DrnoSwFa88w7KNDNaahTN9?s=sw&p=a&mlu=4",
    },
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    brandName: "pilih #03",
    copyright: "© 2026 tim pemenangan daffa khasyi zhafar. ",
  },

};
