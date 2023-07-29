import './Skill.css';
import { FaArrowRight } from 'react-icons/fa';
import { skills } from '../../data/Data';
import { SKILLCATEGORY, SkillType } from '../../types/Skill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Skill = () => {
    return (
        <div>
            <pre className="command">
                <FaArrowRight
                    size=".6rem"
                    className="commandArrow"
                ></FaArrowRight>{' '}
                <span className="tilde">~</span> whois -u bereket --skills
            </pre>
            <div className="outputWrapper">
                <div className="skillContainer">
                    <ul className="skillListColumn">
                        <p className="skillTitle">Languages</p>
                        <li className="skillListRow">
                            {skills.map((skill: SkillType) => (
                                <>
                                    {skill.type === SKILLCATEGORY.LANGUAGE && (
                                        <SkillComponent
                                            key={skill.name}
                                            {...skill}
                                        ></SkillComponent>
                                    )}
                                </>
                            ))}
                        </li>
                    </ul>
                    <ul className="skillListColumn">
                        <p className="skillTitle">DBMS</p>
                        <li className="skillListRow">
                            {skills.map((skill: SkillType) => (
                                <>
                                    {skill.type ===
                                        SKILLCATEGORY.DATABASE_MANAGEMENT_SYSTEM && (
                                        <SkillComponent
                                            key={skill.name}
                                            {...skill}
                                        ></SkillComponent>
                                    )}
                                </>
                            ))}
                        </li>
                    </ul>
                    <ul className="skillListColumn">
                        <p className="skillTitle">Tools & Frameworks</p>
                        <li className="skillListRow">
                            {skills.map((skill: SkillType) => (
                                <>
                                    {skill.type ===
                                        SKILLCATEGORY.TOOLS_AND_FRAMEWORKS && (
                                        <SkillComponent
                                            key={skill.name}
                                            {...skill}
                                        ></SkillComponent>
                                    )}
                                </>
                            ))}
                        </li>
                    </ul>
                    <ul className="skillListColumn">
                        <p className="skillTitle">OS</p>
                        <li className="skillListRow">
                            {skills.map((skill: SkillType) => (
                                <>
                                    {skill.type ===
                                        SKILLCATEGORY.OPERATING_SYSTEMS && (
                                        <SkillComponent
                                            key={skill.name}
                                            {...skill}
                                        ></SkillComponent>
                                    )}
                                </>
                            ))}
                        </li>
                    </ul>
                    <ul className="skillListColumn">
                        <p className="skillTitle">Cloud Computing</p>
                        <li className="skillListRow">
                            {skills.map((skill: SkillType) => (
                                <>
                                    {skill.type ===
                                        SKILLCATEGORY.CLOUD_COMPUTING && (
                                        <SkillComponent
                                            key={skill.name}
                                            {...skill}
                                        ></SkillComponent>
                                    )}
                                </>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

/**
 * SkillComponent is a component that displays a skill
 *
 * @param props the skill data to be displayed
 * @returns a div containing the skill data
 */
const SkillComponent = (props: SkillType) => {
    return (
        <div className="skillWrapper">
            <div className="skillTextWrapper">
                <a
                    href={props.link}
                    className="skillLink"
                    target="_blank"
                    rel="noreferrer"
                >
                    {props.icon && (
                        <FontAwesomeIcon
                            icon={props.icon as IconProp}
                            className="skillIcon"
                            color={props.hexColor}
                        ></FontAwesomeIcon>
                    )}
                    <p className="skillName">{props.name}</p>
                </a>
            </div>
        </div>
    );
};

export default Skill;
