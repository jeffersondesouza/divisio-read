import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import SideMenu from '../index'
import SideMenuHeader from '../SideMenuHeader';
import SideMenuFooter from '../SideMenuFooter';

const component = shallow(<SideMenu />);

describe('<SideMenu />', () => {

  it("should render SideMenu ", () => {
    expect(component.type()).to.be.eql('div');
  });

  it("should contains the header element", () => {
    const header = shallow(<SideMenuHeader />);
    expect(component.contains(<SideMenuHeader />)).to.true;
  });


  it("should contains the header element text", () => {
    const header = shallow(<SideMenuHeader />);
    expect(component.contains(<SideMenuHeader />)).to.true;
    expect(header.text()).to.contain('e controle seu hábito de le');
  });



  it("should contains the header element text", () => {
    const footer = shallow(<SideMenuFooter />);

  });





})