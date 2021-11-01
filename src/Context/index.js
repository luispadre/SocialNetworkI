import React from 'react';
import DataContext from './Datos.Context';
import LoadingContext from './Load.Context';
import ModalContext from './Modal.Context';


export function Context({ children }) {
  return (

    <LoadingContext>
      <DataContext>
        <ModalContext>{children}
        </ModalContext>
      </DataContext>
    </LoadingContext>

  );
}
