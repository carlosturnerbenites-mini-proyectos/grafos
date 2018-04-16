<template>
	<div id="app">
		<div id="world"></div>
		<div class="input-group">
			<span class="input-group-addon">identificador de Nodo</span>
			<input v-model="form.id" type="text" class="form-input" placeholder="..." />
			<button @click="addVertice(form.id)" class="btn btn-primary input-group-btn">Agregar</button>
		</div>
		<div class="input-group">
			<span class="input-group-addon">Arista desde</span>
			<input v-model="form.to" type="text" class="form-input" placeholder="..." />
			<span class="input-group-addon">hasta</span>
			<input v-model="form.from" type="text" class="form-input" placeholder="..." />
			<button @click="addArista(form.to,form.from)" class="btn btn-primary input-group-btn">Relacionar</button>
		</div>
		<div id="diagram">Diagram will be placed here</div>

	</div>
</template>

<script>
	import vis from 'vis';
	import flowchart from 'flowchart.js';
	import {Grafo} from './Graphs.js'

	export default {
		data(){
			return {
				form: {
					to: null,
					from: null,
					id: null,
				},
				nodes: null,
				edges: null,
				grafo: new Grafo()
			}
		},
		components: {
		},
		methods: {
			addVertice (i) {
				var vertice = this.grafo.addVertice(i);
				this.addNode(vertice)
				return vertice
			},
			addNode (vertice) {
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
				return nodeWord
			},
			addEdge (to, from) {
				return this.edges.add({to:to, from:from, color: 'red', arrows: 'from'})
			},
			addArista (to, from) {
				var arista = this.grafo.addArista(to, from, 5);

				arista.news.forEach(vertice => this.addNode(vertice) );

				this.addEdge(to, from)


				return arista
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

				for ( var x in [1, 2, 3, 4, 5] ){
					var vertice = this.addVertice(x)
				}

			},
			drawDiagram(){
				var d = {
					parts : {
						'1': 'st=>start: Start',
						'2': 'e=>end',
						'3': 'op1=>operation: My Operation',
						'4': 'op2=>operation: My Operation 2',
						'5': 'st->op1->op2',
						'6': 'op2->e',
					},
					toString: function(){
						let str = ""
						for ( x in d.parts){
							part = d.parts[x]
							str = str + part
						}
						return str
					}
				}
				window.d = d
				var diagram = flowchart.parse(d.toString());
				diagram.drawSVG('diagram',{
                                'x': 0,
                                'y': 0,
                                'line-width': 3,
                                'line-length': 50,
                                'text-margin': 10,
                                'font-size': 14,
                                'font-color': 'black',
                                'line-color': 'black',
                                'element-color': 'black',
                                'fill': 'white',
                                'yes-text': 'yes',
                                'no-text': 'no',
                                'arrow-end': 'block',
                                'scale': 1,
                                // style symbol types
                                'symbols': {
                                    'start': {
                                      'font-color': 'red',
                                      'element-color': 'green',
                                      'fill': 'yellow'
                                    },
                                    'end':{
                                        'class': 'end-element'
                                    }
                                },
                                // even flowstate support ;-)
                                'flowstate' : {
                                    // 'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                                    'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
                                    // 'future' : { 'fill' : '#FFFF99'},
                                    'request' : { 'fill' : 'blue'}//,
                                    // 'invalid': {'fill' : '#444444'},
                                    // 'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                                    // 'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
                                  }
                              });
			}
		},
		mounted(){
			this.draw()
			this.drawDiagram()
		}
	};
</script>

<style>
#world {
	width: 100%;
	height: 400px;
	border: 1px solid lightgray;
}
@import '~spectre.css/dist/spectre-exp.min.css';
@import '~spectre.css/dist/spectre-icons.min.css';
@import '~spectre.css/dist/spectre.min.css';
</style>
