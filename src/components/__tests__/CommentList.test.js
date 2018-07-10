import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;
beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };
    wrapper = mount(
      <Root initialState={initialState}>
          <CommentList/>
      </Root>
  );
});

it('creates one LI per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
});

it('has the correct text per comment', () => {
    expect(wrapper.render().text()).toEqual('Comment 1Comment 2');
});
