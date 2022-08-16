// <div className='skillblock'>
// <img src={bashPf} alt="bash.png" />
// <p>Bash</p>
// </div>
// <div className='skillblock'>
// <img src={typescriptPf} alt="ts.png" />
// <p>Typescript</p>
// </div>
// <div className='skillblock'>
// <img src={javascriptPf} alt="js.png" />
// <p>Javascript</p>
// </div>
// <div className='skillblock'>
// <img src={nodejsPf} alt="nodejs.png" />
// <p>Node</p>
// </div>
// <div className='skillblock'>
// <img src={reactPf} alt="react.png" />
// <p>React</p>
// </div>
// <div className='skillblock'>
// <img src={githubPf} alt="git.png" />
// <p>Git</p>
// </div>
// <div className='skillblock'>
// <img src={dockerPf} alt="docker.png" />
// <p>Docker</p>
// </div>
// <div className='skillblock'>
// <img src={mysqlPf} alt="mysql.png" />
// <p>MySQL</p>
// </div>
// <div className='skillblock'>
// <img src={scyllaPf} alt="scylla.png" />
// <p>Scylla</p>
// </div>

import bashPf from '../assets/bash.png'
import typescriptPf from '../assets/typescript.png'
import javascriptPf from '../assets/javascript.png'
import reactPf from '../assets/react.png'
import nodejsPf from '../assets/nodejs.png'
import githubPf from '../assets/git.png'
import dockerPf from '../assets/docker.png'
import mysqlPf from '../assets/mysql.png'
import scyllaPf from '../assets/scylla.png'

export const skills: {
    name: string;
    imageAlt: string;
    image: string;
}[] = [
    {
        name: 'Bash',
        image: bashPf,
        imageAlt: 'bash.png'
    },
    {
        name: 'Typescript',
        image: typescriptPf,
        imageAlt: 'ts.png'
    },
    {
        name: 'Javascript',
        image: javascriptPf,
        imageAlt: 'js.png'
    },
    {
        name: 'Node',
        image: nodejsPf,
        imageAlt: 'node.png'
    },
    {
        name: 'React',
        image: reactPf,
        imageAlt: 'react.png'
    },
    {
        name: 'Git',
        image: githubPf,
        imageAlt: 'git.png'
    },
    {
        name: 'Docker',
        image: dockerPf,
        imageAlt: 'docker.png'
    },
    {
        name: 'Mysql',
        image: mysqlPf,
        imageAlt: 'mysql.png'
    },
    {
        name: 'Scylla',
        image: scyllaPf,
        imageAlt: 'scylla.png'
    }
]