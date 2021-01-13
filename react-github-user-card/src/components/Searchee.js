import React from 'react'

const Searchee = (props) => {
    return (
        <>
            <div key={props.searchee.id}>
                <img src={props.searchee.avatar_url} alt={props.searchee.login} />
                <h3>{props.searchee.login}</h3>
            </div>
        </>
    )
}

export default Searchee;
