import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GIfGridItem } from './GIfGridItem';


export const GifGrid = ({ Category }) => {

    const {data, loading} = useFetchGifs(Category);

    return (
        <>
            <h3 className='animate__animated animate__fadeInDown'>{Category}</h3>
            {loading && <p className='animate__animated animate__flash'>Cargando....</p>}
            <div className='card-grid'>
            
                {
                    data.map(imge=>(
                    <GIfGridItem 
                    key= {imge.id}
                    {...imge}
                    />   
                    ))
                }
                
            </div>
        </>
    )
}
