export const projects = [
    {
        title: 'Log On',
        summary:'Family-friendly social media site, where users can play fun games with and message other users.',
        description: [
            'Utilizing Websockets, established socket connections to send message and game information, allowing users to chat or play games with each other in real-time. ',
            'Created a Game class of Connect Four that lets two users play a full game until a win, loss or tie. ',
            'Implemented small algorithms to update the necessary database values, based on game results, to automatically keep track of users’ game statistics.',
        ],
        href: 'https://log-on.herokuapp.com/',
        img: 'LogOn',
        technologies: ' React / Redux / Python / Flask / Websockets / PostgreSQL / AWS / Heroku'
    },
    {
        title: 'Woof Woof',
        summary:'Chat application that allows people to post messages to public channels or send private direct messages.',
        description: [
            'Built a database with many to many relationships between users and channels that heavily decrease the necessary number of queries to allow for simpler and more efficient API calls.',
            'Developed a smooth responsive site by designing an object based Redux store that fetches user messages and profile information, only when necessary, further boosting load times.',
            'Improved user experience by incorporating, in React, a modal based user profile that grants access to a user’s information without needing to reload to another page.',
        ],
        href: 'https://woofwoof-app.herokuapp.com/',
        img: 'WoofWoof',
        technologies: ' React / Redux / Python / Flask / Websockets / PostgreSQL / AWS / Heroku'
    },
    {
        title: 'Songaku',
        summary:'An audio streaming website that allows users to post, stream, organize, and interact with music on its database.',
        description: [
            'To allow for easy-to-use music controls, designed a music player using React Player and React Slider that lets users see, pause, play and scroll through actively playing music.',
            'Utilizing AWS-SDK connected express backend with AWS S3 media storage allowing scalable collection of audio and visual media.',
            'Through the use of simple selections and buttons, streamlined user to music interaction by dispatching per music updates to the database and redux store.',
        ],
        href: 'https://songaku.herokuapp.com/',
        img: 'Songaku',
        technologies: ' React / Redux / Javascript / Express / PostgreSQL / AWS / Heroku'
    },
    {
        title: 'GoodGamesGG',
        summary:'Social cataloging website where users can find, track, and organize existing video games.',
        description: [
            'Designed back to frontend implementation of the games route using Express and Pug to display users with all the games, and their information, that exists in the database.',
            'With a merge-sort algorithm, sorted video game objects based off of a user selected order.',
            'Making use of Pug, and CSS, developed a 5 star rating system that users can submit and in real-time, using Ajax, see a game\'s overall rating update.',
        ],
        href: 'https://goodgamesgg.herokuapp.com/',
        img: 'goodgamesgg',
        technologies: 'Javascript / Express / Pug / PostgreSQL / Heroku'
    },
]