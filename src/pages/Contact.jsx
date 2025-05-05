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
            role: 'المشرف العام',
            image: '/images/team/8.jpg',
            quote: 'كل مشروع حلو ...وراه فرقه بتعزف باتقان'
        },
        {
            id: 2,
            name: 'ايه عاطف جابر',
            role: 'الباحث',
            image: '/images/team/5.jpg',
            quote: 'الغنا مش بس صوت ده احساس يوصل للقلب من غير ما يستاذن '
        },
        {
            id: 3,
            name: 'احمد السيد ابو الخير',
            role: 'المصور ',
            image: '/images/team/4.jpg',
            quote: 'مش كل صوت بيتسمع ...بس بس كل تعب بيبان '
        },
        {
            id: 4,
            name: 'يوسف هشام عبد المعطى',
            role: 'المنسق',
            image: '/images/team/3.jpg',
            quote: 'زى ما كل مطرب وراه فرقه ..كل فكره وراها ابطال '
        },
        {
            id: 5,
            name: 'يوسف محمد عبد العاطى',
            role: 'المونتير',
            image: '/images/team/2.jpg',
            quote: 'النجاح مش صوت عالى النجاح هو نغمه تثبت فى الودن '
        },
        {
            id: 6,
            name: 'ايمان احمد عبد الله',
            role: 'مسؤول السوشيال ',
            image: '/images/team/6.jpg',
            quote: 'الموسيقى بتبدا من القلب بس بتكمل بالعقول اللى ورا الكواليس '
        },
        {
            id: 7,
            name: 'مصطفى مجدى نصير ',
            role: 'المصمم',
            image: '/images/team/1.jpg',
            quote: 'الشغل لما يتعمل بحب يبقى طرب '
        },
        {
            id: 8,
            name: 'كامل السيد كامل',
            role: 'الراوى',
            image: '/images/team/7.jpg',
            quote: 'احنا مش بس فريق احنا كورال بيلحن حلم '
        },
        {
            id: 9,
            name: 'عمرو عماد محمد ',
            role: 'التقنى (الداعم الفنى)',
            image: '/images/team/9.jpg',
            quote: 'اللى بيحب الفن بيشتغل كانه بيغنى '
        },
        {
            id: 10,
            name: 'احمد ياسر السيد',
            role: 'كاتب المحتوى ',
            image: '/images/team/10.jpg',
            quote: 'الكلمه الحلوه زى اللحن ...بتعيش'
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