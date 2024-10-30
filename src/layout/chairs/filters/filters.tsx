import React from 'react';
import s from "./filters.module.scss";
import {ChairModel, ChairType} from "../../../utils/state";
import {Button} from "../../../components/button/button";
import clsx from "clsx";

type Props = {
    subtypeFilter: ChairType | 'all'
    setSubtypeFilter: (subtypeFilter: ChairType | 'all') => void;
    modelFilter: ChairModel | 'all'
    setModelFilter: (modelFilter: ChairModel | 'all') => void;
}

export const Filters = ({subtypeFilter, setSubtypeFilter, modelFilter, setModelFilter }: Props) => {

    type filterList1Type = {
        text: string, value: ChairType | 'all'
    }
    const filterList1:filterList1Type[] = [
        {text: "Все", value: 'all'},
        {text: "Стулья", value: 'chair'},
        {text: "Табуреты", value: 'tabouret'},
        {text: "Лавочки", value: "bench"},
        {text: "Полубарный стул", value: 'semi-bar-chair'}
    ]

    type filterList2Type = {
        text: string, value: ChairModel | 'all'
    }

    const filterList2:filterList2Type[] = [
        {text: 'Все', value: 'all'},
        {text: "Alpha", value: 'alfa'},
        {text: "Lines", value: 'lines'},
        {text: "Magnet", value: 'magnet'},
        {text: "Molecula", value: 'molecula'}
    ]


    return (
        <div className={s.filtersWrapper}>
            <div className={s.filters1plusbasket}>
                <div className={s.filters1}>
                    <span className={s.filtersLabel}>Вид:</span>
                    {filterList1.map((item, index) => (
                        <Button key={index} className={clsx(s.filter, subtypeFilter === item.value && s.filterActive)} onClick={()=>setSubtypeFilter(item.value)}>{item.text}</Button>
                    ))}
                </div>
            </div>

            <div className={s.filters2}>
                <span className={s.filtersLabel}>Модели:</span>
                {filterList2.map((item, index) => (
                    <Button key={index} className={clsx(s.filter, modelFilter === item.value && s.filterActive)} onClick={()=>setModelFilter(item.value)}>{item.text}</Button>
                ))}
            </div>
        </div>
    )
        ;
};