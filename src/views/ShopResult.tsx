import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components'
import styled from 'styled-components'
import { RootState } from '../modules/reducer';

type OwnProps = {
    className?: string;
};

export type Props = RootState & OwnProps;

const component: React.SFC<Props> = (props: Props) => {
    return (
        <ul className={props.className}>
        {
            props.rest.map((e) => {
                return (
                    <li key={e.id}>
                        <ShopCassette>
                            <a href={e.url}>
                                <ShopInner>
                                    <Flex>
                                        <ShopImage>
                                            <img src={e.image_url.shop_image1} alt={e.name} />
                                        </ShopImage>
                                        <ShopDesc>
                                            <ShopName>
                                                <h2>{ e.name }</h2>
                                            </ShopName>
                                            <ul>
                                                <li>
                                                    <span>{ e.category }</span>
                                                </li>
                                                <li>
                                                    <span>{ e.address }</span>
                                                </li>
                                            </ul>
                                        </ShopDesc>
                                    </Flex>
                                </ShopInner>
                            </a>
                        </ShopCassette>
                    </li>
                )
            })
        }
        </ul>
    );
};

const mapStateToProps = (state: RootState) => state

const enhancedComponent = connect(
    mapStateToProps
)(component);

const ShopCassette = styled.article`
    position: relative;
    display: block;
    margin: 0 0 8px;
    background-color: var(--color-white);
    border-bottom: 1px solid #d7d7d7;
`

const ShopInner = styled.div`
    position: relative;
    padding: 0 16px 16px;
    background-color: var(--color-white);
`

const ShopImage = styled.div`
    position: relative;
    width: 112px;
    height: 0;
    padding-top: 112px;
    background-color: #f2f2f2;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

const ShopName = styled.div`
    padding-right: 32px;
    h2 {
        display: inline;
        line-height: 1.3;
        font-size: 15px;
        font-weight: bold;
        textdecoration: none;
    }
`

const Flex = styled.div`
    display: flex;
`

const ShopDesc =styled.div`
    margin-left: 16px;
    flex: 1;
    ul {
        word-wrap: break-word;
        line-height: 1;
        padding-inline-start: 0px;
    }
    li {
        line-height: 1.5;
    }
    span {
        color: #333;
        font-size: 12px;
    }
`

export default styledComponents(enhancedComponent)`
    list-style-type: none;
    margin: 0;
    padding: 0px;
    li {
        display: inline-block;
        padding: 0px 5px;
    }
`;
