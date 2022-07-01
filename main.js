var songs=[

    {
        id:1,
        imageSrc:"./thumbnails/thozhiya.jpg",
        audioSrc:"./audio/Thozhiya-En-Kadhaliya.mp3",
        title:"Thozhiya - Vijay Antony"
    },

    {
        id:2,
        imageSrc:"./thumbnails/anbil avan.jpg",
        audioSrc:"./audio/Anbil-Avan.mp3",
        title:"Anbil Avan - A.R.Rahman"
    },

    {
        id:3,
        imageSrc:"./thumbnails/naan pogiren.jpg",
        audioSrc:"./audio/Nan-Pogiren.mp3",
        title:"Naan Pogiren - S.P.B"
    },

    {
        id:4,
        imageSrc:"./thumbnails/Thandavam.jpg",
        audioSrc:"./audio/Oru-Paathi-Kadhavu.mp3",
        title:"Oru Pathi Kadavu - G.V"
    },

    {
        id:5,
        imageSrc:"./thumbnails/3.jpg",
        audioSrc:"./audio/Nee-Partha.mp3",
        title:"Nee Partha Vizhigal - Anirudh"
    },

    {
        id:6,
        imageSrc:"./thumbnails/mudhal.jpg",
        audioSrc:"./audio/Mudhal-Nee-Mudivum-Nee-Title-Track-MassTamilan.io.mp3",
        title:"Mudhal Nee Mudivum Nee - Sid Sriram"
    },

    {
        id:7,
        imageSrc:"./thumbnails/sachein1.jpg",
        audioSrc:"./audio/Kanmoodi-Thirakumbothu.mp3",
        title:"Kanmoodi Thirakum Pothu - D.S.P"
    },

    {
        id:8,
        imageSrc:"./thumbnails/vaamanan.jpg",
        audioSrc:"./audio/Aedho-Saigirai.mp3",
        title:"Aedho Seigirai - Yuvan Shankar Raja"
    },

    {
        id:9,
        imageSrc:"./thumbnails/vettaikaran1.jpg",
        audioSrc:"./audio/Oru-Chinna-Thamarai.mp3",
        title:"Oru Chinna Thamarai - Vijay Antony"
    },

    {
        id:10,
        imageSrc:"./thumbnails/vc1.jpg",
        audioSrc:"./audio/Oh-Penne.mp3",
        title:"Oh Penne - Anirudh"
    },

    {
        id:11,
        imageSrc:"./thumbnails/vedi1.jpg",
        audioSrc:"./audio/Ippadi-Mazhai-Aditthal.mp3",
        title:"Ippadi - VJ Antony"
    },
     {
        id:12,
        imageSrc:"./thumbnails/beast.jpg",
        audioSrc:"./audio/Arabic-Kuthu-MassTamilan.fm.mp3",
        title:"Arabic Kuthu - Anirudh"
    },


]




function playAudio(songid){
     let song=songs.find(function(song,index){
        return song.id===songid;
     });
     
    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("aud-player").src=song.audioSrc;
    document.getElementById("aud-title").innerText=song.title;
    document.getElementById("aud-player").play();
    
}