# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# LoadingScreen-Bill-Application
This is a Technical Assessment for Bliss Application where it is developed a Loading Screen for users. 

## FREQ-01: Loading Screen
This requirement is to make a request to the /api/server-health endpoint using the fetch API. If the request is successful and the server health is OK, it hides the loading screen and shows the "List Screen". 
If the request is not successful or the server health is NOT OK, it hides the loading screen and shows the "Retry Action" widget.

The <App> component displays a loading screen while it checks the server health using the API endpoint and it uses the useState and useEffect hooks to manage its state and perform side effects. 
The useState hook was used to define two state variables: 
1. serverHealth - which stores the health of the server;
2. isLoading - which stores a boolean value indicating whether the component is currently loading.
The useEffect hook was used to perform an asynchronous action when the component mounts (i.e., when it is first rendered). 
In this case, the useEffect hook calls the checkServerHealth function, which makes a request to the /health endpoint on the server and stores the server health in the serverHealth state variable. 
If there is an error making the request, the serverHealth state variable is set to 'unhealthy'. After the server health has been checked, the isLoading state variable is set to false, which causes the loading screen to be removed.
The App component then uses a conditional rendering pattern to display different content based on the values of the serverHealth and isLoading state variables. 
If isLoading is true, the component displays a loading message. 
If serverHealth is 'healthy', the component displays the ListScreen component. Otherwise, it displays a message indicating that the server is not healthy and a "Retry" button that allows the user to retry the server health check.
  
  ## FREQ-02: Questions List Screen
  This requirement shows a loading screen if the server health is being checked and shows the List Screen with a search box at the top if the app is opened with an URL that includes the filter parameter, where:
- It fetches 10 records at a time from the appropriate endpoint, and load 10 additional records if the user shows intent to browse more;
- Allows the user to filter the results by using the search box, and display the results on the same screen as a list.
- Provides a way for the user to share the current search results (empty or not) with others via the "Share Screen," and send an appropriate URL to do so.
- Presents a dismiss button to exit the search variant.
- Allows the user to select a list element and show the "Detail Screen" when one is selected.
  
  ## FREQ-03: Detail Screen
  To implement the "Detail Screen" in the application, these were the steps followed:
    1. When a row is selected in the "List Screen" or the application is opened with a detail screen URL.
    2. Displaying the details of the object using appropriate visualization widgets, such as text, images, or charts.
    3. Allowing the user to navigate back to the "List Screen" by adding a back button to the "Detail Screen".
    4. Allowing the user to share the content on the "Detail Screen" by providing a share button that opens the "Share Screen" and sends an appropriate URL.
  
  ## FREQ-04: Share Screen
  This code implements a Share Screen that allows the user to share content with other users by email. The Share Screen component takes a contentId prop, which represents the ID of the content being shared. When the user enters an email address and clicks the "Share" button, the component makes an HTTP POST request to the /share endpoint with the contentId and the email as the request body.
The implementation of the "Share Screen" followed these steps:
    1. Display a form on the "Share Screen" that allows the user to enter the email address of the person they want to share the content with.
    2. When the user submits the form, make an API call to the appropriate backend service with the email address and any other necessary data.
    3. The backend service should send an email to the specified address with a link to the shared content.
  
  ## FREQ-05: No Connectivity Screen
  This code implements a NoConnectionScreen component that is displayed to the user when there is no internet connection. The component uses the navigator.onLine property and the online and offline events to detect the connectivity status of the user's device. It also uses the useEffect hook to add and remove event listeners for these events.


