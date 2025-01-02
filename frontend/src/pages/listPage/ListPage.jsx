import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import CustomMap from '../../components/map/customMap';
import { listData } from '../../lib/dummydata';
import './listpage.scss';
import { ErrorBoundary } from 'react-error-boundary';


export default function ListPage() {
    const data = listData;
    return (
        <div className="list-page">
            <div className='listContainer'>
                <div className='wrapper'>
                    <Filter />
                    {data.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className='mapContainer'>
            <ErrorBoundary>
                <CustomMap items={data}/>
            </ErrorBoundary>
            </div>
        </div>
    )
}