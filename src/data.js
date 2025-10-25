// src/data.js

export const comics = [
  // 1.
  {
    id: "solo-leveling",
    title: "Solo Leveling",
    author: "Chugong",
    // --- URL DIPERBAIKI ---
    cover: "https://upload.wikimedia.org/wikipedia/id/9/99/Solo_Leveling_Webtoon.png",
    synopsis: "Kisah hunter terlemah di dunia, Sung Jin-Woo, yang mendapatkan kesempatan kedua melalui 'System' misterius.",
    chapters: [
      {
        id: "ch-1",
        title: "Chapter 1",
        images: [
          "https://images.tokopedia.net/img/cache/700/product-1/2020/7/2/8660143/8660143_47614d64-e696-411a-93f9-7e501d6741b6_728_1040.jpg",
          "https://images.tokopedia.net/img/cache/700/product-1/2020/7/2/8660143/8660143_10e3093c-2797-4089-89a9-e26b177d61b3_728_1040.jpg",
        ],
      },
      { id: "ch-2", title: "Chapter 2", images: [] },
    ],
    rating: 9.8,
    tags: ["Warna", "Action", "Fantasy", "Manhwa"],
  },
  // 2.
  {
    id: "one-piece",
    title: "One Piece",
    author: "Eiichiro Oda",
    // --- URL INI SUDAH BENAR (WIKIMEDIA) ---
    cover: "https://upload.wikimedia.org/wikipedia/id/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
    synopsis: "Petualangan Monkey D. Luffy dan krunya mencari harta karun legendaris, One Piece, untuk menjadi Raja Bajak Laut.",
    chapters: [
      { id: "ch-1000", title: "Chapter 1000", images: [] },
    ],
    rating: 9.5,
    tags: ["Adventure", "Fantasy", "Manga"],
  },
  // 3. 
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    // --- URL DIPERBAIKI ---
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_OCPpEGp_MnMkEOdodONMSffsljp1IJQlw&s",
    synopsis: "Yuji Itadori, seorang siswa SMA dengan kekuatan fisik luar biasa, menelan jari terkutuk untuk menyelamatkan temannya...",
    chapters: [],
    rating: 9.2,
    tags: ["Action", "Supernatural", "Dark Fantasy", "Manga"],
  },
  // 4.
  {
    id: "spy-x-family",
    title: "Spy x Family",
    author: "Tatsuya Endo",
    // --- URL DIPERBAIKI ---
    cover: "https://m.media-amazon.com/images/M/MV5BZDkwNjc0NWEtNzJlOC00N2YwLTk4MjktZGFlZDE2Y2QzOWI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    synopsis: "Seorang mata-mata, seorang pembunuh bayaran, dan seorang telepat hidup bersama sebagai keluarga palsu...",
    chapters: [],
    rating: 9.0,
    tags: ["Action", "Comedy", "Slice of Life", "Manga"],
  },
  // 5.
  {
    id: "tower-of-god",
    title: "Tower of God",
    author: "S.I.U",
    // --- URL INI SUDAH BENAR (WIKIMEDIA) ---
    cover: "https://upload.wikimedia.org/wikipedia/id/7/7d/Tower_of_God_Volume_1_Cover.jpg",
    synopsis: "Seorang anak laki-laki bernama Bam, yang seumur hidupnya hanya mengenal seorang gadis, Rachel, mengikutinya masuk ke Menara misterius...",
    chapters: [],
    rating: 9.4,
    tags: ["Warna", "Fantasy", "Action", "Manhwa"],
  },
  // 6.
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    author: "Hajime Isayama",
    // --- URL INI SUDAH BENAR (WIKIMEDIA) ---
    cover: "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg",
    synopsis: "Di dunia di mana umat manusia hidup di dalam kota-kota yang dikelilingi oleh tembok besar sebagai pelindung dari Titan...",
    chapters: [],
    rating: 9.6,
    tags: ["Action", "Dark Fantasy", "Post-apocalyptic", "Manga"],
  },
  // 7.
  {
    id: "tbate",
    title: "The Beginning After The End",
    author: "TurtleMe",
    // --- URL DIPERBAIKI ---
    cover: "https://us-a.tapas.io/sa/f7/16e8def2-901b-45ea-8d86-2aa4b05cc86b_z.jpg",
    synopsis: "Raja Grey memiliki kekuatan, kekayaan, dan martabat yang tak tertandingi di dunia yang diatur oleh kemampuan bela diri. Namun...",
    chapters: [],
    rating: 9.7,
    tags: ["Warna", "Isekai", "Fantasy", "Action"],
  },
  // 8.
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    // --- URL INI SUDAH BENAR (WIKIMEDIA) ---
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50_HlvmdXh6J7hTQlV5tjoUJ4UdaSRdV4ww&s",
    synopsis: "Denji memiliki mimpi sederhana—hidup bahagia dan damai. Namun, ia terpaksa membunuh iblis untuk Yakuza...",
    chapters: [],
    rating: 9.1,
    tags: ["Action", "Dark Fantasy", "Supernatural", "Manga"],
  },
  // 9.
  {
    id: "omniscient-reader",
    title: "Omniscient Reader's Viewpoint",
    author: "SingShong",
    // --- URL DIPERBAIKI ---
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Yz3PW5dvya4G8K1AfkM54jPvh6ejKViYrw&s",
    synopsis: "Suatu hari, protagonis kita Kim Dokja mendapati dirinya terjebak dalam adegan novel web favoritnya...",
    chapters: [],
    rating: 9.9,
    tags: ["Warna", "Action", "Fantasy", "Apocalypse", "Manhwa"],
  },
  // 10.
  {
    id: "my-hero-academia",
    title: "My Hero Academia",
    author: "Kohei Horikoshi",
    // --- URL INI SUDAH BENAR (WIKIMEDIA) ---
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMqgP3Nb10RARZH8oqCcpEZTfht7RUg9weQ&s",
    synopsis: "Izuku Midoriya, seorang anak laki-laki yang lahir tanpa kekuatan super (Quirks) di dunia di mana hal itu biasa...",
    chapters: [],
    rating: 8.8,
    tags: ["Superhero", "Action", "Comedy", "Manga"],
  },
];