/* eslint-disable */
export default {
  displayName: 'editorjs-react-renderer-ts',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/editorjs-react-renderer-ts',
};
