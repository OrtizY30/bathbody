import React from 'react'

export const Modal = ({handledModal, modal, cardProduct}) => {
  console.log(cardProduct)
  const {name, precio, tipo, img, descripcion, desc} = cardProduct

  return (
    <div className={`${modal ? 'modal' : 'modalOff'}`}>
        
        <div className='exit' onClick={handledModal}>X</div>
        <div className='box-modal'>
        <div className='name'>
        <p>
           {name}
        </p>
        <span>{tipo}</span>
      </div>
        <div>
        <img src={`img/${img}.jpg`} alt="" width={300} height={300} />
      </div>
      <div>
        <p className='description'>
          <span>Notas de Fragancia: </span>
        {descripcion}
        </p>
      </div>

      
      <div className='box-precio'>
        <div className='price'>
            <span>
               Precio normal
            </span>
        <p className='antes'> ${precio}</p>
        </div>
        
        <p className='desc'> ${desc}</p>
      </div>
        </div>
    </div>
  )
}
