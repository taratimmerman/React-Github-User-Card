import React from 'react'

const Followers = (props) => {
    return (
        <>
        <h2>{props.searchee.login}'s Followers</h2>
            {props.followers.map((followers, index) =>
                <div key={followers.id}>
                    <img src={followers.avatar_url} alt={followers.login} />
                    <h3>{followers.login}</h3>
                </div>)}
        
        </>
    )
}

export default Followers;
