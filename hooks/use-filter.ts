import { Api } from '@/services/api-client';
import { Ingredients } from '@prisma/client';
import React from 'react';
import { useSet } from 'react-use';

interface ReturnProps {
  ingredients: Ingredients[],
  loading: boolean,
  selectedIngredients: Set<string>,
  onAddId: (id: string) => void
}

export const useIngredients = (ids?: string[]): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredients[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedIngredients, { toggle }] = useSet(new Set<string>([]))


  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);


  const setSelectedIngredients = (ids: string[]) => {
    ids.forEach(selectedIngredients.add)
  }

  return {
    ingredients,
    loading,
    onAddId: toggle, selectedIngredients
  };
};
