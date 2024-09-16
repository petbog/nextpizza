
import { prisma } from "@/prisma/prisma-client";
import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/shared/components/shared";



export default async function Home() {


  //вместе  с категориями отдает продукты 
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        }
      }
    }
  })

  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />



      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">


          {/* фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">

              {
                categories.map((category) => (
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      categoryId={category.id}
                      title={category.name}
                      items={category.products}
                    />
                  )
                ))
              }
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}
