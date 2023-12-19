import './style.css'

export function Body() {
    

    return(
        <div className='body'>

            <div className='formulario'>
                <section id='text'>
                    <h1>DIA 18 DE JANEIRO | AO VIVO E GRATUITO</h1>
                    <h3>Preencha os dados abaixo para participar</h3>
                </section>
                <section id='formulario'>
                    <form action="">
                        <section>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id='name'/>
                        </section>

                        <section>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id='email'/>
                        </section>
                        
                        <section>
                        <label htmlFor="tel">Telefone:</label>
                        <input type="tel" id='tel'/>
                        </section>
                    </form>
                </section>
            </div>
        </div>
    )
}