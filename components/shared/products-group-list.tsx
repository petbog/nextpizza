import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { ProductCard } from './product-card';

interface ProductsGroupListProps {
    title: string,
    items: any[],
    className?: string,
    listClassName?: string,
    categoryId: number
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({ className, title, items, listClassName, categoryId }) => {
    return (
        <div className={cn('', className)}>
            <Title text='title' className='font-extrabold mb-5' size='lg' />


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
