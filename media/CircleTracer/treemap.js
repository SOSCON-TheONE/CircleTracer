const { type } = require("os");

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
	let nodes = [];
	g.setNode(0, { label: "input", class: "type-input" });
	json.forEach(element => {
		let name = element.properties.type;
		let myIndex = element.outputs[0].location;
		let parentsIndex = [];
		let location = element.properties.location;
		let attributes = element.attributes;
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
			'attributes': attributes
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
			let label = '';
			let currentType = parent.type;
			for (key in currentType) {
				label = label + currentType[key] + 'x';
			}

			label = label.slice(0, -1);
			g.setEdge(parent.location, index, { label: label });
			console.log(parent.location + "->" + index);
		})
	});

	let render = new dagreD3.render();

	let svg = d3.select("svg"),
		inner = svg.append("g");

	// Set up zoom support
	let zoom = d3.zoom().on("zoom", function () {
		inner.attr("transform", d3.event.transform);
	});
	svg.call(zoom);

	render(inner, g);

	let xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
	inner.attr("transform", "translate(" + xCenterOffset + ", 20)");
	svg.attr("height", g.graph().height + 40);
	svg.attr("width", g.graph().width + 400);
}