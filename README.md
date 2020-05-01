# Prisma 2 Demo 🏮

This project is an exploration of Primsa 2 with AWS Lambda + Apollo Server

So far this project uses MySQL locally and supports one mutation.

It works with Aurora Serverless.

## Whats needed 😌

* Yarn
* Serverless Framework
* AWS Account
* Your VPC on AWS
* Own Aurora Serverless cluster
* MySQL installed locally on your machine


This [tutorial](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-node-mysql) was used to make this project. 

## Instalation 💾

First clone the repo:

```
$ git clone https://github.com/AmoDinho/prisma2-f1-demo.git
```

Then you need to cd into the repo:

```
$ cd prisma-f1-demo
```

Install the projects dependancies:

```
$ yarn install
```


Then open GraphQL Playgroud to execute the queries available on the schema:

```
$ sls offline 
```
