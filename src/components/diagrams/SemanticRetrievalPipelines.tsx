import styles from './semanticRetrievalPipelines.module.css';

interface PipelineCard {
  title: string;
  description: string;
  tone: string;
}

interface PipelineDiagramProps {
  title: string;
  subtitle: string;
  columns: PipelineCard[][];
}

function PipelineDiagram({title, subtitle, columns}: PipelineDiagramProps) {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.heading}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </figcaption>

      <div className={styles.pipelineShell}>
        <div className={styles.pipeline}>
          {columns.map((column, index) => (
            <div className={styles.columnGroup} key={column.map((card) => card.title).join('|')}>
              <div className={styles.column}>
                {column.map((card) => (
                  <article className={`${styles.node} ${styles[card.tone]}`} key={card.title}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </article>
                ))}
              </div>

              {index < columns.length - 1 ? (
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

export function ModuleFourRerankingPipeline() {
  return (
    <PipelineDiagram
      title="Two-Stage Retrieval and Reranking"
      subtitle="How lexical and dense retrieval feed a precision-oriented reranking stage"
      columns={[
        [
          {
            tone: 'query',
            title: 'User query',
            description: 'The user information need entering the retrieval system.',
          },
        ],
        [
          {
            tone: 'rewrite',
            title: 'Query rewriting or normalization',
            description: 'Clean, normalize, or expand the query before retrieval.',
          },
        ],
        [
          {
            tone: 'lexical',
            title: 'Lexical retriever',
            description: 'Keyword, BM25, or sparse search for exact terms.',
          },
          {
            tone: 'dense',
            title: 'Dense vector retriever',
            description: 'Embedding search for semantic similarity.',
          },
        ],
        [
          {
            tone: 'fusion',
            title: 'Candidate fusion',
            description: 'Merge and deduplicate candidates from retrieval channels.',
          },
        ],
        [
          {
            tone: 'reranker',
            title: 'Reranker or cross-encoder',
            description: 'Score query-candidate pairs for answer relevance.',
          },
        ],
        [
          {
            tone: 'policy',
            title: 'Policy, metadata, and access filters',
            description: 'Apply source, freshness, permission, and policy constraints.',
          },
        ],
        [
          {
            tone: 'package',
            title: 'Top-k context package',
            description: 'Selected evidence prepared for downstream use.',
          },
        ],
        [
          {
            tone: 'output',
            title: 'LLM, UI, or downstream system',
            description: 'The consumer that receives focused retrieved context.',
          },
        ],
      ]}
    />
  );
}

export function AccessControlRetrievalPipeline() {
  return (
    <PipelineDiagram
      title="Permission-Aware Retrieval"
      subtitle="Access checks happen before retrieved content reaches the model"
      columns={[
        [
          {
            tone: 'query',
            title: 'User query',
            description: 'The request from an authenticated or anonymous user.',
          },
        ],
        [
          {
            tone: 'auth',
            title: 'Authenticate user',
            description: 'Identify the user, role, tenant, and session context.',
          },
        ],
        [
          {
            tone: 'permissions',
            title: 'Load permissions',
            description: 'Resolve corpus, document, and field-level access rights.',
          },
        ],
        [
          {
            tone: 'retrieve',
            title: 'Retrieve candidates',
            description: 'Search only within the allowed retrieval scope.',
          },
        ],
        [
          {
            tone: 'filter',
            title: 'Filter by ACL and policy',
            description: 'Remove candidates that fail access or policy checks.',
          },
        ],
        [
          {
            tone: 'context',
            title: 'Context sent to LLM',
            description: 'Only authorized evidence enters the model context.',
          },
        ],
        [
          {
            tone: 'answer',
            title: 'Answer with citations',
            description: 'Return a grounded answer with traceable sources.',
          },
        ],
      ]}
    />
  );
}

export function RerankingCascadePipeline() {
  return (
    <PipelineDiagram
      title="Reranking Cascade"
      subtitle="Fast candidate generation followed by slower precision scoring"
      columns={[
        [
          {
            tone: 'corpus',
            title: 'Corpus of 10M chunks',
            description: 'Large indexed collection that cannot be scored exhaustively.',
          },
        ],
        [
          {
            tone: 'retrieval',
            title: 'First-stage retrieval',
            description: 'Fast approximate search optimized for recall.',
          },
        ],
        [
          {
            tone: 'candidates',
            title: 'Top 100 candidates',
            description: 'A bounded candidate set for more expensive scoring.',
          },
        ],
        [
          {
            tone: 'reranker',
            title: 'Cross-encoder or LLM reranker',
            description: 'Deeply evaluate candidate relevance to the query.',
          },
        ],
        [
          {
            tone: 'evidence',
            title: 'Top 5-10 evidence chunks',
            description: 'Focused evidence that can fit into the prompt or UI.',
          },
        ],
        [
          {
            tone: 'output',
            title: 'Answer generation or UI display',
            description: 'Use or show the final selected evidence.',
          },
        ],
      ]}
    />
  );
}
