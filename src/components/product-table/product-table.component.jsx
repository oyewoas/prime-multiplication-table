import React from 'react'

import './product-table.styles.scss'
import uuid from 'uuid'

const ProductTable = ({arrayOfProducts, arrayOfPrimes}) => {

    
    const createTable = () => {

        if(!arrayOfPrimes.includes('X')){
            arrayOfPrimes.unshift('X')
        }
        if(!arrayOfProducts.includes(arrayOfPrimes)){
            arrayOfProducts.unshift(arrayOfPrimes)
        }
       

        let table = []
        // Outer loop to create parent
        for (let i = 0; i < arrayOfProducts.length; i++) {
          let children = []

          //Inner loop to create children
          if(i > 0){
            children.push(<td key={uuid()}>{arrayOfPrimes[i]}</td>)
          }
          for (let j = 0; j < arrayOfProducts.length; j++) {
            children.push(<td key={j}>{arrayOfProducts[i][j]}</td>)

          }
          //Create the parent and add the children
          table.push(<tr key={i}>{children}</tr>)
        }
        return table
      }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className='col-md-12'>
                <h2 className="text-center pt-3 pb-3">Prime Products Result</h2>
                { arrayOfProducts ? (
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <tbody>
                                {createTable()}
                            </tbody>
                        </table>
                    </div>
                ): (
                    <span>No Prime Products</span>
                )}
                </div>
            </div>
        </div>
    
    )
}

export default ProductTable