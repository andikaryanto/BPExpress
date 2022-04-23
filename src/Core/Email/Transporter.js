import { createTransport, Transporter as Transport } from 'nodemailer';
import config from '../../../config';

/**
 * @class Transporter
 */
class Transporter {

    mailData = {};

    /**
     * @var {Transport}
     */
    transporter = null;

    /**
     * 
     * @returns 
     */
    createTransport(){
        this.transporter = createTransport({
            port: process.env.MAILER_PORT,
            host: process.env.MAILER_HOST,
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
    setFrom(emailAddress){
        this.mailData = {...this.mailData, from: emailAddress};
        return this;
    }

    /**
     * 
     * @param {string} emailAddress 
     * @return {Transporter}
     */
    setTo(emailAddress){
        this.mailData = {...this.mailData, to: emailAddress};
        return this;
    }

    /**
     * 
     * @param {string} subject 
     * @return {Transporter}
     */
    setSubject(subject){
        this.mailData = {...this.mailData, subject: subject};
        return this;
    }

    /**
     * 
     * @param {string} text 
     * @return {Transporter}
     */
    setText(text){
        this.mailData = {...this.mailData, text: text};
        return this;
    }

    /**
     * 
     * @param {string} html 
     * @return {Transporter}
     */
    setHtml(html){
        this.mailData = {...this.mailData, html: html};
        return this;
    }

    /**
     * Send the email
     */
    sendMail(){
        this.transporter.sendMail(this.mailData, (err, info) => {
            if(err)
                console.log(err)
            else
                console.log(info);
        });
    }

}

export default Transporter;