// this is my navigation bar section
const search = document.querySelector('.seenav');
search.onclick=opennow;
function opennow(){
    document.querySelector('.searchbox').style.display='block';
    document.querySelector('.menubox').style.display='none';
    document.querySelector('.closebar').style.display='none';
    document.querySelector('.menuclick').style.display='block';
    document.querySelector('.firstlayervideo').style.display='none';
    document.querySelector('.secondlayer').style.display='block';

};

const close = document.querySelector('.closeme');
close.onclick= closeok;
function closeok(){
    document.querySelector('.searchbox').style.display='none';
   
};

const menuclick = document.querySelector('.menuclick');
menuclick.onclick=openok;
function openok(){
    document.querySelector('.menubox').style.display='block';
    menuclick.style.display='none';
    document.querySelector('.closebar').style.display='block';  
    document.querySelector('.searchbox').style.display='none';
    document.querySelector('.secondlayer').style.display='none';

    
};

const closebar = document.querySelector('.closebar');
closebar.onclick=closeme;
function closeme(){
    menuclick.style.display='block';
    document.querySelector('.menubox').style.display='none';
    document.querySelector('.secondlayer').style.display='block';
    closebar.style.display='none';
    closebar.style.marginTop='15px';
}

const inblack = document.querySelector('.inblack');
const hovereffect=(n)=>{
    if(n=='on'){

   var card= document.querySelectorAll('.inblack');
   for(i=0;i<card.length; i++){
      card[i].style.backgroundColor="#222";
    document.getElementsByClassName('carryall')[i].children[0].style.color="#fec325";
    console.log(  document.getElementsByClassName('carryall')[i].children[0]);
    
    
   }
    }else{
        var card= document.querySelectorAll('.inblack');
        for(i=0;i<card.length; i++){
           card[i].style.backgroundColor="#333";
         document.getElementsByClassName('carryall')[i].children[0].style.color="#fff";
        
        //  console.log(  document.getElementsByClassName('carryall')[i].children[1]);
        }

    }

}

const inblackone = document.querySelector('.inblackone');
const hovereffectone=(n)=>{
    if(n=='on'){

   var card= document.querySelectorAll('.inblackone');
   for(i=0;i<card.length; i++){
      card[i].style.backgroundColor="#222";
    document.getElementsByClassName('carryallone')[i].children[0].style.color="#fec325";
    console.log(  document.getElementsByClassName('carryallone')[i].children[0]);
    
    
   }
    }else{
        var card= document.querySelectorAll('.inblackone');
        for(i=0;i<card.length; i++){
           card[i].style.backgroundColor="#333";
         document.getElementsByClassName('carryallone')[i].children[0].style.color="#fff";
        
        //  console.log(  document.getElementsByClassName('carryall')[i].children[1]);
        }

    }

}


const inblacktwo = document.querySelector('.inblacktwo');
const hovereffecttwo=(n)=>{
    if(n=='on'){

   var card= document.querySelectorAll('.inblacktwo');
   for(i=0;i<card.length; i++){
      card[i].style.backgroundColor="#222";
    document.getElementsByClassName('carryalltwo')[i].children[0].style.color="#fec325";
    console.log(  document.getElementsByClassName('carryalltwo')[i].children[0]);
    
    
   }
    }else{
        var card= document.querySelectorAll('.inblacktwo');
        for(i=0;i<card.length; i++){
           card[i].style.backgroundColor="#333";
         document.getElementsByClassName('carryalltwo')[i].children[0].style.color="#fff";
        
        //  console.log(  document.getElementsByClassName('carryall')[i].children[1]);
        }

    }

}

const inblackthree = document.querySelector('.inblackthree');
const hovereffectthree=(n)=>{
    if(n=='on'){

   var card= document.querySelectorAll('.inblackthree');
   for(i=0;i<card.length; i++){
      card[i].style.backgroundColor="#222";
    document.getElementsByClassName('carryallthree')[i].children[0].style.color="#fec325";
    console.log(  document.getElementsByClassName('carryallthree')[i].children[0]);
    
    
   }
    }else{
        var card= document.querySelectorAll('.inblackthree');
        for(i=0;i<card.length; i++){
           card[i].style.backgroundColor="#333";
         document.getElementsByClassName('carryallthree')[i].children[0].style.color="#fff";
        
        //  console.log(  document.getElementsByClassName('carryall')[i].children[1]);
        }

    }

}

