import { Ingredients, ProductItem } from "@prisma/client"
import { calcTotalPizzaPrice } from "./calc-total-pizza-prices"
import { mapPizzaType, PizzaSize, PizzaType } from "../constans/pizza"




export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredients[],
    selectedIngredients: Set<number>
) => {
    const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)
    const textDetaills = `${size} см,${mapPizzaType[type]} пицца`


    return {
        totalPrice,
        textDetaills
    }
}