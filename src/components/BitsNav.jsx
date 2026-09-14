import { useEffect } from 'react';
import StaggeredMenu from './reactbits/StaggeredMenu/StaggeredMenu.jsx';
import { NAV, PROFILE } from '../data/portfolio.js';

const items = [
  { label: 'Start', ariaLabel: 'Start', link: '#top' },
  ...NAV.map((item) => ({
    label: item.label,
    ariaLabel: item.label,
    link: `#${item.id}`,
  })),
];

const socialItems = [
  { label: 'GitHub', link: PROFILE.github },
  { label: 'LinkedIn', link: PROFILE.linkedin },
  { label: 'Email', link: `mailto:${PROFILE.email}` },
];

function closeOpenMenu() {
  document.querySelector('.bits-menu .sm-toggle[aria-expanded="true"]')?.click();
}

export default function BitsNav() {
  useEffect(() => {
    const onClick = (event) => {
      const item = event.target.closest('.sm-panel-item');
      if (!item) return;
      const href = item.getAttribute('href') || '';
      if (href.startsWith('#')) closeOpenMenu();
    };
    const onKey = (event) => {
      if (event.key === 'Escape') closeOpenMenu();
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="bits-menu">
      <StaggeredMenu
        isFixed
        position="right"
        colors={['#78301a', '#e4572e']}
        items={items}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        logoUrl="/favicon.svg"
        menuButtonColor="#f2ebe0"
        openMenuButtonColor="#f2ebe0"
        changeMenuColorOnOpen={false}
        accentColor="#e4572e"
        closeOnClickAway
        onMenuOpen={() => {
          document.body.style.overflow = 'hidden';
        }}
        onMenuClose={() => {
          document.body.style.overflow = '';
        }}
      />
    </div>
  );
}
