import { useState } from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
import video from '../../assets/Sample.mp4'; // Import the video correctly

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);  // State to manage video visibility

  // Function to handle play icon click
  const handlePlayClick = () => {
    setIsPlaying(true); // Show video when play icon is clicked
  };

  // Function to hide the video once it ends
  const handleVideoEnd = () => {
    setIsPlaying(false);  // Hide video after it ends
  };

  return (
    <div className="about">
      <div className="about-left">
        {isPlaying ? (
          <video
            className="about-video"
            width="100%"
            controls
            onEnded={handleVideoEnd} // When video ends, hide it
          >
            <source src={video} type="video/mp4" /> {/* Correct the source */}
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={about_img} alt="About University" className="about-img" />
        )}
        {!isPlaying && (
          <img
            src={play_icon}
            alt="Play Video"
            className="play-icon"
            onClick={handlePlayClick} // Show video when play icon is clicked
          />
        )}
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow is Leaders Today</h2>
        <p> Embark on a transformative educational journey with our university is comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  );
};

export default About;
