 
 # METODOS HTTP:
- GET: Buscar informação
- POST: Criar informação
- PUT: Alterar informação
- DELETE: Apagar informação

# PARAMETROS
- Query: Parametros nomeados apos ? para filtros e paginação
- Route: Identifica recursos '/algumacoisa"
- Request body: Cria ou altera recursos

# BANCOS DE DADOS
- SQL: MySQL, SQLite, PostgreSQL, Oracle...
- NoSQL: MongoDB, CpuchDB, etc.

# KNEX - Banco de dados
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


```shell
npx knex init
npx knex migrate:make create_orgs // Cria banco
npx knex migrate:latest // Cria tabelas dos arquivos migrate
```


