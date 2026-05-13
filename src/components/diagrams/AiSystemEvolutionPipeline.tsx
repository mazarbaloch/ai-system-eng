import styles from './aiSystemEvolutionPipeline.module.css';

type Stage = {
  tone: 'model' | 'mlPipeline' | 'service' | 'llm' | 'tools';
  title: string;
  description?: string;
};

const stages: Stage[] = [
  {
    tone: 'model',
    title: 'Isolated predictive model',
  },
  {
    tone: 'mlPipeline',
    title: 'ML pipeline',
    description: 'features, training, deployment, monitoring',
  },
  {
    tone: 'service',
    title: 'Deep learning service',
    description: 'GPU inference, unstructured data, specialized serving',
  },
  {
    tone: 'llm',
    title: 'LLM-centered system',
    description: 'prompting, context assembly, orchestration',
  },
  {
    tone: 'tools',
    title: 'Tool-using and multimodal AI system',
    description: 'retrieval, memory, APIs, policies, observability',
  },
];

export default function AiSystemEvolutionPipeline() {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.heading}>
        <span className={styles.title}>Retrieval, tools, and multimodality extend the boundary again</span>
      </figcaption>

      <div className={styles.pipelineShell}>
        <div className={styles.pipeline}>
          {stages.map((stage, index) => (
            <div className={styles.stageGroup} key={stage.title}>
              <article className={`${styles.node} ${styles[stage.tone]}`}>
                <h3 className={styles.cardTitle}>{stage.title}</h3>
                {stage.description ? <p className={styles.cardDescription}>{stage.description}</p> : null}
              </article>

              {index < stages.length - 1 ? (
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
