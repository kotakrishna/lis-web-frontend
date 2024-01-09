import styles from './client-module.module.scss';

/* eslint-disable-next-line */
export interface ClientModuleProps {}

export function ClientModule(props: ClientModuleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientModule!</h1>
    </div>
  );
}

export default ClientModule;
