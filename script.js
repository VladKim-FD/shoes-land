
// Sidebar

const navbarBtn = document.querySelector('.menu-btn');
const navbarMenu = document.querySelector('.navbar-menu');

if (navbarBtn.classList.contains('active') === false) {
    navbarMenu.style = `left : -301px;`
}

navbarBtn.addEventListener('click', function (e){
    e.preventDefault();
    if (navbarBtn.classList.contains('active')) {
        navbarBtn.classList.remove('active');
        navbarMenu.style = `left: -301px; transition : left 0.5s; z-index: 21;`
        
    } else {
         navbarBtn.classList.add('active');
        navbarMenu.style = `left: 0; transition : left 0.5s; z-index: 21;`
    }
})
navbarMenu.addEventListener('mouseup', function (e) {
    e.stopPropagation();
})
document.addEventListener('mouseup', function (e) {
    if (e.target != navbarBtn) {
        navbarMenu.style = `left: -301px; transition : left 0.5s; z-index: 21;`;
        navbarBtn.classList.remove('active');
    }
})


// Tabs

const header = document.querySelector('.header');

const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');

const navLinks = document.querySelectorAll('.nav-link');
const headerTitle = document.querySelector('.header-content h2');
const paragraphs = document.querySelectorAll('.header-content p');
const headerImage = document.querySelector('.header-img1');

tab1.addEventListener('click', changeTab1)
tab2.addEventListener('click', changeTab2)
tab3.addEventListener('click', changeTab3)

function changeTab1() {
    header.style = `background:  #EBFFE4`;
    navLinks.forEach((navLink) => {
        navLink.style = `color: #051101; opacity: 0.6;`
    })
    paragraphs.forEach((paragraph) => {
        paragraph.style = `color: #051101; opacity: 0.7;`
    })
    headerTitle.style = `color: #5CBE3A;`;
    headerImage.style = `display: none;`;
}

function changeTab2() {
    headerImage.style = `display: flex`;
    navLinks.forEach((navLink) => {
        navLink.style = `color: #000000; opacity: 1;`
    })
}

function changeTab3() {
    header.style = `background: #051101;
    opacity: 0.85; `
    navLinks.forEach((navLink) => {
        navLink.style = `color: white; opacity: 1;`
    })
    paragraphs.forEach((paragraph) => {
        paragraph.style = `color: white; opacity: 1;`
    })
    headerTitle.style = `color: white;`;
    headerImage.style = `display: none;`;
}


// stars

const stars1 = document.querySelectorAll('.item1-star i');
const stars2 = document.querySelectorAll('.item2-star i');
const stars3 = document.querySelectorAll('.item3-star i');
const stars4 = document.querySelectorAll('.slider-star1 i');
const stars5 = document.querySelectorAll('.slider-star2 i');
const stars6 = document.querySelectorAll('.slider-star3 i');
const output = document.querySelector('.output');

for (let i = 0; i < stars1.length; i++) {
    stars1[i].addEventListener('click', starRayting1);
    stars1[i].addEventListener('mouseover', starRayting1);
    stars1[i].addEventListener('mouseout', starRayting1);
    stars1[i].starValue = i + 1;
    // console.log([stars[i]]);
}
for (let x = 0; x < stars2.length; x++) {
    stars2[x].addEventListener('click', starRayting2);
    stars2[x].addEventListener('mouseover', starRayting2);
    stars2[x].addEventListener('mouseout', starRayting2);
    stars2[x].starValue = x + 1;
    // console.log([stars[i]]);
}
for (let y = 0; y < stars3.length; y++) {
    stars3[y].addEventListener('click', starRayting3);
    stars3[y].addEventListener('mouseover', starRayting3);
    stars3[y].addEventListener('mouseout', starRayting3);
    stars3[y].starValue = y + 1;
    // console.log([stars[i]]);
}
for (let z = 0; z < stars4.length; z++) {
    stars4[z].addEventListener('click', starRayting4);
    stars4[z].addEventListener('mouseover', starRayting4);
    stars4[z].addEventListener('mouseout', starRayting4);
    stars4[z].starValue = z + 1;
    // console.log([stars[i]]);
}
for (let a = 0; a < stars5.length; a++) {
    stars5[a].addEventListener('click', starRayting5);
    stars5[a].addEventListener('mouseover', starRayting5);
    stars5[a].addEventListener('mouseout', starRayting5);
    stars5[a].starValue = a + 1;
    // console.log([stars[i]]);
}
for (let b = 0; b < stars6.length; b++) {
    stars6[b].addEventListener('click', starRayting6);
    stars6[b].addEventListener('mouseover', starRayting6);
    stars6[b].addEventListener('mouseout', starRayting6);
    stars6[b].starValue = b + 1;
    // console.log([stars[i]]);
}

function starRayting1(event) {
    const t = event.type;
    const SValue = this.starValue;
    
    // if (t === 'click') {
    //     if (SValue <= 5) {
    //         output.innerHTML = `Message: ${SValue}`;
    //     }
    // }
    stars1.forEach((element, i)=>{
        if (t === 'click') {
            if (i < SValue) {
                element.classList.add('yellow')
            }else{
                element.classList.remove('yellow')
            }
        }else if (t === 'mouseover') {
            if (i < SValue) {
                element.classList.add('orange')
            }else{
                element.classList.remove('orange')
            }
        }else if (t === 'mouseout') {
            element.classList.remove('orange')
        }
    })
}

