import { ErrOutputProps } from "./err";

export function Output(props: ErrOutputProps): JSX.Element {
  const { data, renderBlock } = props;
  return (
    <>
      {data.blocks.map((block, i) => {
        return renderBlock(block, i, data);
      })}
    </>
  );
}

export default Output;
