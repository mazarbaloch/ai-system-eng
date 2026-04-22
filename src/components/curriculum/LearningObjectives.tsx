import styles from './styles.module.css';

interface LearningObjectivesProps {
  title?: string;
  items: string[];
}

export function LearningObjectives({title = 'Learning objectives', items}: LearningObjectivesProps) {
  return (
    <section className={styles.blockSection}>
      <h2 className={styles.blockTitle}>{title}</h2>
      <ul className={styles.objectiveList}>
        {items.map((item) => (
          <li key={item} className={styles.objectiveItem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
