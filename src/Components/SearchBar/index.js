import React, {useEffect, useState} from 'react';
import Preview from '../Preview';
import './style.css'

export const ProjectContext = React.createContext()

const SearchBar = () => {
    const projectTypes =  ["Docker", "Node", "Maven", "Python"]
    const [project, setProject] = useState({"selected": "", id: null});

    useEffect(() =>{
        console.log(project)
    },[project])


    return (
    <>
    <div className='search-contianer'>
    <p className="search-title"> Select the template</p>
        <div className='templates'>
            <ul className='template__choice'>
                {projectTypes.map((proj, idx) => <li key={idx}><button 
                 className={project.id == idx ? "active" : ""}
                onClick= {() => setProject(project => ({...project, "selected":proj, "id": idx}))}>{proj}</button></li>)}
            </ul>
        </div>
    </div>
    <ProjectContext.Provider value={project.selected}>
        <Preview/>
    </ProjectContext.Provider>
    
    </>
    )
}

export default SearchBar