import React from 'react';

// export const stages = {
//     "docker": `\n
//     stage('prepare pipeline') {\n
//         pipeline = new cicd.Pipeline()\n
//         pipeline.cleanupAndCheckout()\n
//     }\n
//     stage('build image') {\n
//         image = pipeline.buildDockerImage(\n
//             appName: ${typeof base_image === 'undefined' ? 'docker_base_image': base_image}\n
//             appversion: ${typeof version === 'undefined' ? '1.0.1' : version }\n
//         )\n
//     }\n

//     stage('publish image') {\n
//         imageName = pipeline.pushContainerImage(\n
//             image: image\n
//             imageTag: ${typeof tag_name === 'undefined' ?  'latest' : tag_name}\n
//         )\n
//     }\n
//     `,
//     "python": `
//         stage("python build and push") {
//             docker.image(${typeof python_base_image  === 'undefined'?  'python:alpine' : python_base_image}).inside(){
//                 sh 'sed "s/artifactory.aws.athenahealth.com/artifactory.aws.athenahealth.com/g" .pyirc > .pyircnew'
//                 sh 'mv .pyircnew .pyirc'
//                 sh 'echo "username = \${AD_USER}\npassword=\${AD_PASSWD} \n" >> .pyirc; mv .pyirc /home/jenkins'
//                 sh 'pip install --user twine==1.10.0 wheel==0.30.0'

//                 withCredentials([usernamePassword(credentialsId: 'SV_RPCI_AD', usernameVariable: 'AD_USER', passwordVariable: 'AD_PASSWD')]){
//                     sh 'python3 setup.py sdidt bdist_wheel'
//                     sh 'python3 -m twine upload -u \${AD_USER} -p \${AD_PASSWD} dist/*
//                     '
//                 }
//             }
//         }
//     `
// }

export const SelectPipeline = (props) => {
    const {project} = props
    switch(project.toLowerCase()) {
        case 'docker':
            return <DockerPipeline/>
        case 'node':
            return <NodePipeline/>
        case 'python':
            return <PythonPipeline/>
        case 'maven':
            return <MavenPipeline/>
        default:
            return <h1>Select a project</h1>
    }
}

const DockerPipeline = () => {
    let version, base_image, tag_name;
    return (
        <>
            <h3> stage('prepare pipeline') &#123;</h3>
             <p>pipeline = new cicd.Pipeline()</p>
             <p>pipeline.cleanupAndCheckout()</p>
             <h3>&#125;</h3>
             <h3>stage('build image')  &#123;</h3>
             <p>image = pipeline.buildDockerImage(</p>
             <p>appName: { 'docker_base_image'|| base_image}</p>
             <p>appversion: { '1.0.1' || version }</p>
             <p>)</p>    
             <h3>&#125;</h3>
             <h3>stage('publish image') &#123;</h3>
             <p>imageName = pipeline.pushContainerImage(</p>
             <p>image: image</p>
             <p>imageTag: {tag_name || 'latest'}</p>
             <p>)</p>
             <h3>&#125;</h3>
        </>
    )
}

const NodePipeline = () => {
    return (<>
             <h3> stage('prepare pipeline') &#123;</h3>
             <p>pipeline = new cicd.Pipeline()</p>
             <p>pipeline.cleanupAndCheckout()</p>
             <h3>&#125;</h3>
    </>)
}

const PythonPipeline = () => {
    return (
        <>
             <h3> stage('prepare pipeline') &#123;</h3>
                <p>pipeline = new cicd.Pipeline()</p>
                <p>pipeline.cleanupAndCheckout()</p>
             <h3>&#125;</h3>
        </>
    )
}

const MavenPipeline = () => {
    return (
        <>
             <h3> stage('prepare pipeline') &#123;</h3>
                <p>pipeline = new cicd.Pipeline()</p>
                <p>pipeline.cleanupAndCheckout()</p>
             <h3>&#125;</h3>
        </>
    )
}

