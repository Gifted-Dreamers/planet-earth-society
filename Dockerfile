FROM node:22-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate
COPY package.json pnpm-lock.yaml .prettierrc .prettierignore tsconfig.json tsconfig.node.json vite.config.ts components.json ./
COPY patches/ ./patches/
COPY client/ ./client/
COPY server/ ./server/
COPY shared/ ./shared/
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM node:22-alpine AS runner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate
COPY package.json pnpm-lock.yaml ./
COPY patches/ ./patches/
RUN pnpm install --frozen-lockfile --prod
COPY --from=builder /app/dist ./dist
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
USER node
CMD ["node", "dist/index.js"]
