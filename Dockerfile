FROM node:8.10.0-alpine
LABEL author="Ivan Kipyegon"
RUN mkdir -p /usr/src/app
RUN chown node /usr/src/app/
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
USER node
COPY --chown=node:node . .
EXPOSE 8080
CMD [ "npm", "run", "start" ]
