FROM node:17

WORKDIR /app

COPY . /app

RUN cd frontend
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]