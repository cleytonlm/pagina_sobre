import React, { Component } from 'react';

import { Col, Row, Container } from 'reactstrap';

class Sobre extends Component {


    render() {
        return (
            <>
                

                    <div className="jumbotron jumbotron-fluid sobre-nos">
                        <Container className="container">
                            <h1 className="display-4">Sobre nós</h1>
                            <p className="lead">Somos uma empresa de venda de combustíveis online
               </p>
                        </Container>
                    </div>

                    <Container className="container">
                        <Row className="row">

                            <Col className="col-md-6 col-xs-12">
                                <div className="jumbotron sobre-nos missao">
                                    <h1 className="display-4">Missão</h1>
                                    <p className="lead" />
                                    <hr className="my-4" />
                                    <p>Prover combustível de qualidade para-com os nós clientes, buscando tornar
                                      sua experiência simples e fluida.
                  </p>
                                </div>
                            </Col>

                            <Col className="col-md-6 col-xs-12">
                                <div className="jumbotron sobre-nos">
                                    <h1 className="display-4">Visão</h1>
                                    <hr className="my-4" />
                                    <p>Ser a maior empresa de venda de combustíveis online na America Latina .
                  </p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                

            </>
        )
    }
}
export default Sobre;