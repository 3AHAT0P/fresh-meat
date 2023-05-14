<script setup lang="ts">
import { onMounted, reactive, ref, ssrContextKey, toRefs } from 'vue';

import cytoscape from 'cytoscape';

import { data } from './data';
import { useChatStore } from './chat.store';
import { Message } from './@types/Message';

const chatStore = useChatStore();

const mapElRef = ref<null | HTMLDivElement>(null);
const cy = ref<null | cytoscape.Core>(null);

onMounted(() => {
  const _cy = cytoscape({
    container: mapElRef.value,

    layout: {
      name: 'breadthfirst',

      fit: true, // whether to fit the viewport to the graph
      directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
      padding: 10, // padding on fit
      circle: false, // put depths in concentric circles if true, put depths top down if false
      grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
      spacingFactor: 1, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
      nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
      roots: undefined, // the roots of the trees
      depthSort: (a, b) => {
        console.log(a.data('weight'),  b.data('weight'));
        return a.data('weight') - b.data('weight');
      }, // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
      animate: false, // whether to transition the node positions
      animationDuration: 500, // duration of animation in ms if enabled
      animationEasing: undefined, // easing of animation if enabled,
      animateFilter: function (node, i) { return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: undefined, // callback on layoutready
      stop: undefined, // callback on layoutstop
      transform: function (node, position) { return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
    },

    style: [
      {
        selector: 'node',
        style: {
          shape: 'rectangle',
          'background-color': '#242424',
          'border-color': 'white',
          'border-style': 'dotted',
          'border-width': '1px',
          "width": 48,
          "height": 48,
          "text-valign": "center",
          "text-halign": "center",
          "color": 'white'
        }
      }, {
        "selector": "node[id]",
        "style": {
          "label": "data(id)"
        }
      }, {
        "selector": "edge",
        "style": {
          "width": 1,
          "curve-style": "straight"
        }
      }, {
        "selector": "edge[arrow]",
        "style": {
          "target-arrow-shape": "data(arrow)"
        }
      }, {
        "selector": "edge.hollow",
        "style": {
          "target-arrow-fill": "hollow"
        }
      },
      {
        "selector": "edge.bezier",
        "style": {
          "curve-style": "bezier",
          "control-point-step-size": 40
        }
      }
    ], 
    
    elements: transformData(data),
  });
  
  cy.value = _cy;
  const dijkstra = _cy.elements().dijkstra({
    root: _cy.$('#m1'),
    weight: () => 1,
    directed: true,
  });

  _cy.$('node').on('click', (event) => {
    console.log(event.target.data('id'));
    const keys = dijkstra.pathTo(event.target).map((el) => el.data('id'));
    console.log(keys);

    chatStore.loadHistory(keys);
  });
});

const transformData = (inputData: Message[]): cytoscape.ElementDefinition[] => {
  const result: cytoscape.ElementDefinition[] = [];

  for (const node of inputData) {

    result.push({
      data: { id: node.key, weight: Number(node.key.slice(1))},
    });

    if (node.actions.length > 0) {
      for (const action of node.actions) {
        result.push({
          data: {
            id: action.key,
            source: node.key,
            target: action.next,
            arrow: 'triangle',
          },
        });
      }
    }
  }

  return result;
}

</script>

<template>
  <div id="cy" ref="mapElRef" class="map"></div>
</template>

<style scoped>
.map {
  width: 400px;
  height: 100%;
  box-sizing: border-box;
}

</style>
