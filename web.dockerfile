FROM node:16.20.1
WORKDIR /var/www
COPY web .
CMD [ "npm", "run", "dev" ]