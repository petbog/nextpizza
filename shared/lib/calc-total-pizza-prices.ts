import { Ingredients, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constans/pizza";

/**
 * Функция для подсчета общей стоимости пиццы
 *
 * @param type - тип теста выбранной пиццы
 * @param size - размер выбранной пиццы
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @returns number общую стоимость
 */



export const calcTotalPizzaPrice = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredients[],
    selectedIngredients: Set<number> 
) => {

    //стоимость размера пицц
    const pizzaPrice =
        items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
    //стоимость ингредиентов
    const totalIngredientsPrice = ingredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0)

    return pizzaPrice + totalIngredientsPrice
}