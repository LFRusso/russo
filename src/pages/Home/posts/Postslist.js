import React from 'react';
import Post1 from './post1';
import Post2 from './post2';


class Postlist extends React.Component {

    render () {

        const posts = [Post1];

        const listposts = posts.map((post) =>
            <div className="post-container">
                { post() }
            </div>
        );

        return(
            <div>
                { listposts }
            </div>
        );
        
    }
}



export default Postlist