const inblackfour = document.querySelector('.inblackfour');
const hovereffectfour=(n)=>{
    if(n=='on'){

   var card= document.querySelectorAll('.inblackfour');
   for(i=0;i<card.length; i++){
      card[i].style.backgroundColor="#222";
    document.getElementsByClassName('carryallfour')[i].children[0].style.color="#fec325";
    console.log(  document.getElementsByClassName('carryallfour')[i].children[0]);
    
    
   }
    }else{
        var card= document.querySelectorAll('.inblackfour');
        for(i=0;i<card.length; i++){
           card[i].style.backgroundColor="#333";
         document.getElementsByClassName('carryallfour')[i].children[0].style.color="#fff";
        
        //  console.log(  document.getElementsByClassName('carryall')[i].children[1]);
        }

    }

}

const inblackfive = document.querySelector('.inblackfive');
inblackfive.onmouseover = changecolor;
function changecolor(){
    document.querySelector('.bing').style.color='#fec325';
    inblackfive.style.backgroundColor='#222';
}
const inblac = document.querySelector('.inblackfive');
inblac.onmouseout = changcolor;
function changcolor(){
    document.querySelector('.bing').style.color='white';
    inblackfive.style.backgroundColor='#333';
}


// const inblackfive = document.querySelector('.inblackfive');
// const hovereffectfive=(n)=>{
//     if(n=='on'){

//    var card= document.querySelectorAll('.inblackfive');
//    for(i=0;i<card.length; i++){
//       card[i].style.backgroundColor="#222";
//     document.getElementsByClassName('carryallfive')[i].children[0].style.color="#fec325";
//     console.log(  document.getElementsByClassName('carryallfive')[i].children[0]);
    
    
//    }
//     }else{
//         var card= document.querySelectorAll('.inblackfive');
//         for(i=0;i<card.length; i++){
//            card[i].style.backgroundColor="#333";
//          document.getElementsByClassName('carryallfive')[i].children[0].style.color="#fff";
        
//         //  console.log(  document.getElementsByClassName('carryall')[i].children[1]);
//         }

//     }

// }


// // this is the navigation section

// // firstlayer video control click
const holdvideo = document.querySelector('.holdvideo');
holdvideo.onclick=showvideo; 
function showvideo(){
    document.querySelector('.firstlayervideo').style.display='block';
    document.querySelector('.searchbox').style.display='none';
    
};

const dclose = document.querySelector('.dclose');
dclose.onclick=blankout;
function blankout(){
    document.querySelector('.firstlayervideo').style.display='none';
    document.querySelector('.searchbox').style.display='none';
};

const showit = document.querySelector('.insecbox');
showit.onmouseover=showallin;
function showallin(){
    document.querySelector('.ohv').style.display='block';
};
const showin = document.querySelector('.ohv');
showin.onmouseout=showoff;
function showoff(){
    document.querySelector('.ohv').style.display='none';
}

const showitone = document.querySelector('.inonesecbox');
showitone.onmouseover=showallinone;
function showallinone(){
    document.querySelector('.oiv').style.display='block';
};
const showinone = document.querySelector('.inonesecbox');
showinone.onmouseout=showoffone;
function showoffone(){
    document.querySelector('.oiv').style.display='none';
}

const showittwo = document.querySelector('.intwosecbox');
showittwo.onmouseover=showallintwo;
function showallintwo(){
    document.querySelector('.oav').style.display='block';
};
const showintwo = document.querySelector('.intwosecbox');
showintwo.onmouseout=showofftwo;
function showofftwo(){
    document.querySelector('.oav').style.display='none';
}

const showitthree = document.querySelector('.inthreesecbox');
showitthree.onmouseover=showallinthree;
function showallinthree(){
    document.querySelector('.obv').style.display='block';
};
const showinthree = document.querySelector('.inthreesecbox');
showinthree.onmouseout=showoffthree;
function showoffthree(){
    document.querySelector('.obv').style.display='none';
}





