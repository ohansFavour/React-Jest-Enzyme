import React from "react";
import {shallow} from "enzyme";
import {Header} from "./index";
import {findByTestAtrr} from "../../../utils";

const setUp = (props={})=>{
    const component = shallow(<Header {...props}/>);
    return component;
}

describe("Header Component", ()=>{

 let component;
 
 beforeEach(()=>{
     component = setUp();
 })

 it("renders correctly", ()=>{
    const wrapper = findByTestAtrr(component, "logo");
    expect(wrapper.length).toBe(1);
 })
})