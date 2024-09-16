import React from 'react';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface ProductCardProps {
    id: number,
    name: string,
    price: number,
    imageUrl: string
    className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl, className }) => {
    return (
        <div className={cn('', className)}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img src={imageUrl} alt="name" className="w-[215px] h-[215px]" />
                </div>
                <Title text={name} className='mb-1 mt-3 font-bold ' size='sm' />

                <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias quos id soluta nulla repellat reiciendis veritatis sit, accusantium ipsa a, quas eaque nobis corporis optio perspiciatis consectetur molestiae excepturi?
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-[20px]">
                        от <b>{price}</b>
                    </span>

                    <Button variant='secondary' className='text-base font-bold'>
                        <Plus size={20} className=' mr-1' />
                        Добавить
                    </Button>
                </div>
            </Link>
        </div>
    );
};
