import React from 'react'
import { useGlobalContext } from '../context'

export default function SearchFrom() {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    function searchCoctail() {
        setSearchTerm(searchValue.current.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlfor='name'>search your favorite cocktail</label>
                    <input 
                    type="text" 
                    name="name" 
                    value="name"
                    ref={searchValue}
                    onChange={searchCoctail} 
                    />
                </div>
            </form>
        </section>
    )
}