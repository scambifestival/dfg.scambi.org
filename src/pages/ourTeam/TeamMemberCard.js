import React from 'react';
import './OurTeam.css';
import Card from '../../components/card';
import CardMemberImage from './CardMemberImage.png';

const cardContent = (member) => {
	console.log(member);
	return (
		<div className='card-container'>
			<img src={CardMemberImage} className='card-image' alt='team-member' />
			<br />
			<h1 className='card-title'>{member.memberInfo.name}</h1>
			<br />
			<div className='card-subtitle'>{member.memberInfo.position}</div>
			<br />
			<div className='card-content'>{member.memberInfo.bio}</div>
		</div>
	);
};

const TeamMemberCard = (memberInfo) => {
	return (
		<Card
			children={cardContent(memberInfo)}
			classes={'team-card white-background'}
		/>
	);
};

export default TeamMemberCard;
