FROM python:alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 8001

CMD ["python", "-m", "http.server", "8001"]
