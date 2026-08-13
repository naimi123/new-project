function getpost(userId){
    let reqiest = new XMLHttpRequest();
    reqiest.open("GET","http://jsonplaceholder.typicode.com/posts?userId="+userId);
    reqiest.responseType ="json";
    reqiest.send();
    reqiest.onload = function(){
        if(reqiest.status >=200&&reqiest.status<300){
            let  conte = document.querySelector(".comter")
            let posts = reqiest.response;
            for(post of posts){
                    conte.innerHTML +=`<div class="cont"><h3>${post.title}</h3>
        <span>${post.body}</span>
    </div>

                    `
            }
        }else{
            alert("Error")
        }
    }
}

 function getuser(){
    let reqiest = new XMLHttpRequest();
    reqiest.open("GET","http://jsonplaceholder.typicode.com/users")
    reqiest.responseType ="json";
    reqiest.send();
    reqiest.onload = function(){
        if(reqiest.status >=200&&reqiest.status<300){
            let postuser = reqiest.response;
            let users = document.querySelector(".user");
            for(postu of postuser){
                users.innerHTML +=` <div class="contenet" onclick="userclik(${postu.id})"><h3>${postu.name}</h3> <span>${postu.email}</span></div>`
            }
        }else{
            alert("Error?")
        }
    }

 }
 getuser()
 
 let userclik = (id)=>{
    console.log(getpost(id))
 }
    