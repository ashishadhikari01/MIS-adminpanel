// user details button expand 
let userDetailsUser=document.querySelector("#user-details-user")
let userDetailsMember=document.querySelector("#user-details-member")
let userDetails=document.querySelector("#user-details")

userDetailsUser.style.display="none"
userDetailsMember.style.display="none"

userDetails.addEventListener("click",function(){
    userDetailsUser.style.display="block"
    userDetailsMember.style.display="block"
})

let userAccess=document.querySelector("#user-access")
let logout=document.querySelector("#logout")
let dashboard=document.querySelector("#dashboard")

userAccess.addEventListener("click",function(){
    userDetailsUser.style.display="none"
    userDetailsMember.style.display="none"
})

logout.addEventListener("click",function(){
userDetailsUser.style.display="none"
userDetailsMember.style.display="none"
})

dashboard.addEventListener("click",function(){
    userDetailsUser.style.display="none"
    userDetailsMember.style.display="none"   
})


let centerContainer=document.querySelector(".center-container")
dashboard.addEventListener("click",function(ev){
    ev.preventDefault()
    fetch("adminOptdashboard.html")
.then(response=>{
    if(!response.ok){
        throw new Error (response.status)
    }
    return response.text()
})
.then(data=>{
    centerContainer.innerHTML=data
})
.catch(error=>{
    console.log("erro fetching content",error)
    centerContainer.textContent="failed to load content"
})
})

// dom content loaded
document.addEventListener('DOMContentLoaded',()=>{
    fetch("adminOptdashboard.html")
    .then(response=>{
        if(!response.ok){
            throw new Error (response.status)
        }
        return response.text()
    })
    .then(data=>{
        centerContainer.innerHTML=data
    })
    .catch(error=>{
        console.log("erro fetching content",error)
        centerContainer.textContent="failed to load content"
    })
    })

// user details 
// let userDetails=document.querySelector("#user-details")
userDetails.addEventListener("click",function(e){ 
     e.preventDefault()
    fetch("./adminOptuserdetails.html")
    
    .then(response=>{
       if(!response.ok){
        throw new Error(response.status)
       }
       return response.text()
    })
    .then(data=>{
        centerContainer.innerHTML=data
    })
    .catch(error=>{
        console.log("error in fetching content",error)
        centerContainer.text="failed to load content"
    })
})


// fetching the user details
userDetailsUser.addEventListener("click",function(e){
  e.preventDefault()
  fetch("./adminOptuseruser.html")
  .then(response=>{
    if(!response.ok){
        throw new Error(response.status)
    }
    return response.text()
  })
  .then(data=>{
    centerContainer.innerHTML=data
  })
  .catch(error=>{
    console.log("error in fetching content",error)
    centerContainer.text="failed to load content"
  })
})
// console.log(userDetailsMember)
// fetching member details
userDetailsMember.addEventListener("click",function(ext){
    ext.preventDefault()
    fetch("./adminOptusermember.html")
    .then(response=>{
        if(!response.ok){
            throw new Error(response.status)
        }
        return response.text()
    })
    .then(data=>{
        centerContainer.innerHTML=data
    })
    .catch(error=>{
        console.log("error in fetching content",error)
        centerContainer.text="failed to load content"
    })
})

// fetching for userAcess
userAccess.addEventListener("click",function(e){
   e.preventDefault()
   fetch("./adminOptuseraccess.html")
   .then(response=>{
    if(!response.ok){
        throw new Error(response.status)
    }
    return response.text()
   })
   .then(data=>{
    centerContainer.innerHTML=data
   })
   .catch(error=>{
    console.log("error in fetching content",error)
    centerContainer.text="failed to load content"
   })
})

// fetching for logout 
logout.addEventListener("click",function(m){
    m.preventDefault()
    fetch("./adminOptlogout.html")
    .then(response=>{
        if(!response.ok){
            throw new Error (response.status)
        }
        return response.text()
    })
    .then(data=>{
        centerContainer.innerHTML=data
    })
    .catch(error=>{
        console.log("error in fetching content",error)
        centerContainer.text="failed to load content"
    })
})