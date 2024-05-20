import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './gifthuboptioncount.scss';

function GifthubOptionCount({ onQuantityChange,  gifthubItemId, itemId }) {
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState('');

    const handleCloseModal = async () => {
        onQuantityChange(quantity);

        const requestData = {
            quantity: quantity
        };


        try {
            const response = await axios.patch(`${process.env.REACT_APP_FUNDINGBOOST}/gifthub/quantity/${gifthubItemId}`, requestData, {
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                    'ngrok-skip-browser-warning': true,
                },
            });
            console.log('PATCH 결과:', response.data);

        } catch (error) {
            console.error('PATCH 에러:', error);
        }

        setShowModal(false);
    };

    const handleShowModal = () => setShowModal(true);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <>
            <button className="change-button" onClick={handleShowModal}>
                변경
            </button>

            <Modal show={showModal} onHide={() => setShowModal(false)} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>수량 변경</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>변경할 수량을 입력하세요.</div>
                    <input
                        type="text"
                        placeholder="수량 입력"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        변경 저장
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default GifthubOptionCount;
