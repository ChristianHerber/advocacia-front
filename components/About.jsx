import { Container, Col, Row} from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"
import parse from "html-react-parser"

const About = () => {

    const baseUrl = 'https://jorgeaugustoadvocacia.com.br/wp-json/wp/v2/about'

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')

    useEffect( () => {
        axios.get(baseUrl).then(response => {
            setTitle(response.data[0].title.rendered)
            setContent(response.data[0].content.rendered)
            setImage(response.data[0].yoast_head_json.twitter_image)
        });
    },[])

    return (
        <Container fluid className="block block-2" id="sobre">
            <Container>
                <Row>
                    <Col md={4}>
                        <img src={image} className="img-fluid photo-profile" alt="JORGE AUGUSTO ADVOCACIA CRIMINAL" width="604" height="608" />
                    </Col>
                    <Col as="article" md={6} className="offset-md-2">
                        <h2 className="block-title">{title}</h2>
                        <p className="text-dark block-description">{parse(`${content}`)}</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About