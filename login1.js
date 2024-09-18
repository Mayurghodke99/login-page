let data = [
    {username: "Mayur", password: "Mayur99"},
    {username: "abc", password: "abc123"},
    {username: "xyz", password: "xyz123"},
    {username: "pqrs", password: "pqrs123"},
    ]
    function getValue(){
      //let retrievedData = localStorage.getItem('data')
      //let newArrayOfData = JSON.parse(retrievedData);

      let inputvalue = document.getElementById('email').value;
      let inputpass = document.getElementById('password').value;

    //console.log(newArrayOfData);

    let a = false;
    for(let i=0; i<4; i++){
      if(inputvalue === data[i].username && inputpass === data[i].password){
          a = true;
      }
    }
    if(a == true){
      alert("Login successfull!!")
      window.location.href = 'content.html';
    }
    else{
      alert("Invalid Credentials")
    }
    
  }
  
  localStorage.setItem('data',JSON.stringify(data));
