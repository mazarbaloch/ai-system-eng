import {FeatureCard} from '@site/src/components/cards/FeatureCard';
import {ContentGrid} from '@site/src/components/ui/ContentGrid';
import {Section} from '@site/src/components/ui/Section';
import {courseSite} from '@site/src/data/site/courseSite';

export function LearningHighlightsSection() {
  return (
    <Section title="What You'll Learn">
      <ContentGrid>
        {courseSite.features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </ContentGrid>
    </Section>
  );
}
