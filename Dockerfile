FROM node:20.5.1-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm cache clean --force
RUN npm install
RUN npm install next
#RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "dev"]