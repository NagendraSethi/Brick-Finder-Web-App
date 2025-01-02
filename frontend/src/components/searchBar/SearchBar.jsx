import { useState } from 'react';
import './searchBar.scss';

const types = ['buy', 'rent']

export default function SearchBar() {
    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: 0,
        maxPrice: 0,
    })

    const SwitchType = (val) => {
        setQuery({ ...query, type: val })
    }
    return (
        <div className='searchbar'>
            <div className='type'>
                {types.map((type, index) => (
                    <button
                        key={index}
                        onClick={() => SwitchType(type)}
                        className={query.type === type ? 'active' : ''}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input type='text' name='city' placeholder='City' />
                <input type='number' min={0} max={10000000} placeholder='Min Price' />
                <input type='number' min={0} max={10000000} placeholder='Max Price' />
                <button type='submit'>
                    <img src='/search.png' alt='Search' />
                </button>
            </form>
        </div>
    )
}