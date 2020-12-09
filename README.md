<h1 align="center">Todo-Weather Dashboard</h1>

[View Live Project Here]()

![Snapshot of the project]()

This is my Todo-weather Dashboard project. This project is inspired by the [Momentum browser extension](https://momentumdash.com/). Momentum is a dashboard I use everyday and I wanted to create my own. The project is aimed for use on a desktop/laptop monitor but is responsive and accessible on a range of devices.

## User Experience (UX)

- ### User Stories

    * #### First Time User Goals
        1. As a first time user, I want to be able to quickly understand the purpose of the website.
        2. As a first time user, I want to quickly navigate the webpage.
        3. As a first time user, I want to understand how to use the features on the page quickly and easily.

    * #### Returning/Frequent User Goals
        1. As a returning user, I want to add and delete todos quickly and easily.
        2. As a returning user, I want to see my todos from the previous day still left to complete.
        3. As a returning user, I want to keep track of the weather at my location.
        4. As a returning user, I want to keep track of the weather at a location of my choice.

- ### Design
    * #### Typography
        The two fonts used on the webpage were *Averia Serif Libre*, which was used for the titles and headings on the page and *Manjari* which was used for the main font of the page.
    * #### Colour Scheme
        The colour scheme is a simple white text to stand out from the background images used on the page.
    * #### Background Image
        The background Images swaps between 4 images everytime the page is loaded, as a proof of concept. Eventually I would like this to choose a random image of the day from an API.
    * #### Weather Icons
        The Weather icons are currently being pulled from the Openweathermap API.My plan is to update this to use custom icons.
    * #### Icons 
        The icons all turn into an orange colour when hovered over to help the user understand the buttons do something.

- ### Wireframes
    [Wireframes](assets/wireframes/todo-dashboard-wireframes.pdf)

- ### Planned Extras
    * Currency Convertor.
    * Custom Weather Icons to replace the Openweathermap api icons.
    * Add a image API to choose a random image daily for the background image.
    * Add Timezone feature to the time section to be able to get the time from any chosen location.

## Features

* Responsive on all device sizes.

* Interactive Elements.

* Locale Storage on the Todo List.

* Live Time and Date

* Geolocation Weather for users location

* User able to add new location weather data

## Technologies Used

- ### Languages Used
    * [HTML5](https://en.wikipedia.org/wiki/HTML5)
    * [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    * [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

- ### Frameworks, Libaries & Programs Used
    1. [Bootstrap v4.5.3:](https://getbootstrap.com/)
        * Bootstrap has been used to help with the responsiveness and styling of the website.
    2. [Google Fonts:](https://fonts.google.com/)
        * Google Fonts was used to import the fonts *Averia Serif Libre* and *Manjari* into the CSS file and both were used across the website.
    3. [Font Awesome:](https://fontawesome.com/)
        * Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
    4. [Open Weather Map API:](https://openweathermap.org/api)
        * The Open Weather map API was used to feed the weather data into the weather section.
    5. [Git:](https://git-scm.com/)
        * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
    6. [GitHub:](https://github.com/)
        * GitHub was used to store the projects code after being pushed from Git.
    7. [Balsamiq:](https://balsamiq.com/)
        * Balsamiq was used to create the [wireframes](assets/wireframes/personal_portfolio_wireframes.pdf) during the design process.
    8. [Favicon.io](https://favicon.io/favicon-converter/)
        * Favicon.io was used to convert the site logo to a favicon for the website. The links for the favicon were also copied from         favicon.io.
    9. [Unsplash.com](https://unsplash.com/)
        * Images for the background have been pulled from Unsplash.
## Testing

[W3C Markup Validator Results](assets/testing/html-w3c-results.png)
[W3C CSS Validator Results](assets/testing/css-w3c-results.png)

- ### User Stories Testing

    * #### First Time User Goals
        1. As a first time user, I want to be able to quickly understand the purpose of the website.
            * The site has a clear to understand design, the user is greeted with the words Todo Today and an input box in the middle.
        2. As a first time user, I want to quickly navigate the webpage.
            * The webpage is a simple design, for quick use and understanding, It is clear what each button on the page is for.
        3. As a first time user, I want to understand how to use the features on the page quickly and easily.
            * The features on the page are very prominent, allowing the user to understand the features and their purpose. 

    * #### Returning/Frequent User Goals
        1. As a returning user, I want to add and delete todos quickly and easily.
            * When the user opens the webpage they're greeted with the Todo section in the middle of the page and big letters saying Todo Today. The Todo input is below the title and has a placeholder in place to explain to the user what to do with it.
        2. As a returning user, I want to see my todos from the previous day still left to complete.
            * The todo list will be saved into the local storage and will remain there until the user deletes the todo from the display.
            * The user can click on the check circle to complete the task, Grey out and linethrough the word.
        3. As a returning user, I want to keep track of the weather at my location.
            * The user will first be greeted with a geolocation permission prompt which locates the user and returns the live weather for that location.
        4. As a returning user, I want to keep track of the weather at a location of my choice.
            * The weather section has a Add Location button at the bottom of the section, which allows the user to add a location of their choice. This location will stay on the page until it is reloaded.

- ### Further Testing

    * ## Testing Geolocation prompt
        On the first page load the browser permission prompts asks for permission to use geolocation.
        If the user clicks accept the weather section updates to the live weather from their location.
        If the user deny's permission for geolocation the user is shown an alert which explains to use the Add location button to add weather display for their chosen location.
        The alert for the geolocation denial was sucessful at time of testing.
        When trying to use the add location button after denying permission I discovered the weather icon does not display properly, This has been rectified by fixing a human error in the JS code.
    
    * ## Testing the Add Location button
        + Clicking on the Add Location button should display the add-weather input and change the add location text to cancel.
            This worked as expected when clicked.
        + Clicking on the cancel button should remove the add-weather input and change the cancel text back to Add Location.
            This worked as expected when clicked.
            
    * ## Testing the Add Weather input
        + Entering a location should enter the location into the weather section above the input with live weather and an icon.
            This tested with no errors, by entering numerous locations into the input.
        + Trying to press enter on the empty input should alert the user to enter a valid location.
            This worked with no errors, by pressing enter on an empty input.
        + If the user enters an invalid location, the browsers should alert the user to enter a valid location.
            This worked with no errors, by entering numerous words into the add weather input.

    * ## Testing the Todo Input
        + Entering a Todo can be done with either pressing the enter key or clicking the plus icon next to the input box.
            This tested with no errors by entering a value into the input and pressing enter and click the plus icon.
        + When the user enters a Todo it should show up within the Todo section and enter into the local storage.
            This tested with no errors, by entering a Todo with developer tools local storage open.
        + If the user tries to click or press enter with the input empty the user should get an alert.
            This tested with no errors, by pressing enter and clicking on the add todo button with an empty input. The browers alerts the user correctly.
    
    * ## Testing the delete buttons
        + The delete button on the todos should remove the todo from the weather section and from the local storage.
            On pressing the delete button I discovered that the todo deletes from the weather section but remains in the local storage until the page is reloaded and it reappears in the todo section. Then the delete button will delete the todo from the todo section and the local storage. Still working on the fix for this bug.
        + The delete button on the weather blocks should remove the weather from the weather section.
            This tested with no errors, by entering a new weather block then clicking on the delete button.
    
    * ## Testing the Check button
        + The check button should turn into a green tick mark once clicked.
            This was tested without errors by clicking the button.
        + The check button should grey out and linethrough the todo. 
            This was tested without errors by clicking the button.
    
    * ## Testing the Background Image. 
        + The background image should change almost everytime the page is loaded
            clicking the refresh page changes the background image, This has been tested by pressing the refresh button.

    * ## Device/Browser Testing
        + Chrome
        + Firefox
        + Microsoft Edge
        + Iphone 6/7/8 plus (Chrome Dev tools)
        + Iphone X (Chrome Dev Tools)
        + Ipad Pro (Chrome Dev tools)
        + Samsung Note 20 Ultra 5G

    My partner also tested the full site using Safari on her Macbook pro.

## Known Bugs
- ### Todo Delete button
    * The Todo delete button will delete only the todo on display at first, until the page is reloaded and it reappers in the todo section, then the delete button will delete both the todo on display and the local storage todo.

## Bugs Fixed
- ### Check Button and Delete Button not appending correctly
    * I originally created the buttons and then prepend the check mark and append the delete button in a function further down the code. I discovered that everytime the function was called by entering a new todo, it removed the buttons from the existing todo and added them to the new todo. This bug was fixed by refactoring the addNewTodo function and append/prepend the buttons after they are created.

- ### Add Location button not calling the icon from the correct object
    * While testing the geolocation prompt as decribed in the testing section i discovered a bug in the js code which was calling the icon from the weather object instead of the newWeather object, If the user deny's permission the weather object is not in use. This was a human error in the code and was fixed quickly.

## Deployment

### Github Pages
- The project was deployed on github pages using the following steps
    * Login to Github
    * Locate the [Github Repository](https://github.com/DevSteg/Weather-ToDo-Dashboard)
    * Click on the "Settings" link in the top right corner of the repository
    * Scroll down the settings page until "Github Pages" section
    * Click the dropdown box in the "Source" section and select the "Master Branch"
    * Scroll back down the page after it refreshes to the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository
- Fork the project using the following steps
    * Log in to GitHub and locate the [GitHub Repository](https://github.com/DevSteg/Weather-ToDo-Dashboard)
    * At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
    * You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/DevSteg/Weather-ToDo-Dashboard)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/DevSteg/Weather-Todo-Dashboard
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/DevSteg/Weather-Todo-Dashboard
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
## Credits

- [Bootstrap v4.5.3:](https://getbootstrap.com/)
    * Bootstrap has been used to help with the responsiveness and styling of the website.
- [Stack Overflow](https://stackoverflow.com/questions/34690104/make-javascript-change-background-image-every-5-seconds)
    * Helped with the changing the background image daily code.
- [Tutorial Republic](https://www.tutorialrepublic.com/faq/how-to-remove-outline-around-text-input-boxes-in-chrome-using-css.php#:~:text=Answer%3A%20Use%20);
    * Helped with removing the outline in css on the input boxes when focusing on them.
- Zac Gordon on youtube for the local storage explanation.
    * [Can be found here](https://www.youtube.com/watch?v=T9GWHFDcELQ)
- Dev Ed on youtube for the local storage tutorial.
    * [Can be found here](https://www.youtube.com/watch?v=Ttf3CEsEwMQ&t=1201s)
- Code Explained on youtube for the geolocation tutorial. 
    * [Can be found here](https://www.youtube.com/watch?v=KqZGuzrY9D4&t=1773s)

### Media Credits
- Background Images
    * Photo 1 is by [Daniel Seßler](https://unsplash.com/@danielsessler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
    * Photo 2 is by [Omer Rana](https://unsplash.com/@omerrana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
    * Photo 3 is by [Artem Zhukov](https://unsplash.com/@artemioz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
    * Photo 4 is by [Manuel Boxler](https://unsplash.com/@manuel_boxler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash

## Acknowledgements

* My Mentor for helpful feedback throughout the project and working calls around my current work schedule.
* My newly born daughter born the same week I started this project.
