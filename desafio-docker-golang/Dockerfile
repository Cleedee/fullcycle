FROM golang:1.22.2 as build-stage

WORKDIR /src

COPY . .

RUN go mod download

RUN go build -o main .

FROM scratch

COPY --from=build-stage /src/main /bin

CMD main
