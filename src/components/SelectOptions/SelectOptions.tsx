import React, { FunctionComponent } from 'react';
import { Button, Heading } from '@mycrypto/ui';
import Paths from './Paths';
import Depth from './Depth';
import { FlowProps } from '../Flow/Flow';

type Props = FlowProps;

const SelectOptions: FunctionComponent<Props> = ({ onNext }) => {
  return (
    <>
      <Depth />
      <Paths />
      <Button onClick={onNext}>Search</Button>
    </>
  );
};

export default SelectOptions;