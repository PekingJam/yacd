import React, { PureComponent } from 'react';
import { Zap } from 'react-feather';
import Loading from 'src/components/Loading';

import Button from './Button';
import { ToggleInput } from './form/Toggle';
import Input from './Input';
import { ZapAnimated } from './shared/ZapAnimated';
import ToggleSwitch from './ToggleSwitch';

const noop = () => {
  /* empty */
};

const paneStyle = {
  padding: '20px 0',
};

const optionsRule = [
  { label: 'Global', value: 'Global' },
  { label: 'Rule', value: 'Rule' },
  { label: 'Direct', value: 'Direct' },
];

const Pane = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ ...paneStyle, ...style }}>{children}</div>
);

class StyleGuide extends PureComponent {
  render() {
    return (
      <div>
        <Pane>
          <ToggleInput id="t0" />
          <label htmlFor="t0" style={{ paddingLeft: 12 }}>
            Toggle Me
          </label>
        </Pane>
        <Pane>
          <input />
        </Pane>
        <Pane>
          <ZapAnimated />
        </Pane>
        <Pane>
          <Input />
        </Pane>
        <Pane>
          <ToggleSwitch name="test" options={optionsRule} value="Rule" onChange={noop} />
        </Pane>
        <Pane>
          <Button text="Test Lxatency" start={<Zap size={16} />} />
          <Button text="Test Lxatency" start={<Zap size={16} />} isLoading />
          <Button label="Test Lxatency" />
          <Button label="Button Plain" kind="minimal" />
        </Pane>
        <Pane style={{ paddingLeft: 20 }}>
          <Loading />
        </Pane>
      </div>
    );
  }
}

export default StyleGuide;
