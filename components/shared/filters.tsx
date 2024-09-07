'use client'
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useIngredients } from '@/hooks/use-filter';
import { useSet } from 'react-use';
import qs from 'qs'
import { useRouter, useSearchParams } from 'next/navigation';



interface Props {
    className?: string
}

interface PriceProps {
    priceFrom?: number,
    priceTo?: number
}

interface QueryFilters extends PriceProps {
    pizzaTypes: string,
    sizes: string,
    ingredients: string
}

export const Filters: React.FC<Props> = ({ className }) => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>
    const router = useRouter()
    const { ingredients, loading, onAddId, selectedIngredients } = useIngredients(searchParams.get('ingredients')?.split(','))


    const [prices, setPrice] = useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
    })
    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []))


    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []))

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }))


    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value
        }
        )
    }

    console.log(searchParams, 999)
    useEffect(() => {
        const filters = {
            ...prices,
            pizzaTypes: Array.from(pizzaTypes),
            sizes: Array.from(sizes),
            ingredients: Array.from(selectedIngredients)
        }

        const query = qs.stringify(filters, { arrayFormat: 'comma' })
        router.push(`?${query}`, {
            scroll: false
        })
    }, [router, prices, sizes, pizzaTypes, selectedIngredients])

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
                    prices.priceFrom || 0,
                    prices.priceTo || 1000
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

        </div>
    );
};
