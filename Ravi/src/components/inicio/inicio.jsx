
import './app.css';
import Ravi from "../../img/ravi.png";
import Dado from "../../img/dado.png";
import Dado1 from "../../img/dado1.png";
import Dado2 from "../../img/dado2.png";
import Dado3 from "../../img/dado3.png";
import Dado4 from "../../img/dado4.png";
import Dado5 from "../../img/dado5.png";
import Dado6 from "../../img/dado6.png";
import Morinoikari from "../../img/MnI.png";

function App() {
 
  function Roletar(){
    let resultado = document.querySelector("#dado")
    let random = Math.floor(Math.random() * 6) + 1;

    if(random==1){
      resultado.setAttribute("src", `${Dado1}`)
    }
    else if(random==2){
      resultado.setAttribute("src", `${Dado2}`)
    }
    else if(random==3){
      resultado.setAttribute("src", `${Dado3}`)
    }
    else if(random==4){
      resultado.setAttribute("src", `${Dado4}`)
    }
    else if(random==5){
      resultado.setAttribute("src", `${Dado5}`)
    }
    else{
      resultado.setAttribute("src", `${Dado6}`)
    }
 }
 let resistencia = 14
 let mana = resistencia*7
 let forca = 5
 let destreza = 10
 let controle=4
 let armadura = 0
 let MnI = 0

let pdl = (controle*resistencia)+destreza+forca

 function primeiraForma(){

    let dado = Math.floor(Math.random() * 6)+1;
    let resultado = document.querySelector("#Pforma")
    let manaGasta = Math. ceil(mana*0.20)
    let calculo = manaGasta + forca + 2 + dado
    if(dado==6){
        calculo = calculo*2
    }
    
    resultado.innerHTML=calculo
}
 

function segundaforma(){
    
    let dado = Math.floor(Math.random() * 6)+1;
    let resultadod = document.querySelector("#Sforma")
    let manaGasta = Math. ceil(mana*0.20)
    let calculo = manaGasta + destreza + 2 + dado
   
   

    resultadod.innerHTML=calculo
}
function terceiraforma(){
    
  let dado = Math.floor(Math.random() * 6)+1;
  let resultadod = document.querySelector("#Tforma")
  let manaGasta = Math. ceil(mana*0.20)
  let calculo = manaGasta + controle + 2 + dado

  resultadod.innerHTML=calculo
}

function quartaforma(){
    
  let dado = Math.floor(Math.random() * 20)+1;
  let resultadod = document.querySelector("#Qforma")


  resultadod.innerHTML=dado
}

function rage(){
  let destr= document.querySelector("#D")
  let icon= document.querySelector("#raviicon")
  let forma= document.querySelector("#mni")
    if(MnI==1){
    destreza= destreza/2
    MnI = 0
    destr.style.color="black"
    
    icon.setAttribute("src", `${Ravi}`)
    forma.setAttribute("src", `${Morinoikari}`)
    if(perm==1){
      destr.innerHTML=`${destreza}`
    }
    document.querySelector("#pdl").innerHTML=pdl
    }
    else{
        destreza= destreza*2
        MnI = 1
        destr.style.color="red"
        if(perm==1){
          destr.innerHTML=`${destreza}`
         
        }
        document.querySelector("#pdl").innerHTML=(controle*resistencia)+destreza+forca
        icon.setAttribute("src", `${Morinoikari}`)
        forma.setAttribute("src", `${Ravi}`)
    }
  }

  let perm = 0

    function safe(){
    let vidanumero = document.querySelector("#pvn")
    let mananumero = document.querySelector("#mpn")
    let resist= document.querySelector("#R")
    let forc = document.querySelector("#F")
    let destr = document.querySelector("#D")
    let control= document.querySelector("#C")
    let armor= document.querySelector("#A")
    if(perm==0){
      resist.innerHTML=`${resistencia}`
      forc.innerHTML=`${forca}`
      destr.innerHTML=`${destreza}`
      control.innerHTML=`${controle}`
      armor.innerHTML=`${armadura}`
      perm=1
      vidanumero.value=resistencia*5
      mananumero.value=resistencia*7
    }else{
      resist.innerHTML= "-"
      forc.innerHTML= "-" 
      destr.innerHTML= "-"
      control.innerHTML= "-"
      armor.innerHTML= "-"
      perm = 0
      vidanumero.value=100
      mananumero.value=100
    }
    
    }

    
  return (
    
<div className='App'>

<div className='container'>
  <div class="row text-center">
    <div class="col">
    <div>
      <div>
      <img src={Ravi} id='raviicon' alt="" />
      <div class="col-5" id='pdls'>
      <p id='pdl'>PODER DE LUTA: {pdl}</p>
      </div>
      </div>
     

      <div id='status'>
        <div id="vida">
        <p id="pv" ><strong>Vida:</strong></p>
        <input id="pvn" placeholder="100" />
        </div>
        <br />
        <div id="mana">
        <p id="mp" ><strong>Mana:</strong></p>
        <input id="mpn" placeholder="100"  />
        </div>
      </div>
    </div>

<div id='atributos'>
  <p><strong>Atributos</strong></p>

  <table class="table table-borderless" id='tabela'>
  <tr>
  <td>Resistência</td>
    <td id='R'>-</td>
    
  </tr>
  <tr>
  <td>Força</td>
    <td id='F'>-</td>
  </tr>
  <tr>
  <td>Destreza</td>
    <td id='D'>-</td>
  
  </tr>
  <tr>
  <td>Controle</td>
    <td id='C'>-</td>
   
  </tr>
  <tr>
  <td>Armadura</td>
    <td id='A'>-</td>
  </tr>
</table>
<button onClick={safe} id='safebtn'>SafeMode</button>
</div>
    </div>


    <div id="meio" class="col-6">
      <div>
      <img src={Dado} id='dado' alt="" />
      
      </div>

      <div >
      <button id='btnRoll' onClick={Roletar}>Roletar</button>
      </div>
   
    <div id='lamina'>
    <div class="sep">
    <input class="laminaforma" type="button" name="Pforma" onClick={primeiraForma} value="Primeira forma: Dragão"/> <label htmlFor='Pforma' id="Pforma"> 0</label>
    </div>
    <div class="sep">
    <input class="laminaforma" type="button" name="Sforma" onClick={segundaforma} value="Segunda forma: Tigre"/> <label htmlFor='Sforma' id="Sforma">0</label>
    </div>
    <div class="sep">
    <input class="laminaforma" type="button" name="Tforma" onClick={terceiraforma} value="Terceira forma: Fenix"/> <label htmlFor='Tforma' id="Tforma">0</label>
    </div>
    <div class="sep">
    <input class="laminaforma" type="button" name="Qforma" onClick={quartaforma} value="Quarta forma: Tartaruga"/> <label htmlFor='Qforma' id="Qforma">0</label>
    </div>
    </div>

  
    </div>







    <div class="col">
      <div>
      <img src={Morinoikari} id="mni" onClick={rage} alt="" />
      </div>
  
    </div>




  </div>
</div>
</div>
  )
}

export default App