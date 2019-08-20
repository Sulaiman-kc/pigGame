var player1,player2;
player1 = document.forms["pname"]["player1"];    
player2 = document.forms["pname"]["player2"];   
document.querySelector('#players').addEventListener('click',players);

function players(){     
    if (player1.value== "")                                  
    {         
        alert("Please enter player names"); 
        return false; 
    }else if (player2.value == "")                                  
    {         
        alert("Please enter player names"); 
        return false; 
    }else{
        window.location = "../gameinterface.html";
        alert("sucess");
        // return true
    }

}
