import React from 'react';
import PostHeader from './PostHeader';
import reactlogo from '../../../assets/img/reactlogo.png';


const Post1 = () => {

    return(
        <div>
            <PostHeader>Site atualizado!</PostHeader>
            <div className="post-content row">
                <img src={reactlogo}></img>
                <div className="col">
                    <p>
                    Site atualizado, agora usando React. Todo o material que estava na versão antiga vai ser reposto aos poucos (por conta da mudança na estrutura). No caso de dúvidas ou para reportar problemas me mande um e-mail em <b>lf.santos@usp.br</b>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post1;