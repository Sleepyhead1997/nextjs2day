'use server'
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient

export default async function Create (formData: FormData) {
    const name = formData.get('name') as string;
    const price = formData.get('price') as string;

    await prisma.product.create ({
        data:{
            name: name,
            price: parseFloat(price)
        }
    })
}