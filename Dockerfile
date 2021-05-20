
FROM node:lts-alpine

RUN apk add tzdata
RUN cp /usr/share/zoneinfo/America/Recife /etc/localtime
RUN echo "America/Recife" >  /etc/timezone
RUN apk del tzdata

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

ENV PORT 3001

EXPOSE 3001

CMD ["yarn", "dev"]