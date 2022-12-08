import React from 'react'
import style from '../styles/form.module.css'

const Form = () => {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <form action="https://formspree.io/f/meqdkjro" method="POST" className={style.form}>
          <p className={style.p}>Contact Us</p>
          <div className={style.p1}>
            <div>
              <input className={style.input} type="text" name="name" id={style.id} placeholder="Enter Your Name" required />
            </div>
            <div>
              <input className={style.input} type="email" name="email" id="email" placeholder="Enter Your Email" required />
            </div>
            <div>
              <input className={style.input} type="tel" name="tel" id={style.tel} placeholder="Enter Your Phone Number" required />
            </div>
          </div>
          <div className="p2">
            <div>
              <input className={style.input} type="text" name="subject" id={style.subject} placeholder="Enter Your Subject" required />
            </div>
            <div>
              <textarea className={style.textarea} name="message" id={style.message} placeholder="Write Your Message Here..." required defaultValue={""} />
            </div>
          </div>
          <div>
            <input className={style.input} type="submit" defaultValue="Contact Us" name="send" style={{width: '100px'}} required className={style.button} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form