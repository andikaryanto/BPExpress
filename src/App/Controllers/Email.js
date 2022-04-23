
import {transportPassword} from '../../../config.js';
import Controller from '../../Core/Controller/Controller.js';
import Transporter from '../../Core/Email/Transporter.js';

/**
 * @class Email
 */
class Email extends Controller {
    /**
     * @var {Transporter}
     */
    #_transporter;

    /**
     *
     * @param {Transporter} transporter
     */
    constructor(
        transporter,
    ) {
        super();
        this.#_transporter = transporter;
    }

    /**
     * Send
     */
    async sendMail() {
        this.#_transporter.createTransport()
            .setFrom('andik.aryanto@gmail.com')
            .setTo('inklolly11@gmail.com')
            .setSubject('test email')
            .setText('test text')
            .sendMail();
    }
}
export default Email;
