'use client'
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useIngredients } from '@/hooks/use-filter';
import { useSet } from 'react-use';



interface Props {
    className?: string
}

interface PriceProps {
    priceFrom: number,
    priceTo: number
}

export const Filters: React.FC<Props> = ({ className }) => {

    const { ingredients, loading, onAddId, selectedIngredients } = useIngredients()
    const [prices, setPrice] = useState<PriceProps>({ priceFrom: 0, priceTo: 1000 })
    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }))


    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value
        }
        )
    }

    useEffect(() => {
        console.log({ prices, sizes, pizzaTypes, selectedIngredients })
    }, [prices, sizes, pizzaTypes, selectedIngredients])

    return (
        <div className={cn('', className)}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

            {/* верхние чекбоксы */}

            <CheckboxFiltersGroup
                title="Тип теста"
                name="PizzaType"
                className="mb-5"
                onClickCheckbox={togglePizzaTypes}
                selected={pizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },
                ]}
            />
            <CheckboxFiltersGroup
                title="Размеры"
                name="sizes"
                className="mb-5"
                onClickCheckbox={toggleSizes}
                selected={sizes}
                items={[
                    { text: '20', value: '20' },
                    { text: '30', value: '30' },
                    { text: '40', value: '40' },
                ]}
            />


            {/* фильтр цен */}

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type='number' placeholder='0' min={0} max={1000} value={String(prices.priceFrom)} onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} />
                    <Input type='number' placeholder='1000' min={100} max={1000} value={String(prices.priceTo)} onChange={(e) => updatePrice('priceTo', Number(e.target.value))} />
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[
                    prices.priceFrom,
                    prices.priceTo
                ]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
                />
            </div>
            <CheckboxFiltersGroup
                name='ingredients'
                loading={loading}
                title='Ингредиенты:'
                className='mt-5'
                limit={6}
                defaultItems={
                    items.slice(0, 6)
                }
                items={
                    items
                }
                onClickCheckbox={onAddId}
                selected={selectedIngredients}
            />

            {/* нижние чекбоксы */}

            <Title text='Тип теста' size='sm' className='mb-5 font-bold mt-4' />
            <div className="flex flex-col gap-4 ">
                <FilterCheckbox text='Традиционное' value='1' />
                <FilterCheckbox text='Тонкое' value='2' />
            </div>
        </div>
    );
};
