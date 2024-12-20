
# Open Book Library Finder

Open Book Library Finder is a web application designed to help users discover detailed information about their favorite books quickly and easily. Users can search for books by name and view information such as title, author, publication date, and cover image. The app also supports a dark mode theme for better usability.

## Features

- **Search Functionality**: Search for books using the Open Library API.
- **Book Details**: 
     1.)Book Details Display:
        ->Fetch and display the following details for a book:
        ->Title: The name of the book.
        ->Author(s): The author(s) of the book.
        ->Pages: no of the pages of the book.
        ->Publisher: The publishing company.
        ->Published Date: The year or date of publication.
        ->first publish year
        ->description: description of the book.
        ->Cover Image: The book’s cover, if available. 

    2.)Allow users to input an the book name to fetch book details.
        ->Use the Open Library API endpoint:
        ->Minimal and User-Friendly Interface:

    3.)clean design that includes:
    4.)A search box for entering the books name.
    5.)A fetch button to retrieve book details.
    6.)A results section to display the fetched information in an organized format.
- **Dark Mode**: Toggle between light and dark themes for better accessibility.
- **Local Storage**: Save the last searched book and theme preference to local storage.
- **examples**: of books you can search to see if it is working is;
                    1. Game of Thrones
                    2. Atomic Habits
                    3. 48 Laws Of Power
                    4. Control Your Mind and Master Your Feelings
                    5. The Psychology of Money
                    6. The art of seduction
- Above is 6 examples for you to search in the userinterface.

## Technologies Used

- **HTML**: Structure the application.
- **CSS**: Style the components and support dark mode.
- **JavaScript** : Add interactivity and fetch data from the Open Library API.

## Setup and Usage

1. Clone the repository or download the project files:
   ```bash
   git clone https://github.com/your-username/open-book-library-finder.git
   ```

2. Open the project folder and ensure all files are in place:
   ```
   index.html
   style.css
   script.js
   images/
   ```

3. Open the `index.html` file in your preferred web browser.

4. Use the search bar to find a book by name. The app will display details of the first search result.

5. Toggle the dark mode theme using the button in the navigation bar.

## Local Storage Usage

- **Theme**: The app remembers your preferred theme (light or dark).
- **Last Searched Book**: If you refresh the page, details of the last searched book are displayed.

## API Integration

This project uses the [Open Library Search API](https://openlibrary.org/developers/api) to fetch book details.

- **Base URL**: `https://openlibrary.org/search.json?q=`
- Example query for "Harry Potter":
  ```plaintext
  https://openlibrary.org/search.json?q=harry+potter
  ```

## This is my MVP
Project Description.
The Open Library Book Finder is a web application designed to provide users with detailed bibliographic information about books using their book name. It leverages the Open Library API to fetch and display book details efficiently.

Project MVP.
MVP for Open Library book search Data Display.

Objective:
The MVP is a simple web application that fetches and displays book details from the Open Library API by just searching the book name. It focuses on providing essential information about a book, offering users a quick and easy way to access bibliographic data.

Core Features:

1.)Book Details Display:
->Fetch and display the following details for a book:
->Title: The name of the book.
->Author(s): The author(s) of the book.
->Pages: no of the pages of the book.
->Publisher: The publishing company.
->Published Date: The year or date of publication.
->first publish year
->description: description of the book.
->Cover Image: The book’s cover, if available. 

2.)Allow users to input an the book name to fetch book details.
->Use the Open Library API endpoint:
->Minimal and User-Friendly Interface:

3.)clean design that includes:
4.)A search box for entering the books name.
5.)A fetch button to retrieve book details.
6.)A results section to display the fetched information in an organized format.

## Happy Coding