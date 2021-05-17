import Post from './post.js';
const form = document.querySelector('form');
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const category = document.querySelector('#category');
const postBody = document.querySelector('#post');
const btnSend = document.querySelector('.btn-send');
const btnBack = document.querySelector('#btn-back');
const ul = document.querySelector('.ul');


const allPosts = []; //JSON.parse(localStorage.getItem('key-allPosts'));

/*if(allPosts){
  console.log(allPosts);
}else{
  console.log('')
}
*/


//ul.innerHTML = allPosts.author;


/*if(allPosts){
  allPosts.map(item=>{
    ul.innerHTML+=item
  })
  
}
*/







const dateCurrent = new Date();

const dateFormated = `${dateCurrent.getDate()}/${dateCurrent.getMonth()}/${dateCurrent.getUTCFullYear()}`;


const save = (e)=>{
  e.preventDefault();
 
 
  const posted = new Post(
    author.value,
    title.value,
    category.value,
    postBody.value,
    dateFormated)
  
      

      allPosts.push(posted);
      
  
    localStorage.setItem('key-allPosts',JSON.stringify(allPosts));
    
}

btnSend.addEventListener('submit',save);






/*
btnSend.addEventListener('submit', (e)=>{
  e.preventDefault();
 
 
  const posted = new Post(
    author.value,
    title.value,
    category.value,
    postBody.value,
    dateFormated)
  
      

      allPosts.push(posted);
      
  
    localStorage.setItem('key-allPosts',JSON.stringify(allPosts));
    
  
   /* ul.innerHTML = `
    
    <article>
    <div class="card" style="width: 18rem;">
      <img src="https://abstartups.com.br/wp-content/uploads/2018/10/Qual-a-tecnologia.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${Posted.title}</h5>
        <p class="card-text">${Posted.postBody}</p>
        <span>${Posted.author}</span>
        <a href="#" class="btn btn-primary">Ler artigo</a>
        <hr/> 
        <span>${Posted.datePost}</span>
      </div>
    </div>
  </article>
    
    `
})

*/
