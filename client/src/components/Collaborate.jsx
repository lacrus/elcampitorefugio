import mercadoPago from "../assets/img/mercado-pago.png";
import dineroMail from "../assets/img/dinero-mail.png";
import payPal from "../assets/img/paypal.png";

export default function Colaborate() {
  return (
    <main class="colaborar">
      <section>
        <h2>¡QUIERO COLABORAR!</h2>
        <p>El Campito Refugio es una ONG con sus balances al d&iacute;a.</p>
        <p>
          Nuestra cuenta bancaria est&aacute; auditada a nombre del refugio por
          lo cual cada donaci&oacute;n en rendida.
        </p>
        <p>
          Pod&eacute;s solicitar tu recibo LEGAL escribiendo a{" "}
          <span>madrinasdelcampito@gmail.com</span>
        </p>
      </section>
      <section>
        <article class="parent-grid-2">
          <div class="background-orange border-radius cuenta-bancaria">
            <h3>CUENTA BANCARIA</h3>
            <p>
              <span>Banco Santander Rio</span>
            </p>
            <p>Refugio El Campito</p>
            <p>Cta Cte n° 0123787 - Sucursal 180</p>
            <p>Alias refugioelcampito</p>
            <p>CBU 0720180220000001237872</p>
            <p>CUIT 30-71212593-0</p>
          </div>
          <div class="background-purple border-radius debito-automatico">
            <h3>
              <span>POR D&Eacute;BIDO AUTOM&Aacute;TICO</span>
            </h3>
            <h3>CON TARJETA VISA Y VISA ELECTRON</h3>
            <p>
              Si quer&eacute;s colaborar mensualmente con el refugio y con tus
              ahijados, ahora pod&eacute;s hacerlo utilizando tu tarjeta de
              cr&eacute;dito. Eleg&iacute; el monto que quieras donar, y se
              debitar&aacute; autom&aacute;ticamente de tu cuenta todos los
              meses.
            </p>
            <button class="button-form"> Complet&aacute; el formulario </button>
          </div>
        </article>
        <article class="parent-grid-5">
          <div class="border-radius border-light-blue medio-de-pago">
            <img src={mercadoPago} alt="Logo de mercado pago" />
          </div>
          <button class="background-light-blue">$200</button>
          <button class="background-light-blue">$300</button>
          <button class="background-light-blue">$500</button>
          <button class="background-light-blue">$1000</button>
          <button class="background-light-blue">$3000</button>
          <button class="background-light-blue">$5000</button>
          <button class="background-light-blue">$7000</button>
          <button class="background-light-blue">$10000</button>
        </article>
        <article class="parent-grid-5">
          <div class="border-radius border-green medio-de-pago">
            <img src={dineroMail} alt="Logo de dinero mail" />
          </div>
          <button class="background-green">$15</button>
          <button class="background-green">$50</button>
          <button class="background-green">$100</button>
          <div class="background-green border-radius no-button">
            <input type="text" />
            <p>Otro $ (solo n&uacute;meros,</p>
            <p>sin centavos)</p>
          </div>
          <button class="background-green">US15</button>
          <button class="background-green">US50</button>
          <button class="background-green">US100</button>
          <div class="background-green border-radius no-button">
            <input type="text" />
            <p>Otro $ (solo n&uacute;meros,</p>
            <p>sin centavos)</p>
          </div>
        </article>
        <article class="parent-grid-2-paypal">
          <div class="border-radius border-pink medio-de-pago">
            <img src={payPal} alt="Logo de payPal" />
          </div>
          <button class="background-pink button-paypal">
            DON&Aacute; V&Iacute;A PAYPAL
          </button>
        </article>
      </section>
    </main>
  );
}
