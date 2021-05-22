import { render, screen } from '@testing-library/react';
import App from './App';

import {shallow} from 'enzyme';



//counter test to simulate my understanding of tests


// let wrapper
// beforeEach(()=>{
//    wrapper = shallow(<App />)
// })


// test('find title',()=>{
//   expect( wrapper.find('title').text()).toContain(' App')
// })
// test('find increament btn',()=>{
//   expect( wrapper.find('#increament').text()).toBe("Increament")
// })

// test('get counter value',()=>{
//   expect(wrapper.find('#counter').text()).toBe('0')
// })
// test('simulate click',()=>{
//   wrapper.find('#increament').simulate('click')
//   expect(wrapper.find('#counter').text()).toBe('1')
// })

// test('simulate decrement',()=>{
//   wrapper.find('#decreament').simulate('click')
//   expect(wrapper.find('#counter').text()).toBe('-1')
// })


