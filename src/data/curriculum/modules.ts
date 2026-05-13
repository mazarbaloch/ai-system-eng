import type {CourseModule} from './types';

export const courseModules: CourseModule[] = [
  {
    number: 1,
    slug: 'module-01-foundations',
    title: 'Foundations of AI Systems',
    shortTitle: 'Foundations',
    summary: 'LLM building blocks, system boundaries, and the difference between models, systems, and applications.',
    description:
      'Start the course with the systems lens needed to reason about modern AI applications and the architectural tradeoffs behind them.',
    topics: ['Evolution of AI systems', 'Model vs system vs application', 'Stateless vs stateful systems'],
    tags: ['Systems Thinking', 'Architecture'],
    icon: 'foundations',
    tone: 'brand',
    docPath: '/docs/modules/module-01-foundations',
  },
  {
    number: 2,
    slug: 'module-02-prompt-engineering-context-design',
    title: 'Prompt Engineering & Context Design',
    shortTitle: 'Prompt Engineering',
    summary: 'Design prompt structures, examples, and context windows that produce reliable model behavior.',
    description:
      'Students learn how prompt scaffolding, instruction hierarchy, and context shaping influence output quality.',
    topics: ['Prompt structures', 'Few-shot vs zero-shot', 'Context engineering'],
    tags: ['Prompting', 'Context'],
    icon: 'prompting',
    tone: 'brand',
    docPath: '/docs/modules/module-02-prompt-engineering-context-design',
  },
  {
    number: 3,
    slug: 'module-03-structured-outputs-tool-integration',
    title: 'Structured Outputs & Tool Integration',
    shortTitle: 'Structured Outputs',
    summary: 'Move from free-form text to validated interfaces through schema-first outputs and tool calls.',
    description:
      'This module covers predictable machine-readable responses and the validation patterns required in production systems.',
    topics: ['JSON outputs', 'Function calling', 'Validation pipelines'],
    tags: ['Schemas', 'Tools'],
    icon: 'structured',
    tone: 'rose',
    docPath: '/docs/modules/module-03-structured-outputs-tool-integration',
  },
  {
    number: 4,
    slug: 'module-04-embeddings-semantic-retrieval',
    title: 'Embeddings & Semantic Retrieval',
    shortTitle: 'Semantic Retrieval',
    summary:
      'Covers embeddings, vector databases, similarity search, semantic retrieval, hybrid retrieval, reranking, and retrieval evaluation.',
    description:
      'Students compare embedding pipelines, vector search behavior, metadata filtering, reranking, and the evaluation choices that matter most.',
    topics: ['Embeddings', 'Vector databases', 'Similarity search', 'Hybrid retrieval', 'Retrieval evaluation'],
    tags: ['Embeddings', 'Vector Search', 'Semantic Retrieval', 'Retrieval Evaluation'],
    icon: 'retrieval',
    tone: 'green',
    docPath: '/docs/modules/module-04-embeddings-semantic-retrieval',
  },
  {
    number: 5,
    slug: 'module-05-retrieval-augmented-generation',
    title: 'Retrieval-Augmented Generation (RAG)',
    shortTitle: 'RAG',
    summary:
      'Design grounded generation pipelines with retrieval, chunking, metadata, reranking, citations, and evaluation.',
    description:
      'RAG is treated as a full system pattern rather than a single model call, with attention to ingestion, grounding, traceability, safety, and answer quality.',
    topics: ['RAG architecture', 'Chunking strategies', 'Metadata design', 'Grounded generation', 'RAG evaluation'],
    tags: ['RAG', 'Grounding', 'Chunking', 'Metadata', 'Evaluation'],
    icon: 'rag',
    tone: 'green',
    docPath: '/docs/modules/module-05-retrieval-augmented-generation',
  },
  {
    number: 6,
    slug: 'module-06-memory-stateful-systems',
    title: 'Memory & Stateful Systems',
    shortTitle: 'Memory Systems',
    summary: 'Add conversation state and durable memory without losing control over context quality.',
    description:
      'The focus is on memory policies, persistence tradeoffs, and techniques for keeping long-running systems coherent.',
    topics: ['Conversation memory', 'Long-term memory'],
    tags: ['State', 'Memory'],
    icon: 'memory',
    tone: 'cyan',
    docPath: '/docs/modules/module-06-memory-stateful-systems',
  },
  {
    number: 7,
    slug: 'module-07-ai-agents-iterative-reasoning',
    title: 'AI Agents & Iterative Reasoning',
    shortTitle: 'AI Agents',
    summary: 'Build agent loops that can plan, reflect, retry, and sequence tool use across multiple steps.',
    description:
      'Students explore autonomy boundaries, planning strategies, and the operational risks of iterative systems.',
    topics: ['Agent architectures', 'Self-reflection loops', 'Retry strategies'],
    tags: ['Agents', 'Reasoning'],
    icon: 'agents',
    tone: 'violet',
    docPath: '/docs/modules/module-07-ai-agents-iterative-reasoning',
  },
  {
    number: 8,
    slug: 'module-08-protocols-cli-mcp',
    title: 'Protocols, CLI & MCP',
    shortTitle: 'MCP vs CLI',
    summary: 'Compare interfaces for model-driven systems, from local command execution to protocol-based tooling.',
    description:
      'This module frames interoperability, tool ergonomics, and architectural tradeoffs for assistant-driven systems.',
    topics: ['Tool interfaces', 'CLI-based systems', 'Model Context Protocol (MCP)', 'MCP vs CLI (design tradeoffs)'],
    tags: ['Protocols', 'Interfaces'],
    icon: 'protocols',
    tone: 'amber',
    docPath: '/docs/modules/module-08-protocols-cli-mcp',
  },
  {
    number: 9,
    slug: 'module-09-system-design-patterns',
    title: 'System Design Patterns',
    shortTitle: 'Design Patterns',
    summary: 'Recognize repeatable patterns for RAG, agent loops, and tool-augmented applications.',
    description:
      'Students develop a pattern vocabulary they can reuse when evaluating and combining AI system architectures.',
    topics: ['RAG pattern', 'Agent loop', 'Tool-augmented systems'],
    tags: ['Patterns', 'Architecture'],
    icon: 'patterns',
    tone: 'brand',
    docPath: '/docs/modules/module-09-system-design-patterns',
  },
  {
    number: 10,
    slug: 'module-10-evaluation-robustness',
    title: 'Evaluation & Robustness',
    shortTitle: 'Evaluation',
    summary: 'Measure system quality, surface failure modes, and design evaluation loops that catch regressions early.',
    description:
      'The module introduces practical evaluation plans for reliability, adversarial behavior, and product readiness.',
    topics: ['Hallucinations', 'Failure modes', 'Adversarial prompts'],
    tags: ['Evaluation', 'Reliability'],
    icon: 'evaluation',
    tone: 'rose',
    docPath: '/docs/modules/module-10-evaluation-robustness',
  },
  {
    number: 11,
    slug: 'module-11-safety-security',
    title: 'Safety & Security',
    shortTitle: 'Safety',
    summary: 'Mitigate prompt injection, abuse, and unsafe outputs with layered safeguards and policy-aware design.',
    description:
      'Students examine threat models and controls for securing AI systems in real operating environments.',
    topics: ['Prompt injection', 'Guardrails'],
    tags: ['Security', 'Guardrails'],
    icon: 'safety',
    tone: 'rose',
    docPath: '/docs/modules/module-11-safety-security',
  },
  {
    number: 12,
    slug: 'module-12-cost-optimization',
    title: 'Cost & Optimization',
    shortTitle: 'Cost Optimization',
    summary: 'Balance model quality, token usage, latency, and infrastructure cost with principled system choices.',
    description:
      'This module helps students reason about cost-performance tradeoffs across prompts, retrieval, model choice, and caching.',
    topics: ['Token costs', 'Latency optimization', 'Model selection'],
    tags: ['Cost', 'Latency'],
    icon: 'optimization',
    tone: 'amber',
    docPath: '/docs/modules/module-12-cost-optimization',
  },
  {
    number: 13,
    slug: 'module-13-orchestration-frameworks',
    title: 'Orchestration Frameworks',
    shortTitle: 'Orchestration',
    summary: 'Understand where frameworks accelerate delivery and where hand-rolled orchestration remains the better fit.',
    description:
      'Students compare popular orchestration stacks and learn how to debug them without treating the framework as magic.',
    topics: ['LangChain, LlamaIndex, Haystack', 'Framework vs manual implementation', 'Debugging orchestration'],
    tags: ['Frameworks', 'Workflow'],
    icon: 'orchestration',
    tone: 'cyan',
    docPath: '/docs/modules/module-13-orchestration-frameworks',
  },
  {
    number: 14,
    slug: 'module-14-production-systems',
    title: 'Production Systems',
    shortTitle: 'Production',
    summary: 'Ship AI systems with deployment, monitoring, observability, and scaling practices built in from the start.',
    description:
      'This module connects experimentation to real operations with an emphasis on maintainability and production-readiness.',
    topics: ['Deployment', 'Monitoring', 'Scaling'],
    tags: ['Operations', 'Deployment'],
    icon: 'production',
    tone: 'cyan',
    docPath: '/docs/modules/module-14-production-systems',
  },
  {
    number: 15,
    slug: 'module-15-capstone-project',
    title: 'Capstone Project',
    shortTitle: 'Capstone',
    summary: 'Integrate RAG, agents, tools, memory, and evaluation into a single end-to-end applied system.',
    description:
      'The capstone asks students to synthesize the full course into a production-oriented AI application with a clear rationale.',
    topics: ['RAG', 'Agents', 'Tools', 'Memory', 'Evaluation'],
    tags: ['Project', 'Integration'],
    icon: 'capstone',
    tone: 'brand',
    docPath: '/docs/modules/module-15-capstone-project',
  },
];

export function getModuleBySlug(slug: string): CourseModule {
  const module = courseModules.find((entry) => entry.slug === slug);

  if (!module) {
    throw new Error(`Unknown module slug: ${slug}`);
  }

  return module;
}
