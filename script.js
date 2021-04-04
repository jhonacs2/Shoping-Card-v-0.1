const main = document.querySelector('#menu');
const totalPrize = document.querySelector('#total-prize')
const buttonBuy = document.querySelector('#comprar')
console.log(buttonBuy)
let addtotal = 0;
const productos =[
    {
        nombre:'Harina',
        precio: 35,
    },
    {
        nombre:'Pan',
        precio: 25,
    },
    {
        nombre:'Papa',
        precio: 52,
    },
    {
        nombre:'palta',
        precio: 55,
    },
    {
        nombre:'Fideos',
        precio: 85,
    },
    {
        nombre:'Aceite',
        precio: 350,
    },
    {
        nombre:'Sopa',
        precio: 86,
    },
    {
        nombre:'Mermelada',
        precio: 108,
    },
    {
        nombre:'Porotos',
        precio: 69,
    },
    {
        nombre:'lentejas',
        precio: 85,
    },
    {
        nombre:'Mandarina',
        precio: 43,
    },
    {
        nombre:'banana',
        precio: 79,
    },
    {
        nombre:'leche de almendras',
        precio: 145,
    },
    {
        nombre:'papel hihienico',
        precio: 147,
    },
    {
        nombre:'Lavandina',
        precio: 55,
    },
    {
        nombre:'Alcohol en gel',
        precio: 123,
    },
    {
        nombre:'Shampoo',
        precio: 400,
    },
    {
        nombre:'Arroz',
        precio: 66,
    },
    
] 

buttonBuy.addEventListener('click', getTotal);

const createElementDom = () => {
    productos.forEach(function(comida,index){
        const card = document.createElement('div');
        const img = document.createElement('img');
        const container = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const button = document.createElement('input')
        img.src ='https://www.seekpng.com/png/detail/524-5248604_comida-icono-png-iconos-de-comida-png.png';
        img.style.width= '100%';
        main.appendChild(card);
        card.classList.add('card');
        card.appendChild(img);
        card.appendChild(container);
        container.classList.add('container')
        container.appendChild(h4);
        h4.textContent = comida.nombre;
        container.appendChild(p);
        p.appendChild(span)
        p.textContent = `Precio ${span.textContent = comida.precio} $`;
        container.appendChild(button);
        button.type = 'button';
        button.classList.add('buttons')
        button.value = 'Add-Cart'
    });
    additem();
}

function additem(){
    const addItemButton = document.querySelectorAll('.buttons');
    const containerTable = document.querySelector('.table-fill');
    
    // console.log(containerTable)
    addItemButton.forEach(function(addCart,index) {
        addCart.addEventListener('click', () => {
            const tr = document.createElement('tr');
            const tdOne = document.createElement('td');
            const tdTwo = document.createElement('td');

            containerTable.appendChild(tr);
            tr.appendChild(tdOne);
            tdOne.classList.add('text-left');
            tr.appendChild(tdTwo);
            tdTwo.classList.add('text-left')
            tdOne.textContent = productos[index].nombre;
            tdTwo.textContent = `$ ${productos[index].precio}`;
            total = productos[index].precio;
            refreshPrize(total);
            addCart.disabled = true;

        })
    })
}


function getTotal() {
    const visibility = document.querySelector('.visibility');
    visibility.classList.remove('visibility');
    main.style.pointerEvents = 'none';

    
}

function refreshPrize(sumTotal) {
    let total = 0;
    totalPrize.textContent = addtotal+sumTotal;
    addtotal = sumTotal + addtotal;
}

window.addEventListener('load',createElementDom)