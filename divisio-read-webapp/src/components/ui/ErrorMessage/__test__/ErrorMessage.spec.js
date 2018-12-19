import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import ErrorMessage from '../index'


describe('ErrorMessage />', () => {

  it("should contains msg 1 ", () => {
    const msg = 'error 1 ';
    const component = shallow(<ErrorMessage text={msg} />);
    expect(component.text()).to.contain(msg);
  });

  it("should contains msg 2 ", () => {
    const msg = 'error 2';
    const component = shallow(<ErrorMessage text={msg} />);
    expect(component.text()).to.contain(msg);
  });


});
