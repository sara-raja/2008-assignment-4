import { BASE_URL } from "./base";

const getAuthor = (id)=>{
    return fetch(`${BASE_URL}/authors/${id}.json`)
    .then((response)=> {
      return response.json()
    }).then((data)=> {
      return Promise.resolve(data)
    })    
}

export{getAuthor}