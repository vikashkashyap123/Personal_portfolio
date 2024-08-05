import Amazon from "../../assets/Amazon.jpg";
import Blog from "../../assets/Blog.jpg";
import Harvest from "../../assets/freshHarvest.jpg";
import simon from "../../assets/simon.jpg";
import ProjectCard from '../../components/ProjectCard';
import styles from './ProjectsStyles.module.css';
function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={simon}
                    link="https://vikashkashyap123.github.io/Simon_says_game/"
                    h3="Simon Says Game"
                    p="Game App" />git
                <ProjectCard
                    src={Blog}
                    link="https://blog-site-6czi.onrender.com/"
                    h3="Vikash's Blog"
                    p="Blog App" />
                <ProjectCard
                    src={Harvest}
                    link="https://vikashkashyap123.github.io/Vegetable_fruit/"
                    h3="Freash Harvest"
                    p="Selling App" />
                <ProjectCard
                    src={Amazon}
                    link="https://vikashkashyap123.github.io/Amazon_clone/"
                    h3="Amazon"
                    p="Amazon App" />
            </div>
        </section>
    );
};

export default Projects;
