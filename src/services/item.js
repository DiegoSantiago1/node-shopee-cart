//CASOS DE USO DOS ITENS

//-> criar item com subtotal automático
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,

        subtotal: () => {
            return price * quantity
        }
    }
}

export default createItem