  // Real,Seiya 1 D
 function login() {
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;

   console.log("You enter:" + " " + email);
   console.log("You enter:" + " " + password);

      if(email==="seiyareal37@gmail.com"){
       console.log("Your email is correct " + email);
      } else{
       console.log("Your email is incorrect")
      }

      if(password==="seiya123"){
       console.log("Your password is correct " + password);
      } else{
       console.log("Your pasword is incorrect");
      } 

      if(email==="seiyareal37@gmail.com" && password==="seiya123"){
         console.log("Your email and password is correct");
      }
      if(email!=="seiyareal0906@gmail.com" && password!=="seiya123"){
          console.log("Your email and password is incorrect");
      }
      if(email!=="seiyareal37@gmail.com" && password==="seiya123"){
          console.log("Your email is incorrect");
      }
      if(email==="seiyareal37@gmail.com" && password!=="seiya123"){
          console.log("Your password is incorrect");
      }

      


      //Email: seiyareal37@gmail.com // Error Message: your email is incorrect
      //Password: Seiya123//Error Message: your password is incorrect










   }
