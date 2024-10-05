import prisma from "@/lib/prisma"
// import { sleep } from "@/utils/sleep"

export async function getProductBySlog(slug: string) {
  try {
    // await sleep(3)
    const product = await prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true
          }
        }
      },
      where: {
        slug: slug
      }
    })
    if (!product) return null

    const { ProductImage, ...rest } = product 

    return {
      ...rest,
      images: ProductImage.map(image => image.url)
    }
  } catch {
    throw new Error('Error al obtener el producto por slug')
  }
}