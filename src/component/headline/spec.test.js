import React from "react";
import {shallow} from "enzyme";
import {findByTestAtrr} from "../../../utils";
import Headline from "./"

const setUp = (props={})=>{
    const component = shallow(<Headline {...props}/>);
   return component;
}

describe("Headline", ()=>{
   
   describe("has props",()=>{
    
     let wrapper;

     beforeEach(()=>{
        wrapper = setUp({
             header: "test-header",
             desc: "test-desc"
         });
     })
     
     it("renders without errors",()=>{
         const component = findByTestAtrr(wrapper, "headline-component");
         expect(component.length).toBe(1)
     })
     it("renders a H1",()=>{
         const component = findByTestAtrr(wrapper, "h1");
         expect(component.length).toBe(1)
     })
     it("renders a p",()=>{
         const component = findByTestAtrr(wrapper, "p");
         expect(component.length).toBe(1)
     })
   })

   describe("has NO props", ()=>{
       let wrapper
         beforeEach(()=>{
         wrapper = setUp();
     })
     
     it("renders without errors",()=>{
         const component = findByTestAtrr(wrapper, "headline-component");
         expect(component.length).toBe(0)
     })
     it("renders a H1",()=>{
         const component = findByTestAtrr(wrapper, "h1");
         expect(component.length).toBe(0)
     })
     it("renders a p",()=>{
         const component = findByTestAtrr(wrapper, "p");
         expect(component.length).toBe(0)
     })
   })


})