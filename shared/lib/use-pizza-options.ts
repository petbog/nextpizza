import { useEffect, useState } from "react"
import { Variant } from "../components/shared/group-variants"
import { PizzaSize, PizzaType } from "../constans/pizza"
import { useSet } from "react-use"
import { getAvaiblePizzaSizzas } from "./get-avaible-pizza-sizzes"
import { ProductItem } from "@prisma/client"



interface ReturnProps {
    size: PizzaSize,
    type: PizzaType,
    addIngredient: (id: number) => void
    setSize: (size: PizzaSize) => void
    setType: (type: PizzaType) => void
    selectedIngredients: Set<number>,
    availableSizzes:Variant[]
}


export const usePizzaOptions = (items:ProductItem[]): ReturnProps => {

    const [size, setSize] = useState<PizzaSize>(20)
    const [type, setType] = useState<PizzaType>(1)
    const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]))
    const availableSizzes = getAvaiblePizzaSizzas(items, type)

    useEffect(() => {
        const isAvaibleSize = availableSizzes?.find((item) => Number(item.value) === size && !item.disabled)
        const availableSize = availableSizzes?.find((item) => !item.disabled)


        if (!isAvaibleSize && availableSize) {
            setSize(Number(availableSize.value) as PizzaSize)
        }
    }, [type])

    return {
        size,
        type,
        setSize,
        setType,
        selectedIngredients,
        addIngredient,
        availableSizzes
    }
}