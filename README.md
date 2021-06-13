# double-click

button double click for react-native

## Installation

```sh
npm install double-click
```

## Usage

```js


// ...

import React from 'react'
import { View, Text } from 'react-native'
import DoubleClick from "double-click";


function App() {
  return (
    <DoubleClick
      singleTap={() => {
        console.log('single tap');
      }}
      doubleTap={() => {
        console.log('single tap');
      }}
      delay={300}
      style={{
        backgroundColor: 'black',
      }}
    >
      <Text>Click</Text>
    </DoubleClick>
  );
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
