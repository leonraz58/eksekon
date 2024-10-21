import React from 'react';
import s from "./filters.module.scss";

export const Filters = () => {

    const filterList1 = ["Все", "Стулья", "Табуреты", "Лавочки", "Полубарный стул"]
    const filterList2 = ["Alpha", "Lines", "Magnet", "Molecula", "Tree"]

    return (
        <div className={s.filtersWrapper}>
            <div className={s.filters1plusbasket}>
                <div className={s.filters1}>
                {filterList1.map((item, index) => (
                    <div key={index} className={s.filter}>{item}</div>
                ))}
                </div>
            </div>

            <div className={s.filters2}>
                Модели:
                {filterList2.map((item, index) => (
                    <div key={index}><input type="checkbox"/> {item}</div>
                ))}
            </div>
        </div>
    )
        ;
};