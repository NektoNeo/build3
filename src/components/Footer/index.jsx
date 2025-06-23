import styles from "./Footer.module.scss";
import logo from '../../images/svg/logo.svg'
import policy from '../../files/policy.pdf';
import Button from "../Button";
import { goToLink } from "../../helpers/helpers";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerColumn}>
      <Button
        className={styles.headerButton}
        onClick={() => {
          goToLink("https://t.me/VAPC_Manager_bot");
        }}
      >
        Связь с менеджером
      </Button>
      <div className={styles.footerPhone}>
        С 11:00 - 21:00 ЕЖЕДНЕВНО
      </div>
      </div>
      <div className={styles.footerColumn}>
        <img src={logo} alt="логотип" className={styles.footerLogo} />
      </div>
      <div className={styles.footerColumn}>
         <p className={styles.footerData}>
          г. Москва
        </p>
        <a className={styles.footerDocument} download href={policy}>Политика конфиденциальности</a>
      </div>
    </div>
  );
};

export default Footer;
