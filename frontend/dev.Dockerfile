from node:16

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /package.json

RUN yarn install 

CMD yarn start