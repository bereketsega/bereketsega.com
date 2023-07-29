import { IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * Contact type
 */
export interface ContactType {
    id: string;
    name: string;
    link: string;
    icon: IconProp;
    hexColor: string;
}
