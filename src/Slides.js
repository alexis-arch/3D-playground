import React from 'react';
import { Impress, Step } from 'react-impressjs';
// styles of react-impressjs
import 'react-impressjs/styles/react-impressjs.css';
import values from './impress-demo';

const Slides = () => (
<Impress progress={true}>
      {
        values.map( (d, index ) => {
          return (
            React.createElement( Step, {
              id: d.id, 
              className: d.className,
              data: d.data,
              key: index
            }, 
            d.content.map( (child, index) => {
              return (
                React.cloneElement( child, {
                  id: child.id,
                  className: child.className,
                  key: index
                })
              );
            }))
            
          );
        })
      }
      </Impress>
)

export {Slides}