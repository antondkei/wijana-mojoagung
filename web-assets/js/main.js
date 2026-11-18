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


/* =========================================
   TUITION LEVEL TABS
========================================= */


document.addEventListener("DOMContentLoaded", function () {
    const tuitionPage = document.querySelector(".tuition-page");
    if (!tuitionPage) return;

    const tabs = tuitionPage.querySelectorAll(".tuition-tab");
    const panels = tuitionPage.querySelectorAll(".tuition-tab-panel");

    function activateTab(selectedTab, moveFocus = false) {
        const targetLevel = selectedTab.dataset.level;

        tabs.forEach(tab => {
            const isActive = tab === selectedTab;

            tab.classList.toggle("is-active", isActive);
            tab.setAttribute("aria-selected", String(isActive));
            tab.setAttribute("tabindex", isActive ? "0" : "-1");
        });

        panels.forEach(panel => {
            const isActive = panel.id === `panel-${targetLevel}`;

            panel.hidden = !isActive;
            panel.classList.toggle("is-active", isActive);
        });

        if (moveFocus) selectedTab.focus();
    }

    function activateFromURL() {
        const level = window.location.hash.replace("#", "").toLowerCase();

        const selectedTab =
            tuitionPage.querySelector(`.tuition-tab[data-level="${level}"]`) ||
            tuitionPage.querySelector('.tuition-tab[data-level="sd"]');

        if (selectedTab) activateTab(selectedTab);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            activateTab(tab);

            const newURL = `#${tab.dataset.level}`;

            if (window.location.hash !== newURL) {
                history.pushState(null, "", newURL);
            }
        });

        tab.addEventListener("keydown", event => {
            let nextIndex = index;

            if (event.key === "ArrowRight") {
                nextIndex = (index + 1) % tabs.length;
            } else if (event.key === "ArrowLeft") {
                nextIndex = (index - 1 + tabs.length) % tabs.length;
            } else if (event.key === "Home") {
                nextIndex = 0;
            } else if (event.key === "End") {
                nextIndex = tabs.length - 1;
            } else {
                return;
            }

            event.preventDefault();
            activateTab(tabs[nextIndex], true);
        });
    });

    // Membaca jenjang dari URL saat halaman pertama kali dibuka
    activateFromURL();

    // Mendukung tombol Back dan Forward pada browser
    window.addEventListener("popstate", activateFromURL);
});

