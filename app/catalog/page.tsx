import {db} from '@services/db'
import Link from "next/link";
import './style.scss'
import {getServerSession} from "next-auth/next";
import {redirect} from "next/navigation";

const CatalogPage=async ()=>{
    const catalog=await db.catalog.findMany()
    const session =await getServerSession()

    if(!session){
        redirect('/auth/signin')
    }

    return <div className={'catalogContainer'}>
        <div className={'newSeriesButton'}><Link href={'/catalog/newseries'}>+ Add new series</Link></div>
        {catalog.map((el)=>{
            return <div key={el.id} className={'itemCatalog'}>
                <h3>{el.name}</h3>
                <img src={el.photo}/>
                <Link href={`catalog/${el.id}`} className={'linkButton'}>See details</Link>
            </div>
        })}
    </div>
}

export default CatalogPage