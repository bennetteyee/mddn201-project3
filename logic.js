function toggleSidebar() {
   document.getElementById("sidebar").classList.toggle('active');
}

function changeImage1() {
    var imageTracker = 'img';
    var image = document.getElementById("image1");
    
    if(imageTracker === 'img'){
        image.src ='img/img1-blur.jpg';
        imageTracker = 'img-blur';
    }else if(imageTracker === 'img-blur'){
        image.src='img/img1.jpg';
        imageTracker = 'img';
    }
       
}

function changeImage2() {
    var imageTracker = 'img';
    var image = document.getElementById("image2");
    
    if(imageTracker === 'img'){
        image.src ='img/img2.jpg';
    }else if(imageTracker === 'img-blur'){
        image.src='img/img1.jpg';
        imageTracker = 'img';
    }
       
}

function changeImage3() {
    var imageTracker = 'img';
    var image = document.getElementById("image3");
    
    if(imageTracker === 'img'){
        image.src ='img/img3-blur.jpg';
        imageTracker = 'img-blur';
    }else if(imageTracker === 'img-blur'){
        image.src='img/img3.jpg';
        imageTracker = 'img';
    }
       
}

function changeImage4() {
    var imageTracker = 'img';
    var image = document.getElementById("image4");
    
    if(imageTracker === 'img'){
        image.src ='img/img4.jpg';
        imageTracker = 'img-blur';
    }else if(imageTracker === 'img-blur'){
        image.src='img/img1.jpg';
        imageTracker = 'img';
    }
       
}