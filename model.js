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
        .attr('r', 25)
        .attr('cx', (d, i) => 5000)
        .attr('cy', (d, i) => i * 5.2 + 30)
        .attr('opacity', 0.8)
        .attr('class', d => d.catgegory)
        .on('mouseover', mouseOver)
        .on('mouseout', mouseOut)
}

function draw_halo() {
    reset_canvas();
    init_charts(halo_data);

    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 25)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(26))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()

    d3.select('#infobox').append('h1').text('Halo')
    d3.select('#infobox').append('p').text('Symbols of radiance. Among these may be a halo around the head or whole body, a flame at the top of the head, or a gold-covered surface.')
}

function draw_ushnisha() {
    reset_canvas();
    init_charts(ushnisha_data);


    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 25)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(26))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()

    d3.select('#infobox').append('h1').text('Ushnisha')
    d3.select('#infobox').append('p').text('Superhuman physical characteristics such as very large size, a lump on the top of the head sometimes said to indicate extraordinary wisdom.')
}

function draw_earlobe() {
    reset_canvas();
    init_charts(earlobe_data);

    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 25)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(26))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()

    d3.select('#infobox').append('h1').text('Earlobe')
    d3.select('#infobox').append('p').text('Long earlobes, stretched during the years when the Buddha-to-be, as a prince, wore heavy earrings.')
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

    let imgs = [
        '/img/abhaya.png',
        '/img/abhiseka.png',
        '/img/anjali.png',
        '/img/bhumisparsha.png',
        '/img/dharmachakra.png',
        '/img/dhyana.png',
        '/img/kataka.png',
        '/img/vajra.png',
        '/img/varada.png',
        '/img/vitarka.png'
    ];

    d3.select('#infobox').append('h1').text('Mudra')
    imgs.forEach(function(d, i) {
        d3.select('#infobox').append('img')
            .attr('src', d)
            .attr('height', 75)
            .attr('width', 75)
            .on('mouseover', function(d) {
                d3.select(this).style("cursor", "pointer");
            })
            .on('mouseout', function(d) {
                d3.select(this).style("cursor", "default");
            })
            .on('click', function() {
                let mudra, text;
                switch (i) {
                    case 0:
                        mudra = 'abhaya'
                        text = 'The gesture of fearlessness, which dispels fear. The right hand is held upright, and the palm is facing outwards.This is one of the earliest mudrās found depicted on a number of Buddhism artworks.It is also the most common mudra in the Smithsonian collection'
                        break;
                    case 1:
                        mudra = 'abhiseka'
                        text = 'Abheseka means "bathing of the divinity to whom worship is offered."It is a religious rite or method of prayer in which a devotee pours a liquid offering on an image or murti of a God or Goddess. The abhiṣeka was originally used as a consecration rite. Water from the four oceans was poured out of golden jars onto the head of royalty. '
                        break;
                    case 2:
                        mudra = 'anjali'
                        text = 'This mudra is widely used in the parts of Southeast Asia where Indian religions are strong. It is used as a greeting. Namaste is usually spoken with a slight bow and hands pressed together, palms touching and fingers pointing upwards, thumbs close to the chest. '
                        break;
                    case 3:
                        mudra = 'bhumisparsha'
                        text = 'Also called "earth witness" mudra is one of the most common iconic images of Buddhism. Other names include "Buddha calling the earth to witness", and "earth-touching". It depicts the story from the Buddhist legend of the moment when Buddha achieved complete enlightenment, with Buddha sitting in meditation with his left hand, palm upright, in his lap, and his right hand touching the earth. '
                        break;
                    case 4:
                        mudra = 'dharmachakra'
                        text = 'Dharmachakra in Sanskrit means the Wheel of Dharma. This mudra symbolizes one of the most important moments in the life of Buddha, the occasion when he preached to his companions the first sermon after his Enlightenment in the Deer Park at Sarnath. It thus denotes the setting into motion of the Wheel of the teaching of the Dharma.'
                        break;
                    case 5:
                        mudra = 'dhyana';
                        text = 'Also called the meditation mudra",it is the gesture of meditation. The two hands are placed on the lap, left hand on right with fingers fully stretched (four fingers resting on each other and the thumbs facing upwards towards one another diagonally), palms facing upwards; in this manner, the hands and fingers form the shape of a triangle, which is symbolic of the spiritual fire'
                        break;
                    case 6:
                        mudra = 'kataka';
                        text = 'Meaning  “link in a chain” in  English,  Kataka-mukha Mudra is the twelfth hand gesture of the 28 single-hand mudras as described in the mythology.  This mudra originated from Guha when he practiced archery in front of Shiva. Appears more in dancing scenes including “plucking flowers”,“wearing a necklace of pearls or flowers”,“preparing paste for musk ”etc.'
                        break;
                    case 7:
                        mudra = 'vajra';
                        text = 'The Vajra mudrā "thunder gesture" is the gesture of knowledge. In vajra Mudra, the index finger is extended straight while rest 3 fingertips pressed against the thumb. The extended index finger denotes the fiery thunderbolt weapon or Vajra. It is a weapon with which ignorance can transform into wisdom. '
                        break;
                    case 8:
                        mudra = 'varada';
                        text = 'This mudra signifies offering, welcome, charity, giving, compassion, and sincerity. It is nearly always shown made with the left hand by a revered figure devoted to human salvation from greed, anger, and delusion. The Varada mudrā is rarely seen without another mudra used by the right hand. In Smithsonian collections, it often appears with the Abhaya mudra.'
                        break;
                    case 9:
                        mudra = 'vitarka';
                        text = 'The Vitarka mudrā "mudra of discussion" is the gesture of discussion and transmission of Buddhist teaching. It is done by joining the tips of the thumb and the index together, and keeping the other fingers straight very much like the abhaya and varada mudrās but with the thumbs touching the index fingers.'
                        break;
                }
                d3.selectAll('circle').filter(function(d) {
                        return d.category != mudra
                    })
                    .attr('opacity', 0)
                    .on('mouseover', function() {})
                    .on('mouseout', function() {})

                d3.selectAll('circle').filter(function(d) {
                        return d.category == mudra
                    })
                    .attr('opacity', 0.8)
                    .on('mouseover', mouseOver)
                    .on('mouseout', mouseOut)
                d3.select('#mudratext').text(text)
            })
    })
    d3.select('#infobox').append('p').text('a symbolic or ritual gesture or pose in Buddhism, most are performed with the hands and fingers. A Buddha image can have one of several common mudras, combined with different asanas. The main mudras used represent specific moments in the life of Buddha').attr('id', 'mudratext')
}

