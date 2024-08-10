# TTTAI - Terrific Themed Tinder AI app

I will mainly follow the tutorial, with a few changes. Instead of the usual Tinder app, I will try to make it easy to
implement different themes to chose from - cats, dogs etc. This will be more fun than a Tinder app.

## Links

* [Java Brains YouTube video](https://www.youtube.com/watch?v=k3fSQpz2Esg)
* [Spring Initializer](https://start.spring.io)
* [Ollama](https://ollama.com)
* [Bulma](https://bulma.io)
* [FontAwesome](https://fontawesome.com)
* [Google Fonts](https://fonts.google.com)

## Backend

I will probably not make any big changes here. Just adjust the models where needed.

### Application Properties

I'm using a local property file instead of an environment variable.

Create a file in ***src/main/resources*** called `application-local.properties`. It should look something like this:

```
spring.application.name=terrific-themed-tinder-ai-backend
spring.ai.openai.api-key=<ADD YOUR KEY HERE>
```

Don't forget to add Your own values.

## Frontend

I will use FontAwesome Pro icons. And try out the Bulma css framework. I will also use Google fonts.