
export class CardHero extends HTMLElement {
    connectedCallback(){
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = /* html */`
            <style rel="stylesheet">
                @import "./css/bootstrap/bootstrap.min.css";
            </style>
            <div class="card" style="width: 90%;">
                <slot name='imagen'></slot>
                <div class="card-body">
                    <h5 class="card-title"><slot name='nombre'></slot></h5>
                    <p class="card-text"><slot name='descripcion'></slot></p>
                    <p class="card-text"><slot name='fechaComic'></slot></p>
                    <p class="card-text"><slot name='casaProductora'></slot></p>
                </div>
            </div>
        `  
    }
}

customElements.define('card-hero', CardHero)