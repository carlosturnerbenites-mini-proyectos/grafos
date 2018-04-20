<template>
	<div id="app">
		<div id="world"></div>
		<div class="input-group">
			<span class="input-group-addon">Nodo</span>
			<input v-model="form.id" type="text" class="form-input" placeholder="..." />
			<button @click="addVertice(form.id)" class="btn btn-primary input-group-btn">Agregar</button>
		</div>
		<div class="input-group">
			<span class="input-group-addon">Arista desde</span>
			<input v-model="form.to" type="text" class="form-input" placeholder="..." />
			<span class="input-group-addon">hasta</span>
			<input v-model="form.from" type="text" class="form-input" placeholder="..." />
			<span class="input-group-addon">
				<label for="dir">
					<input type="checkbox" v-model="dir" id="dir">
					Dirigido?
				</label>
			</span>
			<button @click="addArista(form.to,form.from)" class="btn btn-primary input-group-btn">Relacionar</button>
		</div>
	</div>
</template>

<script>
	import vis from 'vis';

	import {Grafo} from './Graphs.js'

	export default {
		data() {
			return {
				dir: false,
				form: {
					to: null,
					from: null,
					id: null,
				},
				nodes: null,
				edges: null,
				grafo: new Grafo(),
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
				const arrows = this.dir ? 'from' : ''
				return this.edges.add({to:to, from:from, color: 'red', arrows})
			},
			addArista (to, from) {
				var arista = this.grafo.addArista(to, from, 5);

				arista.news.forEach(vertice => this.addNode(vertice) );

				this.addEdge(to, from)


				return arista
			},
			draw() {
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
		},
		mounted() {
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
@import '~spectre.css/dist/spectre-exp.min.css';
@import '~spectre.css/dist/spectre-icons.min.css';
@import '~spectre.css/dist/spectre.min.css';
</style>
