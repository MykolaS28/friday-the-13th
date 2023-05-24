(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menuLinks: document.querySelectorAll('[data-menu-link]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.menuLinks.forEach((link) => link.addEventListener('click', handleMenuLinkClick));

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    if (refs.menu.classList.contains('is-open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function handleMenuLinkClick() {
    toggleModal();
  }
})();