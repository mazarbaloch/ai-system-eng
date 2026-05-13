import styles from './retrievalRerankingPipeline.module.css';

const pipelineSteps = [
  {
    tone: 'query',
    title: 'User query',
    description: 'Current information need from the user.',
  },
  {
    tone: 'retrieval',
    title: 'First-stage retrieval',
    description: 'Broad recall-oriented search across the indexed corpus.',
  },
  {
    tone: 'candidates',
    title: '20-100 candidate chunks',
    description: 'A wider evidence pool for filtering and precision scoring.',
  },
  {
    tone: 'filters',
    title: 'Metadata and permission filters',
    description: 'Source, freshness, tenant, and access-control checks.',
  },
  {
    tone: 'reranker',
    title: 'Reranker',
    description: 'Second-stage scoring to prioritize answer-bearing evidence.',
  },
  {
    tone: 'evidence',
    title: 'Top evidence chunks',
    description: 'Focused context selected for grounded generation.',
  },
  {
    tone: 'generation',
    title: 'Grounded generation',
    description: 'Final answer constrained to the selected sources.',
  },
] as const;

export default function RetrievalRerankingPipeline() {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.heading}>
        <span className={styles.title}>Retrieval Quality and Reranking Pipeline</span>
        <span className={styles.subtitle}>How a broad candidate set becomes focused evidence for grounded answers</span>
      </figcaption>

      <div className={styles.pipeline}>
        {pipelineSteps.map((step, index) => (
          <div className={styles.stepGroup} key={step.title}>
            <article className={`${styles.node} ${styles[step.tone]}`}>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </article>

            {index < pipelineSteps.length - 1 ? (
              <span className={styles.arrow} aria-hidden="true">
                <span className={styles.arrowLine} />
                <span className={styles.arrowHead} />
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  );
}
