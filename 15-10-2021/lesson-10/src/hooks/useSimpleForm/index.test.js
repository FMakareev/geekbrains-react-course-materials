import {act, renderHook} from '@testing-library/react-hooks';
import {useSimpleForm} from "./index";

describe('useSimpleForm', () => {

  it('setFieldValue', () => {
    const initialValues = {}
    const {result} = renderHook(() => useSimpleForm(initialValues))

    act(() => {
      result.current.setFieldValue('name', 'content');
    })

    expect(result.current.values).toMatchObject({
      name: 'content',
    })

    expect(result.current.getFieldValue('name')).toEqual('content');

  })

  it('initialState', () => {
    const initialValue = {
      login: 'nik',
      password: 'admin',
    }
    const {result, rerender } = renderHook(({initialValue}) => useSimpleForm(initialValue), {
      initialProps: {
        initialValue
      }
    })

    expect(result.current.values).toEqual(initialValue);

    rerender({
      initialValue: {}
    })

    expect(result.current.values).toEqual({});

  })

})
