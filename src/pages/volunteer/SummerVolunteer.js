import Flex from "../../components/Flex/Flex";
import Joining from '../../assets/volunteer/Joining.png';

const SummerVolunteer = () => {
    return (
        <div>
            <header className='w-full bg-white mt-16 py-12'>
                <Flex classes=''>
                    <div className='space-y-5 md:text-left md:w-1/2 lg:w-auto '>
                        <h1 className='leading-tight text-7xl'>Call for volunteers!</h1>
                            <p className='font-bold'>For August 22 - 29, 2022</p>
                            <p className='lg:w-3/4'>
                                Are you looking for a volunteer experience to crank up your resume?
                                Would you love to participate in the creation of a cultural youth
                                exchange? Are you not afraid of some challenging and insightful work?
                                Would you love to come join us in Italy this summer? Then volunteering
                                for Scambi is something made for you!
                            </p>

                            <p className='lg:w-3/4'>
                                Scambi 2022 will be the second ever edition of our festival and we are
                                working hard to make it even bigger and better than the first.
                                Workshops, “pinoli”, plays, exchanges, games, experiments, dialogues,
                                handcrafts and paintings: delve deeper into the universe of Scambi, and
                                you will never want to come back!
                            </p>

                            <p className='lg:w-3/4'>
                                For more info, have a look at the other pages of our website or feel
                                free to contact us!
                            </p>
                    </div>
                    <div className='w-1/2 lg:w-full 2xl:w-1/2'>
                        <img
                            src={Joining}
                            alt='Hand drawing of two people walking towards open door with roots coming out'
                        />
                    </div>
                </Flex>
            </header>
        </div>
    );
};

export default SummerVolunteer;