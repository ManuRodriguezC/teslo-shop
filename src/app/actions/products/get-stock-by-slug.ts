'use server'
import prisma from "@/lib/prisma";

export async function stockBySlug(slug: string) {
    try {

        const stock =  await prisma.product.findFirst({
            where: { slug },
            select: {inStock: true}
        })
        return stock?.inStock ?? 0
    } catch (error) {
        return 0
    }
}