import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, act } from '@testing-library/react';
import {PureComponentExample, PureComponentExampleTextIDs} from "./index";

describe('PureComponentExample', () => {
  it('корректный заголовок', () => {

    const component = render(<PureComponentExample size={5}/>);

    expect(component.queryByTestId(PureComponentExampleTextIDs.title)).toHaveTextContent('PureComponentExample');

  })

  it('корректное кол-во строк', () => {
    const rowCount = 5
    const component = render(<PureComponentExample size={rowCount}/>);

    expect(component.queryAllByTestId(PureComponentExampleTextIDs.row)).toHaveLength(rowCount);
  })

  it('счетчик обновляется только у измененной строки', () => {
    const rowCount = 5
    const component = render(<PureComponentExample size={rowCount}/>);

    const rowButtons = component.queryAllByTestId(PureComponentExampleTextIDs.rowButton);
    const rowRenderCounts = component.queryAllByTestId(PureComponentExampleTextIDs.rowRenderCount);

    act(() => {
      fireEvent.click(rowButtons[0]);
    })

    expect(rowRenderCounts[0]).toHaveTextContent('(2)');

    for (let i = 1; i < rowRenderCounts.length; i++) {
      expect(rowRenderCounts[i]).toHaveTextContent('(1)');
    }

  })

})