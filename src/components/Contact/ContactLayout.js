import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

export default function Contact() {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/sample@sample.gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="john smith"
              className={styles.formControl}
            />
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              className={styles.formControl}
            />
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="hello there"
              className={styles.formControl}
            />
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            ></input>
          </div>
        </form>
      </div>
    </section>
  )
}
