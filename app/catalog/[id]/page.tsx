import {db} from '@services/db'
import './style.scss'

const SeriesPage=async({params}:{params:{id:string}})=>{
    const series=await db.catalog.findUnique({where:{id:params.id}});

    return <div className={'seriesContainer'}>
        <h2>{series?.name}</h2>
        <img src={series?.photo}/>
        <p>{series?.description}</p>
    </div>
}

export default SeriesPage