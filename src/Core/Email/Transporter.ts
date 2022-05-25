import {createTransport, Transporter as Transport} from 'nodemailer';
import config from '../../../config';

/**
 * @class Transporter
 */
class Transporter {
    mailData = {};

    /**
     * @var {Transport}
     */
    protected transporter: any;

    /**
     *
     * @return {Transporter}
     */
    createTransport() {
        this.transporter = createTransport({
            port: config.transportPort,
            host: config.transportHost,
            auth: {
                user: config.transportUsername,
                pass: config.transportPassword,
            },
            secure: false,
        });
        return this;
    }

    /**
     *
     * @param {string} emailAddress
     * @return {Transporter}
     */
    setFrom(emailAddress: string) {
        this.mailData = {...this.mailData, from: emailAddress};
        return this;
    }

    /**
     *
     * @param {string} emailAddress
     * @return {Transporter}
     */
    setTo(emailAddress: string) {
        this.mailData = {...this.mailData, to: emailAddress};
        return this;
    }

    /**
     *
     * @param {string} subject
     * @return {Transporter}
     */
    setSubject(subject: string) {
        this.mailData = {...this.mailData, subject: subject};
        return this;
    }

    /**
     *
     * @param {string} text
     * @return {Transporter}
     */
    setText(text: string) {
        this.mailData = {...this.mailData, text: text};
        return this;
    }

    /**
     *
     * @param {string} html
     * @return {Transporter}
     */
    setHtml(html: string) {
        this.mailData = {...this.mailData, html: html};
        return this;
    }

    /**
     * Send the email
     */
    sendMail() {
        this.transporter.sendMail(this.mailData, (err: any, info: any) => {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    }
}

export default Transporter;
