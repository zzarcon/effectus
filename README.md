# effectus
> micro reactive state management - just for fun 

## Install

```
$ yarn add effectus
```

## Usage

```ts
import { effect, signal } from 'effectus'

const [name, setName] = signal('hector');

effect(() => {
  console.log(name()) // zzarcon
}, [name]);

console.log(name()) // hector
setName('zzarcon')
console.log(name()) // zzarcon
```