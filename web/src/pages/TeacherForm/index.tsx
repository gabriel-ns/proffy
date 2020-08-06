import React, {useState, FormEvent} from 'react'
import PageHeader from '../../components/PageHeader'
import { useHistory } from 'react-router-dom'

import './styles.css'
import Input from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/TextArea'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherForm() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems]= useState([
        {week_day: 1, from: "08:00", to: "12:00"}
    ])


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, 
            {week_day: 0, from: '', to: ''}
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return {...scheduleItem, [field]: value}
            }
            else return scheduleItem
        })

        setScheduleItems(updatedScheduleItems)
    }

    function handleCreateClass(evt: FormEvent) {
        evt.preventDefault()

        api.post('classes', {
            name, avatar, whatsapp, bio, subject, cost: Number(cost), schedule: scheduleItems
        }).then(() => {
            alert('Done!')
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro')
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrível que você quer dar aulas" 
            description="O primeiro passo é preencher esse formulário de inscrição."
        />
        
        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input 
                        name="name" 
                        label="Nome Completo" 
                        type="text" 
                        value={name} 
                        onChange={(evt) => {setName(evt.target.value)}} 
                    />
                    <Input 
                        name="avatar" 
                        label="Avatar" 
                        type="text" 
                        value={avatar}
                        onChange={(evt) => {setAvatar(evt.target.value)}} 
                    />
                    <Input 
                        name="whatsapp" 
                        label="Whatsapp" 
                        type="text" 
                        value={whatsapp}
                        onChange={(evt) => {setWhatsapp(evt.target.value)}} 
                    />
                    <Textarea 
                        name="Bio" 
                        label="Biografia" 
                        value={bio}
                        onChange={(evt) => {setBio(evt.target.value)}} 
                    />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        value={subject}
                        onChange={(evt) => {setSubject(evt.target.value)}} 
                        options={[
                            {value: 'Artes', label:'Artes'},
                            {value: 'Biologia', label:'Biologia'},
                            {value: 'Ciências', label:'Ciências'},
                            {value: 'Educação Física', label:'Educação Física'},
                            {value: 'Física', label:'Física'},
                            {value: 'Geografia', label:'Geografia'},
                            {value: 'História', label:'História'},
                            {value: 'Português', label:'Português'},
                            {value: 'Química', label:'Química'},
                        ]}    
                    />
                    <Input 
                        name="cost" 
                        label="Custo da sua hora por aula" 
                        type="text" 
                        value={cost}
                        onChange={(evt) => {setCost(evt.target.value)}} 
                    />
                </fieldset>

                <fieldset>
                    <legend> 
                        Horários disponíveis 
                        <button type="button" onClick={addNewScheduleItem}> + Novo Horário </button>
                    </legend>
                    
                    {scheduleItems.map((scheduleItem, index) => {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                            <Select 
                                name="week_day" 
                                label="Dia da semana" 
                                onChange={evt => setScheduleItemValue(index, 'week_day', evt.target.value)}
                                value={scheduleItem.week_day}
                                options={[
                                    {value: '0', label:'Domingo'},
                                    {value: '1', label:'Segunda-feira'},
                                    {value: '2', label:'Terça-feira'},
                                    {value: '3', label:'Quarta-feira'},
                                    {value: '4', label:'Quinta-feira'},
                                    {value: '5', label:'Sexta-feira'},
                                    {value: '6', label:'Sábado'},
                                ]}    
                            />
            
                            <Input 
                                name="from" 
                                label="Das" 
                                type="time"
                                value={scheduleItem.from}
                                onChange={evt => setScheduleItemValue(index, 'from', evt.target.value)}
                            />
                            <Input 
                                name="to" 
                                label="Até" 
                                type="time"
                                value={scheduleItem.to}
                                onChange={evt => setScheduleItemValue(index, 'to', evt.target.value)}
                            />
                            </div>
                        )
                    })}

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="submit">
                        Salvar cadastro
                    </button>
                </footer>
            </form>
        </main>

        </div>
        
    )
}

export default TeacherForm