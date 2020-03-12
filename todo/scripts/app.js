function addToDo(){
    //read input
    //var text = document.getElementById('txt-task').value;
    var text = $('#txt-task').val();

    if(text!=""){
        //cleaning input
        //document.getElementById('txt-task').Value="";
        
        $('#txt-task').val("");
        console.log(text);

        // create the string (html)

        //var li = `<li>${text}</li>`;
        var li = `<li id='x'> ${text} <button onclick="deleteToDo('x');"> - </button> </li>`;
        // display the to do list

        $('#pending-list').append(li);

        //set focus to the input
    }
    
    $('#txt-task').focus();
}

function deleteToDo(id){
    console.log("delete");
    $('#'+id).remove();
}


function init(){
    console.log("Init the todo App");
    //sensing user actions/events
    $("#btn-add").click(addToDo);
}

// when the browser finishin rendering the html, excute init
window.onload=init;