import Link from '@docusaurus/Link';
import {useState} from 'react';

import {BrandMark} from '@site/src/components/icons/CourseIcon';
import {getLinkProps} from '@site/src/components/ui/linkUtils';
import {courseSite} from '@site/src/data/site/courseSite';

import styles from './footer.module.css';

function buildMailtoLink(email: string) {
  const subject = encodeURIComponent('AI Systems Engineering updates');
  const body = encodeURIComponent(`Please add ${email || 'me'} to the course update list.`);
  return `mailto:${courseSite.newsletter.email}?subject=${subject}&body=${body}`;
}

export default function SiteFooter() {
  const [email, setEmail] = useState('');

  return (
    <footer className={styles.footer}>
      <div className={`contentContainer ${styles.topRow}`}>
        <div className={styles.brandColumn}>
          <Link className={styles.brand} {...getLinkProps('/')}>
            <BrandMark className={styles.brandMark} />
            <span>{courseSite.brand}</span>
          </Link>
          <div className={styles.brandDescription}>Master's-level courses for the AI engineering era.</div>
        </div>

        <div className={styles.linkColumns}>
          {courseSite.footerGroups.map((group) => (
            <div key={group.title} className={styles.linkGroup}>
              <h2 className={styles.groupTitle}>{group.title}</h2>
              <ul className={styles.linkList}>
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link {...getLinkProps(link.href)}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.newsletter}>
          <h2 className={styles.groupTitle}>{courseSite.newsletter.title}</h2>
          <div className={styles.newsletterDescription}>{courseSite.newsletter.description}</div>
          <form className={styles.newsletterForm}>
            <label className="srOnly" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              className={styles.newsletterInput}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Link className={styles.newsletterButton} {...getLinkProps(buildMailtoLink(email))}>
              Subscribe
            </Link>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`contentContainer ${styles.bottomBarInner}`}>
          <div className={styles.copyright}>(c) 2026 Applied AI Companion. All rights reserved.</div>
          <div className={styles.metaLinks}>
            {courseSite.footerMetaLinks.map((link) => (
              <Link key={link.label} {...getLinkProps(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
