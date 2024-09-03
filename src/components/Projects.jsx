import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap'
import { PROJECTS } from '../constants';

const Projects = () => {
    return(
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <Container>
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/jTPOOXwHcZE?si=2v1ISd129eBNbSs-" title="YouTube video" allowfullScreen></iframe>
                </div>
            </Container>
        </div>
    )
}

export default Projects;