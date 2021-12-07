const signals = new Map();
const callbacks = new Map<Function, Function[]>();
let lastSignalKey = 0;

export function signal<T>(initialValue: T): [() => T, (newValue: T) => void] {
  lastSignalKey++;

  const signalKey = lastSignalKey;
  const readValue = () => {
    return signals.get(signalKey) || initialValue;
  };
  const setValue = (newValue: T) => {
    signals.set(signalKey, newValue);

    callbacks.get(readValue)?.forEach(callback => {
      callback();
    });
  };

  signals.set(signalKey, initialValue);
  callbacks.set(readValue, []);

  return [readValue, setValue]
}

export const effect = (callback: Function, dependencies: Function[]) => {
  dependencies.forEach(dependency => {
    callbacks.get(dependency)?.push(callback);
  });
}