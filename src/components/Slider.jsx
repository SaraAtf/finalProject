import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from '../styles/slider.module.css'
import img1 from '../assets/images/slider/2.jpg'
import img2 from '../assets/images/slider/3.jpg'
import img3 from '../assets/images/slider/8.jpg'
export function Slider() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className={`${styled.sliderImg} d-block w-100`}
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`${styled.sliderImg} d-block w-100`}
                    src={img2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`${styled.sliderImg} d-block w-100`}
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
