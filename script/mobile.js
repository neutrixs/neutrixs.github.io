if(document.documentElement.clientWidth < document.documentElement.clientHeight) smallwidth();

function smallwidth(){
    
    document.getElementById('holder').style.width = 'unset';
    document.getElementById('sticky').style.width = 'unset';

    marginr = document.getElementsByClassName('marginr');
    for(var i = 0;i<marginr.length;i++){
        marginr[i].style.marginRight = '0';
        marginr[i].style.paddingLeft = '0.5em';
        marginr[i].style.paddingRight = '0.5em';
    }
        
    height0 = document.getElementsByName('border');
    for(var i = 0; i<height0.length;i++){
        height0[i].style.height = '0%';
    }
    
    padding0 = document.getElementsByClassName('divstyle');
    for(var i = 5;i<padding0.length;i++){
        padding0[i].style.boxShadow = 'none';
        padding0[i].style.borderRadius = '0em';
    }

}

function bigwidth(){
    document.getElementById('holder').style.width = '75%';
    document.getElementById('sticky').style.width = '97%';

    marginr = document.getElementsByClassName('marginr');
    for(var i = 0;i<marginr.length;i++){
        marginr[i].style.marginRight = '1em';
        marginr[i].style.paddingLeft = '2em';
        marginr[i].style.paddingRight = '2em';
    }

    height0 = document.getElementsByName('border');
    for(var i = 0; i<height0.length;i++){
        height0[i].style.height = '2em';
    }

    padding0 = document.getElementsByClassName('divstyle');
    for(var i = 5;i<padding0.length;i++){
        padding0[i].style.boxShadow = '0.5em 0.5em 1.5em #000000, -0.5em -0.5em 1.5em #323232';
        padding0[i].style.borderRadius = '1em';
    }
}