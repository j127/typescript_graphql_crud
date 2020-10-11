# TypeScript GraphSQL CRUD

Requires node 12 (`nvm use`).

From [here](https://www.youtube.com/watch?v=WhzIjYQmWvs).

Example mutation:

```graphql
mutation {
    createMovie(
        options: {
            title: "Hello World III: Night of the nodemon"
            minutes: 255
        }
    ) {
        id
        title
        minutes
    }
}
```

```graphql
mutation {
    updateMovie(
        id: 2
        input: {
            title: "Hello World II: Revenge of the TypeError"
            minutes: 64
        }
    )
}
```
