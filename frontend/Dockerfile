from node:11.15.0 as build

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
#COPY package.json /package.json

RUN npm install
RUN npm -g install react-scripts

ADD src /usr/src/app/src
ADD public /usr/src/app/public

#RUN npm build

CMD [ "npm", "start"]