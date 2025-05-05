import React, { useState } from 'react';
import { SharedSection } from '../shared';
import { articles } from '../models/articlesData';
import styles from '../styles/articles.module.css';
import { ArticleModal } from '../components/ArticleModal';

export function Articles() {
    const [ selectedCategory, setSelectedCategory ] = useState( 'all' );
    const [ selectedArticle, setSelectedArticle ] = useState( null );
    const [ showModal, setShowModal ] = useState( false );

    const filteredArticles = selectedCategory === 'all'
        ? articles
        : articles.filter( article => article.englishName === selectedCategory );

    const handleReadMore = ( article ) => {
        setSelectedArticle( article );
        setShowModal( true );
    };

    return (
        <SharedSection className="articles-page" title="المقالات" titleFormat="mb-5 text-center">
            <div className="mb-5">
                <div className="d-flex justify-content-center gap-3">
                    <button
                        className={`${styles.categoryBtn} ${selectedCategory === 'all' ? styles.active : ''}`}
                        onClick={() => setSelectedCategory( 'all' )}
                    >
                        الكل
                    </button>
                    <button
                        className={`${styles.categoryBtn} ${selectedCategory === 'abdelhalim' ? styles.active : ''}`}
                        onClick={() => setSelectedCategory( 'abdelhalim' )}
                    >
                        عبد الحليم حافظ
                    </button>
                    <button
                        className={`${styles.categoryBtn} ${selectedCategory === 'farid' ? styles.active : ''}`}
                        onClick={() => setSelectedCategory( 'farid' )}
                    >
                        فريد الأطرش
                    </button>
                    <button
                        className={`${styles.categoryBtn} ${selectedCategory === 'omKolthom' ? styles.active : ''}`}
                        onClick={() => setSelectedCategory( 'omKolthom' )}
                    >
                        أم كلثوم
                    </button>
                    <button
                        className={`${styles.categoryBtn} ${selectedCategory === 'mohamed' ? styles.active : ''}`}
                        onClick={() => setSelectedCategory( 'mohamed' )}
                    >
                        محمد عبد الوهاب
                    </button>
                </div>
            </div>

            <div className="row g-4">
                {filteredArticles.map( article => (
                    <div key={article.id} className="col-md-6">
                        <div className={`${styles.articleCard} p-4`}>
                            <img
                                src={article.image}
                                alt={article.title}
                                className={`${styles.articleImage} mb-3`}
                            />
                            <div className={styles.articleContent}>
                                <h3 className={styles.articleTitle}>{article.title}</h3>
                                <div className="d-flex justify-content-between mb-3">
                                    <span className={styles.articleAuthor}>{article.author}</span>
                                    <span className={styles.articleDate}>{article.date}</span>
                                </div>
                                <p className={styles.articleText}>{article.content}</p>
                                <button
                                    className={styles.readMoreBtn}
                                    onClick={() => handleReadMore( article )}
                                >
                                    اقرأ المزيد
                                </button>
                            </div>
                        </div>
                    </div>
                ) )}
            </div>

            <ArticleModal
                show={showModal}
                onHide={() => setShowModal( false )}
                article={selectedArticle}
            />
        </SharedSection>
    );
} 