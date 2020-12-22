var width,height;
window.onresize = function(){
    width = this.innerWidth;
    height = this.innerHeight;

    if(width < height){
        smallwidth();
        //only apply to pages with img
        if(document.getElementsByClassName('image')[0] !== undefined){
            smallwidthimg();
        }
        if(document.getElementsByName('sosmedlist')[0] !== undefined){
            sosmedsmall();
        }
    }
    else {
        bigwidth();
        //only apply to pages with img
        if(document.getElementsByClassName('image')[0] !== undefined){
            bigwidthimg();
        }
        if(document.getElementsByName('sosmedlist')[0] !== undefined){
            sosmedbig();
        }
    }
}