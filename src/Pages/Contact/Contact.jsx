import React from 'react'

const Contact = () => {
  return (
    <main class="main__contact">
    <h1>Contacto</h1>
    <div id="successMessage" class="success-message"></div>
    <form id="form__contact" class="form__contact">
      <p id="validationMessage"></p>
      <label for="name" class="label__contact">Nombre</label>
      <input
        class="input__contact"
        type="text"
        name="name"
        id="name"
        placeholder="ex: Juan, Juan Pablo, J.P."
      />
      <div>
        <p id="errorName" class="error-message"></p>
      </div>

      <label for="lastName" class="label__contact">Apellido</label>
      <input
        class="input__contact"
        type="text"
        name="lastName"
        id="lastName"
        placeholder="ex: O., O Connor, O'Connor"
      />
      <div>
        <p id="errorLastName" class="error-message"></p>
      </div>
      <label for="email" class="label__contact">Email</label>
      <input
        class="input__contact"
        type="email"
        name="email"
        id="email"
        placeholder="ex: email@example.com"
      />
      <div>
        <p id="errorEmail" class="error-message"></p>
      </div>

      <label for="phone" class="label__contact">Teléfono</label>
      <input
        class="input__contact"
        type="tel"
        name="phone"
        id="phone"
        placeholder="ex: 011-1234-5678"
      />
      <div>
        <p id="errorPhone" class="error-message"></p>
      </div>

      <label for="mesasageSubject" class="label__contact">Asunto</label>
      <select class="input__contact" name="subject" id="subject">
        <option value="buy">Consulta de compra</option>
        <option value="change">Consulta por cambio</option>
        <option value="other">Otra..</option>
      </select>
      <div>
        <p id="errorSubject" class="error-message"></p>
      </div>

      <label for="mesasage" class="label__contact">Mensaje</label>
      <textarea
        class="input__contact"
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Ingrese su mensaje"
      ></textarea>
      <div>
        <p id="errorMessage" class="error-message"></p>
      </div>
      <button class="btnSend button__contact">Enviar Consulta</button>
    </form>
  </main>
  )
}

export default Contact