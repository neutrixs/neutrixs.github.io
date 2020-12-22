if(document.documentElement.clientWidth < document.documentElement.clientHeight) smallwidth();

function smallwidth(){
    
    document.getElementById('holder').classList.add('holderfull');
    document.getElementById('sticky').classList.add('topsquare');

    marginr = document.getElementsByClassName('marginr');
    for(var i = 0;i<marginr.length;i++){
        marginr[i].style.marginRight = '0';
        marginr[i].style.paddingLeft = '0.5em';
        marginr[i].style.paddingRight = '0.5em';
    }
        
    height0 = document.getElementsByClassName('border');
    for(var i = 0; i<height0.length;i++){
        height0[i].classList.add('noborder');
    }
    
    padding0 = document.getElementsByClassName('divstyle');
    //change i to amount of menu bar option + 1
    for(var i = 6;i<padding0.length;i++){
        padding0[i].style.boxShadow = 'none';
        padding0[i].style.borderRadius = '0em';
    }

}

function bigwidth(){
    document.getElementById('holder').classList.remove('holderfull');
    document.getElementById('sticky').classList.remove('topsquare');

    marginr = document.getElementsByClassName('marginr');
    for(var i = 0;i<marginr.length;i++){
        marginr[i].style.marginRight = '1em';
        marginr[i].style.paddingLeft = '2em';
        marginr[i].style.paddingRight = '2em';
    }

    height0 = document.getElementsByClassName('border');
    for(var i = 0; i<height0.length;i++){
        height0[i].classList.remove('noborder');
    }

    padding0 = document.getElementsByClassName('divstyle');
    //change i to the amount of menu bar option + 1
    for(var i = 6;i<padding0.length;i++){
        padding0[i].style.boxShadow = '0.5em 0.5em 1.5em #000000, -0.5em -0.5em 1.5em #323232';
        padding0[i].style.borderRadius = '1em';
    }
}