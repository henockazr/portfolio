/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // 1. Inisialisasi Locomotive Scroll seperti biasa
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.5, // Sesuai settingan kamu
    });

    // 2. TAMBAHAN PENTING: ResizeObserver
    // Ini akan memantau perubahan ukuran pada container (scrollRef.current)
    const resizeObserver = new ResizeObserver(() => {
      // Setiap kali ada perubahan ukuran (karena animasi teks selesai atau gambar muncul)
      // Kita suruh Locomotive Scroll hitung ulang
      scroll.update();
    });

    // Mulai memantau elemen container
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    // 3. Cleanup function
    return () => {
      // Matikan observer saat pindah halaman agar tidak memory leak
      resizeObserver.disconnect();

      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
