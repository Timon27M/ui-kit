import styles from './input.module.scss';
import React from 'react';
// Тип для register (совместим с react-hook-form)
type RegisterType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  ref: React.Ref<HTMLInputElement>;
  name: string;
};

// Тип пропсов
export type TProps = {
  variant?: 'primary' | 'secondary';
  color?: 'white' | 'black' | 'orange';
  sizeInput?: 'large' | 'medium' | 'small';
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register?: RegisterType; // Опциональный пропс для регистрации
  error?: { message?: string }; // Опциональный пропс для ошибки
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({
  variant = 'primary',
  color = 'white',
  sizeInput = 'medium',
  name,
  onChange,
  register,
  error,
  ...rest
}: TProps) {
  return (
    <div
      className={`${styles.container} ${styles[variant]} ${
        variant === 'primary' && styles[color]
      } ${styles[sizeInput]}`}
    >
      <input
        {...(register || {})} // Применяем register, если он передан
        onChange={onChange} // Пользовательский onChange
        className={`${styles.input} ${
          variant === 'primary' && styles[color]
        } ${styles[sizeInput + 'Input']} ${error ? styles.error : ''}`}
        type="text"
        name={name} // Указываем name явно, если нужно
        {...rest}
      />
      {error?.message && (
        <span className={styles.errorMessage}>{error.message}</span>
      )}
    </div>
  );
}

export default Input;
