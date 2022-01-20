# Planning to Programming

## Portfolio Project 2

## Intro

Hi everyone, welcome to my webinar on planning to programming.

First, just a very brief intro.

I'm Dave, a student on the 5P course. I am fortunate enough to be able to study
full-time at the moment so my projects have been fairly substantial. That said,
I have been developing my own approach to the projects as I have progressed and
I would like to share a few thoughts with you all!

I am very active on Slack because it helps me to learn. Viewing other people's
problems and seeing their approaches has opened my mind to other ways of
thinking. Remember, offering advice doesn't mean someone has to take it so get
active!

I had no previous programming knowledge before this course, however, I do come
from a background where I have had to plan my own work to ensure the highest
priorities are done in acceptable time frames. Back then, I was confident with
what I was doing and I had a very good estimation of the time involved with each
task. So how do we manage with something a little more vague? Well, hopefully I
am going to shed a little light on just one approach to getting your brilliant
ideas out into the world.

The content of this webinar will only be my take on things. It is not the only
way and it certainly isn't exhaustive, so if you have other ideas and tools and
tips, please share them in the channel. The only competitions during your time
at CI are the hackathons (which you should all take part in) so if you find
something that will help your fellow students, I strongly urge you to share it.

## What's the big idea?

First, your project is going to start with an idea. A solution to a problem, be
it imaginary or not. That problem could be as simple as:

> I want to play a game  

It could be a more practical problem, something like a monthly budgeting
application that allows you to see how much money you have left each month for
the important things, like extra monitors!

If you don't have an idea yet, take a look through #peer-code-review; ask other
students; ask friends or family for problems they have that might be
transferable to a code solution; or use the suggested projects. Whatever you
decide, don't let yourself get too carried away with the scope. Push yourself to
make something that satisfies your criteria but don't let the scope scare you
away from starting.

Once you have an idea, write it down. Don't think about code. This will help you
find the key features that are necessary for your MVP. You can add some nice
extras, but make sure you note that they are extras and not requirements.

Writing your idea down will help keep the focus as you progress through the
project.

> What is my application going to do?
>
> Who is the application for?
>
> Do I have the skills to do (most) of it?
>
> What are the essential features?

## Ideas to Inception

Once you have your idea, how do you go about turning it into a project?

You have your idea, your world-changing application, but it is just a concept. So how do you go about changing that idea into a reality. My personal preference here is to think about what is involved in your application. Take the time to write down the process from start to finish. Start vague and build up each step in stages.

Let's think about an example. I like sandwiches, in fact after the PP3 modules
later in the course, you could even say I love them. So if I want to write a
program that makes a sandwich, what would be involved?

Well, we have the starting point, no sandwich, and we have an end point, a delicious sandwich ready to eat. Sounds super simple, well that's a great start.

By reducing the complexity of our first steps we can clearly define our goals. The:

> *What is my application going to do?*

- Make a sandwich

That isn't really much help to progressing on to coding anything yet though. Let's delve in a little deeper. Break the process down into slightly more detailed steps:

- Use bread
- Add filling
- Cut in half
- **Enjoy!**

These steps can be written as comments in a JS file. Remember, we still are not thinking about code. Just sandwiches.

Now we can go down another level, let's focus on that first task:

- Use bread

If I ask you to make a sandwich in the middle of a swimming pool, chances are you don't have a loaf of bread tucked up inside your swimming costume. We can start to think about the steps involved with using bread:

- Use bread
  - Check if we have bread
    - If we do, continue
    - If we don't....get some bread
  - Is the bread sliced
    - If yes, great, continue
    - If not, slice the bread
  - Perhaps we should check the bread isn't mouldy or stale
    - If it is, throw it away
    - If it is OK, we move on to the next step

That seems complex enough for now, so move on to the second:

- Add filling

This one is a pretty open-ended task. We have a lot to consider here, but we want to make things re-useable and not too specific just yet:

- Add filling
  - Do we want a spread, ie butter or margarine?
    - Do we have it?
  - Choose filling
    - Do we have the filling?
  - Do we want condiments?
    - Do we have the condiments?
  - Do we want salad?
    - Do we have the salad?

The more observant of you might notice we have a bit of repetition going on now.
That's OK for now but it is worth noting. We will tackle what to do with that as
we progress away from 'steps' and more into code.

- Cut in half
  - Do we have a knife?
  - Do we have a chopping board?
