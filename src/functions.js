

function saludo(name) {
  console.log('hola desde function', name)
  function despedida() {
    console.log('despedir', name)
  }
  despedida()
}

function contador() {
  this.seg = 0
  let self = this.seg
  setInterval(function () {
    number++
    this.seg++
    console.log(this.seg)
    console.log('number', number)
  }, 1000);

}


function contador2() {
  this.seg = 0
  let number = 0
  setInterval(() => {
    number++
    this.seg++
    console.log('this.seg', this.seg)
    console.log('number', number)
  }, 1000);

}
contador2()
///binding 
/// what is this js
//contador()



const saludar = (name) => {
  console.log('saludo desde flecha ', name)
}
