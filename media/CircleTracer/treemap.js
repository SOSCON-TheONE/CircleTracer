let nodes = [];
let circleJson, durCircleJson;
function TreeMap(json) {
console.log(json);
let g = new dagreD3.graphlib.Graph()
  .setGraph({})
  .setDefaultNodeLabel(function () {
    return {};
  })
  .setDefaultEdgeLabel(function () {
    return {};
  });
let typeArray = ['CONCATENATION', 'MAX_POOL_2D', 'AVERAGE_POOL_2D', 'SOFTMAX']; // 노드에 type만 있는 경우
// let nodes = [];
g.setNode(0, { label: "input", class: "type-input" });
json.forEach((element, idx) => {
  let name = element.properties.type;
  let myIndex = element.outputs[0].location;
  let parentsIndex = [];
  let location = element.properties.location;
  let attributes = element.attributes;
  let inputs = element.inputs;
  let outputs = element.outputs;
  if (name == "CONCATENATION") { //multiple parents			
    element.inputs.forEach(input => {
      parentsIndex.push(input);
    });
  } else {
    parentsIndex.push(element.inputs[0]);
  }
  let node = {
    'index': myIndex,
    'label': name,
    'class': "type-" + name,
    'parents': parentsIndex,
    'location': location,
    'attributes': attributes,
    'inputs': inputs,
    'outputs': outputs
  };

  let label = `<p class='type'>${node.label}</p>`;
  if (name == 'RESHAPE') {
    node['data'] = element.inputs[0];
    node['shape'] = element.inputs[1];

    let shape = '';
    let currentType = element.inputs[1].type;
    for (key in currentType) {
      shape = shape + currentType[key] + 'x';
    }
    shape = shape.slice(0, -1);

    label = label + `<p><label><b>shape</b></label><span>&lt;${shape}&gt;</span></p>`;

  } else if (!typeArray.includes(name)) {
    node['filter'] = element.inputs[1];
    node['bias'] = element.inputs[2];

    let filter = '';
    let currentType = element.inputs[1].type;
    for (key in currentType) {
      filter = filter + currentType[key] + 'x';
    }
    filter = filter.slice(0, -1);

    let bias = '';
    currentType = element.inputs[2].type;
    for (key in currentType) {
      bias = bias + currentType[key] + 'x';
    }
    bias = bias.slice(0, -1);

    label = label + `<p><label><b>filter</b></label><span>&lt;${filter}&gt;</span></p>`;
    label = label + `<p><label><b>bias</b></label><span>&lt;${bias}&gt;</span></p>`;

    attributes.forEach(attr => {
      if (attr['attribute'] == 'fused_activation_function') {
        label = label + `<p class='activation'>${attr['value']}</p>`
      }
    })
  }

  if (idx === 0) {
    g.setNode(0, { label: 'input', class: 'type-input' });
  }

  // Last Node Logic
  // if (idx === json.length - 1) {
  //   let outputParentIndex = [];
  //   let name = outputs[0].name;

  //   outputParentIndex.push({
  //     location: myIndex,
  //   });

  //   let outputNode = {
  //     index: myIndex + 1,
  //     label: name,
  //     class: 'type-' + name,
  //     parents: outputParentIndex,
  //   };

  //   nodes.push(outputNode);
  // }
  nodes.push(node);
  g.setNode(node.index, { labelType: 'html', label: label, class: node.class });
});

g.nodes().forEach(function (v) {
  let node = g.node(v);
  //  Round the corners of the nodes
  node.rx = node.ry = 5;
});

nodes.forEach(element => {
  let index = element.index;
  let parents = element.parents;
  parents.forEach(parent => {
    let label = `<p class="edge-label">`;
    let currentType = parent.type;
    for (key in currentType) {
      label = label + currentType[key] + 'x';
    }
    label = label.slice(0, -1);
    label += `</p>`

    g.setEdge(parent.location, index, { labelType: 'html', label: label, curve: d3.curveBasis, arrowheadClass: 'arrowhead' });
    console.log(parent.location + "->" + index);
  })
});

let render = new dagreD3.render();

let svg = d3.select('#wrapper').append("svg");

let inner = svg.append("g");

// Set up zoom support
d3.select('#wrapper')
  .on('scroll', scrolled)
  .call(d3.zoom()
    .scaleExtent([0.1, 10])
    .on('zoom', () => zoomed(inner, g)));

render(inner, g);

svg.attr("width", g.graph().width + 300);
svg.attr("height", g.graph().height);
svg.selectAll("g.node")
  .on("click", (id) => createDetailContent(id, g));
}

function zoomed(inner, g) {
const scale = d3.event.transform.k;

// 그래프 크기 조절
inner.attr("transform", d3.event.transform);

const scaledWidth = (g.graph().width + 300) * scale;
const scaledHeight = (g.graph().height) * scale;

// Change SVG dimensions.
d3.select('svg')
  .attr('width', scaledWidth)
  .attr('height', scaledHeight);

// Scale the image itself.
d3.select('svg').attr('transform', `scale(${scale})`);

// Move scrollbars.
const wrapper = d3.select('#wrapper').node();
wrapper.scrollLeft = -d3.event.transform.x;
wrapper.scrollTop = -d3.event.transform.y;

// If the image is smaller than the wrapper, move the image towards the
// center of the wrapper.
const dx = d3.max([0, wrapper.clientWidth / 2 - scaledWidth / 2]);
const dy = d3.max([0, wrapper.clientHeight / 2 - scaledHeight / 2]);
d3.select('svg').attr('transform', `translate(${dx}, ${dy})`);
}

