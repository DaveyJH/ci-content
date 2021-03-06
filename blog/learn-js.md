# Learning JavaScript: Tips and Tricks

So, you have decided you want to learn JavaScript. Great! JavaScript has been
one of the most commonly used languages in the world for some time. It is
powerful, diverse and can work on both front and back-end applications. With a
huge following, there are many courses available, vast communities and
almost infinite support options available to any developer that decides to delve
into the magical world of JavaScript. Of course, with such a large language, you
may find yourself wondering...Where to start? How to approach it? What should I
learn first?

Well, let's take a look.

## How Long Does it Take to Learn Javascript

How long is a piece of string?

Honestly. There is no answer to this question. You may have a specific need for
a certain functionality at first, or you may have decided you want to become as
prolific with the programming language as you can manage. Either way, there are
so many routes to the same result, this question is just un-answerable. In
truth, I don't know if there is a coder alive (or otherwise) who could claim to
have 'learned JavaScript'. The classic saying 'Every day is a school day'
couldn't be more true than when exploring this language.

The beauty of this language lies in the infinite possibilities it contains. A
complete novice can start to learn at whatever speed they feel comfortable doing
so. Likewise, a hardened scripting guru can further their knowledge at the same
rate. The resources are almost limitless, the information is readily available
and there are a thousand and one ways to do almost everything...and that is just
the beginning! The journey is never-ending.

Conversely, it takes a matter of minutes to learn JavaScript. In fact, you can
start right now. Open up your DevTools, locate the console, type
`console.log("Hello world!");` and hit enter. The console displays '*Hello
World!*'. Congratulations, you just wrote your first JavaScript. It may be basic
and it may not seem that useful, but this is one of the most important tools
when first starting out on your journey.

Don't believe it? Well, detailed below are a few key things to keep in mind as you start to script.

## What's the Best Way to Learn Javascript?

That depends entirely on your personal learning style. Some people can read
about it, some people prefer to watch a video of someone writing it. Personally,
I like to play around with it. You learn from your mistakes, so start making
some. Whatever works best for you, do it slowly. Rome wasn't built in a day,
right? Well, neither was JavaScript.

### [Python Tutor (JavaScript ES6)](https://pythontutor.com/visualize.html#mode=edit)

This site allows step-by-step progression through code. First off, **ensure you
select JavaScript ES6 from the dropdown menu**. Write code or copy existing code
into the window provided and attempt to 'Visualize Execution'. Certain errors
will prevent you from running code, but with a successfully written snippet, you
will be able to step through your code one step at a time. This helpful tool
allows you to view the various items that have been created, the scope of those
items and the order in which the code is being carried out.

There are some limitations to the code that can be written in this site, and it
doesn't allow DOM manipulation, so not everything is possible here. However, for
the fundamentals of how code operates, this is an essential tool for beginners
and seasoned professionals alike.

### [JavaScript30](https://javascript30.com/)

JavaScript 30 is a great, free site to help you familiarise yourself with
fundamental JavaScript concepts and use of the language. Over the course of 30
days (more or less if you desire), you can build 30 different things. No
frameworks are used, no external libraries or other things to confuse the
subject. JavaScript in its raw form. For many people, this is *the* place to
start.

### [CodeWars.com](https://www.codewars.com/)

The codewars website can be a bit daunting to an absolute beginner but contains
a vast number of challenges and helpful information to develop your skills.
Multiple challenges are available, with varying difficulty levels, to test your
skill in a chosen language. For those just getting started, start with 8 kyu
challenges, select JavaScript and see if you can work them out. If you can't,
simply forfeit the challenge to review solutions from other people. Many of
these may be very concise and completely baffling, but as you scroll through,
you may find you start to notice some less intricate solutions and they may give
you a little insight into how certain problems can be approached. This is
definitely a site to come back to often and challenge yourself as you progress.

### Console Log

As mentioned above, for a beginner (or an experienced developer), this little
function is, possibly, **the most important aid** in your toolkit. When working
with JavaScript, you may struggle to visually see everything that is happening,
but logging can turn the mystical into the manipulatable.

#### Strings Vs Variables

