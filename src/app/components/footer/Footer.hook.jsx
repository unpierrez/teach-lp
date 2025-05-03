import styles from './Footer.module.css';

export function useFooter() {

    const footerLinks = [
        {
          title: 'Product',
          links: [
            { label: 'Pricing', href: '#' },
            { label: 'Overview', href: '#' },
            { label: 'Browse', href: '#' },
            { label: 'Accessibility', href: '#' },
          ],
        },
        {
          title: 'Solutions',
          links: [
            { label: 'Brainstorming', href: '#' },
            { label: 'Ideation', href: '#' },
            { label: 'Wireframing', href: '#' },
            { label: 'Research', href: '#' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Help Center', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Tutorials', href: '#' },
            { label: 'FAQs', href: '#' },
          ],
        },
        {
          title: 'Support',
          links: [
            { label: 'Contact Us', href: '#' },
            { label: 'Developers', href: '#' },
            { label: 'Documentation', href: '#' },
            { label: 'Integrations', href: '#' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '#' },
            { label: 'Press', href: '#' },
            { label: 'Events', href: '#' },
            { label: 'Request Demo', href: '#' },
          ],
        },
      ];
      
      const footerBottomLinks = [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Contact', href: '#', ariaLabel: 'contact' },
        {
          label: 'EN',
          icon: '/assets/globe-icon.svg',
          alt: 'Globe',
          className: styles.globeIcon,
        },
        {
          label: 'EUR',
          icon: '/assets/euro.svg',
          alt: 'Euro',
          className: styles.euroLogo,
        },
      ];

    return {
        footerLinks,
        footerBottomLinks
    }
}