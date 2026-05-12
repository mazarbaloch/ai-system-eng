import type {Edge, Node} from '@xyflow/react';

export type DiagramNodeTone = 'input' | 'process' | 'primary' | 'evidence' | 'model' | 'validation' | 'output';

export interface CourseDiagramNodeData extends Record<string, unknown> {
  eyebrow?: string;
  label: string;
  description?: string;
  tone?: DiagramNodeTone;
}

export type CourseDiagramNode = Node<CourseDiagramNodeData, 'courseNode'>;
export type CourseDiagramEdge = Edge;

export function courseNode(
  id: string,
  label: string,
  description: string,
  position: CourseDiagramNode['position'],
  tone: DiagramNodeTone = 'process',
): CourseDiagramNode {
  return {
    id,
    type: 'courseNode',
    position,
    data: {
      label,
      description,
      tone,
    },
  };
}

export function courseEdge(
  source: string,
  target: string,
  options: Partial<CourseDiagramEdge> = {},
): CourseDiagramEdge {
  return {
    id: `${source}-${target}`,
    source,
    target,
    ...options,
  };
}
