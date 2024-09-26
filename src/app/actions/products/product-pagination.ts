'use server'

import prisma from "@/lib/prisma"
import { Gender } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender
}

async function getProducts(take: number, page: number, gender?: Gender) {
  if (gender) {
    return await prisma.product.findMany({
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true
          }
        }
      },
      take: take,
      skip: (page - 1) * take,
      where: {
        gender: gender
      }
    })
  }
  return await prisma.product.findMany({
    include: {
      ProductImage: {
        take: 2,
        select: {
          url: true
        }
      }
    },
    take: take,
    skip: (page - 1) * take,
  })
}

async function countProducts(gender?: Gender) {

  if (gender) {
    return await prisma.product.count({ where: { gender: gender } })
  }
  return await prisma.product.count({})
}

export const getPaginatedProductsWithImages = async ({ page = 1, take = 12, gender }: PaginationOptions) => {

  if (isNaN(Number(page)) || page < 1) page = 1
  if (isNaN(Number(take)) || take < 1) take = 12

  try {
    const [products, totalProducts] = await Promise.all([
      getProducts(take, page, gender),
      countProducts(gender)
    ])
    const totalPages = Math.ceil(totalProducts / take)

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map(({ ProductImage, categoryId, ...product }) => ({
        ...product,
        images: ProductImage.map(image => image.url),
        type: categoryId
      }))
    }

  } catch (err) {
    throw new Error('No se pudo cargar los productos')
  }
}