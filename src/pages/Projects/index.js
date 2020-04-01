import React from 'react';
import './style.css';

import  gepacIcon from '../../assets/img/projects/gepac.png';
import  grupyIcon from '../../assets/img/projects/grupy.png';
import  lifeIcon from '../../assets/img/projects/life.gif';
import  fiscompIcon from '../../assets/img/projects/fractal.png';
import  quadtreeIcon from '../../assets/img/projects/quadtree.png';
import  siteIcon from '../../assets/img/projects/site.png';
import  pooIcon from '../../assets/img/projects/poo.png';



const Projects = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);
    const projectList = [{
        title: "Gepac",
        img: gepacIcon,
        description: "GEPAC (Grupo de Estudos de Programação Aplicada à Ciência) é um grupo de extensão criado por estudantes do Instituto de Física de São Carlos - USP. Ele busca através de oficinas, projetos e seminários, aproximar os estudantes da computação científica.",
        link: "https://gepac.github.io/"
    },
    {
        title: "Este site",
        img: siteIcon,
        description: "Criei essa página no começo de 2019 para treinar um pouco de HTML, CSS e Javascript. Atualmente serve como alguma coisa entre um portifólio e um portal para facilitar o acesso (tanto meu quanto de terceiros) aos meus projetos e materiais de cursos, eventos e etc. Na imagem, a primeira versão dela.",
        link: "https://github.com/LFRusso/russo"
    },
    {
        title: "Life",
        img: lifeIcon,
        description: "Jogo 'Game of Life' bem simples feito em C++ usando SFML. Fiz para aprender os básicos da biblioteca.",
        link: "https://github.com/LFRusso/Life"
    },
    {
        title: "grupy-sanca",
        img: grupyIcon,
        description: "Participante do Grupo de usuários de Python de São Carlos (gosto bastante de Python c:). Também contribuí para o material do curso de Introdução ao Python do Grupo.",
        link: "http://curso.grupysanca.com.br/pt/latest/sobre_grupy.html"
    },
    {
        title: "Quadtree",
        img: quadtreeIcon,
        description: "Uma quadtree para uso geral em outros projetos.",
        link: "https://github.com/LFRusso/Quadtree"
    },
    {
        title: "Introdução à Física Computacinal",
        img: fiscompIcon,
        description: "Meu repositório do github contendo os projetos desenvolvidos no curso 7600017 - Introdução à Física Computacional.",
        link: "https://github.com/LFRusso/Intro_Fiscomp"
    },
    {
        title: "Programação Orientada a Objetos",
        img: pooIcon,
        description: "Meu repositório do github contendo os projetos desenvolvidos no curso 7600055 - Programação Orientada a Objetos.",
        link: "https://github.com/LFRusso/POO"
    },

];

    const projects = projectList.map((project) =>
        <div class="col project-card">
            <img src= {project.img} className="project-img" />
            <span className="project-title">{project.title}</span>    
            <hr />
            <div className="project-content">
                {project.description}
            </div>
            <a target="_blank" href= {project.link} className="project-btn btn text-link">Ver</a>
        </div>  
    );

    return (
        <div class="container-fluid row justify-content-sm-start project-body">   
            { projects }
        </div>
    )
}

export default Projects;