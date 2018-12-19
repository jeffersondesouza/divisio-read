import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Input from '../index'


describe('<Input />', () => {

  it("should render Input ", () => {
    const component = shallow(<Input />);
    expect(component.type()).to.be.eql('div');
  });

  it("simulates a change event ", () => {

    const onChangeFn = sinon.spy();

    const wrapper = shallow(<Input onChange={onChangeFn} />);

    wrapper.find('input').simulate('change', {
      target: {
        value: 'Change'
      }
    })

    expect(onChangeFn).to.have.property('callCount', 1);
  });



});
