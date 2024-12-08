import About from "./_sections/About";
import Chatbot from "./_sections/Chatbot";
import Community from "./_sections/Community";
import CTA from "./_sections/CTA";
import Hero from "./_sections/Hero";
import PopularMentors from "./_sections/PopularMentors";
import Reviews from "./_sections/Reviews";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <PopularMentors />
            <CTA
                body="Share your expertise and inspire others by becoming a mentor on Mentoro, where your guidance can shape the future of eager learners."
                link="Become A Mentor"
            />
            <Community />
            <CTA
                body='"Request personalized guidance tailored to your specific task or field, and our mentors, individually or in groups, will accept and provide the support you need."'
                link="Request"
            />
            <Reviews />
            <Chatbot />
        </>
    );
};

export default Home;
