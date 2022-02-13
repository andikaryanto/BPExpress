import dotenv from 'dotenv';
import Session from '../Http/Session';
import FileLoader from '../Libraries/FileLoader';
dotenv.config();

const Language = (string) => {
    const session = Session.getInstance();
    const appLanguage = session.userlanguage == null ? session.language : session.userlanguage;

    const file = string.split('.');
    const json = new FileLoader(`src/App/Language/${appLanguage}/${file[0]}.json`).getData();

    return json[file[1]];
};

export default Language;
