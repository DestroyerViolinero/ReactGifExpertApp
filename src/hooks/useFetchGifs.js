import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (Category) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    });

   useEffect(()=>{

    getGifs(Category)

        .then(imgs=>{

            setState({

                data:imgs,
                loading:false

            });

        });   

    },[Category]) 
  
    return state;//retorna {data:[],loading:true}
}

   