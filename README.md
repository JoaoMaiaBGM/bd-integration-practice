# bd-integration-practice

## Introdução

Nessa aula, refatoramos nosso projeto e vimos como conectar nosso projeto com um BD.

## Chegou a hora de colocar esse conhecimento em prática.

Use os conceitos aprendidos para criar um projeto e conectar a um BD postgres.

No seu BD, adicione uma tabela chamada users e nela, adicione as seguintes chaves:

ID Que seja incremental
email com no máximo 180 caracteres
name com no máximo 256 caracteres
password com no máximo 180 caracteres
Depois disso, crie rotas para Criação e Listagem de usuários.

Na rota `POST-/users/signup` você devera criar um usuário, utilizando o seguindo body:

```
                    POST: /users/signup
{
  "email": "user@email.com",
  "name": "user",
  "password": "1234"
}
```

```
{
  "id": 1
  "email": "user@email.com",
  "name": "user",
}
                      Status: 201 created
```

<br>

Na rota `GET-/users` você devera listar os usuários.

```
                      GET: /users
                    status: 200 ok
  [
    {
      "id": 1
      "email": "user@email.com",
      "name": "user",
}
    },
    {
        "id": 2
        "email": "daniel@kenzie.com",
        "name": "daniel",
    },
  ]
```
