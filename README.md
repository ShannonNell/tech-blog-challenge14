# UoT Coding Challenge 14: Tech Blog
A CMS-style blog site where developers can publish blog posts and comment on other developer's posts. This application follows the MVC paradigm in structure and uses Handlebars.js as the templating language, Sequalize as ORM, and express-session for authentication.

Done as a challenge for UoT's Coding Bootcamp.
___

## Talbe of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Tools](#tools)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)
* [Challenge Guidelines](#challenge-guidelines)
___

## Installation
Clone the repository from GitHub. This application's dependencies are: bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, and sequelize. To run the tests, install jest as well. 

To connect to the database run `mysql -u root -p` and enter your password from your .env file. Then source the schema.sql by running `source db/schema.sql`. To connect to the server, run `npm start`.
___

## Links
* [Deployed App](link)

___

## Usage
This application allows users to log in or sign up to be able to post. Once logged in, they can view their dashboard to view, add, edit, and delete posts or comment on other users' posts.

![screenshotHere](/assets/images/ch14_ss.png)
![screenshotHere](/assets/images/ch14_ss2.png)
___


## Tools
* JavaScript
* node.js
* MySQL2
* Express.js
* Sequelize
* dotenv
* bcrypt
* connect-session-sequelize
* express-handlebars
* express-session
* HTML & CSS
___

## Tests
Tests were made to format date and pluralize words. You can run these tests by running npm test in the command line.
___

## Credits
* Completed by: [Nell-GitHub](https://github.com/ShannonNell)
___

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://choosealicense.com/licenses/mit/)    
___

## Challenge Guidelines
### User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
### Criteria: 
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
## Future Development
- Add ability for users to upvote/downvote/like posts