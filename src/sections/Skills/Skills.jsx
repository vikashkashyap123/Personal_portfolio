import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../components/SkillList';
import { useTheme } from '../../components/ThemeContext';
import styles from './SkillsStyles.module.css';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="Node" />
                <SkillList src={checkMarkIcon} skill="C++" />
                <SkillList src={checkMarkIcon} skill="C" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
                <SkillList src={checkMarkIcon} skill="Express" />
                <SkillList src={checkMarkIcon} skill="MongoDb" />
                <SkillList src={checkMarkIcon} skill="SQL" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Redux" />
                <SkillList src={checkMarkIcon} skill="Git/GitHub" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
            </div>
        </section>
    );
}

export default Skills;