import { prisma } from "@/prisma/prisma-client"
import { NextRequest, NextResponse } from "next/server"




export async function GET() {
    const users = await prisma.user.findMany()

    return NextResponse.json(
        users
    )
}

export async function POST(req: NextRequest) {
    //получение данных при создание
    const body = await req.json()
    //создание юзера в призме 
    const user = await prisma.user.create({
        data: body
    })
    //при после создания юзер возвращается
    return NextResponse.json(user)
}