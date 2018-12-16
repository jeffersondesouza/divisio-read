import React, { Component } from 'react';

import SideMenu from '../index'

describe('test SideMenu', () => {
  it("should render SideMenu ", () => {
    const component = shallow(<SideMenu />);
    expect(component.type()).to.be.eql('div');
  });
});