import Logo from '@/assets/icons/Logo';
import style from './styles.module.scss';

export const Nothing = ({ content }) => {
  return (
    <div className={style.container}>
      <Logo />
      <h2 className={style.content}>{content}</h2>
    </div>
  );
};
