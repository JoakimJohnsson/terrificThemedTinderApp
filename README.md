# TTTAI - Terrific Themed Tinder AI app

An application based off the brilliant Java Brains Tinder App tutorial. I will mainly follow the tutorial, but make a
few changes. Instead of the usual Tinder app, I will try to make it easy to implement different themes to chose from -
cats, dogs etc. This will be more fun than a Tinder app.

## Links

* [Java Brains YouTube video](https://www.youtube.com/watch?v=k3fSQpz2Esg)
* [Spring Initializer](https://start.spring.io)
* [Ollama](https://ollama.com)
* [Java Brains Ollama video](https://www.youtube.com/watch?v=GP_ugyTJIrg&t=653s)
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
spring.ai.ollama.chat.options.model=llama3.1

# User's profile
tinderai.character.user={id:"user666", firstName:"Some", lastName:"Dude", age:43, ethnicity:"Black", gender:"MALE", bio:"Software engineer, teacher and learner. I like reading and making things.", imageUrl:"", myersBriggsPersonalityType:"INTP"}
```

Don't forget to add Your own values.

### Spring AI - Ollama

I'm using a local installation of Ollama instead of OpenAI.

1. Go to ollama.com and install Ollama.
2. Install Ollama commandline.
3. In terminal run `ollama run llama3.1` to run Llama 3.1 LLM.
4. Make sure you have artifact spring-ai-ollama-spring-boot-starter in your pom.xml. And removed the openAi Spring boot starter. It's not necessary.
5. Make sure you hava property spring.ai.ollama.chat.options.model=llama3.1 in your application-local.properties.

> Note - When using a newer Spring AI version ( > v1.0.0 ) - Use OllamaChatModel instead of OllamaChatClient (As mentioned in tutorial).

Now, if Ollama and Llama 3.1 is running - the application will make local calls instead of to OpenAI api.

## Frontend

I will not create a separate frontend project for this. The React app will use TypeScript and is located
in `src/main/frontend`.

### Font Awesome

I will use Font Awesome pro instead of Lucide React. 

### Bulma
I will use Bulma instead of TailWind.
Bulma can be customized [here](https://bulma.io/documentation/start/alternative-versions/). Adjust and add changes
to `theme.css`. There, I have also added new Google fonts for this project.