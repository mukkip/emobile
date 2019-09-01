import React, { Component } from 'react'

export default function Title ({type,title}) {

        return (
            <div className="row">
              <div clasName="col-10 mx-auto my-2 text-center text-title" >
                <h1 className="text-capitalize font-weight-bold">
            {type} <strong className="text-blue">{title}</strong>
                </h1>
            <div className="row"/>
            </div> 
            </div>
        )
    
}
