import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/52507064?s=460&u=04042d49a33cacd44c36bb760b7fc744d1d25a4e&v=4"
          alt="Andy Silva"
        />

        <div>
          <strong>Andy Silva</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> <br />
        Sed tristique, quam eu mattis mollis, nunc nunc consectetur libero, id
        malesuada arcu magna nec arcu. Nullam faucibus eget sapien sit amet
        tincidunt. Maecenas ornare urna ac libero dictum fermentum ac at sapien.
        Vivamus auctor elit nec lectus malesuada aliquet.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 75,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
