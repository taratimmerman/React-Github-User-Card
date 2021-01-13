import React from 'react'

const Followers = (props) => {

    return (
        <>
            <h2>{props.searchee.login}'s Followers</h2>
            <div className='followers-row'>
                {props.followers.map((followers, index) =>
                    <a href={followers.html_url} target='_blank' rel='noreferrer' key={followers.id} className='followers-container'>
                        <img className='imgf' src={followers.avatar_url} alt={followers.login} />
                        <h3 className='h3f'>{followers.login}</h3>
                    </a>)}
            </div>
        </>
    )
}

export default Followers;
