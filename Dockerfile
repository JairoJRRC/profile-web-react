FROM node:12.13.1

WORKDIR /home/node/app

COPY app/. /home/node/app/.

EXPOSE 80
COPY ./entrypoint.sh /tmp
RUN chmod +x /tmp/entrypoint.sh
ENTRYPOINT /tmp/entrypoint.sh