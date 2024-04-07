import catalan from './ca.json';
import spanish from './es.json';

const LANGUAGES = {
    CATALAN: 'ca',
    SPANISH: 'es'
}

export const getI18N = ({ currentLocale = 'es' }: { currentLocale: string | undefined }) => {
    return currentLocale === LANGUAGES.CATALAN ? catalan : spanish
}
