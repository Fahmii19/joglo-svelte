FROM node AS builder

WORKDIR /app

ARG VITE_BASE_URL
ARG VITE_SOCKET_URL

# Set ENV from file .env.production
RUN touch .env.production && \
    echo "VITE_BASE_URL=$VITE_BASE_URL" >> .env.production && \
    echo "VITE_SOCKET_URL=$VITE_SOCKET_URL" >> .env.production

COPY . .

RUN npm i pnpm -g

RUN pnpm i

RUN pnpm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/htaccess_config /usr/share/nginx/html/.htaccess

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
