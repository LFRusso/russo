import React from 'react';
import {Link} from 'react-router-dom';
import {MdPerson, MdComputer} from 'react-icons/md';

import './style.css';
import jojoLogo from '../../assets/img/jojo.webp';
import siteV1 from '../../assets/img/projects/site.png'
import siteV2 from '../../assets/img/site2.png'

const About = () => {
    return (
        <div className="row sections-wrapper">

            <div className="section col-lg-12 col-sm-12">
                <span className="section-title"><MdPerson className="section-icon" color="#DE4842" size={30}/> Sobre mim</span>
                <div className="section-body">
                    <p>
                    Me chamo Luiz Fernando (aka Russo) e atualmente sou graduando do curso de <b>Bacharelado em Ciências de Computação</b> no <b>ICMC - USP</b>, tendo anteriormente cursado <b>Bacharelado em Física</b> no <b>IFSC - USP</b> de 2018 à 2020 e mudado de carreira através do processo de transferência interna da USP, depois de descobrir que apesar gostar muito das duas áreas, minha maior vocação está na computação. 
                    </p>
                    <p>
                    Meus interesses variam dês de teoria de otimização, estatística e simulação numérica até design e apreciação de animes (embora não me considere especialmente talentoso em nenhum desses com exceção do último). 
                    </p>
                </div>
            </div>

            <div className="section col-lg-12 col-sm-12">
                <span className="section-title"><MdComputer className="section-icon" color="#DE4842" size={30}/> Sobre este site</span>
                <div className="section-body row">
                    <p>
                        Como dito na aba <b><Link to="/projects" className="text-link">Projetos</Link></b>, fiz esse site em 2019 para aprender um pouco sobre HTML, CSS e Javascript. Calhou que pouco depois de ter começado com ele fui agraciado com uma vaga de monitor bolsista da disciplina <b>SMA0355 - Cálculo III</b>, o que me levou a começar a usar o site também para divulgar as listas e resoluções de exercícios. 
                    </p>
                    <p>
                        Com isso ele foi se tornando aos poucos alguma coisa entre uma página informativa, um portifólio e um laboratório onde tento implementar designs e tecnologias diferentes.  
                    </p>


                    <div className="col-sm-6 col-lg-6 col-md-6 section-img">
                        <img className="figure" src={siteV1}/>
                        <p>
                            Acima a primeira versão do site. Honestamente eu não tinha a menor ideia do que estava fazendo. Demorei algumas horas para fazer essas colunas, alinhá-las em relaçâo à página e fazer o conteúdo ficar centralizado dentro delas. Quando fui ver no celular tudo tinha quebrado.
                        </p>
                    </div>
                    
                    <div className="col-sm-6 col-lg-6 col-md-6 section-img">
                        <img className="figure" src={siteV2}/>
                        <p>
                            Segunda versão do site, finalmente usando boostrap e responsivo, com uma barra de navegação colapsável.
                        </p>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default About;