let solarSystem = createSolarSystem();


solarSystem.newPlanet();
let sun = solarSystem.planets[0];
sun.color = "yellow";
sun.planetRadius = 50;
sun.orbitRadius = 0;

sun.newPlanet();
let earth = sun.planets[0];
earth.color = "blue";
earth.planetRadius = 25;
earth.orbitRadius = 200;

earth.newPlanet();
let earthMoon = earth.planets[0];
earthMoon.color = "lightblue";
earthMoon.planetRadius = 10;
earthMoon.orbitRadius = 30;

sun.newPlanet();
let mars = sun.planets[1];
(mars).color = 'red';
mars.planetRadius = 20;
mars.orbitRadius = 40;

sun.newPlanet();
let tree = sun.planets[2];
(tree).color = 'green';
tree.planetRadius = 30;
tree.orbitRadius = 100;

sun.newPlanet();
let hales = sun.planets[3];
(hales).color = 'pink';
hales.planetRadius = 25;
hales.orbitRadius = 300;

sun.newPlanet();
let giants = sun.planets[4];
(giants).color = 'orange';
giants.planetRadius = 40;
giants.orbitRadius = 85;

sun.newPlanet();
let grape = sun.planets[5];
(grape).color = 'purple';
grape.planetRadius = 20;
grape.orbitRadius = 60;

sun.newPlanet();
let dirt = sun.planets[6];
(dirt).color = 'brown';
dirt.planetRadius = 50;
dirt.orbitRadius = 120;

sun.newPlanet();
let dolphin = sun.planets[7];
(dolphin).color = 'teal';
dolphin.planetRadius = 20;
dolphin.orbitRadius = 90;



//Leave this line here, don't change it! setInterval might be a fun thing to Google!
setInterval(function () { orbitPlanets(solarSystem);}, 20);
