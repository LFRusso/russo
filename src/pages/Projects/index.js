import React from 'react';

const Projects = () => {
    const projectList = [{
        title: "",
        img: "",
        description: "",
    }];

    const projects = projectList.map((project) =>
        <div class="col">
            {project.title}    
        </div>  
    );

    return (
        <div class="row">   
            { projects }
        </div>
    )
}

export default Projects;