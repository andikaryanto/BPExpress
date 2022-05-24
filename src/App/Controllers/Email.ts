
import Controller from '../../Core/Controller/Controller';
import Transporter from '../../Core/Email/Transporter';

/**
 * @class Email
 */
class Email extends Controller {
    /**
     * @var {Transporter}
     */
    private transporter: Transporter;

    /**
     *
     * @param {Transporter} transporter
     */
    constructor(
        transporter: Transporter,
    ) {
        super();
        this.transporter = transporter;
    }

    /**
     * Send
     */
    async sendMail() {
        this.transporter.createTransport()
            .setFrom('andik.aryanto@gmail.com')
            .setTo('inklolly11@gmail.com')
            .setSubject('test email')
            .setText('test text')
            .sendMail();
    }
}
export default Email;
