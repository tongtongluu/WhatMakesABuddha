//circle groups based on sections
let halo_data, ushnisha_data, earlobe_data, mudra_data, lotus_data, animal_data
let simulation, nodes

const chart_x = 1450;
const chart_y = 500;

d3.selection.prototype.moveToFront = function() {
    return this.each(function() {
        this.parentNode.appendChild(this);
    });
};

d3.selection.prototype.moveToBack = function() {
    return this.each(function() {
        var firstChild = this.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.insertBefore(this, firstChild);
        }
    });
};

function load_data() {

    d3.csv('data/halos.csv', function(d) {
        return {
            rank: d.rank,
            image_path: d.image_path,
            name: d.name,
            category: d.category,
            origin: d.origin,
            medium: d.medium
        };
    }).then(data => {
        halo_data = data
    })

    d3.csv('data/ushnishas.csv', function(d) {
        return {
            rank: d.rank,
            image_path: d.image_path,
            name: d.name,
            category: d.category,
            origin: d.origin,
            medium: d.medium
        };
    }).then(data => {
        ushnisha_data = data
    })

    d3.csv('data/earlobes.csv', function(d) {
        return {
            rank: d.rank,
            image_path: d.image_path,
            name: d.name,
            category: d.category,
            origin: d.origin,
            medium: d.medium
        };
    }).then(data => {
        earlobe_data = data
    })

    d3.csv('data/mudras.csv', function(d) {
        return {
            rank: d.rank,
            image_path: d.image_path,
            name: d.name,
            category: d.category,
            origin: d.origin,
            medium: d.medium
        };
    }).then(data => {
        mudra_data = data
    })

    d3.csv('data/lotuses.csv', function(d) {
        return {
            rank: d.rank,
            image_path: d.image_path,
            name: d.name,
            category: d.category,
            origin: d.origin,
            medium: d.medium
        };
    }).then(data => {
        lotus_data = data
    })

    d3.csv('data/animals.csv', function(d) {
        return {
            rank: d.rank,
            image_path: d.image_path,
            name: d.name,
            category: d.category,
            origin: d.origin,
            medium: d.medium
        };
    }).then(data => {
        animal_data = data
    })

}

function init_charts(dataset) {
    let svg = d3.select("#charts")
        .append('svg')
        .attr('width', 1720)
        .attr('height', 1080)
        .attr('opacity', 1)

    var defs = svg.append("defs");

    simulation = d3.forceSimulation(dataset)

    // Define each tick of simulation
    simulation.on('tick', () => {
        nodes
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
    })

    // Stop the simulation until later
    simulation.stop()

    // Selection of all the circles 
    defs.selectAll(".circle-pattern")
        .data(dataset)
        .enter().append("pattern")
        .attr("class", "circle-pattern")
        .attr("id", function(d) {
            return d.rank
        })
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("patternContentUnits", "objectBoundingBox")
        .append("image")
        .attr("height", 1)
        .attr("width", 1)
        .attr("preserveAspectRatio", "none")
        .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
        .attr("xlink:href", function(d) {
            return d.image_path
        })

    nodes = svg
        .selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })
        .attr('r', 15)
        .attr('cx', (d, i) => 5000)
        .attr('cy', (d, i) => i * 5.2 + 30)
        .attr('opacity', 0.8)
        .attr('class', d => d.catgegory)
}

function draw_halo() {
    reset_canvas();
    init_charts(halo_data);

    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 15)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(16))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()
}

function draw_ushnisha() {
    reset_canvas();
    init_charts(ushnisha_data);


    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 15)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(16))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()
}

function draw_earlobe() {
    reset_canvas();
    init_charts(earlobe_data);

    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 15)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(16))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()
}

function draw_mudra() {
    reset_canvas();
    init_charts(mudra_data);

    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 15)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(16))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()
}

function draw_lotus() {
    reset_canvas();
    init_charts(lotus_data);

    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 15)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(16))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()
}

function draw_animal() {
    reset_canvas();
    init_charts(animal_data);

    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 15)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(16))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()
}

function reset_canvas() {
    d3.select('svg').remove();
}

function mouseOver(d, i) {
    d3.select(this).moveToFront();

    d3.select(this)
        .transition('mouseover').duration(1)
        .attr('opacity', 1)
        .attr('r', 100)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    d3.select('#tooltip')
        .style('left', (d3.event.pageX + 100) + 'px')
        .style('top', (d3.event.pageY - 50) + 'px')
        .style('display', 'inline-block')
        .html(`<strong>Name:</strong> ${d.name} 
            <br> <strong>Mudra:</strong> ${(d.mudra)} 
            <br> <strong>Origin:</strong> ${d.origin}`)
}

function mouseOut(d, i) {
    d3.select('#tooltip')
        .style('display', 'none')

    d3.select(this)
        .transition('mouseout').duration(100)
        .attr('opacity', 0.8)
        .attr('r', 15)
}










//3d model//
let camera, scene, renderer;
let geometry, material, mesh;

let width = 1720
let height = 1080

let coords = { x: -6, y: 1, z: 15, rx: 0, ry: 0 }
let sections = document.getElementById('sections');

let model;

const categories = ['abhaya', 'abhiseka', 'anjali', 'bhumisparsha', 'dharmachakra', 'dhyana',
    'kataka', 'prajnaparamita', 'vajra', 'varada', 'vitarka', 'undefined'
]

