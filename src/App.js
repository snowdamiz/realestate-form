import React, { useState, useEffect } from 'react';

import Type from './views/type/type';
import Condition from './views/condition/condition';
import Value from './views/value/value';
import Timeline from './views/timeline/timeline';
import Address from './views/address/address';
import Contact from './views/contact/contact';
import Rundown from './views/rundown/rundown';

function App() {
  const [page, setPage] = useState(6);
  const [type, setType] = useState(null);
  const [condition, setCondition] = useState(null);
  const [value, setValue] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [address, setAddress] = useState(null);
  const [zip, setZip] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  // useEffect(() => {

  // }, [])

  switch (page) {
    case(1):
      return <Type
              page={page}
              setPage={setPage}
              type={type}
              setType={setType}
              condition={condition}
              setCondition={setCondition}
              value={value}
              setValue={setValue}
              timeline={timeline}
              setTimeline={setTimeline}
              address={address}
              setAddress={setAddress}
              zip={zip}
              setZip={setZip}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail} />
    case(2):
      return <Condition
              page={page}
              setPage={setPage}
              type={type}
              setType={setType}
              condition={condition}
              setCondition={setCondition}
              value={value}
              setValue={setValue}
              timeline={timeline}
              setTimeline={setTimeline}
              address={address}
              setAddress={setAddress}
              zip={zip}
              setZip={setZip}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail} />
    case(3):
      return <Value
              page={page}
              setPage={setPage}
              type={type}
              setType={setType}
              condition={condition}
              setCondition={setCondition}
              value={value}
              setValue={setValue}
              timeline={timeline}
              setTimeline={setTimeline}
              address={address}
              setAddress={setAddress}
              zip={zip}
              setZip={setZip}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail} />
    case(4):
      return <Timeline
              page={page}
              setPage={setPage}
              type={type}
              setType={setType}
              condition={condition}
              setCondition={setCondition}
              value={value}
              setValue={setValue}
              timeline={timeline}
              setTimeline={setTimeline}
              address={address}
              setAddress={setAddress}
              zip={zip}
              setZip={setZip}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail} />
    case(5):
      return <Address
              page={page}
              setPage={setPage}
              type={type}
              setType={setType}
              condition={condition}
              setCondition={setCondition}
              value={value}
              setValue={setValue}
              timeline={timeline}
              setTimeline={setTimeline}
              address={address}
              setAddress={setAddress}
              zip={zip}
              setZip={setZip}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail} />
    case(6):
      return <Contact
              page={page}
              setPage={setPage}
              type={type}
              setType={setType}
              condition={condition}
              setCondition={setCondition}
              value={value}
              setValue={setValue}
              timeline={timeline}
              setTimeline={setTimeline}
              address={address}
              setAddress={setAddress}
              zip={zip}
              setZip={setZip}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail} />
    case(7):
      return <Rundown
              page={page}
              setPage={setPage}
              type={type}
              setType={setType}
              condition={condition}
              setCondition={setCondition}
              value={value}
              setValue={setValue}
              timeline={timeline}
              setTimeline={setTimeline}
              address={address}
              setAddress={setAddress}
              zip={zip}
              setZip={setZip}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail} />
  }
}

export default App;
