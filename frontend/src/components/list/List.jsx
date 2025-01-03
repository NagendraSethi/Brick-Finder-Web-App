import './list.scss';
import {listData} from '../../lib/dummydata.js';
import Card from '../../components/card/Card.jsx';

export default function List({posts}) {
    return (
        <div className='list'>
            {listData.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}