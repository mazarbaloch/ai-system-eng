import styles from './ragArchitecturePipeline.module.css';

const indexSteps = [
  {
    tone: 'source',
    title: 'Source documents',
    description: 'Original PDFs, pages, Markdown files, records, or knowledge-base entries.',
  },
  {
    tone: 'parse',
    title: 'Parse and clean',
    description: 'Extract useful text, remove noise, and preserve meaningful structure.',
  },
  {
    tone: 'chunk',
    title: 'Chunk documents',
    description: 'Split content into retrieval units that can stand alone as evidence.',
  },
  {
    tone: 'metadata',
    title: 'Attach metadata',
    description: 'Add source, section, version, access, date, and citation fields.',
  },
  {
    tone: 'embed',
    title: 'Embed chunks',
    description: 'Represent each chunk as a vector for semantic retrieval.',
  },
  {
    tone: 'index',
    title: 'Vector / hybrid index',
    description: 'Store vectors, lexical signals, and metadata for query-time search.',
  },
] as const;

const querySteps = [
  {
    tone: 'query',
    title: 'User query',
    description: 'Question or task submitted by the user.',
  },
  {
    tone: 'rewrite',
    title: 'Query rewriting or expansion',
    description: 'Normalize, clarify, or broaden the query to improve recall.',
  },
  {
    tone: 'retrieve',
    title: 'Retrieve candidates',
    description: 'Search the vector / hybrid index for potentially relevant chunks.',
  },
  {
    tone: 'rerank',
    title: 'Rerank / filter',
    description: 'Apply precision scoring, metadata filters, and access checks.',
  },
  {
    tone: 'prompt',
    title: 'Build grounded prompt',
    description: 'Package selected evidence with instructions and citation requirements.',
  },
  {
    tone: 'model',
    title: 'LLM generates answer',
    description: 'Generate a response constrained by the retrieved evidence.',
  },
  {
    tone: 'answer',
    title: 'Answer with citations',
    description: 'Return the final answer with traceable source references.',
  },
] as const;

function PhaseStack({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: readonly {tone: string; title: string; description: string}[];
}) {
  return (
    <section className={styles.phase} aria-labelledby={`${eyebrow}-title`}>
      <div className={styles.phaseHeader}>
        <span className={styles.phaseEyebrow}>{eyebrow}</span>
        <h3 className={styles.phaseTitle} id={`${eyebrow}-title`}>
          {title}
        </h3>
      </div>

      <div className={styles.stack}>
        {steps.map((step, index) => (
          <div className={styles.stepGroup} key={step.title}>
            <article className={`${styles.node} ${styles[step.tone]}`}>
              <h4 className={styles.cardTitle}>{step.title}</h4>
              <p className={styles.cardDescription}>{step.description}</p>
            </article>

            {index < steps.length - 1 ? (
              <span className={styles.arrow} aria-hidden="true">
                <span className={styles.arrowLine} />
                <span className={styles.arrowHead} />
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function RagArchitecturePipeline() {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.heading}>
        <span className={styles.title}>Basic RAG Architecture</span>
        <span className={styles.subtitle}>How documents are prepared once and retrieved at answer time</span>
      </figcaption>

      <div className={styles.layout}>
        <PhaseStack eyebrow="Index time" title="Prepare the knowledge layer" steps={indexSteps} />

        <div className={styles.bridge} aria-hidden="true">
          <span className={styles.bridgeLine} />
          <span className={styles.bridgeText}>Index used at query time</span>
          <span className={styles.bridgeArrow} />
        </div>

        <PhaseStack eyebrow="Query time" title="Retrieve evidence and generate" steps={querySteps} />
      </div>
    </figure>
  );
}
