
import angular from '../assets/svg/skills/angular.svg'
import react from '../assets/svg/skills/react.svg'
import ui from '../assets/svg/skills/ui.svg'
import da from '../assets/svg/skills/da.svg'
import pm from '../assets/svg/skills/pm.svg'

export const achievementData = {
    bio : "",
    achievements : [
        {
            id : 1,
            title : 'Product Management First Steps',
            details : 'Course about all the important steps in Product Management with hands on experience',
            date : 'Septemeber, 2022',
            field : 'Product Management',
            image : pm
        },
        {
            id : 2,
            title : 'Learning React.js',
            details : 'Certificate course which enabled me to use ReactJS for building modular and resuable interface',
            date : 'May, 2021',
            field : 'Front End Development',
            image : react
        },
        {
            id : 3,
            title : 'Angular Essential Training',
            details : 'This course enabled me to learn angular JS in more detailed way and use it to build full-featured base web apps',
            date : 'January, 2021',
            field : 'Front End Development',
            image : angular
        },
        {
            id : 4,
            title : 'Introduction to UI Design',
            details : 'An online certificate course conducted by University of Minnesota which helped me learn the core principles and techniques of UI Design',
            date : 'November, 2020',
            field : 'User Interface',
            image : ui
        },
        {
            id : 5,
            title : 'Learning Excel: Data Analysis',
            details : 'This course helped me learn and use excel for the purpose of data analysis and data visualization',
            date : 'June, 2022',
            field : 'Data Analysis',
            image : da
        }
       

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/