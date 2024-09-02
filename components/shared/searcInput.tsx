'use client'

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';


interface SearchInputProps {
  className?: string
}

export const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const [searchQuery, setSarchQuery] = useState<string>('')
  const [focused, setFocused] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])
  const ref = useRef(null)


  useClickAway(ref, () => {
    setFocused(false)
  })



  useEffect(() => {
    Api.products.search(searchQuery).then(items => {
      setProducts(items)
    })
  }, [searchQuery])

  return (
    <>
      {focused && <div className='fixed top-0 bottom-0 right-0  left-0 bg-black/50 z-30' />}
      <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          type="text"
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          placeholder='Найти пиццу....'
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSarchQuery(e.target.value)}
        />
        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-12',
          )}>

          {
            products.map((product) => (
              <Link
                key={product.id}
                className=" flex items-center gap-3 px-3 py-2 hover:bg-primary/10 "
                href={`/producе/${product.id}`}>
                <img className={cn('rounded-sm h-8 w-8', className)} src={product.imageUrl } alt={product.name}/>
                <div>
                  {product.name}
                </div>
              </Link>
            ))
          }
        </div>

      </div>
    </>
  );
};
