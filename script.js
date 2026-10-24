(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var burger = $('#burger'), menu = $('#menu');
  function closeMenu() { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  // Active nav link
  var links = [].slice.call(menu.querySelectorAll('a'));
  var secs = links.map(function (a) { return $(a.getAttribute('href')); });
  function setActive() {
    var y = window.scrollY + 120, cur = 0;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= y) cur = i; });
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) cur = links.length - 1;
    links.forEach(function (a, i) { a.classList.toggle('active', i === cur); });
  }
  var top = $('#totop');
  function onScroll() { setActive(); top.hidden = window.scrollY < 600; }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  top.addEventListener('click', function () { window.scrollTo({ top: 0 }); });

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  // Mailto contact form (no backend)
  $('#form').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('#n').value.trim(), m = $('#e').value.trim(), msg = $('#m').value.trim(), err = $('#err');
    if (!n || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) { err.textContent = 'Please enter your name, a valid email and a message.'; return; }
    err.textContent = '';
    var body = msg + '\n\nFrom: ' + n + ' (' + m + ')';
    window.location.href = 'mailto:pavithrapanimalar30@gmail.com?subject=' + encodeURIComponent('Portfolio message from ' + n) + '&body=' + encodeURIComponent(body);
  });
  // Certification filters
  var fb = [].slice.call(document.querySelectorAll('.filter')), cc = [].slice.call(document.querySelectorAll('.cert')), cnt = $('#cert-count');
  fb.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-filter'), shown = 0;
      fb.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      cc.forEach(function (c) {
        var ok = f === 'all' || c.getAttribute('data-category') === f;
        c.hidden = !ok;
        if (ok) { shown++; c.classList.add('in'); }
      });
      cnt.textContent = 'Showing ' + shown + ' of ' + cc.length;
    });
  });
  $('#year').textContent = new Date().getFullYear();
})();
