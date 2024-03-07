import './style.scss'
import {db} from '@services/db'
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

const NewSeries=()=>{

    const addItem=async (formData:FormData)=>{
        'use server'
        const createSeries={
            name:(formData.get('name') as string)||'',
            description:(formData.get('description') as string)||'',
            photo:(formData.get('picture') as string)||'',
        }

        const series=await db.catalog.create({data:createSeries})

        if(series){
            //обвновить данные с сервера, т.к. они уже не актуальны, мы добавили новый сериал
            revalidatePath('/catalog')
            redirect('/catalog')
        }
    }

    return <form /*onSubmit={onSubmit}*/ className={'formNewSeries'} action={addItem}>
        <p className={'titleNewSeries'}>New series information</p>
            <div className={'formItems'}>
                <label htmlFor={'name'}>Series name</label>
                <input name={'name'} type={'text'} placeholder={'Type text here'}/>
            </div>
            {/*<div>
                <label htmlFor={'picture'}>Add picture</label>
                <input name={'picture'} type='file' />
            </div>*/}
            <div className={'formItems'}>
                <label htmlFor={'picture'}>Series picture</label>
                <input name={'picture'} type={'text'} placeholder={'Type text here'}/>
            </div>
            <div className={'formItems'}>
                <label htmlFor={'description'}>Series description</label>
                <textarea name={'description'}  placeholder={'Type text here'}/>
            </div>
        <div className={'submitNewSeries'}>
            <button type={'submit'}>Submit</button>
        </div>

    </form>

}

export default NewSeries