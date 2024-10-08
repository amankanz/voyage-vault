import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} by VoyageVault Inc.</p>
    </footer>
  );
}

export default Footer;
