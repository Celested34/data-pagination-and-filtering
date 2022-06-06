/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

//create a function with 2 parameters: list and page
function showPage (list, page) {

   //create two variables to store the start index and the end index
   //use the page parameter from the function
   //use number 9 because the page will display 9 students total 
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9; 

   //create a new variable in order to store the UL elements from index.html 
   let studentList = document.getElementsByClassName('student-list');

   //use the innerhtml property and create an empty string 
   studentList.innerHTML = "";

   //use a for loop for the list parameter
   for (i = 0; i < list.length; i++) {
      //the loop needs to be between the first and last index
      if (i >= startIndex && i < endIndex ) {
         //using template literals in order to display the 9 students information
          let studentInfo =  `
            <li class="student-item cf">
            <div class="student-details">
            <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        </li>
          `;
         //use insertAdjacentHTML to show elements in browser 
         studentList[i].insertAdjacentHTML('beforeend', studentInfo); 
         
      }  
   }
 
};



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

//the function has 1 parameter 
function addPagination (list) {

   // a variable to store number of buttons 
   let numOfPage = Math.ceil(list.length/9);  

   //a new variable to store UL elements 
   let linkList = document.getElementsByClassName('link-list');

   //use the innerHTML property and create an empty string
   linkList.innerHTML = '';

   //create a for loop to check for the buttons  
   for (i = 0; i <= numOfPage; i++) {

      //new button 
      let button = `
       <li>
          <button type="button">${i}</button>
       </li>
      `;

      //use insertAdjacentHTML to show elements in browser 
      linkList.insertAdjacentHTML("beforeend", button);

      //select the first pagination button 
      let firstButton = document.querySelector('button')
      firstButton.className = (active);

      //create ana event listener
      linkList.addEventListener('click', (e) => {

         //conditional  that checks for tagName
         if(e.target.tagName === 'BUTTON') {
             
         //if condition is met use querySelector
         document.querySelector('active').className = '';

         //adding the active class to the button that was clicked
         e.target.className = 'active';
         
         //call the showPage function passing the list parameter
         showPage(list, e.target.textContent);
         }
         

      })

   

   }; 
};







// Call functions
showPage(data,1);
addPagination(data);