import { useEffect, useState } from "react"

const Map = () => {

    const [map, setMap] = useState('')

    useEffect(() => {
        setMap("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63699.90291775047!2d-38.5125779!3d-3.7569935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748a223c54345%3A0xfa56b11d80ce3eef!2sAv.%20Washington%20Soares%2C%2055%20-%20Edson%20Queiroz%2C%20Fortaleza%20-%20CE%2C%2060811-341!5e0!3m2!1spt-BR!2sbr!4v1643835982406!5m2!1spt-BR!2sbr")
    },[])

    return (
        <section className="map border-0" id="endereco">
            <iframe src={map} style={{border:0,height:450}} loading="lazy"></iframe>
        </section>
    )
}

export default Map