const urlParams = new URLSearchParams(window.location.search);
const greetingValue = urlParams.get('greeting');
console.log(greetingValue);

fetch(`https://superheroapi.com/api/1373928449792520/${greetingValue}`)
.then((resp) => resp.json())
.then(data => {
    console.log(`The Promise resolved and gave me:`, data) 
    printData(data);
})
.catch(function(err){
    if(err)
    {
        console.log(err);
        return;
    }
})

function printData(data){
    console.log(data.image.url);
    let div = document.createElement('div');
    let detailContainer = document.createElement('div');
    
    div.setAttribute('id', 'image-hero');
    detailContainer.setAttribute('class', 'content-container');
    document.body.append(div);
    document.body.append(detailContainer);
    div.innerHTML = `<img src ="${data.image.url}">`;
    
    detailContainer.innerHTML = `<h1>${data.name}</h1>`
  
 for (const [key, value] of Object.entries(data.biography)) {
    console.log(`${key}: ${value}`)
    detailContainer.innerHTML += `<h3>${key}:${value}</h3>`
  }
  
  
}