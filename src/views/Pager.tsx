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
  pagination: (page: number) => void
}

export type Props = RootState & OwnProps & AccessToken & DispatchProps;

const component = (props: Props) => {
  const list = [1, 2, 3, 4]
  return (
      <Pager>
        {
          list.map((e) => {
            return (
              <li key={e}>
                {
                  props.isFetching
                    ? <span>{e}</span>
                    : <a onClick={() => props.pagination(e)}>{e}</a>
                }
              </li>
            )
          })
        }
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

const mapAsyncDispatchToProps = ( dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    pagination: async (page: number) => {
      const data = await dispatch(pagination(page))
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
