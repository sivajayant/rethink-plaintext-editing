import React from 'react';
import PropTypes from 'prop-types';
import css from './style.css';
import RichTextEditor from './RichTextEditor';

function PlaintextEditor({ file, write }) {
  return (
    <div className={css.editor}>
      <RichTextEditor content={file} />
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
