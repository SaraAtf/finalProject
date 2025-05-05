import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { SharedSection } from '../shared/SharedSection';
import styles from '../styles/contact.module.css';

export function Contact() {
    const [ formData, setFormData ] = useState( {
        email: '',
        message: ''
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log( 'Form submitted:', formData );
        // Reset form
        setFormData( { email: '', message: '' } );
    };

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setFormData( prev => ( {
            ...prev,
            [ name ]: value
        } ) );
    };

    const teamMembers = [
        {
            id: 1,
            name: 'ياسمين عاطف ابراهيم',
            role: 'مطور الواجهة الأمامية',
            image: '/images/team/8.jpg',
            quote: 'مطور متحمس للواجهة الأمامية مع خبرة في إنشاء تجارب مستخدم جذابة وسهلة الاستخدام.'
        },
        {
            id: 2,
            name: 'ايه عاطف جابر',
            role: 'مصمم واجهة المستخدم',
            image: '/images/team/5.jpg',
            quote: 'مصمم مبدع يركز على إنشاء واجهات مستخدم جميلة وعملية.'
        },
        {
            id: 3,
            name: 'احمد السيد ابو الخير',
            role: 'مدير المشروع',
            image: '/images/team/4.jpg',
            quote: 'مدير مشروع متمرس مع خبرة في قيادة فرق تطوير ناجحة.'
        },
        {
            id: 4,
            name: 'يوسف هشام عبد المعطى',
            role: 'مدير المشروع',
            image: '/images/team/3.jpg',
            quote: 'مدير مشروع متمرس مع خبرة في قيادة فرق تطوير ناجحة.'
        },
        {
            id: 5,
            name: 'يوسف محمد عبد العاطى',
            role: 'مدير المشروع',
            image: '/images/team/2.jpg',
            quote: 'مدير مشروع متمرس مع خبرة في قيادة فرق تطوير ناجحة.'
        },
        {
            id: 6,
            name: 'ايمان احمد عبد الله',
            role: 'مدير المشروع',
            image: '/images/team/6.jpg',
            quote: 'مدير مشروع متمرس مع خبرة في قيادة فرق تطوير ناجحة.'
        },
        {
            id: 7,
            name: 'مصطفى مجدى نصير ',
            role: 'مدير المشروع',
            image: '/images/team/1.jpg',
            quote: 'مدير مشروع متمرس مع خبرة في قيادة فرق تطوير ناجحة.'
        },
        {
            id: 8,
            name: 'كامل السيد كامل',
            role: 'مدير المشروع',
            image: '/images/team/7.jpg',
            quote: 'مدير مشروع متمرس مع خبرة في قيادة فرق تطوير ناجحة.'
        },
        {
            id: 9,
            name: 'عمرو عماد محمد ',
            role: 'مدير المشروع',
            image: '/images/team/9.jpg',
            quote: 'مدير مشروع متمرس مع خبرة في قيادة فرق تطوير ناجحة.'
        },
        {
            id: 10,
            name: 'احمد ياسر السيد',
            role: 'مدير المشروع',
            image: '/images/team/sara.jpg',
            quote: 'مدير مشروع متمرس مع خبرة في قيادة فرق تطوير ناجحة.'
        },
    ];

    return (
        <SharedSection title="اتصل بنا" className="contact-page">
            <Container>
                <Row className="g-5">
                    {/* Team Members Section */}
                    <Col md={12}>
                        <div className={styles.teamSection}>
                            <h3 className={styles.sectionTitle}>فريق العمل</h3>
                            <div className={styles.teamMembers}>
                                <div className="row">
                                    {teamMembers.map( member => (
                                        <Col md={6} key={member.id}>
                                            <div key={member.id} className={styles.teamMember}>
                                                <div className={styles.memberImage}>
                                                    <img src={member.image} alt={member.name} />
                                                </div>
                                                <div className={styles.memberInfo}>
                                                    <h4>{member.name}</h4>
                                                    <p className={styles.role}>{member.role}</p>
                                                    <p className={styles.quote}>{member.quote}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ) )}
                                </div>

                            </div>
                        </div>
                    </Col>
                    {/* Contact Form Section */}
                    <Col md={12}>
                        <div className={styles.contactForm}>
                            <h3 className={styles.sectionTitle}>أرسل لنا رسالة</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label>البريد الإلكتروني</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="أدخل بريدك الإلكتروني"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>الرسالة</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="اكتب رسالتك هنا..."
                                    />
                                </Form.Group>
                                <Button type="submit" className={styles.submitButton}>
                                    إرسال الرسالة
                                </Button>
                            </Form>
                        </div>
                    </Col>


                </Row>
            </Container>
        </SharedSection>
    );
} 