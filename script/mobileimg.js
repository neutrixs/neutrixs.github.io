if(document.documentElement.clientWidth < 1301) smallwidthimg();

function smallwidthimg(){
    image = document.getElementsByClassName('image');
    for(var i = 0; i < image.length; i++){
        image[i].style.width = '100%';
    }
}

function bigwidthimg(){
    image = document.getElementsByClassName('image');
    for(var i =0;i<image.length;i++){
        image[i].style.width='75%'
    }
}