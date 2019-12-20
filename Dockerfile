FROM node:12.6.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#COPY node_modules node_modules
COPY package.json .
RUN yarn
COPY dist . 

EXPOSE 443 3000

CMD [ "yarn", "start:prod" ]