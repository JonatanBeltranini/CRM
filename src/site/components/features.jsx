import React from 'react';


function Features() {
    return <section id="features">
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 features-box'>
                <i class="icon fa-solid fa-heart fa-5x"></i>
                    <h3>Facíl de usar</h3>
                    <p>O sistema possuí uma interface muito simples e facil de usat</p>
                </div>

                <div className='col-lg-4 features-box'>
                <i class="icon fa-solid fa-earth-africa fa-5x"></i>
                    <h3>Em qualquer lugar</h3>
                    <p>Gerencia seu fluxo de negócios de forma eficiente, onde quer que voce esteja.</p>
                </div>

                <div className='col-lg-4 features-box'>
                <i class="icon fa-solid fa-table-columns fa-5x"></i>
                    <h3>Organização é tudo</h3>
                    <p>Tenha sua carteira de clientes sempre muito bem organizadas</p>
                </div>
            </div>
        </div>
    </section>;
  }

  export default Features;