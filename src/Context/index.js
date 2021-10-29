import React from 'react';
import DataContext from './Datos.Context';
import LoadingContext  from './Load.Context';


export function Context({ children }) {
  return (
    
      <LoadingContext>
        <DataContext>
            {children}
        </DataContext>
        </LoadingContext>
    
  );
}
