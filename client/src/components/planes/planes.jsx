import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { paths } from '../../paths';
import { getPlanes } from '../../store/planes/planesSlice';
import { Spinner, ContentWrapper, PlaneItem, Button } from '../';
import styles from './styles.module.css'
import { useSortPlanes } from '../../hooks/useSortPlanes';



export const Planes = () => {
    const dispatch = useDispatch();
    const { planes, isLoading } = useSelector(state => state.planes);
    const {
        isDescSort,
        setIsDescSort,
        sortedPlanes } = useSortPlanes(planes || [])

    useEffect(() => {
        dispatch(getPlanes())
    }, [dispatch])

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            <div className={styles.sort}>
                <ContentWrapper className={styles.planesHeader}>
                    <Button
                        onClick={() => setIsDescSort(!isDescSort)}
                        className={styles.sortBtn}>
                        Сортировать по цене {`${isDescSort ? '+' : '-'}`}
                    </Button>
                    <Link
                        className={styles.createPlaneBtn}
                        to={paths.createPlane}>
                        Добавить самолет
                    </Link>
                </ContentWrapper>
            </div>
            <ContentWrapper className={styles.planesList}>
                {sortedPlanes && sortedPlanes.map(plane => (
                    <PlaneItem {...plane} key={plane._id} />
                ))}
            </ContentWrapper>
        </div>
    )
}