Learn the powers of `console.log()` by testing it. Open up something like
[codepen.io](https://codepen.io) and type the following into a JS file:

```javascript

const myVariable = "An example";
let aNumber = 139;

console.log("myVariable");
console.log(myVariable);
console.log(`The number = ${aNumber}`);

```

When you run the file, view the built-in console and see the logged results.

- First, a string is printed exactly as you typed it between the "" marks.
  > myVariable
- Next, we log the *value* of the variable we defined. This is done by passing
  the variable name into the `console.log()` with no quotes.
  > An example
- Finally, we have a mix and match of two things. The string as written between
  backticks; then the value of the variable `aNumber` by using
  `${<variableNameHere>}` : this is called a template literal and is itself a
  very useful JS feature.
  > The number = 139

Logging becomes more useful as you start to manipulate variables, retrieve DOM
elements and generally work with things that may not be 100% clear.

#### DevTools

A great technique for ensuring you are working with the correct element is to
`console.log()` the element itself and then use DevTools to confirm it is
correct. You can test this on most websites:

*The following steps are using Chrome as a web browser but should be very
similar in most modern browsers. Firefox 'elements' tab is called 'Inspector'.*

- Open up DevTools and find an element, in the HTML structure using the elements
  tab, that has an id attribute.
- Copy the id exactly, including the quote marks to your clipboard, or just make
  a note of it.
- Open the console tab in your DevTools.
- Type `console.log(document.getElementById(<"id">));` and replace `<"id">` with
  your copied id.
- Hit enter and you should see an HTML element logged in the console.

This is a reference to the actual HTML element. If you hover over the logged
element, you should find the element is highlighted in the document. If you
right-click the logged item you can 'Reveal in Elements Panel' and this will
take you to the exact element in the HTML structure. If you aren't sure you are
targeting the correct element, this is a great tool to use. It doesn't have to
be done from DevTools either, it can be included in your JavaScript file at a
point of your choosing.

#### Variables As You Change Them

Say you want to work with some mathematical calculations during your script.
Your user inputs a number, you do something with that number and display a
result. What if you try it and the result comes out wrong? That's not good.
Rather than racking your brain and trying to now do mathematics and code, why
not let the console tell you what is happening at every stage?

Consider the following code:

```javascript

let exampleInputValue = 1;

function calculateResult(input) {
  let result = input + 2 * 5;
  result = result * 50;
  result = result - 10 / 10;
  return result;
}

const finalResult = calculateResult(exampleInputValue);
console.log(finalResult);

```

You may already know what the logged value will be here, but try running it in
[Python Tutor (JavaScript ES6)](https://pythontutor.com/visualize.html#mode=edit)
and see if the result is as expected.

Spoiler: It logs 549...what if we were trying to add 2 to the original number,
then multiply by 5. Then multiply that result by 50. Finally, subtract 10 and
divide the total by 10? That should equal 74. So, where did it go wrong?

Don't struggle with the calculations - let the log do it for you.

Re-writing the function above as follows will show you each step in turn (much
like the Python Tutor) and can be done alongside your HTML document:

```javascript

let exampleInputValue = 1;

function calculateResult(input) {
  let result = input + 2 * 5;
  console.log(result); // 11
  result = result * 50;
  console.log(result); // 550
  result = result - 10 / 10;
  return result;
}

const finalResult = calculateResult(exampleInputValue);
console.log(finalResult); // 549

```

Now we can see the logged values (shown by comments) and see that we have made
an error with our order of operations. Take a moment to read up on the
[order of operations](https://www.mathsisfun.com/operation-order-bodmas.html)
when used in a mathematical sense. Notice we didn't take note of it in our
function? Add a few brackets and hey presto, you have a functioning that gives
the correct result.

```javascript

let exampleInputValue = 1;

function calculateResult(input) {
  let result = (input + 2) * 5;
  console.log(result); // 15
  result = result * 50;
  console.log(result); // 750
  result = (result - 10) / 10;
  return result;
}

const finalResult = calculateResult(exampleInputValue);
console.log(finalResult); // 74

```

The key thing here is that we logged the result in stages rather than knowing
the start and end points. Use this to your advantage and you will find a
step-by-step approach rapidly increases your knowledge of JavaScript. If you are
not sure...log it!

### [Stack Overflow](https://stackoverflow.com/)

Stack overflow has a huge number of questions and answers ready for you to
peruse. It is a go-to site for many programmers and gives a platform to ask
about any code-related problems. Questions should be well structured with clear
examples and enough detail to allow accurate responses. Repeated questions are
likely to be closed down and directed to the answers already given.

Just remember, many highly skilled programmers may have answered questions
here so don't expect to understand everything. Stating you are a novice is quite
acceptable and could lead to a more beneficial answer for you and those who find
themselves asking the same thing at a later date. Finally, try to only use code
you understand - if you use some code from here and decide to make a
modification without understanding each step in the process, you may end up with
less than desirable results.

## Is Javascript Hard to Learn?

As we have discovered, there isn't really a way to say you have successfully
learned JavaScript. You learn parts of it. Is it hard to learn parts of it?
Sometimes, yes. If you dive straight in with the intention of learning complex
methods without understanding the fundamentals, there is a high chance you will
struggle.

If, however, you do as has been suggested - start slowly, learn what you are
doing at each stage and focus on gaining comprehension of the language - you
will soon find yourself a `Foo Bar` virtuoso. The more you practice, the more
you break and re-make, the more you experiment and explore the results, the more
adept you will become in this dark art.

## Summary

Get out there and play with it! Dive in, make mistakes and learn from them. Ask
questions when you want to, consult resources that work for you...and log
everything you need! The more you do, the more you will be able to do.

Most importantly, enjoy it!
