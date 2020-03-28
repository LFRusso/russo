import React from 'react';
import loading from '../../assets/img/loading.gif'
import './style.css'

const Home = () => {

    return (
        <div>
            <h2>EM CONSTRUÇÃO</h2>
            <br></br>
            
            <img src={loading} ></img>

            <p>Material de Cálculo 0 - Limites II disponível em breve</p>
        </div>
    );
}

export default Home;