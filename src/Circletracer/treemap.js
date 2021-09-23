function TreeMap(json){
	console.log(json);
	let g = new dagreD3.graphlib.Graph()
		.setGraph({})
		.setDefaultNodeLabel(function(){
			return {};
		})
		.setDefaultEdgeLabel(function(){
			return{};
		});
	let nodes = [];
	g.setNode(0, {label: "input", class: "type-input"});		
	json.forEach(element => {
		let name = element.properties.type;
		let myIndex = element.outputs[0].location;
		let parentsIndex = [];
		if(name=="CONCATENATION"){ //multiple parents			
			element.inputs.forEach(input => {
				parentsIndex.push(input);
			});
		}else{
			parentsIndex.push(element.inputs[0]);
		}
		let node = {
			'index':myIndex,
			'label':name,
			'class':"type-"+name,
			'parents':parentsIndex,
		};
		nodes.push(node);
		g.setNode(node.index, {label: node.label, class: node.class});		
	});
	
	g.nodes().forEach(function(v){
		let node = g.node(v);
		//  Round the corners of the nodes
		node.rx = node.ry = 5;		
	});

	nodes.forEach(element =>{
		let index = element.index;
		let parents = element.parents;
		parents.forEach(parent=>{
			g.setEdge(parent.location,index);
			console.log(parent.location+"->"+index);
		})
	});
	
	let render = new dagreD3.render();

	let svg = d3.select("svg"),
		inner = svg.append("g");
	
	// Set up zoom support
	let zoom = d3.zoom().on("zoom", function(){
		inner.attr("transform", d3.event.transform);
	});
	svg.call(zoom);

	render(inner,g);

	let xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
	inner.attr("transform", "translate(" + xCenterOffset + ", 20)");
	svg.attr("height", g.graph().height + 40);
	svg.attr("width", g.graph().width + 400);
}