# Development

### Link to Deployed Website
https://littlellama246.github.io/development/
### Goal and Value of the Application
The goal of this application is to show users the different variations of the dachshund dog breed. This application is valuable for future dachshund owners who are wanting to learn more about their dog options.   
### Usability Principles Considered
1. Visibility of System Status: Users are able to see which sort parameter and filters they have selected and how those selections affect the displayed list of dogs in real time. 

2. User Control and Freedom: Users are able to reset their filter choices and can add and take out dogs to their favorites list. This gives users the freedom to undo their actions.

3. Aesthetic and Minimalist Design: There is very little text on the screen, and the text that is  very clear about what different numbers mean or how different inputs will affect the dog list ("Sort By" & "Filter By" headers, legends for each fieldset, etc.) Additionally, each dog listing has a consistent design, only showing a few of the fields. 

4. Recognition rather than Recall: The entirety of the application is on one page. Therefore, the user does not have to remember previous actions. 
### Organization of Components
There are 4 main components that make up this app: 

1. App.jsx: This component is the wrapper for the entire site, containing the header, dog list and dog items that make up the application. The left side bar filter component is also built out in App.jsx in the 'sort' div.  

2. header.jsx: The header component holds the sites title and weiner dog logo photo and is displayed at the top of the web application.

3. dogList.jsx: This dog list component is responsible for rendering the list of dog items to show to the screen. Each dog is rendered as a DogItem component and this page holds the logic to determine which dogs get shown to the screen depending on the user's selections on the menu.

4. dogItem.jsx: This component displays the information pertaining to one dog in the dog list contained in dogList.jsx.
### How Data is Passed Down Through Components

Dog Data: 
There is one external data file (weiner-dogs.json) which is an array of objects that each contain the data for a single weiner dog variation. This json data in this file is imported in the dogList component as each dog object in the array is passed as a prop to a dogItem component which renders the data for each dog to the screen.

Functionality Outline: 
 - Two sorting features. The dogs can be sorted by name (alphabetical order) and price (low to high). 
 - Three filtering categories. The dogs can be filtered on commonality (either a common or rare dog) , Coat Type (either solid, pattern or duel coat) and Hair (either long, smooth or wired hair).
 - Favorites List. Specific Dogs can be added to a favorites list. 
 - Total Cost. The total cost of all the users favorite dogs are kept track of and displayed to the user. 

Functionality Details:
There are 4 state variables used in this App (declared using the useState hook). These variables take care of the sorting, filtering and sorting and aggregation functionalities of the sight.

1. Sort: This variable is a string that represents the field by which to sort the dogs by, either name or price. The variable sort is passed as a prop to DogList and is changed accordingly by using setSortParams when the user selects the sort by "name" or "price" radio button. Inside DogList, the dogs are then sorted by the 'sort' parameter.

2. Filter: This variable is an object that represents the active filters by which to filter the list of dogs. One of the four fields in this object is a boolean (favorites) and the rest are strings (commonality, coat type, hair). The string fields represent a filter that belongs to a <fieldset> of mutually exclusive options. Three of these fieldset groups exist, one for Commonality, Coat Type and Hair. The boolean fields represent a filter that does not belong to a mutually exclusive group of options and takes priority over the other filters in the selection, this will be discussed more in the next bullet. To update the active filters, we pass the handleFiltersOptionChange handler function to each radio button and the handleChange handler function to the checkbox component. Both handlers call the setFilterParams function which updates the react state. 

3. Favorites: This variable is a list that contains all of the user's favorite weiner dogs. The user can favorite and unfavorite a dog by checking and unchecking the checkbox on each dogItem component. In order to make this happen the handleFavoritesChange handler function is passed into each dogItem which is responsible for adding or removing the corresponding dog from the favorites list. The favorites variable within filter objet (introduced above) is a boolean, used in the filtering function to only show the user's favorited dogs when the favorites checkbox is checked.

4. Cost: This variable is a number used to keep track of the total cost of all the users favorited weiner dogs. Cost is updated using the useEffect hook, which is triggered any time the favorites list changes. Within the useEffect hook, the function total is called which sums up the price of each dog in the favorites list and sets cost function to that sum using setTotal.

Resetting the application: 
There is a reset button in the sort menu that allows the user to reset the filters applied to the dog list to their original state. This will ensure that all of the dogs appear back to the screen. This is done by setting the filter object to its default state (filterDefault var) and setting the sort parameters to "name", the default. One thing to note about this functionality is that favorite list is not reset when the reset button is clicked, but rest of the dogs are added back to the screen. 
### How the User Triggers State Changes

