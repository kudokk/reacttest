import * as React from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import styledComponents from 'styled-components'
import styled from 'styled-components'

import { RootState, pagination, AccessToken, isFetching, reset } from '../modules/reducer'

type OwnProps = {
  className?: string;
};

type DispatchProps = {
  pagination: () => void
}

export type Props = RootState & OwnProps & AccessToken & DispatchProps;

const component = (props: Props) => {
  return (
      <Pager>
        <li>
          <a>1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
        <button onClick={() => props.pagination()}>
          {
            props.isFetching
            ? <i></i>
            : 'Login'
          }
        </button>
        </li>
      </Pager>
  );
};

const Pager = styled.ul`
  list-style-type: none;
    margin: 0;
    padding: 0px;
    li {
        display: inline-block;
        padding: 0px 5px;
        a {
          color: #1075bf;
          padding: 0 10px;
        }
    }
`

const mapStateToProps = (state: RootState) => state

const mapAsyncDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    pagination: async () => {
      const data = await dispatch(pagination())
      await dispatch(isFetching(false))
      await dispatch(reset(data))
      console.log('Login completed [UI]')
    }
  }
}

const enhancedComponent = connect(
  mapStateToProps,
  mapAsyncDispatchToProps
)(component);

export default styledComponents(enhancedComponent)`
    list-style-type: none;
    margin: 0;
    padding: 0px;
    li {
        display: inline-block;
        padding: 0px 5px;
    }
`;
