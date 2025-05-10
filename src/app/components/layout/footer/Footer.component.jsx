import styles from './Footer.module.css';
import { useFooter } from './useFooter';


export function Footer() {
  const { footerLinks, footerBottomLinks } = useFooter();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <div className={styles.logoContainer}>
            <img src="/assets/logo-colored.svg" alt="Logo" className={styles.logo} loading="lazy" />
          </div>

          <div className={styles.footerLinks}>
            {footerLinks.map((column, index) => (
              <div key={index} className={styles.linksColumn}>
                <span>{column.title}</span>
                {column.links.map((link, i) => (
                  <a key={i} href={link.href}>
                    <p>{link.label}</p>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>uteach @ 2023. All rights reserved.</span>
          <div className={styles.footerBottomLinks}>
            {footerBottomLinks.map((item, index) =>
              item.icon ? (
                <a key={index} href={item.href || '#'}>
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className={item.className}
                    loading="lazy"
                  />
                  <p>{item.label}</p>
                </a>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.ariaLabel || undefined}
                >
                  <p>{item.label}</p>
                </a>
              )
            )}
            <img
              src="/assets/accessibility.svg"
              alt="Accessibility"
              loading="lazy"
              className={styles.accessibilityIcon}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
