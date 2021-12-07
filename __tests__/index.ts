import { effect, signal } from '../src'

describe('effectus', () => {  
  it('should return initial value', () => {
    const [name] = signal('hector');

    expect(name()).toEqual('hector')
  });

  it('should call effect when signal is updated', (done) => {
    const [name, setName] = signal('hector');

    effect(() => {
      expect(name()).toEqual('zzarcon');
      done();
    }, [name]);

    setName('zzarcon')
  })

  it('should call all effect depending the updated signal', () => {
    expect.assertions(2)
    const [name, setName] = signal('hector');

    effect(() => {
      expect(name()).toEqual('zzarcon');
    }, [name]);

    effect(() => {
      expect(name()).toEqual('zzarcon');
    }, [name]);

    setName('zzarcon')
  })

  it('should call effect if any signal changed', () => {
    const [name, setName] = signal('hector');
    const [lastName, setLastName] = signal('zarco');
    const callback = jest.fn();

    effect(callback, [name, lastName]);

    setName('john')
    setLastName('smith')

    expect(callback).toBeCalledTimes(2)
  })
});
