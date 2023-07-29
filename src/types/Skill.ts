import { IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * Skill type
 */
export interface SkillType {
    id: string;
    name: string;
    link?: string;
    icon?: IconProp;
    hexColor?: string;
    type: SKILLCATEGORY;
}

/**
 * Skill type enum
 */
export enum SKILLCATEGORY {
    LANGUAGE = 'LANGUAGE',
    DATABASE_MANAGEMENT_SYSTEM = 'DATABASE MANAGEMENT SYSTEM',
    TOOLS_AND_FRAMEWORKS = 'TOOLS AND FRAMEWORKS',
    CLOUD_COMPUTING = 'CLOUD COMPUTING',
    OPERATING_SYSTEMS = 'OPERATING SYSTEMS',
    SOFT_SKILLS = 'SOFT SKILLS',
    OTHERS = 'OTHERS',
}
