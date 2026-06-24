// Reveal Animations
  document.addEventListener("DOMContentLoaded", function() {
    // Pengaturan deteksi: elemen akan memicu animasi saat 15% bagiannya sudah terlihat di layar
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Tambahkan class is-visible untuk memicu CSS
          entry.target.classList.add("is-visible");
          
          // Hentikan observasi setelah animasi berjalan sekali agar tidak berulang-ulang mengganggu mata
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Cari semua elemen yang memiliki class reveal atau stagger-group
    const revealElements = document.querySelectorAll(".reveal, .stagger-group");
    revealElements.forEach(el => observer.observe(el));
  });

  // CInematic Reveal Animations
  document.addEventListener("DOMContentLoaded", function() {
    // Pengaturan deteksi: elemen akan memicu animasi saat 15% bagiannya sudah terlihat di layar
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Tambahkan class is-visible untuk memicu CSS
          entry.target.classList.add("is-visible");
          
          // Hentikan observasi setelah animasi berjalan sekali agar tidak berulang-ulang mengganggu mata
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Cari semua elemen yang memiliki class reveal atau stagger-group
    const revealElements = document.querySelectorAll(".cine-reveal, .cine-stagger-group");
    revealElements.forEach(el => observer.observe(el));
  });