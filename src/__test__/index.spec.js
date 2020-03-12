import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('Render App component', () => {
  it('should render the App component successfully', () => {
    const wrapper = mount(<App />);
    expect(wrapper.text()).toEqual('LoginEmailPasswordSign inORG Signin with Google f Signin with Facebook');
  });
  it('App should handle Math eq', () => {
    expect(1-2).toEqual(-1);
  })
});