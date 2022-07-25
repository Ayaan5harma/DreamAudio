/* $("#masterplay").click(function(){
     

    let song = new Audio("Kitni Haseen Hogi.mp3");
   

    if(song.paused || song.currentTime<=0)
    {
        song.play();
    $("#masterplay").removeClass("fa-circle-play");
    $("#masterplay").addClass("fa-circle-pause");
    }
    else{
        song.pause();
        $("#masterplay").removeClass("fa-circle-pause");
        $("#masterplay").addClass("fa-circle-play");
    }
}); */
let songindex=0;
let mysong = new Audio("1.mp3");
let masterplay = document.getElementById("masterplay");
let myseekbar = document.getElementById("myprogressbar");
let mygif =document.getElementById("gif");
let allsong = Array.from(document.getElementsByClassName('songitem'));
let mastersongname = document.getElementById("mastersongname");
let songslist =[
    {songname:"kesariya",filepath:"1.mp3",coverpath:"1.jpg"},
    {songname:"kitni Haseen Hogi",filepath:"2.mp3",coverpath:"2.jpg"},
    {songname:"Rang Lageya",filepath:"3.mp3",coverpath:"3.jpg"},
    {songname:"phir Na Esi raat aayegi",filepath:"4.mp3",coverpath:"4.jpg"},
]

allsong.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src =songslist[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songslist[i].songname

});

masterplay.addEventListener("click",()=>{
    if(mysong.paused || mysong.currentTime<=0)
    {
        mysong.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        mygif.style.opacity=1;
    }
    else{
        mysong.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        mygif.style.opacity=0;
    }
})
mysong.addEventListener("timeupdate",()=>{
   // console.log("timeupdate");
     progress = parseInt((mysong.currentTime/mysong.duration)*100);
   // console.log(progress);
    myseekbar.value =progress;
})

myseekbar.addEventListener("change",()=>{
    mysong.currentTime = (myseekbar.value*mysong.duration)/100;
})

const makeallplays =()=>{
   
   
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
     
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        mysong.src=songindex+'.mp3'
        mastersongname.innerText = songslist[songindex-1].songname;
        mysong.currentTime=0;
        mysong.play();
        mygif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=>{

    if(songindex>3)
    {
        songindex=1;
    }
    else{
        songindex+=1;
    }
    mysong.src=songindex+'.mp3'
    
    mysong.currentTime=0;
    mastersongname.innerText = songslist[songindex-1].songname;
    mysong.play();
    mygif.style.opacity=1;
    
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
   
});
document.getElementById('previous').addEventListener('click', ()=>{

    if(songindex<2)
    {
        songindex=4;
    }
    else{
        songindex-=1;
    }
    mysong.src=songindex+'.mp3'
    mysong.currentTime=0;
    mastersongname.innerText = songslist[songindex-1].songname;
    mysong.play();
    mygif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
