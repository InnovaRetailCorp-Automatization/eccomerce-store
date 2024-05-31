FROM node:20.3.1-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm cache clean --force
EXPOSE 3001
CMD ["npm", "run" ,"dev"]


