import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import parse from "html-react-parser"

const Presentation = () => {

    const baseUrl = 'https://jorgeaugustoadvocacia.com.br/wp-json/wp/v2/presentation'

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect( () => {
        axios.get(baseUrl).then(response => {
            setTitle(response.data[0].title.rendered)
            setContent(response.data[0].content.rendered)
        });
    },[])

    return (
        <>
        <Container fluid className="block block-1" id="inicio">
            <Container>
                <Row>
                    <Col as="article" md={4}>
                        <h1 className='block-title fs-2'>{title}</h1>
                        <p className='text-white block-description'>{parse(`${content}`)}</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Presentation