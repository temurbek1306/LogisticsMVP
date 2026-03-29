import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: undefined | PrismaClient
}

export const getPrisma = (): PrismaClient => {
  const prisma = globalThis.prisma ?? new PrismaClient()
  if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
  return prisma
}

export default getPrisma
