import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';


interface Props {
    className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('', className)}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

            {/* верхние чекбоксы */}

            <div className="flex flex-col gap-4">
                <FilterCheckbox text='Можно собрать' value='1' />
                <FilterCheckbox text='Новинка' value='2' />
            </div>

            {/* фильтр цен */}

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
                    <Input type='number' placeholder='1000' min={100} max={1000} />
                </div>

                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>
            <CheckboxFiltersGroup
                title='Ингредиенты:'
                className='mt-5'
                limit={6}
                defaultItems={[
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                ]}
                items={[
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    }, {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    }, {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'ches sous',
                        value: '1'
                    },
                    {
                        text: 'борщ',
                        value: '1'
                    },
                ]}
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
