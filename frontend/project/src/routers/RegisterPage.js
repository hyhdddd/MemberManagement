import React, {useState} from 'react';
import '../scss/RegisterPage.scss';
import {Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    function submitAlert() {
        axios
<<<<<<< HEAD
            .post('/api/workerJoin', {
                name: name,
                id: email,
                pw: password,
            })
=======
            .post(
                'http://localhost:8080/api/workerJoin',
                {
                    name: name,
                    id: email,
                    pw: password,
                },
                {withCredentials: true}
            )
>>>>>>> 9f8c28f94e857109c2f6695f4991a22f9bdcc31e
            .then((res) => {
                if (res.data == '') {
                    alert(
                        '이미 가입된 아이디입니다. 다른 아이디를 입력하세요.'
                    );
                } else {
                    alert('축하합니다. 회원가입이 완료되었습니다.');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const onSubmitpage = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return alert(
                '비밀번호와 비밀번호 확인이 다릅니다. 다시 시도해주세요.'
            );
        } else {
            return submitAlert();
        }
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="registerModal">
            <Button
                variant="outline-warning"
                onClick={handleShow}
                style={{
                    width: '100%',
                }}>
                회원가입
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color: 'rgb(184, 144, 16)'}}>
                        회원가입 시스템
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color: 'rgb(184, 144, 16)'}}>
                                이름
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="이름을 입력하세요."
                                value={name}
                                onChange={onNameHandler}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color: 'rgb(184, 144, 16)'}}>
                                아이디
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="원하는 아이디를 입력하세요."
                                value={email}
                                onChange={onEmailHandler}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2">
                            <Form.Label style={{color: 'rgb(184, 144, 16)'}}>
                                비밀번호
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호를 입력하세요."
                                value={password}
                                onChange={onPasswordHandler}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2">
                            <Form.Label style={{color: 'rgb(184, 144, 16)'}}>
                                비밀번호 확인
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호를 한번 더 입력하세요."
                                value={confirmPassword}
                                onChange={onConfirmPasswordHandler}
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button
                        style={{color: 'rgb(184, 144, 16)'}}
                        variant="outline-warning"
                        onClick={onSubmitpage}
                        type="submit">
                        가입하기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RegisterPage;
