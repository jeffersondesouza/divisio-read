import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import SideMenuFooter from '../SideMenuFooter';

describe('<SideMenuFooter />', () => {
  
  it("should contains the header element text", () => {
    const onLogoutFn = sinon.spy();
    const wrapper = shallow(<SideMenuFooter onLogout={onLogoutFn}/>);

    wrapper.find('button').simulate('click');

    expect(onLogoutFn).to.have.property('callCount', 1);

  });

})