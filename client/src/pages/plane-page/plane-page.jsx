import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import {
    Button,
    ContentWrapper,
    Spinner
} from '../../components';
import { getPlane } from '../../store/planes/planeSlice';

import styles from './styles.module.css'


export const PlanePage = () => {
    const { plane, isLoading, isError } = useSelector(state => state.plane)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();



    useEffect(() => {
        dispatch(getPlane(id))
    }, [dispatch, id])

    if (isLoading) return <Spinner />

    return plane && (
        <ContentWrapper className={styles.plane}>
            <div className={styles.descContent}>
                <Button
                isBackButton={true} 
                onClick={() => navigate(-1)}
                >
                    Назад
                </Button>
                <h1 className={styles.title}>
                    {plane.name}
                </h1>
                <div className={styles.price}>
                    {plane.price}
                </div>
                <Button
                    containerClassName={styles.buiBtnContainer}
                    onClick={() => navigate('/order')}
                >
                    Оформить заказ
                </Button>
                <p className={styles.desc}>
                    {plane.description}
                </p>
            </div>
            <div className={styles.imageContent}>
                <img src={plane.planeImage} alt="" className={styles.image} />
            </div>
        </ContentWrapper>
    )
}
