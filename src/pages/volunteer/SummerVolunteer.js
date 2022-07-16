import Flex from "../../components/Flex/Flex";
import Card from "../../components/card";
import Joining from '../../assets/volunteer/Joining.png';
import Snail from '../../assets/volunteer/Snail.png';
import Button from "../../components/button";

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
            <div className='space-y-10 mt-20 mx-7'>
                <h2>What are we looking for?</h2>
                <Card classes='bg-white mx-auto w-4/5 p-10 2xl:p-16'>
                    <div className='flex flex-col items-center lg:flex-row lg:items-start lg:space-x-8'>
                        <div className='text-left space-y-5 lg:w-full'>
                            <h5 className='font-semibold text-xl'>Be a volunteer!</h5>
                            <p>
                                We are looking for motivated, creative, hard-working and open-minded volunteers
                                who could contribute to making Scambi more diverse, international and fun!
                                You will become part of the international volunteer team and are expected to
                                be available in Sanremo between 22-29 of August. The festival itself will be
                                held the 25-28 of August in the historic city centre of Sanremo. In the days
                                leading up to the festival, you will help get the city ready to receive its
                                visitors. During the festival, you will be working j maximum 6 hours per day
                                on getting everything to run as smoothly as possible. Don’t worry, there will
                                be enough free time to participate yourself!
                            </p>
                            <p>
                                <span className='font-semibold'>Here are some additional requirements for our volunteers:</span>
                                <ul className='list-disc list-inside'>
                                    <li>You have to be available for a few online preparatory meetings. Dates will be discussed with the whole team.</li>
                                    <li>You feel connected to the philosophy behind Scambi and are open to participate in our intercultural youth exchange!</li>
                                    <li>We would love for you to contribute creatively as well, so if you have any special talents, inspirations or experience, that will be a bonus.</li>
                                    <li>Knowledge of English is mandatory. Italian is recommended, but not required.</li>
                                </ul>
                            </p>
                            <p>
                                <span className='font-semibold'>What we offer?</span>
                                <br /><br />
                                You will not leave Scambi empty handed! On top of getting an amazing summer experience in beautiful Italy, we offer the following:
                                <br /><br />
                                <ul className='list-disc list-inside'>
                                    <li>Accommodation during your volunteer week in a host family in Sanremo</li>
                                    <li>Food and (public) transport in Sanremo will also be covered by our organisation</li>
                                    <li>However, travel costs from and to Sanremo will have to be covered by yourself</li>
                                    <li>Fun activities in the days leading up to the festival (don’t forget Sanremo has sunny beaches and great focaccia!)</li>
                                    <li>A Scambi certificate testifying to your amazing contribution (nice for your LinkedIn)</li>
                                </ul>
                            </p>

                            <div className='flex flex-col items-start space-y-5 pt-4 md:flex-row md:items-center md:space-x-5 md:space-y-0'>
                                <Button>Apply now</Button>
                                <Button styleType="secondary">Learn about Scambi</Button>
                            </div>
                        </div>
                        <div className='w-2/5 mt-16 lg:self-start lg:w-1/2 lg:mt-5 xl:w-1/3 2xl:w-1/4'>
                            <img
                                src={Snail}
                                alt='Hand drawn blue snail shell'
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SummerVolunteer;