# JavaScript Messenger [![Build Status](https://travis-ci.org/tinakuzmenko/js-messenger.svg?branch=master)](https://travis-ci.org/tinakuzmenko/js-messenger)
A simple JS messenger prototype. The task was originally taken from [HTML Academy interactive courses](https://htmlacademy.ru/courses) and then was complemented and re-designed by [Kristina Kuzmenko](https://github.com/tinakuzmenko).

## View online how it works:

You can view and try the project online [here](https://tinakuzmenko.github.io/js-messenger/).

## How to start a project locally:

Install project on local computer ([node.js](https://nodejs.org/en/) required): 

```
npm i
```

Run project:

```
npm run start
```

Run tests:

```
npm test
```

Create optimized production build for the project:

```
npm run build
```

This project has `.travis.yml` config for auto check and deploy to GitHub Pages.

## Task:

> You need to create a messenger. How the program should work:
>
>  * The message template is in the template tag with the `message-template` identifier.
>  * In the message block (`chat-message` class) there should be a message text, a delete button and a username.
>  * A new message is added to the end of the container with the class `chat-content`.
>  * To add a new message, you need to enter text in the input field (`chat-form-input`) and click the button "Send".
>  * To delete a message, click on the button with the chat message (the element with class `chat-message-button`). This button appears when you hover over a message.
