var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000);

// -------------------------------------------

        // var counter = 1;
        // setInterval(function(){
        //     document.getElementsByName('radio-btn' + counter).checked = true;
        //     counter++;
        //     if(counter > 4){
        //         counter = 1;
        //     }
        // }, 5000);