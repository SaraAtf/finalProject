import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from '../styles/articles.module.css';

export function ArticleModal( { show, onHide, article } ) {
    if ( !article ) return null;

    return (
        <Modal show={show} onHide={onHide} size="lg" centered className={styles.modal}>
            <div className={styles.modalCloseBtn} onClick={onHide}>
                <i className="bi bi-x-lg"></i>
            </div>
            <Modal.Body className="p-0">
                <div className={styles.modalContentWrapper}>
                    <div className="text-center">
                        <img
                            src={article.image}
                            alt={article.title}
                            className={styles.modalImage}
                        />
                    </div>
                    <div className={styles.modalTextContent}>
                        <h2 className={styles.modalTitle}>{article.title}</h2>
                        <div className="d-flex justify-content-between mb-4">
                            <span className={styles.modalAuthor}>{article.author}</span>
                            <span className={styles.modalDate}>{article.date}</span>
                        </div>
                        <div className={styles.modalContent}>
                            {article.content}
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
} 