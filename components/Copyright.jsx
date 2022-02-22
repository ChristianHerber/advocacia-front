import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

const Copyright = () => {

    const [year, setYear] = useState('')

    useEffect( () => {
        setYear(new Date().getFullYear())
    },[])

    return (
        <Container fluid as="section" className="text-center pb-2 pt-2 copyright">
            <Container>
                <Row>
                    <Col md={12}>
                        <small>Jorge Augusto Advocacia - {year}</small>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Copyright