# Decipher With DevTools

## Create Content

- [x] intro
- [x] console log
- [x] live console
- [x] Identifying elements
- [ ] JS is inline
- [ ] Example of repeated listeners using event listener tab
- [ ] console errors
- [ ] coverage
- [ ] question time and summary

### Intro

Hi everyone, welcome to my webinar on deciphering with devtools.

First, just a very brief intro.

I'm Dave, a student on the 5P course. I have just completed the advanced JS
modules that are presented later in the course, so hopefully my mind is a little
refreshed. That said, I apologise if I stumble at any point and refer to
something in a Pythonic way rather than JS. I will do my best not to!

Many of you will no doubt have noticed me diving in to every topic and every
question I can on Slack. I offer my opinion or thoughts, not the 'correct
answer', and I really encourage you all to do the same. It is through exploring
other people's problems that I have found so many interesting techniques and
skills that help me with my own code.

I had no previous programming knowledge before this course so I know how
daunting JavaScript can be. However, I did come from a background where things
would not always be as you would expect and I would have to use any and every
tool available to me to find the reason for that. In short...I press buttons to
find out what happens and I deal with the resulting carnage in a methodical way.

What I am going to talk about is my approach to debugging and developing JS with
devtools. It is not the only way and it certainly isn't exhaustive so if you
have other ideas and tools and tips, please share them in the channel. The only
competitions during your time at CI are the hackathons (which you should all
take part in) so if you find something that will help your fellow students, I
strongly urge you to share it.

### Console Log

#### What is the console and what is logging?

##### The console

- The console is a command line interface in your browser that can help
  visualise JavaScript.
- If you are using chrome; firefox; or edge on windows, you can open devtools
  using `ctrl` `shift` and `i`. If for any reason that isn't working, google
  'open devtools {browser/OS}'.
- Once devtools is open, find your console tab. This really depends on your
  settings, screen layout etc so if you cant find it, either google it or drop a
  message in the channel with a screenshot.
- With your console open, you have a live interface to work with JS and your
  html document.
- For those that don't know, you can pop your DevTools out into a separate
  window allowing a wider array of screen size testing

##### Logging

- Logging allows you to create a log of various things. It will be displayed in
  the console.
- The console, which is also a JavaScript object, has a method called log().
  This allows you to log out string and variables, or a combination of both.
- This can be done from the browser console, or written directly into your code.
- There are additional methods called `error` and `warn` that allow a different
  style of message to be displayed.
- If you want to get really fancy, you can add CSS to the log messages, but you
  will have to research that yourself.

### The console is live

- As I just mentioned, the console allows you to interact with your document as
  it is presented. This means you can log variables, elements, even entire
  functions, while your document is visible.
- One important use for this is checking the current state or value of a defined
  variable from your script. The last few snippets showed how to print a custom
  string but if we don't add the quotation marks, we will be printing a
  variable. Here we have a variable called `currentScore` and its current value is a `Number` of two.
- This is incredibly useful for those moments when what you think should be
  happening just isn't. Remember, a computer follows an absolute set of rules,
  so as much as you might not like it, the error is yours. If you notice
  something isn't quite right as you are running through your application, log
  out any variables that may be relevant. With a good naming convention, you
  should know the variable names without needing to look them up. The
  console will help you out a little bit here, as you start to type it will
  provide you with suggestions of accessible variables (and functions).
- You can manipulate those variables here too, you can also call your (or even
  define) functions. Anything you can write in your JS file, you can do here.
- Calling a function can be a really useful tool. For my own PP2 I had a
  condition that happened if the user reached 99 guesses and I really didn't
  want to play through my game for that long. Instead, I wrote a test function
  in my JS file and called it to test the condition from the console as it still
  required some essential user input. It modified the variables as necessary to
  simulate the situation that a user had manually input 99 guesses.
- Remember, calling a function is done using parenthesis after its name. If you
  omit them, you will log the actual script of the function.

### Logging Elements

- So far we have done plenty of stuff that could also be done within our JS
  file. It might be a little easier to do it instantly sometimes, rather than
  have to think about exactly when we want to insert a log in the script, but
  now we get to the real big benefit of the console - Elements.
- Most of the time you that are using JS for front end manipulation, you may
  well be wanting to target a specific element. You might be trying to change a
  color, or some content, or any property or attribute for that matter. So how
  do we check this. Well this can't be done that easily away from the console.
  You can't use the pythontutor website for this either, it doesn't work with
  DOM manipulation.
- So, we can log the element. This is so much more powerful than you might first
  think. For this, we are going to view a live website so you can see the
  results first hand and see how useful this can be.

*[engaging with elements](https://daveyjh.github.io/ci-content/devtools.html)*

- `para = document.getElementById("paragraph");`
  - Note that the element can be highlighted by hovering over it.
  - Right click and select 'Reveal in Elements Panel' to go to the element in
    the HTML structure.
- `boxes = document.getElementsByClassName("box");`
  - We return a HTMLCollection, this has a drop down arrow next to it and has a
    vast amount of information.
  - Each item can be interrogated to show its attributes. Note that you can see
    all styles being applied **inline** here. Any applied styles with be
    displayed as the first keys with a numeric value, the key of that style name
    will have the current value.
- `boxes[2].style.backgroundColor = "#f00";`
  - We can change modify attributes here, just as we could modify variables, and
    the effect will be shown immediately.

## Test/Review Content

- [ ] intro
- [ ] Example of repeated listeners using event listener tab
- [ ] Identifying elements
- [ ] console log
- [ ] live console
- [ ] coverage
- [ ] JS is inline
- [ ] console errors
- [ ] question time and summary

### Intro
