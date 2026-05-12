import DiagramFrame from './DiagramFrame';
import FlowDiagramCanvas from './FlowDiagramCanvas';
import {courseEdge, courseNode, type CourseDiagramEdge, type CourseDiagramNode} from './diagramTypes';

const nodes: CourseDiagramNode[] = [
  courseNode('query', 'User query', 'The current task and immediate information need.', {x: 0, y: 40}, 'input'),
  courseNode('history', 'Conversation summary', 'Compressed prior turns and relevant state.', {x: 0, y: 170}, 'evidence'),
  courseNode('docs', 'Retrieved documents', 'Snippets, source IDs, freshness, and authority metadata.', {x: 0, y: 310}, 'evidence'),
  courseNode('tools', 'Tool outputs', 'Current observations from external systems.', {x: 0, y: 450}, 'evidence'),
  courseNode('constraints', 'Constraints & schemas', 'Output structure, policy, safety, and source-use rules.', {x: 0, y: 590}, 'primary'),
  courseNode('builder', 'Context builder', 'Selects, orders, trims, summarizes, and preserves provenance.', {x: 370, y: 310}, 'primary'),
  courseNode('package', 'Context package', 'Ordered, grounded model input for this request.', {x: 700, y: 310}),
  courseNode('model', 'Model', 'Produces a draft response from the supplied context.', {x: 1010, y: 310}, 'model'),
  courseNode('validator', 'Output validator', 'Checks schema, citations, safety, and uncertainty handling.', {x: 1320, y: 310}, 'validation'),
  courseNode('final', 'Final answer or fallback', 'Answer, clarification, escalation, or safe refusal.', {x: 1640, y: 180}, 'output'),
  courseNode('trace', 'Trace & evaluation data', 'Stores selected sources, prompt version, metrics, and outcomes.', {x: 1640, y: 440}, 'output'),
];

const edges: CourseDiagramEdge[] = [
  courseEdge('query', 'builder'),
  courseEdge('history', 'builder'),
  courseEdge('docs', 'builder'),
  courseEdge('tools', 'builder'),
  courseEdge('constraints', 'builder'),
  courseEdge('builder', 'package'),
  courseEdge('package', 'model'),
  courseEdge('model', 'validator'),
  courseEdge('validator', 'final'),
  courseEdge('validator', 'trace'),
];

export default function ContextEngineeringFlow() {
  return (
    <DiagramFrame
      title="Context engineering flow"
      caption="Context is assembled deliberately: sources are selected, compressed, ordered, grounded, and then checked after model inference."
      minWidth={1180}
    >
      <FlowDiagramCanvas nodes={nodes} edges={edges} height={720} minZoom={0.58} />
    </DiagramFrame>
  );
}
