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

      <div className={styles.pipelineShell}>
        <div className={styles.pipeline}>
          <div className={styles.inputs}>
            {inputSignals.map((signal) => (
              <article className={`${styles.node} ${styles.inputNode} ${styles[signal.tone]}`} key={signal.title}>
                <h3 className={styles.cardTitle}>{signal.title}</h3>
                <p className={styles.cardDescription}>{signal.description}</p>
              </article>
            ))}
          </div>

          <svg
            className={styles.fanSvg}
            width="48"
            height="312"
            viewBox="0 0 48 312"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line x1="0" y1="28" x2="36" y2="156" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="92" x2="36" y2="156" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="156" x2="36" y2="156" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="220" x2="36" y2="156" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="284" x2="36" y2="156" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <polygon points="36,151 48,156 36,161" fill="currentColor" />
          </svg>

          {pipelineStages.map((stage, index) => (
            <div className={styles.stageGroup} key={stage.title}>
              <article className={`${styles.node} ${styles[stage.tone]}`}>
                <h3 className={styles.cardTitle}>{stage.title}</h3>
                <p className={styles.cardDescription}>{stage.description}</p>
              </article>
              {index < pipelineStages.length - 1 ? (
                <span className={styles.arrow} aria-hidden="true">
                  <span className={styles.arrowLine} />
                  <span className={styles.arrowHead} />
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
