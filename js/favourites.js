
const img = document.getElementsByTagName("img");
let favourites = JSON.parse(localStorage.getItem('favourites'));

if(favourites.length>0){
    container.hidden = false;
}

const containerFav = document.getElementById('containerFav');


for(let i = 0 ; i < favourites.length;i++){
    fetch(`https://superheroapi.com/api/1373928449792520/${favourites[i].uid}/image`)
    .then((resp) => resp.json())
    .then(data => {
     
     appendData(data);
     
     //   console.log(`The Promise resolved and gave me:`, data) 
     
    })
    .catch(function(err){
        if(err){
            console.log(err);
            return;
        }
    })
    
}



//console.log(removeContainer.dataset.index);



function appendData(data){
    var obj = JSON.parse(JSON.stringify(data));
    console.log(obj.id); 
    let img =document.createElement('img');
    containerFav.appendChild(img);
    let btn = document.createElement('button');
    containerFav.appendChild(btn);
    img.classList.add('image');
    img.src=`${obj.url}`;
    img.setAttribute('id',`${obj.id}`)
    btn.setAttribute('id',`${obj.id}`);
    btn.setAttribute('class',"same");
    btn.innerHTML = "remove favourite";
   
}

    // event delegation  
 document.getElementById('containerFav').addEventListener('click',(e)=>{
    e.preventDefault();
    //alert(`btn pressed${i}`);
    
     let press;
     var items = JSON.parse(localStorage.getItem("favourites"));
     if(e.target.id && e.target.nodeName == "BUTTON"){
        press = e.target.id;
       console.log(press)
     }
     
      
      //console.log(items)
      items= removeByAttr(items, 'uid', press);

     //   for (let i = 0; i < items.length; i++) 
     //   {
     //    let imgId = Number(img[i].id);
     //    console.log(imgId == press)
     //    if(imgId === press)
     //    {
     //    // console.log('true')
     //     console.log(items[0]);
     //   // console.log(items.splice(items[e.target.id],1)) ;
     //     break;
     //   }
     //  }
           
     items = JSON.stringify(items);
    
     localStorage.setItem("favourites",items);
        
     console.log(items.length);
      location.reload();
    
    
});
var removeByAttr=function(items,attr,value){
    var i = items.length;
    while(i--){
       if( items[i] 
           && items[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && items[i][attr] === value ) ){ 

           items.splice(i,1);

       }
    }
    return items;
}

// function whichBtn(){
 
//  document.getElementById(`${i}`).addEventListener('click',(e)=>{
//     e.preventDefault();
//     //alert(`btn pressed${i}`);
    
//      console.log(i);
//      if(e.currentTarget.id == i){
//         var items = JSON.parse(localStorage.getItem("favourites"));
//         console.log(items);
//         console.log(i)
//         for(var j = 0 ; j < items.length ;j++){      
            
//         }
//         items = JSON.stringify(items);
    
//         localStorage.setItem("favourites",items);
        
//     }

    
//   });    
   
// }
//console.log(favourites.length);