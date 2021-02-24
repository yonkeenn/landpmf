import React from 'react';


const  Footer = (props) => {
return (
<footer class="pa4 pa5-l black-70 bt b--black-10">
    <div class="mb4-l cf">
        <h1 class="fl w-100 pv0 f6 fw6 ttu tracked ">Contactanos</h1>

        <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb1 pr2 pr0-ns">
            <h4 class="f5 f4-l fw6">Telefono</h4>
            <span class="f7 f6-l db black-70">Llamadas/WhatsApp</span>
            <a class="f6 db fw6 pv1 black-70 link dim" title="Call SF" href="tel:+51948018337">
                +51-948018337
            </a>
        </article>

        <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb1 pl2 pl0-ns">
            <h4 class="f5 f4-l fw6">Email</h4>
            <span class="f7 f6-l db black-70">
                Pedidos y/o consultas
            </span>
            <a href="mailto:" class="f6 db fw6 pv1 link dim black-70" title="hola@yamheru.com">
                hola@yamheru.com
            </a>
        </article>

        <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb1 pl2 pl0-ns">
            <h4 class="f5 f4-l fw6">Horario</h4>
            <span class="f7 f6-l db black-70">
                Atencion al cliente
            </span>
            <a href="mailto:" class="f6 db fw6 pv1 link dim black-70" title="hola@yamheru.com">
                Lun-Sab/9am-6pm
            </a>
        </article>

        <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb1 pl2 pl0-ns">
            <h4 class="f5 f4-l fw6 ">Terminos y Condiciones</h4>
            <span class="f7 f6-l db black-70">
                Conoce mas detalles
            </span>
            <a href="mailto:" class="f6 db fw6 pv1 link dim black-70" title="hola@yamheru.com">
                Aqui!
            </a>
        </article>
    </div>

    <div class="dt dt--fixed w-100 pt4" >
        <div class="dn dtc-ns v-mid">
        <p class="f7 black-70 dib pr3 mb3">
            Copyright © Yamheru 2020
        </p>
    </div>
    <div class="db dtc-ns black-70 tc tr-ns v-mid">
        <a href="https://www.facebook.com/yamheru" className="link dim dib mr3 black-70" title="Impossible Labs on Facebook">
            <svg class="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
            <title >facebook icon</title>
            <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
            ></path>
            </svg>
        </a>
        <a href="https://twitter.com/yamheru" className="link dim dib mr3 black-70">
            <svg class="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
            fill="currentColor" >
            <title >twitter icon</title>
            <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"/>
            </svg>
        </a>
        <a href="https://instagram.com/yamheru" className="link dim dib black-70" >
            <svg class="db h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
            <title >instagram icon</title>
            <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/>
            </svg>
            
        </a>
    </div>
  </div>
    <div class="db dn-ns">
        <p class="f7 black-70 mt4 tc">
        Copyright © Yamheru 2020
        </p>
    </div>
</footer>
);

}


export default Footer;