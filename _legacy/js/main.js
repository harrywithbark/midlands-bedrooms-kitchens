// --- Gallery filter tabs ---
  (function () {
    var tabs = document.querySelectorAll('.filter-tab');
    var grid = document.getElementById('galleryGrid');
    var galleryCount = document.getElementById('galleryCount');
    var gallerySort = document.getElementById('gallerySort');

    function updateGalleryCount() {
      if (!grid || !galleryCount) return;
      var visible = grid.querySelectorAll('figure:not(.hidden)');
      var strong = galleryCount.querySelector('strong');
      if (strong) strong.textContent = String(visible.length);
    }

    if (tabs.length && grid) {
      var figures = grid.querySelectorAll('figure');

      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) {
            t.classList.remove('active');
            t.setAttribute('aria-pressed', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-pressed', 'true');

          var filter = tab.getAttribute('data-filter');
          figures.forEach(function (fig) {
            var show = filter === 'all' || fig.getAttribute('data-category') === filter;
            fig.classList.toggle('hidden', !show);
          });
          updateGalleryCount();
        });
      });
      updateGalleryCount();
    }

    if (gallerySort && grid) {
      gallerySort.addEventListener('change', function () {
        var figs = Array.prototype.slice.call(grid.querySelectorAll('figure'));
        if (gallerySort.value === 'az') {
          figs.sort(function (a, b) {
            var nameA = a.getAttribute('data-name') || (a.querySelector('figcaption') && a.querySelector('figcaption').textContent) || '';
            var nameB = b.getAttribute('data-name') || (b.querySelector('figcaption') && b.querySelector('figcaption').textContent) || '';
            return nameA.localeCompare(nameB);
          });
        }
        figs.forEach(function (f) { grid.appendChild(f); });
      });
    }
  })();

// Catalog filters, column toggles, sort, counts
  function initCatalog(layout) {
    var grid = layout.querySelector('.catalog-grid, .swatch-grid');
    if (!grid) return;
    var cards = grid.querySelectorAll('.product-card, .swatch-card');
    var cats = layout.querySelectorAll('.catalog-cat');
    var countEl = layout.querySelector('.catalog-count');
    var sortSelect = layout.querySelector('.catalog-sort-select');
    var colBtns = layout.querySelectorAll('.col-btn');

    function visibleCards() {
      return Array.prototype.filter.call(cards, function (c) { return !c.classList.contains('hidden'); });
    }

    function updateCount() {
      if (!countEl) return;
      var n = visibleCards().length;
      countEl.innerHTML = countEl.textContent.indexOf('Showing') === 0
        ? 'Showing <strong>' + n + '</strong> ' + (countEl.dataset.suffix || 'items')
        : countEl.innerHTML;
      var strong = countEl.querySelector('strong');
      if (strong) strong.textContent = String(n);
    }

    function applyFilter(filter) {
      cards.forEach(function (card) {
        var cat = card.getAttribute('data-category');
        var show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !show);
      });
      updateCount();
    }

    cats.forEach(function (btn) {
      btn.addEventListener('click', function () {
        cats.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        applyFilter(btn.getAttribute('data-filter'));
      });
    });

    if (sortSelect && grid.classList.contains('catalog-grid')) {
      sortSelect.addEventListener('change', function () {
        var items = Array.prototype.slice.call(cards);
        items.sort(function (a, b) {
          return (a.getAttribute('data-name') || '').localeCompare(b.getAttribute('data-name') || '');
        });
        if (sortSelect.value === 'featured' || sortSelect.selectedIndex === 0) {
          items.sort(function (a, b) {
            var badgeA = a.querySelector('.product-badge') ? 0 : 1;
            var badgeB = b.querySelector('.product-badge') ? 0 : 1;
            return badgeA - badgeB;
          });
        }
        items.forEach(function (el) { grid.appendChild(el); });
      });
    }

    colBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        colBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        grid.classList.remove('cols-2', 'cols-3', 'cols-4');
        grid.classList.add('cols-' + btn.getAttribute('data-cols'));
      });
    });

    if (countEl && !countEl.dataset.suffix) {
      var t = countEl.textContent.toLowerCase();
      if (t.indexOf('styles') >= 0) countEl.dataset.suffix = 'styles';
      else if (t.indexOf('options') >= 0) countEl.dataset.suffix = 'options';
      else if (t.indexOf('solutions') >= 0) countEl.dataset.suffix = 'solutions';
      else countEl.dataset.suffix = 'items';
    }
    updateCount();
  }

  document.querySelectorAll('.catalog-layout').forEach(initCatalog);

// --- In-page anchor navigation (manual scroll, sticky-nav aware) ---
  (function () {
    var stickyNav = document.querySelector('nav.stuck');

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href').slice(1);
        if (!id) return;
        var target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();
        var navHeight = stickyNav ? stickyNav.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
        window.scrollTo({ top: top, behavior: 'smooth' });

        if (history.pushState) history.pushState(null, '', '#' + id);
      });
    });
  })();

// --- Mobile nav toggle ---
  (function () {
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;

    function closeMenu() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
    function openMenu() {
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
    }

    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) closeMenu();
    });
  })();

// --- Contact form: hand off to WhatsApp ---
  (function () {
    var WHATSAPP_NUMBER = '447312094979';
    var form = document.getElementById('quoteForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var project = form.project.value;
      var details = form.details.value.trim();

      if (!name || !phone || !details) {
        form.reportValidity();
        return;
      }

      var lines = [
        'Hi, I\'d like a quote.',
        'Name: ' + name,
        'Phone: ' + phone,
        project ? 'Project type: ' + project : null,
        'Details: ' + details
      ].filter(Boolean);

      var message = encodeURIComponent(lines.join('\n'));
      var url = 'https://api.whatsapp.com/send?phone=' + WHATSAPP_NUMBER + '&text=' + message;
      window.open(url, '_blank', 'noopener');
    });
  })();
