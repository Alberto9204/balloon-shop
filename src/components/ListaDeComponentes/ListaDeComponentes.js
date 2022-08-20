import './ListaDeComponentes.css'


export const ListaDeComponentes = ( {Productos} ) => {
    return(

        <main className="main">
          <div>
            <h2>Seguimos trabajando</h2>
          <p>Proximamente podras ver aqui productos como:</p>
          <p>{Productos} y más</p>
          </div>
        </main>
       
    )
}

