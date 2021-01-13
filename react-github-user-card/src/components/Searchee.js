import React from 'react'

const Searchee = (props) => {
    return (
        <>
            <a  href={props.searchee.html_url} target='_blank' rel='noreferrer' key={props.searchee.id} className='searchee-container'>
                <img src={props.searchee.avatar_url} alt={props.searchee.login} />
                <h3>{props.searchee.login}</h3>
            </a>
        </>
    )
}

export default Searchee;
