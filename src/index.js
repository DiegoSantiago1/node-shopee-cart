import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem(
    "Hot Wheels Ferrari",
    20.99,
    1
)

const item2 = await createItem(
    "Hot Wheels Lamborghini",
    39.99,
    3
)

const item3 = await createItem(
    "Hot Wheels Porsche",
    25.50,
    2
)

// adiciona itens
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item3)

// exibe carrinho
await cartService.displaycart(myCart)

// calcula total
await cartService.calculateTotal(myCart)

// remove uma unidade do item 2
await cartService.removeItem(myCart, 2)

console.log("\nApós remover uma unidade:")

await cartService.displaycart(myCart)

await cartService.calculateTotal(myCart)