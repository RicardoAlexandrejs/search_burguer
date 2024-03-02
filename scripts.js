const list = document.querySelector("ul") // primeiro mapeo o elemento que irá receber os itens
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSumAll= document.querySelector(".sum-all")
const buttonFilterAll= document.querySelector(".filter-all")

function formatCurrency(value) {
    const newValue= value.toLocaleString("pt-br",
    {
        style:"currency",
        currency:"BRL",
    })
    return newValue
}


function showAll(productsArray) {
    let myLi = "" // criei uma variavel para armazenar os dados do foreach e zerar toda vez for chamada a função
    productsArray.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <P class="item-price">R$ ${formatCurrency(product.price)}</P>
            </li>
    `
    })
    list.innerHTML = myLi // exibo o resultado do foreach dentro da lista
    //console.log(myLi) apenas para visualizar 
}
function mapAllitens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,//SPREAD OPERATION - serve para não repetir os campos do array que não mudaram
        price: product.price * 0.9,// dar 10% de desconto
    }))
    //apenas para teste console.log(newPrices)
    showAll(newPrices)
}

function sumAllItens() {
    const valueTotal= menuOptions.reduce((acc,curr)=>acc + curr.price,0)
    list.innerHTML=`
    
    <li>      
                <P> O valor total dos produtos é   ${formatCurrency(valueTotal)}</P>
            </li>
    `
}

function filterAllItens() {
  const filterJustVegan= menuOptions.filter((product)=>product.vegan===true)
  //não é necessário colocar === true ele considera true
  showAll(filterJustVegan)
}

buttonShowAll.addEventListener("click", ()=>showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllitens)
buttonSumAll.addEventListener("click", sumAllItens)
buttonFilterAll.addEventListener("click", filterAllItens)

