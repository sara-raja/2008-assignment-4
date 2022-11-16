import { BASE_URL } from "./base";

const getAuthorWorks = (id)=>{
    return fetch(`${BASE_URL}/authors/${id}/works.json?limit=5`)
    .then((response)=> {
      return response.json()
    }).then((data)=> {
      return Promise.resolve(data)
    })    
}

export{getAuthorWorks}