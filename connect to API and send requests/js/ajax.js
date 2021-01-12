// JavaScript Document
//the point of the exercise is to have the buttons display different info from the server
//a function to obtain a single item of data, under a given id
function getData(id) {
    var adr = 'https://jsonplaceholder.typicode.com/albums/' + id; //ID is not declared anywhere, because it's a parameter of the function.
        
        fetch(adr).then(function(response) {
            return response.json();
            //TODO take JSON data from the response
            //or throw an error if necessary
        }).then(function(data) {
            //TODO display data in console
            console.log(data);

            //document.querySelector('#test2').innerHTML = JSON.stringify(data); Put the JSON.stringify in a variable, then assign that to your HTML element

            //and put it somewhere in DOM
            var letMeTry = JSON.stringify(data);
            document.querySelector('#test2').innerText = letMeTry;
        })
        .catch(function(error) {
            alert(error);
        });
}

//when window is loaded...
window.onload = function() {
    
    console.log('Loaded');
    var button2 = document.querySelector('#button2');
    console.log(button2);
    
        //TODO create some event listeners that will call your function when user clicks something
    document.getElementById("button2").onclick = button2Clicked;
    function button2Clicked() {
        document.getElementById("test2").innerHTML = getData(2);
    }
    //same as before but shorter
    document.getElementById("button").onclick = function() {
        getData(1);
    }
    document.getElementById("button3").onclick = function() {
        getData(3);
    }

    document.getElementById("button5").onclick = function() {
        var letMeClose = document.querySelector('h4');
        document.querySelector('#test2').innerHTML = letMeClose;
    }

    document.getElementById("button4").onclick = displayDate;

    function displayDate() {
    document.getElementById("demo").innerHTML = Date();
    }

    document.getElementById("newbutton").onclick = function (id) {
        
        id.innerHTML = "Oooops!";
        console.log(id);
    }

}
