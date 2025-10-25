// src/pages/ReaderPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { comics } from "../data";

function ReaderPage() {
  // 1. Kita butuh KEDUA parameter dari URL
  const { id, chapterId } = useParams();

  // 2. Cari komiknya terlebih dahulu
  const comic = comics.find((c) => c.id === id);

  // 3. Jika komik ada, cari chapternya di dalam data komik tersebut
  // Kita gunakan 'optional chaining' (?.) untuk menghindari error jika 'comic' tidak ada
  const chapter = comic?.chapters.find((ch) => ch.id === chapterId);

  // 4. Tampilkan pesan error jika komik atau chapter tidak ditemukan
  if (!chapter) {
    return (
      <div>
        <h2>Chapter tidak ditemukan!</h2>
        <Link to={`/comic/${id}`}>Kembali ke Detail Komik</Link>
      </div>
    );
  }

  // 5. Jika chapter ditemukan, tampilkan semua gambar di dalamnya
  return (
    <div>
      {/* Navigasi kembali ke detail komik */}
      <Link to={`/comic/${id}`}>&larr; Kembali ke Detail Komik</Link>
      
      <h2>{comic.title} - {chapter.title}</h2>
      <p>Scroll ke bawah untuk membaca</p>
      
      {/* Area pembaca, gambar akan disusun vertikal */}
      <div className="reader-area">
        {chapter.images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Halaman ${index + 1}`}
            className="comic-page"
          />
        ))}
      </div>

      <hr />
      <Link to={`/comic/${id}`}>&larr; Selesai Membaca (Kembali ke Detail)</Link>
    </div>
  );
}

export default ReaderPage;