
const modelos = [
  {
    "id": "berlina",
    "nombre": "Taycan Berlina Deportiva",
    "precio": "Desde EUR 106.252,00 PVP Recomendado",
    "imagenModelo": "./assets/cars/models/taycan-berlina.avif",
    "imagenFrontal": "./assets/cars/front/frente-taycan-berlina.avif",
    "legal": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 19,4 – 16,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,6 – 14,4 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 16,6 – 13,8 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 17,6 – 14,2 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 22,8 – 18,2 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 593 – 824 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 521 – 680 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
    "aceleracion": "4,8",
    "potenciaKw": "300",
    "potenciaCv": "408",
    "velocidad": "230"
  },
  {
    "id": "sport-turismo",
    "nombre": "Taycan Sport Turismo",
    "precio": "Desde EUR 110.000,00 PVP Recomendado",
    "imagenModelo": "./assets/cars/models/taycan-sport.avif",
    "imagenFrontal": "./assets/cars/front/frente-taycan-sport.avif",
    "legal": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 20,2 – 17,5 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,9 – 14,6 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 17,0 – 14,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 18,3 – 14,8 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 24,2 – 19,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 579 – 811 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 496 – 652 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
    "aceleracion": "4,8",
    "potenciaKw": "300",
    "potenciaCv": "408",
    "velocidad": "230"
  },
  {
    "id": "cross-turismo",
    "nombre": "Taycan Cross Turismo",
    "precio": "Desde EUR 115.000,00 PVP Recomendado",
    "imagenModelo": "./assets/cars/models/taycan-cross.avif",
    "imagenFrontal": "./assets/cars/front/frente-taycan-cross.avif",
    "legal": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 21,4 – 18,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 18,8 – 16,7 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 18,4 – 16,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 19,6 – 17,1 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 25,8 – 22,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 611 – 696 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 532 – 614 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
    "aceleracion": "4,7",
    "potenciaKw": "320",
    "potenciaCv": "435",
    "velocidad": "220"
  }
]

const carHero = document.getElementById('carHero');
const nameHero = document.getElementById('nameHero');
const priceHero = document.getElementById('priceHero');
const legalHero = document.getElementById('legalHero');
const speedUp = document.getElementById('speedUp');
const powerkw = document.getElementById('powerkw');
const powerCv = document.getElementById('powerCv');
const speed = document.getElementById('speed');
const carDetails = document.getElementById('carDetails');

function cambiarDatos(coche) {


  switch (coche) {
    case 0:

      carHero.src = modelos[0].imagenModelo;
      carHero.alt = modelos[0].nombre;
      priceHero.textContent = modelos[0].precio;
      legalHero.textContent = modelos[0].legal;
      speedUp.textContent = modelos[0].aceleracion;
      powerkw.textContent = modelos[0].potenciaKw;
      powerCv.textContent = modelos[0].potenciaCv;
      speed.textContent = modelos[0].velocidad;
      carDetails.src = modelos[0].imagenFrontal;
      carDetails.alt = modelos[0].nombre;

      

      break;

    case 1:

      carHero.src = modelos[1].imagenModelo;
      carHero.alt = modelos[1].nombre;
      priceHero.textContent = modelos[1].precio;
      legalHero.textContent = modelos[1].legal;
      speedUp.textContent = modelos[1].aceleracion;
      powerkw.textContent = modelos[1].potenciaKw;
      powerCv.textContent = modelos[1].potenciaCv;
      speed.textContent = modelos[1].velocidad;
      carDetails.src = modelos[1].imagenFrontal;
      carDetails.alt = modelos[1].nombre;


      break;
    case 2:

      carHero.src = modelos[2].imagenModelo;
      carHero.alt = modelos[2].nombre;
      priceHero.textContent = modelos[2].precio;
      legalHero.textContent = modelos[2].legal;
      speedUp.textContent = modelos[2].aceleracion;
      powerkw.textContent = modelos[2].potenciaKw;
      powerCv.textContent = modelos[2].potenciaCv;
      speed.textContent = modelos[2].velocidad;
      carDetails.src = modelos[2].imagenFrontal;
      carDetails.alt = modelos[2].nombre;



      break;
    default:
      break;
  }

}