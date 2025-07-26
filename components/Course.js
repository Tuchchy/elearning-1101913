import Image from 'next/image'
import style from './Course.module.css'

export default function Course({msg, src}) {

    return(
        <div className={style.card}>
            <Image src={src} width={100} height={100} alt={src}/>
            <h3>{msg}</h3>
        </div>
    )
}