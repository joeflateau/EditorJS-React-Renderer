import { Fragment } from 'react';
import { ErrOutputProps } from './editorjs-react-renderer-types';

export function Output(props: ErrOutputProps): JSX.Element {
  const { data, renderBlock } = props;
  return (
    <>
      {data.blocks.map((block, i) => {
        return <Fragment key={i}>{renderBlock(block, i, data)}</Fragment>;
      })}
    </>
  );
}

export default Output;
