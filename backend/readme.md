<p align="center">
    <img alt="BeTheHero" title="#delicinha" src="../.github/logo.svg" width="250px" />
</p>

# Backend
Esta parte do projeto é responsável pela criação do Banco de Dados e a comunicação deste com o Frontend e o Backend. Também possui um teste unitário e de integração, utilizando o **Jest** e validação de envio utilizado o **Celebrate**. A API é criada usando o **Express**.

## Para rodar a aplicação:
```shell
  $ npm install
  $ npm start
```

---

## KNEX - Banco de dados
Migration é o nome dos arquivos que criam os bancos de dados e tabelas.
Configuração básica:

```json
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },
```

## Para criar o Banco de Dados
```shell
npx knex init
npx knex migrate:make create_orgs // Cria banco
npx knex migrate:latest // Cria tabelas dos arquivos migrate
```

---

## Sobre o projeto

O **Be The Hero** é um projeto que visa ajudar instituições que possam estar em dificuldades financeiras. Através do cadastro de ocorrências a instituição expõe o seu problema, mostrando o valor, e um usuário disposto a ajudar pode entrar em contato.

