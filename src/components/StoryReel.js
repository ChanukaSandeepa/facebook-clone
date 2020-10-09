import React from 'react'
import '../css/storyreel.css'
import Story from './Story'

export default function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu8Ie_CPlc0IsQfE7F2Jaa6udMbRdhUTy96H6oH4=s192-c-mo"
                image="https://static2.tripoto.com/media/filter/tst/img/440051/TripDocument/1549182635_img_5298.jpg"
                title="Single"
            />
            <Story
                profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu_N4hTd9mcxp_qxRpud7p7CyoGQRYliMZ_8Qlp4=s192-c-mo"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnPFtw8cmFyJFbAQiXx8nBQzaf9k7aECQyDA&usqp=CAU"
                title="Traveling is life"
            />
            <Story
                profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu_0ido8smNqS8Elx7RiIcw8x87rhrs9aky7Sa6J=s48-c-mo"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtPEgd9Xtofj14Ltf-O0-WOLth0fpuNAMFDQ&usqp=CAU"
                title="Abroad"
            />
            <Story
                profileSrc="https://i.stack.imgur.com/dZFOP.jpg?s=328&g=1"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdN8feNHoodAOlc5s8mnMlxIocgqYrPVK3OQ&usqp=CAU"
                title="My Love"
            />
        </div>
    )
}
