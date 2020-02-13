# Micro-serviço com Node.js

- Utilizando Apache Kafka;
- Utilizando Node;

## Aplicações

- API principal;
- Geração de certificado;

##  Fluxo da aplicação

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposta (síncrona/assíncrona);

Se conseguir síncrona/assíncrona:

- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;

##  O que sabemos?

- REST(latência)
- REDIS / RabbitMQ / **Kafka**(Nubank, Uber, Paypal e Netflix);

