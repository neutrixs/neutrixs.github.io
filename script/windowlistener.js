function mobile(){
    document.getElementById('navbar').classList.add('navbarmobile')
    document.getElementById('holder').classList.add('holdermobile')

    border = document.getElementsByClassName('border');
    for(var i=0;i<border.length;i++){
        border[i].classList.add('bordermobile')
    }

    div = document.getElementsByTagName('div');
    for(var i=0;i<div.length;i++){
        if(!div[i].classList['value'].includes('shadow') && !div[i].classList['value'].includes('navbar')){
            div[i].classList.add('divmobile')
        }
    }

    //sosmed part(remove on other pages)
    document.getElementById('sosmedholder').style.textAlign = 'left';
}
function desktop(){
    document.getElementById('navbar').classList.remove('navbarmobile')
    document.getElementById('holder').classList.remove('holdermobile')

    border = document.getElementsByClassName('border');
    for(var i=0;i<border.length;i++){
        border[i].classList.remove('bordermobile')
    }

    div = document.getElementsByTagName('div');
    for(var i=0;i<div.length;i++){
        if(!div[i].classList['value'].includes('shadow') && !div[i].classList['value'].includes('navbar')){
            div[i].classList.remove('divmobile')
        }
    }

    //sosmed part(remove on other pages)
    document.getElementById('sosmedholder').style.textAlign = 'center';
}


if(document.documentElement.clientHeight>document.documentElement.clientWidth) mobile();

var width,height;
window.onresize = function(){
    width = this.innerWidth;
    height = this.innerHeight;

    if(height>width){
        mobile()
    }
    if(width>height){
        desktop()
    }
}