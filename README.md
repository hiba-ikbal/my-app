start:5-jan-2026
end:

# recipe app

doc for creating the app and learning react
 

# **Thinking in React**

building a userinterface = 
1- breaking it into components
2-describe the different visual states for each of your components
3-connect your components together  = data flowing through them

# **Step 1: Break the UI into a component hierarchy**

Start by drawing boxes around every component and subcomponent in the mockup and naming them. 
In my app case:

![image.png](attachment:9ffcc14e-6892-434f-b7c3-36811018720e:image.png)

<aside>
💡

> rectte app: contains the entire app
searchbar : recieves the users input 
filter:  filters the list according to the user input.
recette list: displays the list according to the users input and recieves the user new input 
bottom nav: displays links to other pages
> 
</aside>

components identified in the makup = arranging them into a hierarchy 
aka: components that appear within another component should be the child in the hierarchy 

# **Step 2: Build a static version in React**

time to implement the app
build a version that renders the UI from your data model without adding any interactivity…yet
a lot of typing and no thinking!!! for now
For that we ll need to:

<aside>
💡

1-build [components](https://react.dev/learn/your-first-component) that reuse other components and pass data using [props](https://react.dev/learn/passing-props-to-a-component)
   
ps 1:(Props are a way of passing data from parent to child)
  
 ps 2:(If you’re familiar with the concept of [state](https://react.dev/learn/state-a-components-memory), don’t use state at all to build this                 static version. State is reserved only for interactivity, that is, data that                            changes over time. Since this is a static version of the app, you don’t need it.)
2- You can either build “top down” by starting with building the components higher up in the hierarchy or “bottom up” by working from components lower down

ps 3: check quick start for a better knowledge of the code written in react https://react.dev/learn

</aside>

code in the app page everything then put in different components 

# **Step 3: Find the minimal but complete representation of UI state**

layout is there with min css 

now we make ui interactive = using state

state = min change of data that the app needs to remember

Figure out the absolute minimal representation of the state your application needs and compute everything else on-demand

<aside>
💡

There are two types of “model” data in React: props and state. The two are very different:

- [**Props** are like arguments you pass](https://react.dev/learn/passing-props-to-a-component) to a function. They let a parent component pass data to a child component and customize its appearance. For example, a `Form` can pass a `color` prop to a `Button`.
- [**State** is like a component’s memory.](https://react.dev/learn/state-a-components-memory) It lets a component keep track of some information and change it in response to interactions. For example, a `Button` might keep track of `isHovered` state.

Props and state are different, but they work together. A parent component will often keep some information in state (so that it can change it), and *pass it down* to child components as their props. It’s okay if the difference still feels fuzzy on the first read. It takes a bit of practice for it to really stick!

</aside>
