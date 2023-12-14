

interface ProgressItem {
    id : number,
    status : number,
    name : string,
}

interface ProgressType {
    id : number,
    name : string,
    group : ProgressItem[]
}
const listPeogpress: ProgressType[] = [
    {
        id : 1,
        name : "Designing web",
        group : [
            {
                id : 1,
                status : 88,
                name : "Html"
            },
            {
                id : 2,
                status : 83,
                name : "Css"
            },
            {
                id : 3,
                status : 76,
                name : "Sass"
            },
            {
                id : 4,
                status : 97,
                name : "Tailwind css"
            },
            
        ]
    },
    {
        id : 2,
        name : "JavaScript Backend",
        group : [
            {
                id : 5,
                status : 87,
                name : "JavaScript"
            },
            {
                id : 6,
                status : 83,
                name : "TypeScript"
            },
            {
                id : 7,
                status : 77,
                name : "NodeJs"
            },
            {
                id : 8,
                status : 68,
                name : "ExpressJs"
            },
        ]
    },
    {
        id : 2,
        name : "JavaScript Backend",
        group : [
            {
                id : 9,
                status : 85,
                name : "React"
            },
            {
                id : 10,
                status : 90,
                name : "Nextjs"
            },
            {
                id : 11,
                status : 79,
                name : "Mui"
            },
            {
                id : 12,
                status : 82,
                name : "gasp"
            },
            
        ]
    },
    {
        id : 4,
        name : "language programming",
        group : [
            {
                id : 13,
                status : 53,
                name : "C#"
            },
            {
                id : 14,
                status : 76,
                name : "Python"
            },
            {
                id : 15,
                status : 91,
                name : "Dart"
            },
            {
                id : 16,
                status : 84,
                name : "Flutter"
            },
            
        ]
    },{
        id : 5,
        name : "General skills",
        group : [
            {
                id : 17,
                status : 77,
                name : "WordPress"
            },
            {
                id : 18,
                status : 93,
                name : "Vs.code"
            },
            {
                id : 19,
                status : 78,
                name : "Figma"
            },
            {
                id : 20,
                status : 84,
                name : "Prompt Engineer"
            },
            
        ]
    },
    {
        id : 6,
        name : "Databases and StateManger",
        group : [
            {
                id : 21,
                status : 70,
                name : "Moongodb NoSql"
            },
            {
                id : 22,
                status : 65,
                name : "MySql"
            },
            {
                id : 23,
                status : 80,
                name : "Redux"
            },
        ]
    }
] 

export {listPeogpress}

export type {ProgressType , ProgressItem}