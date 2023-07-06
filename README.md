# WeatherApp
The WeatherApp is a web application that provides real-time weather information for a specific city. It allows users to quickly check the current temperature, humidity, and wind speed of a desired location. 
The project is developed using HTML, CSS, and JavaScript.

The main components of the project are as follows:

HTML Structure:

The HTML file defines the structure of the WeatherApp. It includes a card element that contains various sections for displaying weather information. The card includes a search input field and a search button for users to enter the preferred city and retrieve the weather data.

CSS Styling:

The CSS file contains styling rules to visually design the WeatherApp. It defines the layout, colors, fonts, and responsiveness of the application. The card element is styled to have a gradient background and rounded corners. The different sections and elements within the card are positioned and styled accordingly for optimal display.

JavaScript Functionality:

The JavaScript code handles the functionality of the WeatherApp. It interacts with the OpenWeatherMap API to fetch weather data for the specified city. The API key and base URL are defined as constants. The code includes an asynchronous function, checkWeather, that performs the API request and updates the weather information displayed on the page. Depending on the weather conditions, the appropriate weather icon is displayed. The code also includes an event listener that triggers the checkWeather function when the search button is clicked.

Additional Files:

The project includes two additional JavaScript files. scriptYear.js retrieves the current year and dynamically updates the footer section with the correct year. This ensures that the footer always displays the current year. The script.js file contains the main functionality for retrieving and displaying weather data.

To use the WeatherApp, simply enter the desired city name in the search input field and click the search button. The application will fetch the weather data for the specified city and display it in the respective sections of the card. In case an invalid city name is entered, an error message will be shown.

Key Features:

1) Weather Display: The WeatherApp displays the current weather conditions of the specified city. It includes the temperature in Celsius, the city name, and a corresponding weather icon that represents the weather conditions.

2) Search Functionality: Users can enter the name of a city in the search input field and click the search button to retrieve the weather information for that location. The application sends a request to the OpenWeatherMap API and fetches the relevant data.

3) Error Handling: If an invalid city name is entered or if the API request fails, the application shows an error message to notify the user about the issue. This ensures that users receive accurate information and are aware of any problems with the data retrieval process.

4) Responsive Design: The WeatherApp is designed to be responsive and adapt to different screen sizes. It includes media queries that adjust the layout and styling based on the device's screen width. This ensures a consistent and optimal user experience across various devices, including desktops, tablets, and mobile phones.

Technologies Used:

The WeatherApp project is built using the following technologies:

1) HTML (Hypertext Markup Language): HTML is used to structure the web page and define the elements and layout of the application.

2) CSS (Cascading Style Sheets): CSS is responsible for the visual styling of the WeatherApp. It defines the colors, fonts, spacing, and overall appearance of the application.

3) JavaScript: JavaScript is used for the dynamic functionality of the WeatherApp. It handles the API requests, updates the weather information, and adds interactivity to the user interface.

4) OpenWeatherMap API: The project integrates with the OpenWeatherMap API to retrieve weather data. The API provides access to a wide range of weather information for different locations.

5) Google Fonts: The WeatherApp utilizes the "Poppins" font from Google Fonts to enhance the typography and overall design of the application.

