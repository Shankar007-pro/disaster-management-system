FROM node:18-alpine

WORKDIR /app

COPY ./frontend /app/frontend

RUN cd frontend && npm install && npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "frontend/build", "-l", "3000"]
