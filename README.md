# Desafio de cadastro de veículo 2.0

Um desafio onde devemos criar um ambiente utilizando TypeScript, NodeJS, Postgres e Docker e criar uma api que permitira cadastrar, buscar e editar os dados de um cadastro de veículo.

Conteúdo que deve ser desenvolvido.
- Obrigatório usar Dockercompose.yml;
- Criar e manter os dados usando "volumes" no docker;
- Usar Express;
- Conter as operações "GET, POST, PUT e DELETE";
- Buscar por Id do veículo;
- Conter uma tabela chamada "Carro";
- Conter os campos "Placa, Ano, Modelo, Ativo e Marca"


| :placard: API em NodeJS |     |
| -------------  | --- |
| :sparkles: Nome        | **Desafio de cadastro de veículo 2.0**
| :label: Tecnologias | TypeScript, NodeJs, Jest

## Project setup
Rode os comandos a seguir para executar o projeto.

```
cd .\api\
```
```
yarn install
```

### Migrate

Abra um novo terminal e acesse a pasta backend-api do projeto para executar os passos a seguir.

Certifique-se de ter acessado a pasta "backend-api" ou rode o comando ```cd .\api\``` no terminal.

Altere o campo "DB_HOST" no arquivo ".env" de "postgres_container" para "localhost", salve e execute os comandos a seguir para criar a tabela e preencher com alguns dados iniciais:

```
yarn migration:run
```
```
yarn seed
```

Após isso, volte o campo "DB_HOST" no arquivo ".env" para "postgres_container" e salve o arquivo.

Fazendo isso, é para funcionar.

Agora rode o comando abaixo para colocar a api para rodar e pronto.

### Docker Compose
```
docker-compose up
```
