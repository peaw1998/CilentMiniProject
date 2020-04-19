import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import Axios from 'axios'

const TutorHome = (props) => {
    const [courses, setCourses] = useState([])

    const fetchCourse = async () => {
        const course = await Axios.get('http://localhost:5000/teacher/course?teacherId=' + props.teacher.id)
        setCourses(course.data)
    }

    useEffect(() => {
        fetchCourse()
    }, [])

    return (
        <>
            <div className="bg2 center">
                < div className="row">
                    <Button variant="warning" className="font" style={{ marginTop: 20 }}
                        onClick={() => props.history.push('/home')}
                    >คอร์สเรียนทั้งหมด</Button>
                    <Button variant="danger" className="font" style={{ marginTop: 20, marginLeft: 20 }}
                        onClick={() => props.history.push('/course')}
                    >คอร์สที่เลือก</Button>
                </div>
                <h1 className="font2">คอร์สเรียนของฉัน</h1>
                <div className="status_box">

                    {courses.map((item, index) => {
                        return (
                            <Card
                                bg={item.status === "success" ? "danger" : "success"}
                                style={{ width: '18rem', marginTop: 10 }}
                            >
                                <Card.Header className="font">Status : {item.status}</Card.Header>
                                <Card.Body>
                                    <Card.Title className="font">{item.name}</Card.Title>
                                    <Card.Text className="font">
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Text className="font" style={{ marginBottom: 20 }}>
                                    ราคา : {item.price} บาท
                        </Card.Text>
                                <Button variant="dark" style={{ width: '100% ' }}
                                    onClick={async () => {
                                        await Axios.post('http://localhost:5000/offer', {
                                            courseId: item.id,
                                            teacherId: props.teacher.id
                                        })
                                        props.history.push('/course')
                                    }}
                                >เลือก</Button>
                            </Card>
                        )

                    })}





                </div>
            </div>
        </>
    )
}

const mapStateToProps = ({ teacher }) => ({ ...teacher })
export default connect(mapStateToProps)(TutorHome)