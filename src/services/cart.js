
//quais ações meu carrinho pode fazer

//CASOS DE USO 
//-> adicionar item no carinho
async function addItem(userCart, item){
 userCart.push(item)
}

//calcular o total

async function calculateTotal(userCart){
    console.log("\nShopee Cart TOTAL IS:")
    
    const result = userCart.reduce(
        (total, item) => total + item.subtotal(),
        0
    )

    console.log(`🎁 Total: ${result}`)
    return result
}




//-> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1 ){
        userCart.splice(index, 1)
    }

}

//Remover item do carrinho - diminui um item

async function removeItem(userCart, index){
    const deleteIndex = index - 1
 
    // é maior do que zero e se é menor do que o tamanho do carrinho
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1)

    }

}


async function displaycart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item,index) => {
       console.log(`${index + 1}. ${item.name} - R$ ${item.price} | 
        ${item.quantity           
        }x | Subtotal = ${item.subtotal()}`) 
    })

}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart
}
