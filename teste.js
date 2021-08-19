
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




// let lista = ['tv','radio','carro']

// lista.forEach(data =>{
//     addElement(data)
// })

// function addElement(name){
//     let ul = document.getElementById('lista')
//     let li = document.createElement('li')
//     // let name = document.getElementById('txtName').value 

//     li.appendChild(document.createTextNode(name))
//     ul.appendChild(li)
// }




