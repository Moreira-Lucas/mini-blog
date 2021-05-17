const form = document.querySelector('form');
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const category = document.querySelector('#category');
const postBody = document.querySelector('#post');
const btnSend = document.querySelector('#btn-send');
const btnBack = document.querySelector('#btn-back');
const ul = document.querySelector('.ul');







//ARRAY COM TODOS OS POST INICIA COM CONTEÚDO GUARDADO DO LOCALSTORAGE OU VAZIO
let allPosts = JSON.parse(localStorage.getItem('key-allPosts'));
if(allPosts){
  console.log(allPosts);
  
}else{
  console.log('vazio')
  allPosts = [];
}



// RENDERIZA OS POSTS NA TELA
const render = ()=> {
 if(ul === true )ul.innerHTML="";
  

  allPosts.map(post=>{
    let item = document.createElement('ARTICLE');
   
    item.innerHTML += `
     
   
   <div class="card" style="width: 18rem;">
     <img src="https://abstartups.com.br/wp-content/uploads/2018/10/Qual-a-tecnologia.jpg" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${post.title}</h5>
       <p class="card-text">${post.postBody}</p>
       <span>${post.author}</span>
       <a href="#" class="btn btn-primary">Ler artigo</a>
       <hr/> 
       <span>${post.dateFormated}</span>
     </div>
   </div>
 `

if(ul === true)ul.appendChild(item);

  })
 }
 render();

//ul.innerHTML = allPosts.author;


/*if(allPosts){
  allPosts.map(item=>{
    ul.innerHTML+=item
  })
  
}
*/

const dateCurrent = new Date();

  const dateFormated = `${dateCurrent.getDate()}/${dateCurrent.getMonth()}/${dateCurrent.getUTCFullYear()}`;  



  
//SALVAR NO LOCALSTORAGE
const save = ()=>{
  let posted = {
    author: author.value,
    title: title.value,
    category:category.value,
    postBody: postBody.value,
    dateFormated:dateFormated
  }


      allPosts.unshift(posted);
      console.log(allPosts);
  
    localStorage.setItem('key-allPosts',JSON.stringify(allPosts));
    
  render();
   /* 
    
    `*/
 

  }

// BOTÃO DE SALVAR O POST


  




