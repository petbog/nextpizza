'use client'
import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input, Skeleton } from '../ui';
import { cn } from '@/shared/lib/utils';

type Item = FilterCheckboxProps

interface checkboxFiltersGroupProps {
    title: string,
    className?: string,
    items: Item[],
    defaultItems?: Item[],
    limit?: number,
    loading?: boolean
    searchInputPlasecholder?: string,
    onClickCheckbox?: (id: string) => void,
    defaultValues?: string,
    selected?: Set<string>,
    name?:string
}

export const CheckboxFiltersGroup: React.FC<checkboxFiltersGroupProps> = ({
    title,
    items,
    defaultValues,
    limit = 5,
    searchInputPlasecholder = 'Поиск...',
    className,
    onClickCheckbox,
    defaultItems,
    loading,
    selected,
    name

}) => {

    const [showAll, setShowAll] = useState<boolean>(false)
    const [searhValue, setSearhValue] = useState('')


    const onChanheSearchinput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearhValue(e.target.value)
    }



    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searhValue.toLocaleLowerCase())) : (defaultItems || items)?.slice(0, limit)

    if (loading) {
        return <div className="">
            <p className="font-bold mb-3">{title}</p>
            {
                ...Array(limit).fill(0).map((_, index) => (
                    <>
                        <Skeleton key={index} className='h-6 mb-3 rounded-sm-[8px]' />
                    </>
                ))
            }
        </div>
    }

    return (
        <div className={cn('', className)}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && <div className="mb-5">
                <Input onChange={e => onChanheSearchinput(e)} placeholder={searchInputPlasecholder} className='bg-gray-50 border-none' />
            </div>
            }
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {
                    list.map((item, index) => (
                        <FilterCheckbox
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={selected?.has(item.value)}
                            onCheckedChange={() => onClickCheckbox?.(item.value)}
                            name={name}
                        />
                    ))
                }
            </div>
            {
                items.length > limit && (
                    <div className={showAll ? `border-t border-t-neutral-100 mt-4` : ''}>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-primary mt-3"
                        >
                            {showAll ? 'Скрыть' : '+ Показать все'}
                        </button>
                    </div>
                )
            }
        </div>
    );
};
