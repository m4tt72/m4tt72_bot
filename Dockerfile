FROM node:lts-alpine
WORKDIR /bot
LABEL author="Yassine Fathi <yassine@m4tt72.com>"
RUN apk update && apk add ffmpeg curl python chromium
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
RUN chmod a+rx /usr/local/bin/youtube-dl
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build
CMD yarn start
