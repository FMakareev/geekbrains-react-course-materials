import {act, renderHook} from '@testing-library/react-hooks';
import {useSimpleForm} from "./index";

describe('useSimpleForm', () => {

  it('setFieldValue', () => {
    const { result } =  renderHook(() => useSimpleForm())

    act(() => {
      result.current.setFieldValue('name','content')
    })

    expect(result.current.values).toMatchObject({
      name: 'content'
    });
    expect(result.current.getFieldValue('name')).toEqual('content');

  })

})