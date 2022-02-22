import { Container, Col, Row} from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"
import parse from "html-react-parser"

const Avaliations = () => {

    const baseUrl = 'https://jorgeaugustoadvocacia.com.br/wp-json/wp/v2/avaliations'

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [link, setLink] = useState('')

    useEffect( () => {
        axios.get(baseUrl).then(response => {
            setTitle(response.data[0].title.rendered)
            setContent(response.data[0].content.rendered)
            setLink(response.data[0].avliationsLink)
        });
    },[])


    return (
        <Col as="article" md={4} className="offset-md-4">
            <h3 className="block-title">{title}</h3>
            <p className="text-white block-description">{parse(`${content}`)}</p>
            <a href={link} target="_blank" className="btn btn-warning-muted mt-4">Nossa Avaliações</a>
        </Col>
    )
}

export default Avaliations