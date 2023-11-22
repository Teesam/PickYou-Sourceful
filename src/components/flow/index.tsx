import { useCallback } from 'react';
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ConnectionLineType,
} from 'reactflow';
import customNode from './CustomNode';


const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Speed' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    data: { label: 'Cost' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Classy' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    data: { label: 'Education' },
    position: { x: 400, y: 100 },
  },
  {
    id: '5',
    data: { label: 'Vacation' },
    position: { x: 400, y: 100 },
  },
  {
    id: '6',
    data: { label: 'Work' },
    position: { x: 400, y: 100 },
  },
  {
    id: '7',
    data: { label: 'Transmission' },
    position: { x: 400, y: 200 },
    type: 'attribute',
    className: 'rounded-md p-2 w-[200px] border border-brown',
  },
];

const initialEdges: Edge[] = [

];

const nodeTypes = {
  attribute: customNode,
};

const defaultEdgeOptions = {
  animated: true,
  type: 'smoothstep',
};

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className='text-12 min-h-screen'>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      />
    </div>
  );
}

export default Flow;
