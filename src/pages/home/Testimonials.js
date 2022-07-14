import React from 'react';
import './Testimonials.css';
import UserTestimonialsPicture from '../../assets/home/UserTestimonial.png';
import Card from '../../components/card';

const testimonials = [
    {
        name: "Anna",
        quote: "To me, Scambi is where I can be free and be hopeful for the future; in these confusing and uncertain times we all need to go back to focusing on what living together really means.",
        image: UserTestimonialsPicture
    },
    {
        name: "Luce",
        quote: "I decided to join Scambi because I saw what last year the team was able to create thanks to everybodys dedication and commitment, and I would d love to help to recreate the same magic for the next edition of the festival.",
        image: UserTestimonialsPicture
    },
    {
        name: "Luisa",
        quote: "I like Scambi because it brought together young people from all over Italy with the goal of inventing something new, of combining music, dancing and a lot of curiosity.",
        image: UserTestimonialsPicture
    }
];

const Testimonials = () => {
    return (
        <div className="outer-testimonial-container">
            <h2>An experience people love to talk about</h2>
            <div className="testimonial-container">
                {testimonials.map(testimonial => (
                    <Card classes="testimonial">
                        <img src={testimonial.image} className="testimonial-image" />
                        <div className="testimonial-name">{testimonial.name}</div>
                        <p>{`"${testimonial.quote}"`}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;