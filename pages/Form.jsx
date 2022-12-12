import React from 'react'
import style from '../styles/form.module.css'

const Form = () => {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <form action="https://formspree.io/f/meqdkjro" method="POST" className={style.form}>
          <p className={style.p}>Contact Us</p>
          <p className={style.ps}>Contact the <b>CHASICARE</b> Expert team by filling out the Form below and our professional team will reach you soon, <b>OR</b> call us at: <b>+91-97770 28888</b> for details.</p>
          <div className={style.p1}>
            <div>
              <input className={style.input} type="text" name="name" id="name" placeholder="Enter Your Name" required />
            </div>
            <div>
              <input className={style.input} type="email" name="email" id="email" placeholder="Enter Your Email" required />
            </div>
            <div>
              <input className={style.input} type="number" name="tel" id="tel" placeholder="Enter Your Phone Number" required />
            </div>
          </div>
          <div className={style.p2}>
            <div>
              <input className={style.input} type="text" name="subject" id="subject" placeholder="Enter Your Subject" required />
            </div>
            <div>
              <textarea className={style.textarea} name="message" id="message" placeholder="Write Your Message Here..." required defaultValue={""} />
            </div>
          </div>
          <div>
            <input type="submit" defaultValue="Contact Us" name="send" style={{width: '100px'}} required className={style.button} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form