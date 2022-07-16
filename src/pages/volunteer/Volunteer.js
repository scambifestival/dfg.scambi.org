import Button from "../../components/button";
import Card from "../../components/card";

const volunteerOptions = [
    {
        title: ["Summer Volunteer", <br/>, "(Aug 22-29, 2022)"],
        description: "Are you looking for a volunteer experience to crank up your resume? Would you love to participate in the creation of a cultural youth exchange? Are you not afraid of some challenging and insightful work? Would you love to come join us in Italy this summer? Then volunteering for Scambi is something made for you!",
        button: "Learn more",
        buttonLink: "summer"
    },
    {
        title: ["Join the Scambi Team", <br/>, "(Year-round)"],
        description: "We are looking for new energies and people who are ready to take on a challenge, who share the founding values of our Festival and want to contribute to its realisation. If you are under 30 and have time to invest in an ever-developing project… welcome! You have found the place for you.",
        button: "Check for open positions",
        buttonLink: ""
    }
];

const Volunteer = () => {
    return (
        <div className='space-y-14 mx-20 my-10 lg:mx-10'>
            <h1 className='leading-tight'>Volunteer With Us</h1>
            <div className='flex flex-col justify-center space-y-7 md:space-y-0 md:space-x-10 md:flex-row lg:space-x-20'>
                {volunteerOptions.map((option, index) =>
                (<Card classes='flex flex-col justify-between md:w-1/2 lg:w-2/5 2xl:w-1/4 bg-white px-5 py-8 lg:p-10 space-y-10' key={`volunteer-option-${index}`}>
                    <h4 className='font-["Poppins"] font-semibold'>
                        {option.title.map(item => item)}
                    </h4>
                    <p>
                        {option.description}
                    </p>
                    <div>
                        <Button styleType='action' href={option.buttonLink}>
                            {option.button}
                        </Button>
                    </div>
                </Card>)
                )}
            </div>
        </div>
    );
};

export default Volunteer;