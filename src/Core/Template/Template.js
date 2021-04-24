import CsrfToken from "./CsrfToken"

const Template = () => {
     let csrfToken = CsrfToken();
     return {
          csrfToken
     }
} 

export default Template;