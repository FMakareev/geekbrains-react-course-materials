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

  it('initialState', () => {
    const initialValue = {
      login: 'nik66',
      password: 'admin',
    }
    const { result, rerender } =  renderHook(({initialValue}) => useSimpleForm(initialValue), {
      initialProps: {
        initialValue
      }
    })

    expect(result.current.values).toEqual({...initialValue});

    rerender({
      initialValue: {}
    })

    expect(result.current.values).toEqual({});
  })

})
