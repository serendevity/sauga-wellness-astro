import type { Props as HeaderProps } from './components/widgets/Header.astro';
import type { Props as FooterProps } from './components/widgets/Footer.astro';
import { getPermalink, getHomePermalink } from './utils/permalinks';

export const headerData: HeaderProps = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: getHomePermalink() + '#about-us',
    },
    {
      text: 'Services',
      href: getHomePermalink() + '#services',
    },
    {
      text: 'Team',
      href: getPermalink('/involve') + '#directors',
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Donate', href: 'javascript:void(0)', onclick: 'openDonationModal()', variant: 'primary' }],
};

export const footerData: FooterProps = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/saugawellness/',
    },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@SaugaWellness' },
  ],
  footNote: `&copy; 2023 -${new Date().getFullYear()} · All rights reserved.
  `,
};
