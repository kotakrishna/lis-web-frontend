import styles from './ui-input.module.scss';

/* eslint-disable-next-line */
export interface UiInputProps {}

export function UiInput(props: UiInputProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiInput!</h1>
    </div>
  );
}

export default UiInput;
