import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './gifthuboptioncount.scss';

function GifthubOptionCount() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <button className="change-button" onClick={handleShowModal}>
                변경
            </button>

            <Modal show={showModal} onHide={handleCloseModal} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>수량 변경</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* 모달 내용 */}
                    <div>변경할 수량을 입력하세요.</div>
                    {/* 예시: 입력 폼 */}
                    <input type="text" placeholder="수량 입력" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
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
