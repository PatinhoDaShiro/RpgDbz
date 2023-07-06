
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
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  function Roletar() {
    let resultado = document.querySelector("#dado")
    let random = Math.floor(Math.random() * 6) + 1;

    if (random == 1) {
      resultado.setAttribute("src", `${Dado1}`)
    }
    else if (random == 2) {
      resultado.setAttribute("src", `${Dado2}`)
    }
    else if (random == 3) {
      resultado.setAttribute("src", `${Dado3}`)
    }
    else if (random == 4) {
      resultado.setAttribute("src", `${Dado4}`)
    }
    else if (random == 5) {
      resultado.setAttribute("src", `${Dado5}`)
    }
    else {
      resultado.setAttribute("src", `${Dado6}`)
    }
  }
  let resistencia = 20
  let mana = resistencia * 7
  let forca = 5
  let destreza = 11
  let controle = 14
  let armadura = 0
  let MnI = 0
  let manaAtual = mana
  let pdl = (controle * resistencia) + destreza + forca
  let calculo=0
  let manaGasta = Math.ceil(mana * 0.20)
  let manaGastara=0

  
  const [manacon, setMana] = useState(manaAtual)
  


  function calcMana(){
    if(manaGasta-controle <= manaGasta/2){

      manaGastara = manaGasta/2
     
      if(manacon>=manaGastara){
        manaAtual = manacon - manaGastara
        setMana(manaAtual)
        console.log(manaAtual)
      }else{
        calculo=0
      }

    }else{

      manaGastara = manaGasta-(manaGasta-controle)
      
      if(manacon>=manaGastara){
        manaAtual = manacon-manaGastara
        
        setMana(manaAtual)
        console.log(manacon, manaAtual)

      }else{
        
        calculo=0
      }
    }
   
  }
  
  function primeiraForma() {
    if(manaAtual==0){
      let resultado = document.querySelector("#Pforma")
      resultado.innerHTML = 0
    }else{
      let dado = Math.floor(Math.random() * 6) + 1;
      let resultado = document.querySelector("#Pforma")
  
     
       calculo = manaGasta + forca + 2 + controle + dado
      if (dado == 6) {
        calculo = calculo * 2
      }
      calcMana()
      resultado.innerHTML = calculo
    }
   
  }


  function segundaforma() {

    let dado = Math.floor(Math.random() * 6) + 1;
    let resultadod = document.querySelector("#Sforma")
 
    calculo = manaGasta + destreza + 2 +controle + dado
    
    calcMana()
    resultadod.innerHTML = calculo
  }
  function terceiraforma() {
    let dado = Math.floor(Math.random() * 6) + 1;
    let resultadod = document.querySelector("#Tforma")

    calculo = manaGasta + controle + 2 + dado + controle

    calcMana()

     

    resultadod.innerHTML = calculo
  }

  function quartaforma() {
    let dado = Math.floor(Math.random() * 20) + 1;
    let resultadod = document.querySelector("#Qforma")


    resultadod.innerHTML = dado
  }

  function rage() {
    let destr = document.querySelector("#D")
    let icon = document.querySelector("#raviicon")
    let forma = document.querySelector("#mni")
    if (MnI == 1) {
      destreza = destreza / 2
      MnI = 0
      destr.style.color = "black"

      icon.setAttribute("src", `${Ravi}`)
      forma.setAttribute("src", `${Morinoikari}`)
      if (perm == 1) {
        destr.innerHTML = `${destreza}`
      }
      document.querySelector("#pdl").innerHTML = pdl
    }
    else {
      destreza = destreza * 2
      MnI = 1
      destr.style.color = "red"
      if (perm == 1) {
        destr.innerHTML = `${destreza}`
      }
      document.querySelector("#pdl").innerHTML = (controle * resistencia) + destreza + forca
      icon.setAttribute("src", `${Morinoikari}`)
      forma.setAttribute("src", `${Ravi}`)
    }
  }

let perm = 0
  function safe() {
    
    let resist = document.querySelector("#R")
    let forc = document.querySelector("#F")
    let destr = document.querySelector("#D")
    let control = document.querySelector("#C")
    let armor = document.querySelector("#A")
    
    
    if (perm == 0) {
      resist.innerHTML = `${resistencia}`
      forc.innerHTML = `${forca}`
      destr.innerHTML = `${destreza}`
      control.innerHTML = `${controle}`
      armor.innerHTML = `${armadura}`
      setShowElemento(false)
      setShowElement(true)
      setShowElementPV(false)
      setShowElementpvs(true)
      
      perm = 1
    } else {
      resist.innerHTML = "-"
      forc.innerHTML = "-"
      destr.innerHTML = "-"
      control.innerHTML = "-"
      armor.innerHTML = "-"
      
      setShowElemento(true)
      setShowElement(false)
      setShowElementPV(true)
      setShowElementpvs(false)
      
      perm = 0
    }

  }
  const [showElement, setShowElement] = useState(false)
  const [showElemento, setShowElemento] = useState(true)
  const [showElementPV, setShowElementPV] = useState(true)
  const [showElementpvs, setShowElementpvs] = useState(false)
  
  return (

    <div className='App'>

      <div className='container'>
        <div className="row text-center">
          <div className="col">
            <div>
              <div>
                <img src={Ravi} id='raviicon' alt="" />
                <div className="col-5" id='pdls'>
                  <p id='pdl'>PODER DE LUTA: {pdl}</p>
                </div>
              </div>


              <div id='status'>
                <div id="vida">
                  <p id="pv" ><strong>Vida:</strong></p>
                  
                  { showElementPV ? <input className="pvn" id='pvn' placeholder={resistencia*5} />  : null } 
                  { showElementpvs ? <input className="pvn" placeholder="100" />  : null }
                </div>
                <br />
                <div id="mana">
                  <p id="mp" ><strong>Mana:</strong></p>
                  
                  { showElement ? <input className="mpn" id='managast' placeholder={manacon} /> : null } 
                  { showElemento ? <input className="mpn" placeholder="100" /> : null }
                  
                </div>
              </div>
            </div>

            <div id='atributos'>
              <p><strong>Atributos</strong></p>

              <table className="table table-borderless" id='tabela'>
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
          <div id="meio" className="col-6">
            <div>
              <img src={Dado} id='dado' alt="" />
            </div>
            <div >
              <button id='btnRoll' onClick={Roletar}>Roletar</button>
            </div>
            <div id='lamina'>
              <div className="sep">
                <input className="laminaforma" type="button" name="Pforma" onClick={primeiraForma} value="Primeira forma: Dragão" /> <label htmlFor='Pforma' id="Pforma"> 0</label>
              </div>
              <div className="sep">
                <input className="laminaforma" type="button" name="Sforma" onClick={segundaforma} value="Segunda forma: Tigre" /> <label htmlFor='Sforma' id="Sforma">0</label>
              </div>
              <div className="sep">
                <input className="laminaforma" type="button" name="Tforma" onClick={terceiraforma} value="Terceira forma: Fenix" /> <label htmlFor='Tforma' id="Tforma">0</label>
              </div>
              <div className="sep">
                <input className="laminaforma" type="button" name="Qforma" onClick={quartaforma} value="Quarta forma: Tartaruga" /> <label htmlFor='Qforma' id="Qforma">0</label>
              </div>
            </div>
          </div>
          <div className="col">
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