import {Card} from "./card/card";
import s from './chairs.module.scss'
import {PageContainer} from "../../components/pageContainer/pageContainer";
import {Filters} from "./filters/filters";
import {ChairModel, chairs, ChairType} from "../../utils/state";
import {FilterPreview} from "./filterPreview/filterPreview";
import {useSearchParams} from "react-router-dom";

export const Chairs = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    let subtypeFilter = searchParams.get('subtypeFilter') || 'all'
    let modelFilter = searchParams.get('modelFilter') || 'all'

    //const [subtypeFilter, setSubtypeFilter] = useState<ChairType | 'all'>('all')
    //const [modelFilter, setModelFilter] = useState<ChairModel | 'all'>('all')


    const setSubtypeFilter = (subtypeFilter: ChairType | 'all') => {
        searchParams.set('subtypeFilter', subtypeFilter)
        setSearchParams(searchParams)
    }

    const setModelFilter = (modelFilter: ChairModel | 'all') => {
        searchParams.set('modelFilter', modelFilter)
        setSearchParams(searchParams)
    }

    let filteredChairs = chairs
    if (subtypeFilter !== 'all') {
        filteredChairs = chairs.filter(chair => chair.subtype === subtypeFilter)
    }
    if (modelFilter !== 'all') {
        filteredChairs = filteredChairs.filter(chair => chair.model === modelFilter)
    }

    return (
        <section className={s.section}>
            <PageContainer>
                <Filters subtypeFilter={subtypeFilter} setSubtypeFilter={setSubtypeFilter} modelFilter={modelFilter} setModelFilter={setModelFilter} />change
                <div className={s.cardWrapper}>
                    {filteredChairs.map(chair => {
                        return (<Card key={chair.id} chair={chair}/>)
                    })}
                </div>
            </PageContainer>
        </section>
    )
}