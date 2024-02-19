
        // using one click function
        function blueColor() {
            document.body.style.background = 'blue';
        }


        // findout using id and set onclick 
        const addYellow = document.getElementById('yellowColor');
        addYellow.onclick = addcolor; //just add function name
        function addcolor() {
            document.body.style.background = 'yellow';
        }


        // using anonymous function
        const addGreen = document.getElementById('greenColor');
        addGreen.onclick = function () {
            document.body.style.background = 'green';
        }


        // using addEventListener 
       const addGray = document.getElementById('grayColor');
       addGray.addEventListener('click', addGraycolor);
       function addGraycolor (){
        document.body.style.background = 'gray';
       }

      // direct use addEventListener 
      document.getElementById('goldenColor').addEventListener('click', function(){
        document.body.style.background = 'goldenrod';
      })

 