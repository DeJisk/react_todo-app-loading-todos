import React from 'react';

type Props = {
  isError: boolean;
  errorMessage: string;
  onError: (flag: boolean) => void;
};

export const Error: React.FC<Props> = ({ isError, errorMessage, onError }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={`notification is-danger is-light has-text-weight-normal ${isError ? '' : 'hidden'}`}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => onError(false)}
      />
      {/* show only one message at a time
      Unable to load todos
      <br />
      Title should not be empty
      <br />
      Unable to add a todo
      <br />
      Unable to delete a todo
      <br />
      Unable to update a todo */}
      {errorMessage}
    </div>
  );
};
