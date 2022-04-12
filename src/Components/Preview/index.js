import React, {useContext} from 'react';
import { ProjectContext } from '../SearchBar';
import {SelectPipeline} from '../../utils/const';
import './style.css';

const Preview = () => {
    const project = useContext(ProjectContext);
    return project!==""?  (
        <div className='template-plane'>
            <div className='config-plane'>
                  <SelectPipeline project={project}/>  
            </div>
            <div className='convert_arrow'>
                <h1>{"---------------------------------->"}</h1>
            </div>
            <div className="preview-plane">
                <h1>This is a Config plane {project}</h1>
            </div>
        </div>
    ) : <> </>
}

export default Preview;