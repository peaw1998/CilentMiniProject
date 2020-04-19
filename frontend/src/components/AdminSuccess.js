import React from 'react';
import '../App.css';
import { Button, Card, Form, Col } from 'react-bootstrap';


const AdminSuccess = () => {
    return (
        <>

            {/* <div className="container-fluid"> */}
            <div className="bg2 center">
                <div className="row">
                    <Button variant="warning" className="font" style={{ marginTop: 20 }}  >คอร์สเรียนของผู้เรียน</Button>
                    <Button variant="danger" className="font" style={{ marginTop: 20, marginLeft: 20 }}>คอร์สเรียนที่สำเร็จแล้ว</Button>
                </div>

                <h1 className="font2">คอร์สเรียนที่สำเร็จแล้ว</h1>
                <div className="status_box">
                    <Card
                        bg="dark"

                        style={{ width: '18rem' }}
                    >
                        <Card.Header className="font">Status : Success!</Card.Header>
                        <Card.Body>
                            <Card.Title className="font">ชื่อวิชา</Card.Title>
                            <Card.Text className="font">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Text className="font" style={{ marginBottom: 20 }}>
                            ราคา : 2000 บาท
                        </Card.Text>
                    </Card>
                    <Card
                        bg="dark"
                        style={{ width: '18rem', marginTop: '1rem' }}
                    >
                        <Card.Header className="font">Status : Success!</Card.Header>
                        <Card.Body>
                            <Card.Title className="font">ชื่อวิชา</Card.Title>
                            <Card.Text className="font">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Text className="font" style={{ marginBottom: 20 }}>
                            ราคา : 2000 บาท
                        </Card.Text>
                    </Card>
                    <Card
                        bg="dark"
                        style={{ width: '18rem', marginTop: '1rem' }}
                    >
                        <Card.Header className="font">Status : Success!</Card.Header>
                        <Card.Body>
                            <Card.Title className="font">ชื่อวิชา</Card.Title>
                            <Card.Text className="font">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Text className="font" style={{ marginBottom: 20 }}>
                            ราคา : 2000 บาท
                        </Card.Text>
                    </Card> <Card
                        bg="dark"
                        style={{ width: '18rem', marginTop: '1rem' }}
                    >
                        <Card.Header className="font">Status : Success!</Card.Header>
                        <Card.Body>
                            <Card.Title className="font">ชื่อวิชา</Card.Title>
                            <Card.Text className="font">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Text className="font" style={{ marginBottom: 20 }}>
                            ราคา : 2000 บาท
                        </Card.Text>
                    </Card> <Card
                        bg="dark"
                        style={{ width: '18rem', marginTop: '1rem' }}
                    >
                        <Card.Header className="font">Status : Success!</Card.Header>
                        <Card.Body>
                            <Card.Title className="font">ชื่อวิชา</Card.Title>
                            <Card.Text className="font">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Text className="font" style={{ marginBottom: 20 }}>
                            ราคา : 2000 บาท
                        </Card.Text>
                    </Card> <Card
                        bg="dark"
                        style={{ width: '18rem', marginTop: '1rem' }}
                    >
                        <Card.Header className="font">Status : Success!</Card.Header>
                        <Card.Body>
                            <Card.Title className="font">ชื่อวิชา</Card.Title>
                            <Card.Text className="font">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Text className="font" style={{ marginBottom: 20 }}>
                            ราคา : 2000 บาท
                        </Card.Text>
                    </Card> <Card
                        bg="dark"
                        style={{ width: '18rem', marginTop: '1rem' }}
                    >
                        <Card.Header className="font">Status : Success!</Card.Header>
                        <Card.Body>
                            <Card.Title className="font">ชื่อวิชา</Card.Title>
                            <Card.Text className="font">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Text className="font" style={{ marginBottom: 20 }}>
                            ราคา : 2000 บาท
                        </Card.Text>
                    </Card>






                </div>
                {/* </div> */}
            </div>
        </>
    )
}
export default AdminSuccess