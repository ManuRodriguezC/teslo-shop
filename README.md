# Teslo Shop

## Descripcion

## Correr en Dev

1. Clonar el repositorio.
2. Crear un copia de  ``` .env.template ``` y renombrar ``` .env ``` y cambiar los valores de las varibles.
3. Instalar las dependencias ``` npm install ```.
4. Levantar la base de datos ``` docker compose up -d ```.
5. Correr las migraciones de Prisma ``` npx prisma migrate dev ```
6. Correr el Proyecto con ``` npm run dev ```.