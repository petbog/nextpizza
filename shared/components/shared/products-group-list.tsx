'use client'

import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/shared/store/category';

interface ProductsGroupListProps {
    title: string,
    items: any[],
    className?: string,
    listClassName?: string,
    categoryId: number
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({ className, title, items, listClassName, categoryId }) => {


    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });


    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting,title,setActiveCategoryId]);



    return (
        <div className={cn('', className)} id={title} ref={intersectionRef}>
            <Title text={title} className='font-extrabold mb-5' size='lg' />


            <div className={cn('grid grid-cols-3 gap-[50px]', className)}>
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
};
