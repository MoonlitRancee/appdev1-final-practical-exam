
import styles from "./Login.module.css";
import blossomFlower from "./assets/blossom-flower.svg";
import googleLogo from "./assets/icons-google-logo.svg";
import appleLogo from "./assets/icons-apple-logo.svg";

function Login() {
  return (
    <main className={styles.signupPage}>
      <section className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Get Started Now</h1>

          <form className={styles.signupForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <label className={styles.terms}>
              <input type="checkbox" name="terms" />
              <span>I agree to the terms &amp; policy</span>
            </label>

            <button type="submit" className={styles.signupButton}>
              Signup
            </button>
          </form>

          <div className={styles.divider}>
            <span></span>
            <p>Or</p>
            <span></span>
          </div>

          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialButton}>
              <img src={googleLogo} alt="" />
              <span>Sign in with Google</span>
            </button>

            <button type="button" className={styles.socialButton}>
              <img src={appleLogo} alt="" />
              <span>Sign in with Apple</span>
            </button>
          </div>

          <p className={styles.signInText}>
            Have an account? <a href="#">Sign In</a>
          </p>
        </div>
      </section>

      <section className={styles.rightSection}>
        <img
          src={blossomFlower}
          alt="Blossom flower illustration"
          className={styles.blossomImage}
        />
      </section>
    </main>
  );
}

export default Login;
