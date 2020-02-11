import React from 'react';

import Type from './views/type/type';
import Condition from './views/condition/condition';
import Value from './views/value/value';
import Timeline from './views/timeline/timeline';
import Address from './views/address/address';
import Contact from './views/contact/contact';
import Rundown from './views/rundown/rundown';

function App() {
  switch (page) {
    case(1):
      return <Type />
    case(2):
      return <Condition />
    case(3):
      return <Value />
    case(4):
      return <Timeline />
    case(5):
      return <Address />
    case(6):
      return <Contact />
    case(7):
      return <Rundown />
}

export default App;