function starRayting2(event) {
    const t = event.type;
    const SValue = this.starValue;
    
      stars2.forEach((element, i)=>{
        if (t === 'click') {
            if (i < SValue) {
                element.classList.add('yellow')
            }else{
                element.classList.remove('yellow')
            }
        }else if (t === 'mouseover') {
            if (i < SValue) {
                element.classList.add('orange')
            }else{
                element.classList.remove('orange')
            }
        }else if (t === 'mouseout') {
            element.classList.remove('orange')
        }
    })
}

function starRayting3(event) {
    const t = event.type;
    const SValue = this.starValue;
    
       stars3.forEach((element, i)=>{
        if (t === 'click') {
            if (i < SValue) {
                element.classList.add('yellow')
            }else{
                element.classList.remove('yellow')
            }
        }else if (t === 'mouseover') {
            if (i < SValue) {
                element.classList.add('orange')
            }else{
                element.classList.remove('orange')
            }
        }else if (t === 'mouseout') {
            element.classList.remove('orange')
        }
    })
}

function starRayting4(event) {
    const t = event.type;
    const SValue = this.starValue;
    
       stars4.forEach((element, i)=>{
        if (t === 'click') {
            if (i < SValue) {
                element.classList.add('yellow')
            }else{
                element.classList.remove('yellow')
            }
        }else if (t === 'mouseover') {
            if (i < SValue) {
                element.classList.add('orange')
            }else{
                element.classList.remove('orange')
            }
        }else if (t === 'mouseout') {
            element.classList.remove('orange')
        }
    })
}

function starRayting5(event) {
    const t = event.type;
    const SValue = this.starValue;
    
       stars5.forEach((element, i)=>{
        if (t === 'click') {
            if (i < SValue) {
                element.classList.add('yellow')
            }else{
                element.classList.remove('yellow')
            }
        }else if (t === 'mouseover') {
            if (i < SValue) {
                element.classList.add('orange')
            }else{
                element.classList.remove('orange')
            }
        }else if (t === 'mouseout') {
            element.classList.remove('orange')
        }
    })
}

function starRayting6(event) {
    const t = event.type;
    const SValue = this.starValue;
    
       stars6.forEach((element, i)=>{
        if (t === 'click') {
            if (i < SValue) {
                element.classList.add('yellow')
            }else{
                element.classList.remove('yellow')
            }
        }else if (t === 'mouseover') {
            if (i < SValue) {
                element.classList.add('orange')
            }else{
                element.classList.remove('orange')
            }
        }else if (t === 'mouseout') {
            element.classList.remove('orange')
        }
    })
}

// stars end


// video player

const video = document.querySelector('.video');
const playBtn = document.querySelector('.controls__play');
const stopBtn = document.querySelector('.controls__stop');
const playBtnImg = document.querySelector('.play__btn');
const progress = document.querySelector('.progress');
const time = document.querySelector('.controls__time');
const speedUpBtn = document.querySelector('.speed-up');
const speedDownBtn = document.querySelector('.speed-down');
const speedNormalBtn = document.querySelector('.speed-normal');
const volumeSound = document.querySelector('.volume-controls');
const volumeSoundImg = document.querySelector('.volume-controls img')

let volume = document.querySelector('.volume');
let volumeProgress = document.querySelector('.progress-volume');


// Play and Pause video

function toggleVideoStatus(){
    if (video.paused) {
        video.play()
        playBtnImg.src = './images/pause.svg' 
    } else {
        video.pause()
        playBtnImg.src = './images/play.svg'
    }
}

playBtn.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);

// Stop video

function stopVideo() {
    video.currentTime = 0;
    video.pause()
    playBtnImg.src = './images/play.svg'
}

stopBtn.addEventListener('click', stopVideo);

// Timer

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    
    let minutes = Math.floor(video.currentTime / 60);
    
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
  
    let seconds = Math.floor(video.currentTime % 60);
    
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    
    time.innerHTML = `${minutes}:${seconds}`;
}

video.addEventListener('timeupdate', updateProgress);

// Set progress

function setProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}

progress.addEventListener('change', setProgress)

// Speed Up video

function speedUp() {
    video.play();
    video.playbackRate += 0.25;
}

speedUpBtn.addEventListener('click', speedUp)

// Speed Down video

function speedDown() {
    video.play();
    video.playbackRate -= 0.25;
}

speedDownBtn.addEventListener('click', speedDown)

// Speed Normal video 

function speedNormal() {
    video.play();
    video.playbackRate = 1;
}

speedNormalBtn.addEventListener('click', speedNormal)

// Volume video

function videoVolume() {
    let v = volume.value;
    // console.log(v);
    video.volume = v / 100;
}

volume.addEventListener('input', videoVolume)

// Volume video

function soundVolume() {
    let srcAtr = volumeSoundImg.getAttribute('src');
    // console.log(srcAtr);
    let v = video.volume;
    if (srcAtr === './images/volume-off.svg') {
        volumeSoundImg.setAttribute('src', './images/volume-on.svg')
        v = 1;
        video.muted= true;
    }
    else {
        volumeSoundImg.setAttribute('src', './images/volume-off.svg')
        v = 0;
        video.muted = false;
    }
}

volumeSound.addEventListener('click', soundVolume);

// Time update

function progressUpdate() {
    console.log(video.duration);
    console.log(video.currenTime);
    let d = video.duration;
    let c = video.currentTime;
    volumeProgress.value = (c * 100) / d;
}

video.addEventListener('timeupdate', progressUpdate)

// Video rewind

// function videoRewind(event) {
//     let w = this.offsetWidth;
//     let o = event.offsetX;
//     console.log(w);
//     console.log(o);
//     this.value = (o / w) * 100;
//     video.currentTime = video.duration * (o / w);
//     video.play();
// }

// volumeProgress.addEventListener('click', videoRewind)

// video end