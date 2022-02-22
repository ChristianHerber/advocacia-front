import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import parse from "html-react-parser"
import { BsFillPersonFill, BsGeoAlt, BsTelephone, BsEnvelope, BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs"
import Link from "next/link"

const Contact = () => {

    const baseUrl = 'https://jorgeaugustoadvocacia.com.br/wp-json/wp/v2/informations'

    const [title, setTitle] = useState('')
    const [infoTitle, setInfoTitle] = useState('')
    const [infoAddress, setInfoAddress] = useState('')
    const [infoPhone, setInfoPhone] = useState('')
    const [infoEmail, setInfoEmail] = useState('')
    const [infoWhatsapp, setInfoWhatsapp] = useState('')
    const [infoInstagram, setInfoInstagram] = useState('')
    const [infoFacebook, setInfoFacebook] = useState('')

    useEffect( () => {
        axios.get(baseUrl).then(response => {
            setInfoTitle(response.data[0].infoTitle)
            setInfoAddress(response.data[0].infoEndereco)
            setInfoPhone(response.data[0].infoTelefone)
            setInfoEmail(response.data[0].infoEmail)
            setInfoWhatsapp(response.data[0].infoWhatsapp)
            setInfoInstagram(response.data[0].infoInstagram)
            setInfoFacebook(response.data[0].infoFacebook)
        });
    },[])

    return (
        <Container fluid as="footer" className="block block-4" id="contato">
            <Container>
                <Row>
                    <Col md={12} className="mb-4>">
                        <h3 className="block-title text-center">Entre em Contato</h3>
                    </Col>
                    <Col md={8}>
                        <p className="text-white mb-4">
                            <BsFillPersonFill className="text-warning-mutted" size="32"/> {infoTitle}
                        </p>
                        <p className="text-white mb-4">
                            <BsGeoAlt className="text-warning-mutted" size="32" /> {infoAddress}
                        </p>
                        <p className="text-white mb-4">
                            <Link href="tel:{infoPhone}">
                                <a className="text-white text-decoration-none">
                                    <BsTelephone className="text-warning-mutted" size="32" /> {infoPhone}
                                </a>
                            </Link>
                        </p>
                        <p className="text-white mb-4">
                            <BsEnvelope className="text-warning-mutted" size="32" /> {infoEmail}
                        </p>
                    </Col>
                    <Col md={4}>
                        <p className="mb-4">
                            <Link href="{infoWhatsapp}">
                                <a className="text-white text-decoration-none">
                                    <BsWhatsapp className="text-warning-mutted" size="32" /> Inicie uma Conversa
                                </a>
                            </Link>
                        </p>
                        <p className="mb-4">
                            <Link href="{infoInstagram}">
                                <a className="text-white text-decoration-none">
                                    <BsInstagram className="text-warning-mutted" size="32" /> @advocaiapenal
                                </a>
                            </Link>
                        </p>
                        <p className="mb-4">
                            <Link href="{infoFacebook}">
                                <a className="text-white text-decoration-none">
                                    <BsFacebook className="text-warning-mutted" size="32" /> @JorgeAugustoAdvocacia
                                </a>
                            </Link>
                        </p>
                        <p className="mb-4">
                            <Link href="tel:{infoPhone}">
                                <a className="text-white text-decoration-none">
                                    <BsTelephone className="text-warning-mutted" size="32" /> Ligue para o Escritório
                                </a>
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact