
let lista = ['tv','radio','carro','doce']

lista.forEach(data =>{
    addElement(data)
})

function addElement(name){
    let div = document.getElementById('lista')
    let h1 = document.createElement('h1')   
    h1.appendChild(document.createTextNode(name))
    div.appendChild(h1)
}

function addElementManual(id){
    let name = document.getElementById(id).value
    addElement(name)
    document.getElementById(id).value = ''
}






