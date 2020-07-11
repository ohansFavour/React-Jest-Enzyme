import React from "react";

class Headline extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        const {header, desc} =  this.props;

        if(!header){
            return null;
        }
        return(
            <div data-test="headline-component" >
               <h1 data-test="h1">{header}</h1>
               <p data-test="p">{desc}</p>
            </div>
        )
    }
}

export default Headline