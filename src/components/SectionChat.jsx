import "./SectionChat.css"
import {useState} from 'react'




export default function Chat(){
    const [message, setMessage] = useState('')

    const text = (event) => setMessage(event.target.value)


    const SendMessage = () => {
        if(message) {
            console.log(`Повідомлення: ${message}`)
            return <p>{message}</p>

        }
    }


    return (
        <section>
            <div>
                <h3>Chat Beta</h3>
                <div>

                </div>
            </div>
            <div>
                <input value={message} onChange={text} pleceholder='Введіть текст' type="text" />
                <button onClick={SendMessage}>Send</button>
            </div>
        </section>
    )
}