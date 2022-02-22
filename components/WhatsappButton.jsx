import { useEffect, useState } from "react"
import { BsWhatsapp } from "react-icons/bs"

const WhatsappButton = () => {

    const [link, setLink] = useState('')

    useEffect( () => {
        setLink("https://wa.me/558588865935?text=Oi%2C+gostaria+de+falar+com+um+advogado.")
    },[])
    return (
        <a href={link} className="whatsapp-contact" target="_blank">
            <BsWhatsapp size="32" className="text-white"/>
        </a>
    )
}

export default WhatsappButton