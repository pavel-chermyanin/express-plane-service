import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';


import { getPlanes } from '../../store/planes/planesSlice';
import { Spinner } from '../spinner';
import styles from './styles.module.css'



export const Planes = () => {
    const dispatch = useDispatch();
    const { planes, isLoading } = useSelector(state => state.planes);

    useEffect(() => {
        dispatch(getPlanes())
    }, [dispatch])

    if (isLoading) {
        return <Spinner/>
    }
    return (
        <div>Planes</div>
    )
}
