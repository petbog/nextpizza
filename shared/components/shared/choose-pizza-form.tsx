'use client';

import React from 'react';
import { Ingredients, ProductItem } from '@prisma/client';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './ProductImage';
import { GroupVariants } from './group-variants';
import { pizzaSizes } from '@/shared/constans/pizza';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredients[];
  items?: ProductItem[];
  loading?: boolean;
  className?: string;
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  // onSubmit,
  className,
}) => {



  const textDetaills = 'top pizza'
  const totalPrice = '350'
  const size = 30

  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
        <PizzaImage imageUrl={imageUrl} size={size} />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

        <GroupVariants items={pizzaSizes}/>
        <div className="flex flex-col gap-4 mt-5">
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {/* {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
              onClick={() => addIngredient(ingredient.id)}
              active={selectedIngredients.has(ingredient.id)}
              />
            ))} */}
          </div>
        </div>

        <Button
          // loading={loading}
          // onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
