import CV from '../../assets/cv.pdf';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import heroImg from "../../assets/hero-img.png";
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import twitterLight from "../../assets/twitter-light.svg";
import { useTheme } from "../../components/ThemeContext";
import styles from './HeroStyles.module.css';


function Hero() {
    const {theme,toggleTheme}=useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero}
                    src={heroImg}
                    alt="Profile picture of Vikash" />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Vikash
                    <br />
                    kumar
                </h1>
                <h2>Full-stack Developer</h2>
                <span>
                    <a href="" target="_blank">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/vikashkashyap123" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/vikash-kumar-1459b6230" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    With a passion for developing modern web apps for commercial businesses.
                </p>
                <a href={CV} download>
                    <button className="hover" download>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Hero;