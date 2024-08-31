import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
    //извлечение query парамметров
    const query =  req.nextUrl.searchParams.get('query') || '';

    const products = await prisma.product.findMany({
        //поиск по ключевому слову 
        where: {
            //name: query делает строгое сравнение 
            // name: query
            name: {
                //работает как includes
                contains: query,
                //чувствительность в регистру
                mode:'insensitive'
            }
        },
        take:5
    })
    return NextResponse.json(products)
}
