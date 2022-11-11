import { findByText, render } from '@testing-library/react';

import { EditorJsReactRenderer } from './editorjs-react-renderer-ts';

describe('Renderer', () => {
  it('should render successfully', async () => {
    const text = 'here is some text';
    const { baseElement } = render(
      <EditorJsReactRenderer
        data={{ blocks: [{ type: 'paragraph', data: { text } }] }}
        renderBlock={(block) => {
          switch (block.type) {
            case 'paragraph':
              return <p>{block.data.text}</p>;
          }
          return <div></div>;
        }}
      />
    );
    expect(baseElement).toBeTruthy();
    expect(await findByText(baseElement, text)).toBeTruthy();
  });
});
