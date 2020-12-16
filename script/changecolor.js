function changecolor(docid, changeto){
    document.getElementById(docid).style.backgroundColor = changeto;
}
function shadow(docid, want){
    if(want == 'yes'){   
        document.getElementById(docid).classList.remove('noshadow')
    }
    else{
        document.getElementById(docid).classList.add('noshadow')
    }
}