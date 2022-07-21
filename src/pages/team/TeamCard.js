import React from 'react';
import './OurTeam.css';
import Card from '../../components/card';
import CardImage from '../../assets/team/aps-oltre 1.png';
import { Link } from 'react-router-dom';

const cardContent = (cardInfo) => {
	return (
		<div className='card-container'>
			<img src={CardImage} className='card-image' alt='team' />
			<h1 className='card-title'>{cardInfo.cardInfo.teamName}</h1>
			<div className='card-subtitle'>{cardInfo.cardInfo.teamFunction}</div>
			<div className='card-content'>{cardInfo.cardInfo.teamDescription}</div>
			<Link to='team' state={{ teamLink: `${cardInfo.cardInfo.linkToTeam}` }}>
				Meet the {cardInfo.cardInfo.teamName}
			</Link>
		</div>
	);
};

const TeamCard = (cardInfo) => {
	return <Card children={cardContent(cardInfo)} classes={'team-card'} />;
};

export default TeamCard;
