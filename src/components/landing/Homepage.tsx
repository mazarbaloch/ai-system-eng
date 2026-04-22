import styles from './styles.module.css';
import {FeaturedModulesSection} from './FeaturedModulesSection';
import {HeroSection} from './HeroSection';
import {LearningHighlightsSection} from './LearningHighlightsSection';

export function Homepage() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <LearningHighlightsSection />
      <FeaturedModulesSection />
    </div>
  );
}
