
// add clickable function by addEventListener
document.getElementById('submit-btn').addEventListener('click', function (){

  //get email
const userEmail = document.getElementById('user-email').value;
// console.log(userEmail);

  //get passWord
const userPass = document.getElementById('user-pass').value;

// console.log(userPass);

// set email password and check
if ( (userEmail == 'hasina@gmail.com') && (userPass == 'hasina') ){

  window.location.href = '/banking2.html';

} else {

  alert('Invalid User');
}

});








































// // add addEventHandler
// document.getElementById('submit-btn').addEventListener('click', function(){

//   // get email
//   const userEmail = document.getElementById('user-email');
//   const getEmail =userEmail.value;

//   //get password

//   const userPass = document.getElementById('user-pass');
//   const getPass =userPass.value;


//   if ( getEmail == 'hasu2421@gmail.com' && getPass == 'hasu'){
//     // go one page to another page
//     window.location.href = "/banking.html"; 
//   }

//    else{
//     alert('Invalid User!');
//    }

// })


