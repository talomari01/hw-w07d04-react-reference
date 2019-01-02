# React Reference 

![](https://media.giphy.com/media/26tPtg8M3i6DPSSt2/giphy.gif)

Today we are going to make a reference application *for* React *with* React! Each component will explain a React topic. Take the time to read documentation and articles about each subject. Make this a reference for yourself!

## Setup

1. Create a new react app using `create-react-app react-reference`
2. `cd` into your new app and open it in VS code
3. Start the app with `npm start`

## Assignment

Create the following components: 

1. A `Header` component with:
    - A title for the page (maybe something like 'React is Awesome!') 
    - An image
1. A `Content` component that serves as a container with:
    1. A component called `ComponentInfo` that has:
        - A title 
        - Content that explains what [components](https://facebook.github.io/react/docs/components-and-props.html) are and how to use them. 
        - The following child components (you will have to create them)
            1. A `PropsInfo` component with 
                - A title
                - A definition of what [props](https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm) are and how to use them in components
            2. A `StateInfo` component with 
                - A title 
                - A definition of what [state](https://medium.com/react-tutorials/react-state-14a6d4f736f5) is and how to use it.
            3. A `LifeCycleInfo` component with 
                - A title 
                - A list of the [component lifecycle methods](https://facebook.github.io/react/docs/react-component.html) 
    1. A component called `JSXInfo` that has:
        - A title 
        - An explaination of of [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and how it is used.
1. A `Footer` component with some helpful resources. Here are a few to get you started, but include at least one that is not on this page!
    - [React.js Top Ten Articles of the Year](https://medium.mybridge.co/react-js-top-10-articles-of-the-year-v-2017-e95092964e49)
    - [Introduction to Reactjs](https://www.youtube.com/watch?v=XxVg_s8xAms)

### You should end up with 8 components:

- `Header`
- `Content`
  - `ComponentInfo`
    - `PropsInfo`
    - `StateInfo`
    - `LyfeCycleInfo`
  - `JSXInfo`
- `Footer`

## Submission

Homework is due by **12:00 Tonight!** 