function draw_lotus() {
    reset_canvas();
    init_charts(lotus_data);

    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 25)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(26))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()

    d3.select('#infobox').append('h1').text('Lotus')
    d3.select('#infobox').append('p').text('According to the Buddhist teachings, just as the lotus rises up from the depths of muddy ponds and lakes to blossom immaculately above the water’s surface, so too can the human heart or mind develop the virtues of the Buddha and transcend desire and attachment to reveal its essentially pure nature.')
}

function draw_animal() {
    reset_canvas();
    init_charts(animal_data);

    let svg = d3.select("#charts").select('svg')

    svg.selectAll('circle')
        .transition().duration(300).delay((d, i) => i * 5)
        .attr('r', 25)
        .attr('fill', function(d) {
            return "url(#" + d.rank + ")"
        })

    simulation
        .force('charge', d3.forceManyBody().strength([2]))
        .force('forceX', d3.forceX(chart_x))
        .force('forceY', d3.forceY(chart_y))
        .force('collide', d3.forceCollide(26))
        .alphaDecay([0.02])

    simulation.alpha(0.5).restart()

    let imgs = [
        '/img/6_animals/3_white/deer.png',
        '/img/6_animals/3_white/elephant.png',
        '/img/6_animals/3_white/lions.png',
        '/img/6_animals/3_white/monkey.png',
    ];

    d3.select('#infobox').append('h1').text('Little companions')
    imgs.forEach(function(d, i) {
        d3.select('#infobox').append('img')
            .attr('src', d)
            .attr('height', 50)
            .attr('width', 50)
            .attr('opacity', 0.30)
            .on('mouseover', function(d) {
                d3.select(this).style("cursor", "pointer");
            })
            .on('mouseout', function(d) {
                d3.select(this).style("cursor", "default");
            })
            .on('click', function() {
                let animal, text;
                switch (i) {
                    case 0:
                        animal = 'deer'
                        text = 'In Buddhism, the deer symbolizes harmony, happiness, peace and longevity. When a male and a female deer are represented together (often beside the Dharma wheel) it is a direct allusion to the first teachings of Buddha near Varanasi.A very important scene in Buddhism art. '
                        break;
                    case 1:
                        animal = 'elephant'
                        text = 'In Buddhism, the elephant is seen as an earthly manifestation of the qualities embodied in the Buddha himself. Even at his inception, Buddha was linked to the elephant. ... A classic symbol of strength, patience, loyalty and wisdom, the elephant epitomizes the boundless powers of the Buddha.'
                        break;
                    case 2:
                        animal = 'lions'
                        text = 'The lion references the Buddha, formerly Shakyamuni, a member of the Shakya (lion) clan. The lion is also a symbol of royalty and leadership and oftentimes in Buddism art, the Buddisava follows Buddha, called Manjuri, riding a lion. '
                        break;
                    case 3:
                        animal = 'monkey'
                        text = 'According to Buddhist principles, the “monkey mind” is a term that refers to being unsettled, restless, or confused. ... It is also the part of your brain that becomes easily distracted, so if you want to get anything done in life, your challenge will be to shut down the monkey mind'
                        break;
                }
                d3.selectAll('circle').filter(function(d) {
                        return d.category != animal
                    })
                    .attr('opacity', 0)
                    .on('mouseover', function() {})
                    .on('mouseout', function() {})

                d3.selectAll('circle').filter(function(d) {
                        return d.category == animal
                    })
                    .attr('opacity', 0.8)
                    .on('mouseover', mouseOver)
                    .on('mouseout', mouseOut)
                d3.select('#animaltext').text(text)
            })

    })
    d3.select('#infobox').append('p').text('Animals have always been regarded in Buddhist thought as sentient beings. Furthermore, animals possess Buddha nature and therefore potential for enlightenment. Moreover, the doctrine of rebirth held that any human could be reborn as animal, and any animal could be reborn as a human.').attr('id', 'animaltext')
}

function reset_canvas() {
    d3.select('svg').remove();
    d3.select('#infobox').html('');
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
        .style('display', 'relative')
        .html(`<strong>Name:</strong> ${d.name} 
            <br> <strong>Mudra:</strong> ${(d.category)} 
            <br> <strong>Material:</strong> ${d.material}`)
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
        'scene.gltf',
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

// why!!!!!!!!!!!not!!!!!!!!!!!!!working!!!!!!!!!!!!!!
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

    // whyyyy!!!!!!!!!!!!!!!!! 
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
        .to({ x: -6, y: 1, z: 10, rx: 0, ry: 0 }, 1000)
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
        .to({ x: -1, y: 3.5, z: 5, rx: 0, ry: 52 }, 1000)
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
        .to({ x: -1, y: 1, z: 5, rx: 0, ry: 52 }, 1000)
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
        .to({ x: -8.5, y: 1, z: 8, rx: 0, ry: -25 }, 1000)
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
        .to({ x: -6, y: -2, z: 10, rx: 5, ry: 0 }, 1000)
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