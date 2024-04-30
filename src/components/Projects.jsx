import { useState, useEffect } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/inezcarrillo/repos')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
            .catch(error => console.error('Error loading GitHub Projects', error));
    }, []); // Empty dependency array to ensure useEffect runs only once

    return (
        <div className="projects">
            <h2>GitHub Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                            {project.name}
                        </a>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
