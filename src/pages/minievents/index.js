import Pinoli from '../../assets/minievent/Pinoli.png';
import Flex from '../../components/Flex/Flex';
import Card from '../../components/card';
import EventPlaceholder from '../../assets/minievent/EventPlaceholder.jpg';
import Map from '../../components/map';
import SupportUs from '../../components/supportus';
import {
	rec1,
	rec2,
	rec3,
	rec4,
	rec5,
	rec6,
	rec7,
	rec8,
	rec9,
} from '../../assets/home/highlight/index';


const dummyData = {
    title: "Event name",
    // image: {EventPlaceholder},
    organization: "Organization",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam lorem nec amet sit morbi tortor ullamcorper quis.",
    link: "#"
};

const MiniEvents = () => {
    const populate = () => {
        const events = [];

        for (let i = 0; i < 9; i++) {
            events.push(
                <Card classes='bg-white rounded-xl text-left px-6 py-7 space-y-4 shadow-2xl h-fit mx-7 my-5 max-w-full md:max-w-xs lg:max-w-sm'>
                    <img
                        src={EventPlaceholder}
                        className='rounded-xl object-cover object-right w-full h-2/5'
                        alt='Woman reading from phone with microphone while another woman signs what is being read'
                    />
                    <h4 className='font-["Poppins"] font-semibold'>{dummyData.title}</h4>
                    <h5 className='font-["Poppins"] font-semibold'>{dummyData.organization}</h5>
                    <p>{dummyData.description}</p>
                    <p>
                        <a className='text-purple-650' href={`/${dummyData.link}`}>
                            Read more <i className='fa fa-long-arrow-right' />
                        </a>
                    </p>
                </Card>
            );
        }

        return events;
    };

    return (
        <div>
            <header>
                <Flex classes='md:flex-col xl:flex-row py-20'>
                    <div className='text-center lg:text-left'>
                        <h1>Pinoli</h1>
                        <p className='xl:w-4/5'>
                            Pinoli are not just the sweet seeds that make pesto so
                            delicious; when it comes to Scambi, they are events
                            where you can meet new people: book presentations,
                            exhibitions of innovative technological solutions,
                            exchanges of secondhand clothing, and much more.
                        </p>
                    </div>
                    <div className='w-3/5 2xl:w-3/5'>
                        <img src={Pinoli} alt='Two hand-drawn blue bowls full of seeds with a hand-drawn purplish acorn behind it' />
                    </div>
                </Flex>
            </header>
            <div className='w-full bg-white py-10'>
                <h2>What is a Pinolo?</h2>
                <p>A Pinolo is a collateral event that comes to life during Scambi festival.</p>
                <div className='mt-10 flex justify-center'>
					<div className='flex flex-col space-y-5 mr-5'>
						<div className='flex space-x-5'>
							<img
								src={rec1}
								className='rounded-2xl shadow-md w-[229px] h-[245px]'
								alt=''
							/>
							<img
								src={rec2}
								className='rounded-2xl shadow-md w-[222px] h-[247px]'
								alt=''
							/>
						</div>
						<img
							src={rec3}
							className='rounded-2xl shadow-md w-[480px] h-[251px]'
							alt=''
						/>
					</div>
					<div className='space-y-5'>
						<img
							src={rec4}
							className='rounded-2xl shadow-md w-[220px] h-[145px]'
							alt=''
						/>
						<img
							src={rec5}
							className='rounded-2xl shadow-md w-[220px] h-[353px]'
							alt=''
						/>
					</div>
					<div className='space-y-5 ml-5'>
						<img
							src={rec6}
							className='rounded-2xl shadow-md mb-5 w-[330px] h-[290px]'
							alt=''
						/>
						<img
							src={rec7}
							className='rounded-2xl shadow-md w-[330px] h-[208px]'
							alt=''
						/>
					</div>
					<div className='space-y-5 ml-5'>
						<img
							src={rec8}
							className='rounded-2xl shadow-md mb-5 w-[202px] h-[186px]'
							alt=''
						/>
						<img
							src={rec9}
							className='rounded-2xl shadow-md w-[202px] h-[311px]'
							alt=''
						/>
					</div>
				</div>
            </div>
            <div className='px-20 my-10'>
                <h2 className='pt-5'>Upcoming Pinolis</h2>
                <Map/>
            </div>

            <div className='flex flex-wrap justify-center mx-10 lg:mx-20'>
                {populate()}
            </div>

            <div className='w-full bg-white py-10 my-10 px-7'>
                <SupportUs/>
            </div>

        </div>
    );
}

export default MiniEvents;