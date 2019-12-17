FROM node:12.13.1

WORKDIR /usr/src/app

COPY app/. /usr/src/app/.

RUN npm install --silent
# RUN npm install react-scripts@3.0.1 -g --silent

CMD ["npm", "start"]