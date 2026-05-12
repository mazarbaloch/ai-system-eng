import styles from './promptPriorityStack.module.css';

const prioritySteps = [
  {
    tone: 'system',
    badge: 'P1 - Highest',
    title: 'System instructions',
    description: 'Global behavior and safety constraints',
  },
  {
    tone: 'developer',
    badge: 'P2',
    title: 'Developer / application instructions',
    description: 'Task policy, tools, output contract',
  },
  {
    tone: 'user',
    badge: 'P3',
    title: 'User task',
    description: 'Current request from the end user',
  },
  {
    tone: 'evidence',
    badge: 'P4',
    title: 'Retrieved context and tool outputs',
    description: 'Evidence, not authority',
  },
  {
    tone: 'model',
    badge: 'Inference',
    title: 'Model inference',
    description: 'All inputs combined and processed',
  },
  {
    tone: 'response',
    badge: 'Output',
    title: 'Response',
    description: 'Checked against higher-priority requirements',
  },
] as const;

export default function PromptPriorityStack() {
  return (
    <figure className={styles.figure}>
      <figcaption className={styles.heading}>
        <span className={styles.title}>LLM Instruction Priority Stack</span>
        <span className={styles.subtitle}>How instructions are layered and evaluated during inference</span>
      </figcaption>

      <div className={styles.priorityLayout}>
        <div className={styles.priorityRail} aria-hidden="true">
          <span className={styles.railLabel}>Higher priority -&gt;</span>
          <span className={styles.railLine} />
        </div>

        <div className={styles.flow}>
          {prioritySteps.map((step, index) => (
            <div className={styles.stepGroup} key={step.title}>
              <article className={`${styles.node} ${styles[step.tone]}`}>
                <span className={styles.badge}>{step.badge}</span>
                <h3 className={styles.nodeTitle}>{step.title}</h3>
                <p className={styles.nodeDescription}>{step.description}</p>
              </article>

              {index < prioritySteps.length - 1 ? (
                <div className={styles.connector} aria-hidden="true">
                  <span className={styles.connectorLine} />
                  <span className={styles.connectorArrow} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
