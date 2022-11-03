import axios from "axios"; 

export const baseUrl='https://bayut.p.rapidapi.com' 

export const fetchApi= async (url) =>{ 
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'fe18f7b602msh9d91bf75192538dp17d826jsnb834f88cfb03',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }

    }) 
    return data;

}

