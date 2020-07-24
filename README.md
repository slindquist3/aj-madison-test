# AJ Madison Coding Challenge


## My approach

I started this project by identifying the major components, which I determined based on page structure to be the Header section with text, the Selection controls, and then the ProductList, populated with Products.

I wanted to keep components as dumb as possible, so I make the call to the API at the top level and then pass down the product array as a prop after capturing it in state. Another way to do this would have been to use the UseEffect hook in ProductList to make the call, but because I planned to later add methods connected to the Selection components that would modify the product array, I decided to centralize state at the App level, where I would later plan to add the methods that would modify that top level array based on the user's selections.

## Libraries

Originally I chose to use the node-sass package out of habit, but because I adoped the css module pattern, I found that I didn't need to rely on nesting or other features sass provides, so I removed the node-sass package.

With more time for this challenge, I would have added a linter like ESLint, and I would have added unit tests with Jest.

## Improvements

While I focused most of my time on mimicking the mock up design, in the future I would like to add the methods that would handle the sorting and filtering of the data. I would create these methods at the app level so they could easily interact with the state and pass the methods down to elements as props. 

With more time, I would also perform an accessibility audit using my computer's screen reader, and I would doublecheck that I could easily tab through all the Selection options as well as each product thumbnail. 