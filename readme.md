# Graphql API with Node.js, PostgreSQL with Sequelize ORM

> A Basic Node.js project

## Build Setup

```bash
# install dependencies
npm install

# serve at http://localhost:3000/graphql

npm start
```

## Prerequisites

-   Nodejs
-   Postgresql

**Migrations:**

```bash
npx sequelize-cli migration:generate --name models

npm run db:migrate
OR
npx sequelize-cli db:migrate
```

**Request:**

```gql
mutation register {
    register(
        input: {
            email: "elon@tesla.com"
            password: "test@1234"
            name: "Elon Musk"
        }
    ) {
        id
        name
        email
    }
}

mutation login {
    login(input: { email: "elon@tesla.com", password: "test@1234" }) {
        id
        name
        email
        token
    }
}

mutation createPost {
    createPost(title: "Graphql", content: "Graphql API with Sequelize") {
        id
        title
        content
        createdAt
    }
}

query allPosts {
    getAllPosts {
        id
        title
        content
        author {
            id
            name
        }
        comments {
            id
            content
        }
    }
}

query singlePost {
    getSinglePost(postId: 1) {
        id
        title
        content
        author {
            name
        }
    }
}

mutation createComment {
    createComment(content: "Great Work Man", postId: 1) {
        id
        content
        createdAt
    }
}
```

**Authorization:**

```
{
  "Authorization": "Bearer token"
}

```
