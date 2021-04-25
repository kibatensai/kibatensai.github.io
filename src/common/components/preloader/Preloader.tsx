import preloader from './../../../assets/circularPreloader.svg'
import s from './Preloader.module.scss'

export const Preloader = () => {
    return (<div className={s.preloaderContainer}>
        <img src={preloader} alt='Loading...' />
    </div>)
}