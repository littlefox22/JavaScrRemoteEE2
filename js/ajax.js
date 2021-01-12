console.log("I am connected");
/* 
window.onload = function () { //without window onload var button wont work, window print works also
    console.log('Loaded');
    var button = document.querySelector('#button');
    console.log(button);
} */

/* window.onload = function () {
    // XHR is a javascript predefined object
    let xhr = new XMLHttpRequest();
    // we specify a request method and address
    xhr.open('GET', 'remote/data.html');
    // we send the request
    xhr.send();

    xhr.onreadystatechange = function (e) { // e means event
        if (xhr.status === 200) {
          //everything OK, do something with the data
          console.log(xhr.responseText);
        } else {
          //some error occured, log it in the console
          console.log('Error', xhr.statusText);
        }
      };

    xhr.onload = function (data) {
      console.log(data);
      let result = data.target.response;
      setTimeout(function () {
        document.querySelector('#test1').innerHTML = result;
      }, 3000);
    };
  }; */

  //Using FETCH
  window.onload = function () {
    let data = {
      name: 'John',
      age: '11',
    };
    //we build an object, containing parameters for our request
    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };

    fetch('remote/data.json') //Accepts a function , only fired if request is successful
    .then(function(response){
        console.log(response);
        // return response;
        return response.json();
    })
    .then(function(data){
        console.log(data);
        document.querySelector('#test1').innerHTML = JSON.stringify(data);
    /* .catch(function(error){ //accepts also a function but catches all error
        console.log(response); */
    });
  };

