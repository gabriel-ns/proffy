import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://picsum.photos/500/500" alt="Lorem Picsum"/>
                        <div>
                           <strong>Lorem Picsum</strong> 
                           <span>Lorem</span>
                        </div>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        <br/><br/>
                        Morbi et suscipit massa, eget accumsan dui. In sit amet magna sollicitudin, tempor lectus eu, ornare quam.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem