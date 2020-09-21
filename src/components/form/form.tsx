import React from 'react'
import avatar from '../../assets/img/avatar.jpg';
import './form.scss'

function Form() {
    return (
        <div className="form">
            <div className="top_part">
                <div className="photo">
                    <img src={avatar} alt=""/>
                </div>
                <div className="info">
                    <ul>
                        <li>
                            <h4>Name</h4>
                            <p>Alex</p>
                        </li>
                        <li>
                            <h4>Age</h4>
                            <p>25</p>
                        </li>
                        <li>
                            <h4>Surname</h4>
                            <p>Cherepanov</p>
                        </li>
                        <li>
                            <h4>Education</h4>
                            <p>KubSU</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-part">
                <h4>Люблю изучать что-то новое и путешествовать, поэтому разработка стала для меня идеальной возможностью совместить две этих крайности в работу, которая не только приносит стабильность, но и радость от осознания того что создаешь крутые продукты которыми пользуются люди сидя на балконе отеля с видом на море.
                    <br/>
                    <br/>
                    Работаю с технологиями
                    -ES6 -TypeScript -React + Router -Redux + Thunk -JSS (styled-components) -Ant Design -Formik + Yup -REST API -Css Modules -Scss/Sass -Git.
                    <br/>
                    <br/>
                    Готов изучить что-нибудь новое, ищу интересные проекты которые будут помогать людям достигать своих целей.
                </h4>
            </div>
        </div>
    )
}

export default Form
