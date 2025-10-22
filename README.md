1. What is JSX, and why is it used?
Ans: JSX stands for JavaScript XML.
It allows us to write HTML elements directly inside JavaScript code.
Instead of using complex React.createElement() calls, JSX makes the code look clean and readable — just like HTML.
It’s used because it helps developers design the UI easily and keeps logic and layout in one place, making components more organized.

2. What is the difference between State and Props?
Ans: State is like a component’s personal memory — it stores data that can change over time (e.g., form input, counter value).
Props are like arguments you send to a function — they are passed from parent to child to share information.

3. What is the useState hook, and how does it work?
  Ans: The useState hook is used to add state (data) to functional components.
  It returns two things — a value and a function to update that value.

4. How can you share state between components in React?
Ans:  There are a few ways to share state:
      Props – pass data from parent to child.
      Lifting state up – move shared state to a common parent component.
      Context API – use a global state provider so multiple components can accessand update data easily (without props drilling).
      External libraries – like Redux or Zustand for complex projects.
5. How is event handling done in React?
  Ans: Event handling in React is done using camelCase event names (like onClick, onChange) and by passing a function as the event handler.