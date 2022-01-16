# Decipher With DevTools

## Create Content

- [x] intro
- [x] console log
- [x] live console
- [x] Identifying elements
- [x] JS is inline
- [x] Example of repeated listeners using event listener tab
- [ ] console errors
- [ ] debug break points
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

#### The console

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

#### Logging

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

### JS is inline

- It is worth noting at this point that all JS styles are applied inline so they
  have the highest specificity possible.
- This means, assuming you are writing your CSS in external stylesheets, that
  you should easily be able to identify style properties applied by your JS.

### Repeated Event Listeners

- Sometimes we have all of our functionality seemingly working as it should and
  then out of the blue, a load of extra weird stuff happens. Let's take a look
  into one of the common reasons as to why this might happen.
- Best practice will have you adding events to elements via event listeners.
  Great. You have a button, or a CTA, that allows your user to interact. But why
  is everything behaving so strangely.
- Let's head over to another live site with some real basic functionality.

*[looking at listeners](https://daveyjh.github.io/ci-content/devtools-listeners.html)*

- We are going to explore another tab in DevTools here, the Event Listeners tab.
  - We don't need to know everything that is going on in this tab, we are just
  using it to find the things we need, so don't get intimidated because you
  don't know what everything does. I don't either!
- I have written a couple of scripts for this page. The intention is to allow a
  user to click on a numbered div and have the div change between white and
  rebecca purple. This should only happen after the user has clicked the 'click
  me' button.
  - Great, it works as intended. No problems, right? Well let's see what happens
    if the user clicks the 'click me' button again before clicking a div. Oh
    dear, that isn't what we expected at all! Maybe if we click the button once
    more...no, it's definitely not right now!
  - This could lead to user frustration...Now the function is way off!
- So let's take a look at why this is happening. Well, I know (because I wrote
  it) that the 'click me' button function loops through each div and adds an
  event listener to it that carries out the intended function (like we saw at
  the start).
  - `console.log(addEvent);`
  - We can log out that function (without using parenthesis) to show what
    happens when we click the button.
  - We can then hover over it to view it in a tool tip or we can click it to go
    directly to it in the source file.
  - Either way, we see the functionality I just described.
- So what went wrong?
- Well, let's think through this logically. When we refresh the page, the div
  has no function. We click the button once, the div functions are all normal.
  We click again and the number increases by 2, the colour doesn't appear to
  change. We already said that the button adds this functionality to the div, so
  if we click it twice...we are adding the function twice. We can prove this
  with the event listeners tab.
- This is due to the way in which I have added the functionality to the divs.
  you may notice that the functions on the divs don't have names, that's because
  they are arrow functions. These are generally very helpful, but do need to be
  used with some caution. Same applies for anonymous functions.
- So let's try the second option I wrote. We can add the events globally.  
  - `devtools-listeners-global.html`
- If we click the button then the div, it all appears to work. Then we click the
  button again and it stays working. Great! Not quite. Let's refresh and click a
  div first. The function of the div is working straight away because we haven't
  set any logic in the code to prevent this.
  - There are ways to make this work, using an extra variable that is modified
    from the button and check when clicking the div but I haven't written that
    out as I feel it adds a layer of complexity to the code that makes it less
    readable.
  - I was lazy on this script file and didn't even bother writing a function to
    the button, I knew the div functions would be available before clicking the
    button and that's all I wanted to demonstrate here.
- So for this situation, adding the event listener globally isn't going to work.
  This would be the case if you are creating new elements in the DOM or only
  want certain functions to be added after a trigger event.
  - Remember how JavaScript is read, when the script loads it will initiate
    anything in the global space, from top to bottom.
    - If you add an element after it is supposed to have its event listener, it
      isn't going to re-read the script to add it.
- Option 3, adding a class and checking for that class.
  - `devtools-listeners-class.html`
  - So, once again, here we are on our site. This script is very similar to our
    first site's script. I have re-written the initial button function as an
    arrow function for my personal preference.
  - The key difference between these two scripts is the addition of an if
    statement.
  - The statement checks the box for the class 'event-added', if it doesn't
    exist the first thing it does is add the class. It then continues to add the
    event listener.
  - This means that no matter how many times we click the initial button, the
    event listener is added just once. We can note the changes in the element
    panel, before clicking there are no classes applied, other than 'box' which
    is used for styling.
  - We can also check the divs are doing nothing when clicked, and can see they
    have no event listeners applied in the event listeners tab. Once we click
    the initial button the class is applied to the divs, the listeners are
    added, and they have the intended function.
  - If our user deviates from the expected input and clicks the 'click me'
    button again, nothing extra happens. The script runs to the if statement,
    the condition is not met, so the entire code block is passed.
  - The listener still exists on the divs from our initial click, so we have the
    desired function no matter what the user does.
- There is one further way we can get this same functionality and for many of
  you, it is the method you would know the most about. We can name our div
  function.
  - `devtools-listeners-named.html`
  - This final script has a named function for the div functionality. There are
    no classes, the only function applied in the global space is the 'click me'
    button which is how it has been for all of these cases (apart from the one I
    didn't bother with).
  - It is the nature of JavaScript that prevents the unusual behaviour here. An
    element cannot have an event listener applied multiple times with the same
    trigger and name.
  - We can see that no classes have been used, no duplicate event listeners are
    created, and the functionality is as intended.
- Take note that the event listener tab doesn't auto update, so if you
  are checking these types of issues, be sure to select a different element
  quickly and then return to the element you are testing.
- As I said, there are many more functions to the event listener tab that I
  don't know anything about. If you have any insight, drop it in the chat and I
  can add a supplementary comment about it in Slack for those who won't get to
  see the chat.
- One final comment on this, the issue may not be immediately obvious and the
  bug may seem to happen at a random time. It is possible that your created
  event listener causes a series of other functions to run. It is not until
  these have ended that the next event listener instance will trigger. This can
  happen with general functions too, so really try and think about the pattern
  of behaviour that is causing the bug.

### Console Errors

- Earlier on we took a look into the console and hopefully you all learnt a
  thing or two. Don't worry if you can't remember it all, for this section you
  just have to know where it is. Plus, the webinar is being recorded, so you
  can always come back for a refresher.
- So, as the title of the slide suggest, we are going to look into console
  errors. I'm going to focus on how to use them to your advantage. We aren't
  discussing custom written errors here, these are unexpected errors.
- First, once again, we need to head over to a website. This one is going to be
  a lot easier to work with while using my IDE as I might make some changes that
  I want to remain in place after refreshing the page. So welcome to the carnage
  that is my VSCode (for those using GitPod, it's almost identical!).
- I am using Preview on Web Server by Yuichi Nukiyama, there are loads of live
  preview extensions, this is just the one I have.
- So here we can see a simple quiz application.

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
