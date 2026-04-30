export function initReveal() {
  if (typeof window === 'undefined') return;
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!els.length) return;
  if (typeof IntersectionObserver === 'undefined') {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}
