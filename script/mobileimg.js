if(document.documentElement.clientWidth < 1301) smallwidthimg();

function smallwidthimg(){
    image = document.getElementsByClassName('image');
    for(var i = 0; i < image.length; i++){
        image[i].classList.add('imgfull')
    }
}

function bigwidthimg(){
    image = document.getElementsByClassName('image');
    for(var i =0;i<image.length;i++){
        image[i].classList.remove('imgfull');
    }
}