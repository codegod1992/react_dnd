export { default as DragDropContext } from './DragDropContext';
export { default as DragDropLayer } from './DragDropLayer';
export { default as DragDrop } from './DragDrop';

if (process.env.NODE_ENV !== 'production') {
  Object.defineProperty(exports, 'default', {
    get() {
      console.error(
        'React DnD does not provide a default export. ' +
        'You are probably missing the curly braces in the import statement. ' +
        'Read more: https://gist.github.com/gaearon/cf692e795a0e960b880e'
      );
    }
  });
}