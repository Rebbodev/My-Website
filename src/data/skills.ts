
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