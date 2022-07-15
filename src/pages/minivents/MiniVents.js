import Pinoli from '../../assets/minievent/Pinoli.png';
import Flex from '../../components/Flex/Flex';
import EventPlaceholder from '../../assets/minievent/EventPlaceholder.jpg';

const MiniEvents = () => {
        
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
                <img src={EventPlaceholder} className='mx-auto mt-10 w-1/2 rounded-2xl' />
            </div>
            <div className='px-20 my-10'>
                <h2 className='pt-5'>Upcoming Pinolis</h2>
                {/* <Map/> */}
            </div>
        </div>
    );
}

export default MiniEvents;