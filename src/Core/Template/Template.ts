import CsrfToken from './CsrfToken';
import Language from './Language';

const Template = () => {
    const csrfToken = CsrfToken();
    const lang = Language;
    return {
        csrfToken,
        lang,
    };
};

export default Template;
