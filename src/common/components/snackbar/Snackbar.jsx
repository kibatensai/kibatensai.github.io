import { memo, useState, useEffect } from 'react'
import s from './Snackbar.module.css'

export const Snackbar = memo(({ title, timer }) => {

    const [visual, setVisual] = useState(false)

    useEffect(() => {
        setVisual(() => true)
        const show = setTimeout(() => {
            setVisual(() => false)
        }, timer)
        return () => {
            clearTimeout(show)
        }
    }, [])

    return (
        <>
            {
                visual &&
                <div className={s.snackbar}>
                    {title}
                </div>
            }
        </>
    )
})