var width;
window.onresize = function(){
    width = this.innerWidth;

    if(width < 1301){
        smallwidth();
        //only apply to pages with img
        if(document.getElementsByClassName('image').toString() !== '[object HTMLCollection]'){
            smallwidthimg();
        }
    }
    else {
        bigwidth();
        //only apply to pages with img
        if(document.getElementsByClassName('image').toString() !== '[object HTMLCollection]'){
            bigwidthimg();
        }
    }
}