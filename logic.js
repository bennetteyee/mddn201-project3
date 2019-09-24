function toggleSidebar() {
   document.getElementById("sidebar").classList.toggle('active');
    console.log('works');
}

function changeImage1() {
    var imageTracker = 'img';
    var image = document.getElementById("image1");
    
    if(imageTracker === 'img'){
        image.src ='img/img-1.jpg';
        imageTracker = 'img-blur';
    }else{
        image.src='img/img1.jpg';
         imageTracker = 'img';
    }
       
}