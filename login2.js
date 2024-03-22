let retrievedData = localStorage.getItem('updatedData')
          let updatedData = JSON.parse(retrievedData);
        function getValue(){
            let inputvalue = document.getElementById('email').value;
            let inputpass = document.getElementById('password').value;

          //  let validid = 'swaroopg';
          //  let validpass = 'swaroop16';

          //console.log(updatedData);

          let a = false;
          for(let i=0; i<4; i++){
            if(inputvalue === updatedData[i].username && inputpass === updatedData[i].password){
                a = true;
            }
          }
          if(a == true){
            alert("Login successfull!!")
            window.location.href = "content.html"
          }
          else{
            alert("Invalid Credentials")
          }
          
        }
        console.log(updatedData)