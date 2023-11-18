var put = (account,job)=> ({type:"put", account:account,job:job})
var signin = (email)=>({type:"signin" , value: email })

export {signin,put}