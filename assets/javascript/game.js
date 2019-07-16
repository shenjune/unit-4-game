$(document).ready(function(){
    // set up magic number variable between 19-120
    var magicNumber = Math.floor((Math.random() * 101) + 19);
    
    // link magic number variable show to html
    $('#num').html(magicNumber);
    
    
    //set up 4 variables for the gems.  the values should be between 1 -12
    var cat1 = Math.floor((Math.random() * 11 + 1));
    
    var cat2 = Math.floor((Math.random() * 11 + 1));
    
    var cat3 = Math.floor((Math.random() * 11 + 1));
    
    var cat4 = Math.floor((Math.random() * 11 + 1));
    
    //set up variables for total, wins, and losses
    var total = 0;
    var win = 0;
    var lose = 0;
    
    //link win and lose values to html
    $('#wins').html(win);
    
    $('#losses').html(lose);
    
    //write win function gotIt
    function gotIt() {
        alert ("Yay! You saved the cats!");
        win++;
        $('#wins').text(win);
        reset();
        
    }
        
    //write lose function tooHigh
    function tooHigh() {
        alert ("Dude! Try again! Save those cats!");
        lose++;
        $('#losses').text(lose);
        reset();
    
        
    }
    //create game reset
    function reset() {
        document.getElementById("userTotal").innerHTML = 0;
        magicNumber = Math.floor((Math.random() * 101) + 19);
        document.getElementById("num").innerHTML = magicNumber;
        cat1 = Math.floor((Math.random() * 11 + 1));
        cat2 = Math.floor((Math.random() * 11 + 1));
        cat3 = Math.floor((Math.random() * 11 + 1));
        cat4 = Math.floor((Math.random() * 11 + 1));
        userTotal = 0
        total = 0
    }
    
    //make click events for each cat that add to total and compare the total to magic number
    
        $("#cat1").on('click' , function () {
            total = total + cat1;
            console.log("new user total " + total);
            $('#userTotal').text(total);
            if (total === magicNumber) {gotIt()    
            }else if (total > magicNumber) {tooHigh()
            }
        });
    
        $("#cat2").on('click' , function () {
            total = total + cat2;
            console.log("new user total " + total);
            $('#userTotal').text(total);
            if (total === magicNumber) {gotIt()    
            }else if (total > magicNumber) {tooHigh()
            }
        });
    
        $("#cat3").on('click' , function () {
            total = total + cat3;
            console.log("new user total " + total);
            $('#userTotal').text(total);
            if (total === magicNumber) {gotIt()    
            }else if (total > magicNumber) {tooHigh()
            }
        });
        
        $("#cat4").on('click' , function () {
            total = total + cat4;
            console.log("new user total " + total);
            $('#userTotal').text(total);
            if (total === magicNumber) {gotIt()    
            }else if (total > magicNumber) {tooHigh()
            }
        });
    })
     
    //write if statement for wins (total = magic number)
    
    //write else statement for losses (total > magic number)
    
    