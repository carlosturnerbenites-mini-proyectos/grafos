<template>
	<div id="app">

	<div>
		<div id="world"></div>
	</div>
	</div>
</template>

<script>
	import vis from 'vis';
	import chroma from 'chroma-js';
	import {g} from './Graphs.js'
	window.g = g
	export default {
		data(){
			return {
				nodes: null,
				edges: null,
			}
		},
		components: {
		},
		methods: {
			addNode (i) {
				var vertice = g.agregarVertice(i);
				console.warn(vertice)

				var nodeWord = this.nodes.get(vertice.id)

				if ( !nodeWord ){
						var size = 25
						var color = 'green'

						this.nodes.add({
							id:vertice.id,
							label:vertice.text,
							shape:'circle',
							color:color,
							size:size,
						})
				}
			},
			addEdge (to, from) {
				this.edges.add({to:to, from:from})
				g.agregarArista(to, from, 5);
			},
			draw(){
				var arrayNodes = []
				var arrayEdges = []
				var nodes = new vis.DataSet(arrayNodes);

				this.nodes = nodes
				var edges = new vis.DataSet(arrayEdges);
				this.edges = edges

				var container = document.getElementById('world');

				var data = {
					nodes: nodes,
					edges: edges
				};

				var options = {};
				var network = new vis.Network(container, data, options);
				window.network = network


				var scale = chroma.scale(["yellow","orange"])
				var colorsWords = scale.colors(100)

				let items = [{id: 1, text:'hola'},{id: 2, text:'mundo'}]
				let rels = [{to: 1, from: 2}]


				for ( var x in [1, 2, 3, 4, 5] ){
					this.addNode(x)
				}

				for ( var x in g.listaVertices ){
					var vertice = g.listaVertices[x]
					vertice.text = vertice.id
					// console.log(vertice.obtenerConexiones())
					vertice.obtenerConexiones().forEach(from => {
						// console.log(from)
						// edges.add({to:vertice.id, from:from})
						this.addEdge(vertice.id, from)
					});


				}
				/*
				items.forEach((item) => {
					var nodeWord = nodes.get(item.text)

					if ( !nodeWord ){
							var size = 25
							var index = Math.floor((Math.random() * 100) + 1);
							var color = colorsWords[index]
							if ( this.wg == item.text ){
								size = 30
								color = "green"
							}
							nodes.add({
								id:item.id,
								label:item.text,
								shape:'circle',
								color:color,
								size:size,
							})
					}
				})
				rels.forEach((item) => {
					edges.add({to:item.to, from:item.from})
				})
				*/
			},
		},
		mounted(){
			this.draw()
		}
	};
</script>

<style>
	#world {
		width: 100%;
		height: 400px;
		border: 1px solid lightgray;
	}

</style>
