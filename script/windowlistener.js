function mobile(){
    $('#navbar').addClass('navbarmobile')
    $('#holder').addClass('holdermobile')

    border = $('.border');
    for(var i=0;i<border.length;i++){
        border[i].classList.add('bordermobile')
    }

    div = $('div');
    for(var i=0;i<div.length;i++){
        if(!div[i].classList['value'].includes('shadow') && !div[i].classList['value'].includes('navbar') && !div[i].classList['value'].includes('holder')){
            div[i].classList.add('divmobile')
        }
    }

    navbar = $('.navbarmenulist');
    for(var i=0;i<navbar.length;i++){
        navbar[i].classList.add('navbarmenulistmobile')
    }

    //page specific
    $('#sosmedholder').css('text-align','left');
}
function desktop(){
    $('#navbar').removeClass('navbarmobile')
    $('#holder').removeClass('holdermobile')

    border = $('.border');
    for(var i=0;i<border.length;i++){
        border[i].classList.remove('bordermobile')
    }

    div = $('div');
    for(var i=0;i<div.length;i++){
        if(!div[i].classList['value'].includes('shadow') && !div[i].classList['value'].includes('navbar') && !div[i].classList['value'].includes('holder')){
            div[i].classList.remove('divmobile')
        }
    }

    navbar = $('.navbarmenulist');
    for(var i=0;i<navbar.length;i++){
        navbar[i].classList.remove('navbarmenulistmobile')
    }

    //page specific
    $('#sosmedholder').css('text-align','center');
}


if(($(document).height())>($(document).width())) mobile();

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