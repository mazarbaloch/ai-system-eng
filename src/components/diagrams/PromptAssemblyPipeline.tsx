import styles from './promptAssemblyPipeline.module.css';

const inputSignals = [
  {
    tone: 'intent',
    title: 'User intent',
    description: 'Current request',
  },
  {
    tone: 'instructions',
    title: 'System & developer instructions',
    description: 'Policy, tools, constraints',
  },
  {
    tone: 'examples',
    title: 'Examples',
    description: 'Few-shot patterns',
  },
  {
    tone: 'context',
    title: 'Retrieved context & memory',
    description: 'RAG, conversation history',
  },
  {
    tone: 'tools',
    title: 'Tool outputs',
    description: 'API results, search, code',
  },
] as const;

const pipelineStages = [
  {
    tone: 'template',
    title: 'Prompt template',
    description: 'Assembly structure',
  },
  {
    tone: 'package',
    title: 'Prompt package',
    description: 'Compiled input',
  },
  {
    tone: 'model',
    title: 'Model inference',
    description: 'LLM processing',
  },
  {
    tone: 'validation',
    title: 'Validation & evaluation',
    description: 'Safety, quality checks',
  },
  {
    tone: 'output',
    title: 'Final output',
    description: 'Delivered response',
  },
] as const;

export default function PromptAssemblyPipeline() {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.heading}>
        <span className={styles.title}>Prompt Assembly Pipeline</span>
        <span className={styles.subtitle}>How inputs are collected, packaged, and processed into a final output</span>
      </figcaption>

      <div className={styles.desktopDiagram}>
        <div className={styles.inputsColumn}>
          {inputSignals.map((signal) => (
            <article className={`${styles.card} ${styles.inputCard} ${styles[signal.tone]}`} key={signal.title}>
              <h3 className={styles.cardTitle}>{signal.title}</h3>
              <p className={styles.cardDescription}>{signal.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.merge} aria-hidden="true">
          {inputSignals.map((signal) => (
            <span className={styles.mergeLine} key={signal.title} />
          ))}
          <span className={styles.mergeStem} />
        </div>

        <div className={styles.pipelineRow}>
          {pipelineStages.map((stage, index) => (
            <div className={styles.stageGroup} key={stage.title}>
              <article className={`${styles.card} ${styles.stageCard} ${styles[stage.tone]}`}>
                <h3 className={styles.cardTitle}>{stage.title}</h3>
                <p className={styles.cardDescription}>{stage.description}</p>
              </article>
              {index < pipelineStages.length - 1 ? (
                <span className={styles.rowArrow} aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mobileDiagram}>
        <section className={styles.mobileInputs}>
          <span className={styles.mobileLabel}>Inputs</span>
          {inputSignals.map((signal) => (
            <article className={`${styles.card} ${styles.inputCard} ${styles[signal.tone]}`} key={signal.title}>
              <h3 className={styles.cardTitle}>{signal.title}</h3>
              <p className={styles.cardDescription}>{signal.description}</p>
            </article>
          ))}
        </section>

        <span className={styles.mobileConnector} aria-hidden="true" />

        <section className={styles.mobileStages}>
          {pipelineStages.map((stage, index) => (
            <div className={styles.mobileStageGroup} key={stage.title}>
              <article className={`${styles.card} ${styles.stageCard} ${styles[stage.tone]}`}>
                <h3 className={styles.cardTitle}>{stage.title}</h3>
                <p className={styles.cardDescription}>{stage.description}</p>
              </article>
              {index < pipelineStages.length - 1 ? (
                <span className={styles.mobileConnector} aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </figure>
  );
}
