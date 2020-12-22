if(document.documentElement.clientWidth < document.documentElement.clientHeight) sosmedsmall();

function sosmedsmall(){
    var sosmedbutton = document.getElementsByName('sosmedlist');
    for(var i=0;i<sosmedbutton.length;i++){
        sosmedbutton[i].style.textAlign = 'left';
    }
}

function sosmedbig(){
    var sosmedbutton = document.getElementsByName('sosmedlist');
    for(var i=0;i<sosmedbutton.length;i++){
        sosmedbutton[i].style.textAlign = 'center';
    }
}