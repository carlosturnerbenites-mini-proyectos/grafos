import flowchart from 'flowchart.js';


function sleep(milliseconds = 2000) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

const diagram = {
    chart: null,
    setCurrent: function(name) {
        var d = {
            'Grafo__constructor': '3',
            'Grafo__addVertice': '5',
            'Grafo__addArista': '7',
            'Vertice__constructor': '5',
            'Vertice__addNeighbor': '',
        }
        let number = d[name]
        if (diagram.chart) {
            for (let x in diagram.parts) {
                let part = diagram.parts[x]
                diagram.parts[x] = part.replace('|current', '')
                if (number === x) {
                    diagram.parts[x] = diagram.parts[x].trim().replace('\n', '') + '|current \n';
                }
            }
            diagram.draw()
        }



    },
    parts: {
        '1': 'inicio=>start: Start \n',
        '2': 'init=>operation: tam = 3 \n',
        '3': 'constructorGrafo=>operation: grafo = new Grafo() \n',
        '4': 'iniciari=>operation: i = 0 \n',
        '5': 'createVertice=>subroutine: addVertice(i) \n',
        '6': 'incrementari=>operation: i += 1 \n',
        '7': 'createArista=>subroutine: addArista(1,2,1) addArista(2,3,1) addArista(3,1,1) \n',
        '8': 'cond=>condition: i <= tam \n',
        '9': 'fin=>end \n',
        '10': 'inicio->init \n',
        '11': 'init->constructorGrafo \n',
        '12': 'constructorGrafo->iniciari \n',
        '13': 'iniciari->createVertice \n',
        '14': 'createVertice->incrementari \n',
        '15': 'incrementari->createArista \n',
        '16': 'createArista->cond \n',
        '17': 'cond(yes)->createVertice \n',
        '18': 'cond(no, bottom)->fin \n',
    },
    toString: function () {
        let str = ""
        for (let x in diagram.parts) {
            let part = diagram.parts[x]
            str = str + part
        }
        return str
    },
    draw: function () {
        console.log(diagram.toString())

        if (diagram.chart){
            diagram.chart.clean()
        }

        diagram.chart = flowchart.parse(diagram.toString());

        diagram.chart.drawSVG('diagram', {
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
                'end': {
                    'class': 'end-element'
                }
            },
            // even flowstate support ;-)
            'flowstate': {
                // 'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                'current': { 'fill': 'yellow', 'font-color': 'red', 'font-weight': 'bold' },
                // 'future' : { 'fill' : '#FFFF99'},
                'request': { 'fill': 'blue' }//,
                // 'invalid': {'fill' : '#444444'},
                // 'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                // 'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
            }
        });

    }
}

export { sleep, diagram }
