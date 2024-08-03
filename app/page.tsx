import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";



export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />



      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">


          {/* фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" categoryId={1} items={[{
                id:1,
                name:'pizza',
                imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                price:550,
                items:[{price:550}]
              },{
                id:1,
                name:'pizza',
                imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                price:550,
                items:[{price:550}]
              },{
                id:1,
                name:'pizza',
                imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                price:550,
                items:[{price:550}]
              },{
                id:1,
                name:'pizza',
                imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                price:550,
                items:[{price:550}]
              },{
                id:1,
                name:'pizza',
                imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                price:550,
                items:[{price:550}]
              },{
                id:1,
                name:'pizza',
                imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                price:550,
                items:[{price:550}]
              },{
                id:1,
                name:'pizza',
                imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                price:550,
                items:[{price:550}]
              },{
                id:1,
                name:'pizza',
                imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                price:550,
                items:[{price:550}]
              }]}/>
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}
