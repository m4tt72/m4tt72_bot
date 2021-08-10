# Personal Assistant Telegram Bot

The repository of my personal assistant telegram bot

## Run

**Production**

```bash
docker build -t m4tt72/telegram-bot .
docker run -d --name telegram-bot --restart unless-stopped m4tt72/telegram-bot:latest
```

