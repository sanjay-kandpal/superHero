const button = document.querySelector('button');
const innerContainer = document.getElementById('content-container');
const searchInput = document.querySelector('[data-search]');
let myfav=[];


// searchInput.addEventListener('input',(e)=>{
//     const value = e.target.value;

//     myfav.forEach(fav=>{

//     })

// })

button.onclick = function(){
   innerContainer.innerHTML = '';    
   
   let inputValue = document.getElementById("domTextElement").value;


   fetch(`https://superheroapi.com/api/1373928449792520/search/${inputValue}`)
   .then((resp) => resp.json())
   .then(data => {
    
    appendData(data);
    console.log(`The Promise resolved and gave me:`, data) 
    
   })
   .catch(function(err){
       if(err){
           console.log(err);
           return;
       }
   })
   

}
function appendData(data){
    
    
    var obj = JSON.parse(JSON.stringify(data));
    console.log(obj.results);

    for(var i = 0 ; i < obj.results.length;i++){
        let div = document.createElement('div');
        
        innerContainer.innerHTML += `<div class="container"> <img src=${obj.results[i].image.url} class="image"><span id="name"></span><div class="show-more"><a href="know.htm?greeting=${obj.results[i].id}" target="_blank">show more</a><a onclick="fav('${obj.results[i].id}','${obj.results[i].image.url}');" >Add to Favourite</a></div></div>`;
        
        innerContainer.appendChild(div);
        console.log(i);
    }
   
    // document.getElementById('fav').onclick = function(){
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const uid = urlParams.get('getuid');
    //     const img = urlParams.get('img');
    
     
    //     console.log(img);
    //     localStorage.setItem('id',JSON.parse(JSON.stringify(uid)));
    
    // }
    

    
}
function fav(uid,img){
    let obj = new Object();
    obj.uid = uid;
    obj.img = img;
   

    if(uid = checkId(uid)){
        
        alert(`${checkId(uid)}`);
    }else{
        myfav.push(obj);
        localStorage.setItem('favourites',JSON.stringify(myfav));
    }
 
    
    console.log('push or not');
    
}


function checkId(uide){
  
    for(let i = 0 ;i < myfav.length ; i++){
        if(myfav[i].uid == uide){
            console.log(myfav[i].uid)
            return myfav[i].uid;
        }
    }   
    return;
}


