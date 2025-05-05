import { Modal } from 'react-bootstrap';
import { useState } from 'react';

export function VideoModal( { show, onHide, videoId } ) {
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Body className="p-0">
                <div className="ratio ratio-16x9">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal.Body>
        </Modal>
    );
}