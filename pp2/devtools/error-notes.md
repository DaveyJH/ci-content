# Errors Notes

- JSON `const questions =` to be removed _JSON_
  - Oops, we used JS in JSON
- Show modifying to custom error with `.catch(e => console.error(e))` _line
  108.5_
  - That one wasn't the easiest to find because we were importing so I am just
    going to quickly cover something about this method. It's an async and fetch
    method hybrid. If you work with something from an API or JSON file, make
    sure you add an error catch. We can do this here and if we reload the page
    it gives us a better indication of where the error occurs.
- Add `questionData` in Quiz constructor _line 17 (note docstrings)_
  - I didn't pass in the required array.
- Remove IIFE (Immediately Invoked Function Expression) _lines 4 + 9_
  - This one, again not something you may have seen, is an IIFE. The thing to
    remember here is about scope.
- Add `quiz.` _start of line 113_
  - This function is defined within the class so we can call it from the
    instance of that class. Again, these are all potentially far more complex
    than you need for your PP2. If I re-did my PP2, the code would use more
    complex methods but, the readability would probably be friendlier to someone
    with a little more experience.
- There is, of course, a working version of this site available if you fancy a
  look.
- If you do have questions about this quiz application, please don't send them
  to me directly...I am not going to respond to them. Reply to the webinar post
  and I will get to them when I have time, sorry but I really don't want to go
  through the working of this time and time again in private messages so please
  understand I have my own studying to do too!
