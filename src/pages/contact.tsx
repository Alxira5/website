import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

export default function Page() {
  return (
    <Layout title="Contact" description="Contact Form">
      <Head>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>
      <main class="container container--fluid margin-vert--lg">
        <div class="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
          <div class="col">
            <article>
              <h1>Contact</h1>
              <p>If you want to ask me a question or just want to talk with me, you can fill out the following form:</p>
              <form
                action="https://formspree.io/f/mleynjle"
                method="POST"
              >
              <label className={styles.formLabel}>
                Your email:
                <input className={styles.formInput} type="email" name="email" required placeholder="you@domain.com" />
              </label>
              <label className={styles.formLabel}>
                Your message:
                <textarea className={styles.formInput} name="message" required placeholder="Enter your message here…"></textarea>
              </label>
              <div className="g-recaptcha" data-sitekey="6LdNrfcoAAAAAJE4exGLs8_exPkf6nkntVzdYNvq"></div>
              <button className={clsx('button button--primary', styles.buttons)} type="submit">Send</button>
              </form>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
}
