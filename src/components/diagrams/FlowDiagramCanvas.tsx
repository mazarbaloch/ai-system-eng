import BrowserOnly from '@docusaurus/BrowserOnly';
import {
  Background,
  Controls,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type NodeProps,
  type NodeTypes,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import type {CourseDiagramEdge, CourseDiagramNode} from './diagramTypes';
import styles from './diagrams.module.css';

interface FlowDiagramCanvasProps {
  nodes: CourseDiagramNode[];
  edges: CourseDiagramEdge[];
  height?: number;
  minZoom?: number;
  showControls?: boolean;
}

function CourseNode({data}: NodeProps<CourseDiagramNode>) {
  const tone = data.tone ?? 'process';

  return (
    <div className={`${styles.node} ${styles[tone]}`}>
      <Handle className={styles.handle} type="target" position={Position.Left} />
      <Handle className={styles.handle} type="target" position={Position.Top} id="top" />
      <Handle className={styles.handle} type="target" position={Position.Bottom} id="bottom-target" />
      <div className={styles.nodeLabel}>{data.label}</div>
      {data.description ? <div className={styles.nodeDescription}>{data.description}</div> : null}
      <Handle className={styles.handle} type="source" position={Position.Right} />
      <Handle className={styles.handle} type="source" position={Position.Bottom} id="bottom" />
      <Handle className={styles.handle} type="source" position={Position.Top} id="top-source" />
    </div>
  );
}

const nodeTypes: NodeTypes = {
  courseNode: CourseNode,
};

const defaultEdgeOptions = {
  type: 'smoothstep',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 18,
    height: 18,
    color: '#2f62e8',
  },
  style: {
    stroke: '#2f62e8',
    strokeWidth: 2.4,
  },
};

export default function FlowDiagramCanvas({
  nodes,
  edges,
  height = 520,
  minZoom = 0.68,
  showControls = true,
}: FlowDiagramCanvasProps) {
  return (
    <div className={styles.canvas} style={{height}}>
      <BrowserOnly fallback={<div className={styles.fallback}>Loading interactive diagram...</div>}>
        {() => (
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            defaultEdgeOptions={defaultEdgeOptions}
            fitView
            fitViewOptions={{padding: 0.18}}
            minZoom={minZoom}
            maxZoom={1.35}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            panOnScroll
            preventScrolling={false}
            proOptions={{hideAttribution: true}}
          >
            <Background color="rgba(47, 98, 232, 0.14)" gap={28} />
            {showControls ? <Controls showInteractive={false} position="bottom-right" /> : null}
          </ReactFlow>
        )}
      </BrowserOnly>
    </div>
  );
}
