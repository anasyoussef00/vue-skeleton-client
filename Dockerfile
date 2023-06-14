FROM node:alpine AS builder
LABEL authors="Anas Youssef El Mahdad"
MAINTAINER Anas Youssef El Mahdad <anasyoussef.elmahdad00@proton.me>

WORKDIR /srv/app/

COPY . .

RUN yarn
#RUN yarn test:unit && yarn test:e2e
#RUN yarn format
RUN yarn build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /srv/app/dist/ /usr/share/nginx/html/
