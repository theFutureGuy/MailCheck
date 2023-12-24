import React from "react";

function Footer({ styles }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentDiv}>
        <b className={styles.pricingPlans}>
          Contribute on GitHub
        </b>
        <a
          className={styles.buttonPrimaryWithIcon}
          href="https://github.com/theFutureGuy/MailCheck"
        >
          <div className={styles.frameDiv}>
            <b className={styles.buttonName}>Contribute now</b>
            <div className={styles.iconDiv}>
              <img
                className={styles.iconOutlinearrowRight}
                alt=""
                src="../iconoutlinearrowright.svg"
              />
            </div>
          </div>
        </a>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.widgetsDiv}>
        <div className={styles.widget0Div}>
          <b className={styles.hELPMENUB}>About MailCheck</b>
          <div className={styles.weAreHereToHelpYouSuceed}>
            We are here to help you suceed in your digital journey by helping
            you in your everyday journey. We help you to find out if the
            receiver has read the email or not.
          </div>
          <div className={styles.socialDiv}>
            <a
              className={styles.a}
              href="#"
              target="_blank"
            >
              <img
                className={styles.logoTwitter2Icon}
                alt=""
                src="../logotwitter-2.svg"
              />
            </a>
            <a
              className={styles.a1}
              href="#"
              target="_blank"
            >
              <img
                className={styles.logoFbSimple2Icon}
                alt=""
                src="../logofbsimple-2.svg"
              />
            </a>
            <a
              className={styles.a2}
              href="#"
              target="_blank"
            >
              <img
                className={styles.logoInstagram1Icon}
                alt=""
                src="../logoinstagram-1.svg"
              />
            </a>
            <a className={styles.a3} href="https://github.com/theFutureGuy">
              <img
                className={styles.logoGithub1Icon}
                alt=""
                src="../logogithub-1.svg"
              />
            </a>
          </div>
        </div>
        <div className={styles.widget1Div}>
          <b className={styles.hELPMENUB1}>Me</b>
          <a
            className={styles.about}
            href="https://mypage-ashiq.vercel.app/"
          >
            About
          </a>
          <a className={styles.career}>Career</a>
          <a className={styles.worksA}>Works</a>
          <a className={styles.features}>Features</a>
        </div>
        <div className={styles.widget2Div}>
          <b className={styles.hELPMENUB}>Help</b>
          <div className={styles.aboutFeaturesWorks}>
            <p className={styles.customerSupport}>
              <span>Customer Support</span>
            </p>
            <p className={styles.serviceDetails}>
              <span>Service Details</span>
            </p>
            <p className={styles.customerSupport}>
              <span>{`Terms & Conditions`}</span>
            </p>
            <p className={styles.privacyPolicy}>
              <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
