import { Container, Col, Row} from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"
import parse from "html-react-parser"
import Avaliations from "./Avaliations"

const Office = () => {

    const baseUrl = 'https://jorgeaugustoadvocacia.com.br/wp-json/wp/v2/office'

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect( () => {
        axios.get(baseUrl).then(response => {
            setTitle(response.data[0].title.rendered)
            setContent(response.data[0].content.rendered)
        });
    },[])


    return (
        <Container fluid className="block block-3 border-0" id="escritorio">
            <Container>
                <Row>
                    <Col as="article" md={4}>
                        <h2 className="block-title">{title}</h2>
                        <p className="text-white block-description">{parse(`${content}`)}</p>
                    </Col>
                    <Avaliations />
                </Row>
            </Container>
        </Container>
    )
}

export default Office