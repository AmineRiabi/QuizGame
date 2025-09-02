// initial content
const startButton = document.getElementById("start");
const exitButton = document.querySelector(".exit");
const containers = document.querySelectorAll([".initial-content",".container",".result-content"]);
startButton.onclick = function(){
    containers[0].style.display = 'none';
    containers[1].style.display = 'block';
}
exitButton.onclick = function(){
    window.close();
}
// result-content
const repeated = document.getElementById("repeated");
repeated.onclick = function(){
    location.reload();
}
// initial content
const flags = {
    morocco:{
        Capital: "rabat",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/moroccan.webp",
        imageBackground: "imgs/background/rabat.jpg",
        countryName: 'morocco',
         options:[
            'rabat',
            'paris',
            'madrid',
            'rome'
         ]
    },
    spain:{
        Capital: "madrid",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/spanish.webp",
        imageBackground: "imgs/background/madrid.jpg",
        countryName: 'spain',
        options:[
            'paris',
            'rabat',
            'madrid',
            'rome'
         ]
        
    },
    france:{
        Capital: "paris",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/france.jpg",
        imageBackground: "http://127.0.0.1:5500/imgs/background/paris.jpg",
        countryName: 'france',
        options:[
            'madrid',
            'rabat',
            'rome',
            'paris'
         ]
        
    },
    italy:{
        Capital: "rome",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/Italian.jpg",
        imageBackground: "http://127.0.0.1:5500/imgs/background/rome.jpg",
        countryName: 'italy',
        options:[ 
            'paris',
            'rome',
            'rabat',
            'madrid'
         ]
    },
    palestine:{
        Capital: "Jérusalem",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/palestine.jpg",
        imageBackground: "http://127.0.0.1:5500/imgs/background/Jérusalem.jpg",
        countryName: 'palestine',
        options:[ 
            'paris',
            'Jérusalem',
            'rabat',
            'madrid'
         ]
    },
    brazil:{
        Capital: "Brasília",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/brazil.jpg",
        imageBackground: "http://127.0.0.1:5500/imgs/background/Brasília.jpg",
        countryName: 'brazil',
        options:[ 
            'paris',
            'Jérusalem',
            'Brasília',
            'madrid'
         ]
    },
    allemagne:{
        Capital: "Berlin",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/allemagne.jpg",
        imageBackground: "http://127.0.0.1:5500/imgs/background/Berlin.jpg",
        countryName: 'allemagne',
        options:[ 
            'Berlin',
            'Jérusalem',
            'Brasília',
            'rabat'
         ]
    },
    Mexique:{
        Capital: "mexico",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/Mexique.WEBP",
        imageBackground: "http://127.0.0.1:5500/imgs/background/mexico.webp",
        countryName: 'Mexique',
        options:[ 
            'mexico',
            'Jérusalem',
            'Brasília',
            'Berlin'
         ]
    },
    switzerland:{
        Capital: "bern",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/switzerland.jpg",
        imageBackground: "http://127.0.0.1:5500/imgs/background/bern.jpg",
        countryName: 'switzerland',
        options:[ 
            'Jérusalem',
            'bern',
            'Berlin',
            'mexico'
         ]
    },
    tunisie:{
        Capital: "tunis",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/tunisie.jpg",
        imageBackground: "http://127.0.0.1:5500/imgs/background/tunis.webp",
        countryName: 'tunisie',
        options:[ 
            'bern',
            'mexico',
            'Brasília',
            'tunis'
         ]
    },
    turkey:{
        Capital: "istanbul",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/turkey.jpg",
        imageBackground: "http://127.0.0.1:5500/imgs/background/istanbul.jpeg",
        countryName: 'turkey',
        options:[ 
            'Brasília',
            'tunis',
            'istanbul',
            'bern'
         ]
    },
    united_states:{
        Capital: "Washington",
        imageFlagsUrl: "http://127.0.0.1:5500/imgs/flags/united_states.jpg",
        imageBackground: "http://127.0.0.1:5500/imgs/background/Washington.jpg",
        countryName: 'united_states',
        options:[ 
            'bern',
            'tunis',
            'istanbul',
            'Washington'
         ]
    }
    
};
const latestResults = {
    win:{
        gif: "http://127.0.0.1:5500/imgs/Gif/win.gif",
        msg: "vous gagnez"
    },
    lost:{
        gif: "http://127.0.0.1:5500/imgs/Gif/lost.gif",
        msg: "tu as predu"
    }
}