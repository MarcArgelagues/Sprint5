let reportAcudits=[];
let definitiuAcudits=[];
let primeraVegada=true;

document.getElementById("1").style.display = "none";
document.getElementById("2").style.display = "none";
document.getElementById("3").style.display = "none";

async function mostraAcudit() {
  const random = Math.random();
  let response;
  let data;
  if (random < 0.5) {
    response = await fetch('https://api.chucknorris.io/jokes/random');
    data = await response.json();
    document.getElementById("acudit2").innerHTML = data.value;
   
  } else {
    response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json',
      }
    });
    data = await response.json();
    document.getElementById("acudit2").innerHTML = data.joke;

 
  }
  if (reportAcudits.length>0) {
  definitiuAcudits.push(reportAcudits)}
  else{}
 
}
console.log(definitiuAcudits)


function mostraBotons() {
  
  document.getElementById("1").style.display = "inline-block";
  document.getElementById("2").style.display = "inline-block";
  document.getElementById("3").style.display = "inline-block";
}


function pushAcudit (joke, score) {
  reportAcudits=[]
    const date = new Date().toISOString();
    const dadaAcudit = { joke, score, date };
    if (score =false){
      return reportAcudits=[];
    } else { 
      reportAcudits.push(dadaAcudit);
    }
   
  }

  function temps(){ 
    fetch('https://www.el-tiempo.net/api/json/v2/home')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        const barcelonaData = data.ciudades.find(ciudad => ciudad.name === 'Barcelona');
        if (barcelonaData) {
          const {temperatures, stateSky } = barcelonaData;
          if(stateSky.description===stateSky.description){
          document.getElementById("meteo").innerHTML = `${temperatures.max}ºC | <img src="../sprint5/img/1821978.png">`;
          }
          //A tall d'exemple. Altres descripcions anirien relacionades amb altres imatges i else ifs canviant stateSkydescription
          //per la descripció corresponent p.ex. "Intervalos Nubosos"
        } else {
          console.error("No s'han trobat dades per Barcelona");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  temps();


  
