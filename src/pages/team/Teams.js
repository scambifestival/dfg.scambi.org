import './OurTeam.css';
import teamList from './teamInfoList.json';
import TeamCard from './TeamCard';

const Teams = (props) => {
	return (
		<div className='teams-background grid md:grid-cols-3 px-20 py-10'>
			{teamList.map((teamInfo, i) => (
				<TeamCard cardInfo={teamInfo} key={teamInfo.id} />
			))}
		</div>
	);
};

export default Teams;
