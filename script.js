 // Cart counter
  let cartCount = 0;
  const cartEl = document.getElementById('cartCount');

  function addCart(btn) {
    cartCount++;
    cartEl.textContent = cartCount;
    showToast('Item added to cart 🛒');
    btn.innerHTML = '<i class="fas fa-check"></i> Added!';
    btn.style.background = 'var(--green)';
    btn.style.borderColor = 'var(--green)';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
      btn.style.background = '';
      btn.style.borderColor = '';
    }, 2000);
  }

  function wishlist(el) {
    const icon = el.querySelector('i');
    if (icon.classList.contains('far')) {
      icon.classList.replace('far', 'fas');
      el.style.color = 'var(--accent)';
      el.style.borderColor = 'var(--accent)';
      showToast('Added to wishlist ❤️');
    } else {
      icon.classList.replace('fas', 'far');
      el.style.color = '';
      el.style.borderColor = '';
      showToast('Removed from wishlist');
    }
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  }

  // Countdown timer
  let total = 8 * 3600 + 45 * 60 + 30;
  function tick() {
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('mins').textContent = String(m).padStart(2, '0');
    document.getElementById('secs').textContent = String(s).padStart(2, '0');
    if (total > 0) total--;
  }
  tick();
  setInterval(tick, 1000);

  // Search filter
  document.getElementById('searchInput').addEventListener('input', function() {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.prod-card').forEach(card => {
      const name = card.querySelector('.prod-name')?.textContent.toLowerCase() || '';
      const brand = card.querySelector('.prod-brand')?.textContent.toLowerCase() || '';
      card.style.display = (name.includes(q) || brand.includes(q)) ? '' : 'none';
    });
  });