const categoriesXY = {
    'prajnaparamita': [50, 150, 30, 30],
    'abhaya': [50, 400, 150, 150],
    'abhiseka': [50, 660, 40, 40],
    'anjali': [50, 850, 125, 125],
    'dharmachakra': [350, 850, 60, 60],
    'dhyana': [550, 850, 120, 120],
    'kataka': [750, 850, 40, 40],
    'bhumisparsha': [950, 850, 125, 125],
    'varada': [1225, 400, 150, 150],
    'vajra': [1225, 615, 40, 40],
    'vitarka': [1225, 800, 120, 120],
    'undefined': [1225, 150, 70, 70]
}

const colors = ['#B55237', '#8b938c', '#BC8842', '#C1AB42', '#CF7651', '#536D58', '#E4B061', '#9EAE93', '#BED3C6', '#A6688B', '#6D4F76', '#39556D']

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
    camera.position.z = coords.z;
    camera.position.x = coords.x;
    camera.position.y = coords.y;
    camera.rotation.x = coords.rx;
    camera.rotation.y = coords.ry;

    scene = new THREE.Scene();

    const loader = new THREE.GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    // Load a glTF resource
    loader.load(
        // resource URL
        '/3dmodel/scene.gltf',
        // called when the resource is loaded
        function(gltf) {
            model = gltf.scene;
            model.rotation.y += -70 * Math.PI / 180
            scene.add(model);

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
        },
        // called while loading is progressing
        function(xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function(error) {

            console.log('An error happened');

        }
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor('#101010');
    renderer.setSize(width, height);
    document.getElementById('vis').appendChild(renderer.domElement);

    let activationFunctions = [
        updateMain,
        updateHalo,
        updateUshnisha,
        updateEarlobe,
        updateMudra,
        updateLotus,
        updateAnimals
    ]

    //All the scrolling function
    //Will draw a new graph based on the index provided by the scroll

    let scroll = scroller()
        .container(d3.select('#graphic'))
    scroll()

    let lastIndex, activeIndex = 0

    scroll.on('active', function(index) {
        d3.selectAll('.step')
            .transition().duration(500)
            .style('opacity', function(d, i) { return i === index ? 1 : 0.1; });

        activeIndex = index
        let sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
        let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
        scrolledSections.forEach(i => {
            activationFunctions[i]();
        })
        lastIndex = activeIndex;

    })

    scroll.on('progress', function(index, progress) {
        if (index == 2 & progress > 0.7) {

        }
    })

    load_data();
}

function animate(time) {

    requestAnimationFrame(animate);
    TWEEN.update(time);
    renderer.render(scene, camera);

}
//landing position
function updateMain() {
    let tween = new TWEEN.Tween(coords)
        .to({ x: -6, y: 1, z: 15, rx: 0, ry: 0 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function() {
            camera.position.x = coords.x;
            camera.position.y = coords.y;
            camera.position.z = coords.z;
            camera.rotation.x = coords.rx * Math.PI / 180;
            camera.rotation.y = coords.ry * Math.PI / 180;
        })
        .start();

    reset_canvas();
}
// halo position
function updateHalo() {
    let tween = new TWEEN.Tween(coords)
        .to({ x: -6, y: 1, z: 8, rx: 0, ry: 0 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function() {
            camera.position.x = coords.x;
            camera.position.y = coords.y;
            camera.position.z = coords.z;
            camera.rotation.x = coords.rx * Math.PI / 180;
            camera.rotation.y = coords.ry * Math.PI / 180;
        })
        .start();

    draw_halo();
}

// ushnisha position
function updateUshnisha() {
    let tween = new TWEEN.Tween(coords)
        .to({ x: 0, y: 2, z: 7, rx: 20, ry: 20 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function() {
            camera.position.x = coords.x;
            camera.position.y = coords.y;
            camera.position.z = coords.z;
            camera.rotation.x = coords.rx * Math.PI / 180;
            camera.rotation.y = coords.ry * Math.PI / 180;
            //model.rotation.y = -70 * Math.PI / 180
        })
        .start();    
    draw_ushnisha();
}

function updateEarlobe() {
    let tween = new TWEEN.Tween(coords)
        .to({ x: -6, y: 0, z: 5, rx: 0, ry: 0 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function() {
            camera.position.x = coords.x;
            camera.position.y = coords.y;
            camera.position.z = coords.z;
            camera.rotation.x = coords.rx * Math.PI / 180;
            camera.rotation.y = coords.ry * Math.PI / 180;
        })
        .start();

    draw_earlobe();
}

function updateMudra() {
    let tween = new TWEEN.Tween(coords)
        .to({ x: -6, y: -1, z: 15, rx: 0, ry: 0 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function() {
            camera.position.x = coords.x;
            camera.position.y = coords.y;
            camera.position.z = coords.z;
            camera.rotation.x = coords.rx * Math.PI / 180;
            camera.rotation.y = coords.ry * Math.PI / 180;
        })
        .start();

    draw_mudra();
}

function updateLotus() {
    let tween = new TWEEN.Tween(coords)
        .to({ x: -6, y: -1, z: 15, rx: 0, ry: 0 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function() {
            camera.position.x = coords.x;
            camera.position.y = coords.y;
            camera.position.z = coords.z;
            camera.rotation.x = coords.rx * Math.PI / 180;
            camera.rotation.y = coords.ry * Math.PI / 180;
        })
        .start();

    draw_lotus();
}

function updateAnimals() {
    let tween = new TWEEN.Tween(coords)
        .to({ x: -6, y: -1, z: 15, rx: 0, ry: 0 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function() {
            camera.position.x = coords.x;
            camera.position.y = coords.y;
            camera.position.z = coords.z;
            camera.rotation.x = coords.rx * Math.PI / 180;
            camera.rotation.y = coords.ry * Math.PI / 180;
        })
        .start();

    draw_animal();
}