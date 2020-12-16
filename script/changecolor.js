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
function inshadow(docid, want){
    if(want == 'yes'){
        document.getElementById(docid).classList.add('inshadow')
    }
    else{
        document.getElementById(docid).classList.remove('inshadow')
    }
}