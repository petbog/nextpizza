import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";



export async function GET() {

    //достаем данные с призмы
    const ingredients = await prisma.ingredient.findMany()

    //отдаем данные через NextResponse в формате json
    return NextResponse.json(ingredients)
}