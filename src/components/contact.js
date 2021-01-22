import React, { useState } from 'react'
import styled from 'styled-components'

const ContentContainer = styled.section`
background-color: var(--off-white); 
min-width: 100vw;
.contact-modal-container {
  border: solid 2px #C7C2AF;
  border-radius: 20px;
  padding: 60px;
  position: relative;
  p {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .modal-button {
    background-color: #4C3F0D;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 600;
    &-container {
      position: absolute;
      right: 60px;
      top: 50%;
      margin-top: -23px;
    }
  }
}
.modal-container {
  position: relative;
  .modal-close {
    position: absolute;
    z-index: 5;
    top: 40px;
    right: 40px;
    max-width: 40px;
    max-height: 40px;
    transition: all ease 0.3s;
    &:hover {
      background-color: #4C3F0D;
      &:before {
        background-color: #fff;
      }
      &:after {
        background-color: #fff;
      }
    }
    &:before {
      transition: all ease 0.3s;
      background-color: #4C3F0D;
      width: 80%;
    }
    &:after {
      transition: all ease 0.3s;
      background-color: #4C3F0D;
      height: 80%;
    }
  }
}
.contact-form {
  border: solid 2px #C7C2AF;
  border-radius: 40px;
  padding: 40px;
  position: relative;
  .columns {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    height: 100%;
    padding-left: 11px;
  }
  .form-item {
    &.column {
      padding-left: 0;
      width: 100%;
      max-width: 600px;
      .control {
        width: 600px;
      }
    }
    span.icon {
      position: absolute;
      left: 0;
      top: 0;
    }
    input {
      width: 100%;
      max-width: 600px;
      min-width: 180px;
      border-radius: 5px !important;
      border: solid 1px #C7C2AF;
      padding-left: 10px;
      font-size: 1rem;
      &::placeholder {
        font-size: 1rem;
      }
    }
    textarea.contact-form-message {
      max-width: 600px;
      width: 100%;
      min-height: 150px;
      height: 100%;
      border-radius: 5px;
      border: solid 1px #C7C2AF;
      background-color: #fff;
      padding-left: 10px;
      padding-top: 13px;
      margin-bottom: 0 !important;
      &::placeholder {
        font-size: 1rem;
      }
    }
    &:nth-child(3) {
      margin-bottom: -7px;
    }
  }
  .submit-form-item {
    .control {
      display: flex;
      justify-content: flex-end;
      .submit-button {
        background-color: #4C3F0D;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 600;
        &.cta-button {
          padding-bottom: 12px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  padding-left: 3rem !important;
  padding-right: 3rem !important;
  .contact-modal-container {
    p {
      text-align: center;
      margin-bottom: 20px;
    }
    .modal-button-container {
      position: relative;
      right: auto;
      top: auto;
      margin-top: 0;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }
  }
  .modal-container {
    height: 400px;
    .modal-close {
      top: -50px;
      right: -20px;
      max-width: 40px;
      max-height: 40px;
    }
  }
  .contact-form {
    border: none;
    padding: 0;
    width: 100%;
    .columns {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      height: 100%;
    }
    .form-item {
      &.column {
        padding-right: 0;
        width: 100%;
        max-width: none;
        .control {
          width: 100%;
        }
      }
      span.icon {
        position: absolute;
        left: 0;
        top: 0;
      }
      input {
        width: 100%;
        max-width: none;
        min-width: 180px;
        border-radius: 5px !important;
        border: solid 1px #C7C2AF;
        padding-left: 10px;
        font-size: 1rem;
        &::placeholder {
          font-size: 1rem;
        }
      }
      textarea.contact-form-message {
        margin-bottom: 10px !important;
        max-width: none;
      }
    }
}
`

const Contact = () => {
  const [isModalOpen, updateIsModalOpen] = useState(false);
  return (
    <ContentContainer className="section contact" id="contact">
      <div className="container">
        <div className={`contact-modal-container ${isModalOpen ? 'is-hidden' : ''}`}>
          <p>
            Let's chat!
          </p>
          <div className="modal-button-container">
            <button className="modal-button cta-button" onClick={() => updateIsModalOpen(!isModalOpen)}>Contact me</button>
          </div>
        </div>
        <div className={`modal-container ${isModalOpen ? '' : 'is-hidden'}`}>

          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
          <form name="contact" method="post" className="contact-form">
            <input type="hidden" name="form-name" value="contact" />
            <div className="columns">
              <div className="form-item column">
                <label for="fullName" className="is-sr-only">Full Name</label>
                <div className="control">
                  <input type="text" name="fullName" id="fullName" placeholder="Full Name" />
                  <span className="icon"></span>
                </div>
              </div>
              <div className="form-item column">
                <label for="email" className="is-sr-only">Email</label>
                <div className="control">
                  <input type="text" name="email" id="email" placeholder="Email" />
                  <span className="icon"></span>
                </div>
              </div>
              <div className="form-item column">
                <label for="message" className="is-sr-only">Message</label>
                <div className="control">
                  <textarea type="text" name="message" id="message" className="contact-form-message" placeholder="Message Details" />
                  <span className="icon"></span>
                </div>
              </div>
              <div className="form-item submit-form-item column">
                <label for="Submit button" className="is-sr-only">Submit</label>
                <div className="control">
                  <button type="submit" className="submit-button cta-button">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContentContainer >
  )
}

export default Contact