function scrolled() {
const wrapper = d3.select('#wrapper');
const x = wrapper.node().scrollLeft + wrapper.node().clientWidth / 2;
const y = wrapper.node().scrollTop + wrapper.node().clientHeight / 2;
const scale = d3.zoomTransform(wrapper.node()).k;
// Update zoom parameters based on scrollbar positions.
wrapper.call(d3.zoom().translateTo, x / scale, y / scale);
}

function openDetail() {
document.querySelector('#main').style.marginLeft = "35%";
document.querySelector('#detail').style.width = "35%";
document.querySelector("#detail").style.display = "block";
}

function closeDetail() {
removeElementsByClass('detail-content-list');
document.querySelector('#main').style.marginRight = "0%";
document.querySelector("#detail").style.display = "none";
}

function createDetailContent(id, g) {
var _node = g.node(id);
console.log("Clicked " + id, _node);

removeElementsByClass('detail-content-list');
nodes.forEach(node => {
  if (node.index == id) {
    for (let key in node) {
      if (key == 'label') {
        let name = document.createElement('div');
        name.setAttribute("class", "detail-content-name detail-content-list");
        let label = document.createElement('label');
        label.innerHTML = key;
        name.appendChild(label);

        let value = document.createElement('div');
        value.setAttribute("class", "detail-content-item detail-content-list");
        value.innerHTML = node[key];

        document.querySelector('#node-properties-content').appendChild(name);
        document.querySelector('#node-properties-content').appendChild(value);
      }

      if (key == 'location') {
        let name = document.createElement('div');
        name.setAttribute("class", "detail-content-name detail-content-list");
        let label = document.createElement('label');
        label.innerHTML = key;
        name.appendChild(label);

        let value = document.createElement('div');
        value.setAttribute("class", "detail-content-item detail-content-list");
        value.innerHTML = node[key];

        document.querySelector('#node-properties-content').appendChild(name);
        document.querySelector('#node-properties-content').appendChild(value);
      }

      if (key == 'attributes') {
        node[key].forEach(element => {
          let name = document.createElement('div');
          name.setAttribute("class", "detail-content-name detail-content-list");
          let label = document.createElement('label');
          label.innerHTML = element['attribute'];
          name.appendChild(label);

          let value = document.createElement('div');
          value.setAttribute("class", "detail-content-item detail-content-list");
          value.innerHTML = element['value'];

          document.querySelector('#attributes-content').appendChild(name);
          document.querySelector('#attributes-content').appendChild(value);
        })
      }

      if (key == 'inputs') {
        node[key].forEach(element => {
          let name = document.createElement('div');
          name.setAttribute("class", "detail-content-name detail-content-list");
          let label = document.createElement('label');
          label.innerHTML = 'input';
          name.appendChild(label);

          let value = document.createElement('div');
          value.setAttribute("class", "detail-content-item detail-content-list");
          value.innerHTML = `name: ${element['name']}`;

          document.querySelector('#inputs-content').appendChild(name);
          document.querySelector('#inputs-content').appendChild(value);

          name = document.createElement('div');
          name.setAttribute("class", "detail-content-name detail-content-list");
          label = document.createElement('label');
          name.appendChild(label);

          value = document.createElement('div');
          value.setAttribute("class", "detail-content-item detail-content-list");
          value.innerHTML = `type: ${getTypeArray(element['type'])}`;

          document.querySelector('#inputs-content').appendChild(name);
          document.querySelector('#inputs-content').appendChild(value);

          name = document.createElement('div');
          name.setAttribute("class", "detail-content-name detail-content-list");
          label = document.createElement('label');
          name.appendChild(label);

          value = document.createElement('div');
          value.setAttribute("class", "detail-content-item detail-content-list");
          value.innerHTML = `location: ${element['location']}`;

          document.querySelector('#inputs-content').appendChild(name);
          document.querySelector('#inputs-content').appendChild(value);
        })
      }

      if (key == 'outputs') {
        node[key].forEach(element => {
          let name = document.createElement('div');
          name.setAttribute("class", "detail-content-name detail-content-list");
          let label = document.createElement('label');
          label.innerHTML = 'output';
          name.appendChild(label);

          let value = document.createElement('div');
          value.setAttribute("class", "detail-content-item detail-content-list");
          value.innerHTML = `name: ${element['name']}`;

          document.querySelector('#outputs-content').appendChild(name);
          document.querySelector('#outputs-content').appendChild(value);

          name = document.createElement('div');
          name.setAttribute("class", "detail-content-name detail-content-list");
          label = document.createElement('label');
          name.appendChild(label);

          value = document.createElement('div');
          value.setAttribute("class", "detail-content-item detail-content-list");
          value.innerHTML = `type: ${getTypeArray(element['type'])}`;

          document.querySelector('#outputs-content').appendChild(name);
          document.querySelector('#outputs-content').appendChild(value);

          name = document.createElement('div');
          name.setAttribute("class", "detail-content-name detail-content-list");
          label = document.createElement('label');
          name.appendChild(label);

          value = document.createElement('div');
          value.setAttribute("class", "detail-content-item detail-content-list");
          value.innerHTML = `location: ${element['location']}`;

          document.querySelector('#outputs-content').appendChild(name);
          document.querySelector('#outputs-content').appendChild(value);
        })
      }
    }
  }
})
openDetail();
}

function removeElementsByClass(className) {
const elements = document.getElementsByClassName(className);
while (elements.length > 0) {
  elements[0].parentNode.removeChild(elements[0]);
}
}

function getTypeArray(type) {
let result = '[';

for (key in type) {
  result = result + type[key] + ',';
}
result = result.slice(0, -1);
result += ']';

return result;
}