import { type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';

interface BaseProps {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
}

interface InputProps extends BaseProps {
  as?: 'input';
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

interface TextareaProps extends BaseProps {
  as: 'textarea';
  inputProps: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

type FormFieldProps = InputProps | TextareaProps;

const baseInputClass =
  'w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent placeholder:text-text-muted';

const errorInputClass = 'border-red-400 focus:ring-red-400';

export default function FormField(props: FormFieldProps) {
  const { label, error, required, hint, as = 'input', inputProps } = props;
  const id = (inputProps as { id?: string }).id ?? label;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-text-primary">
        {label}
        {required && <span className="text-brand-emerald ml-1" aria-hidden="true">*</span>}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={id}
          rows={5}
          className={[baseInputClass, error ? errorInputClass : '', 'resize-none'].join(' ')}
          {...(inputProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={[baseInputClass, error ? errorInputClass : ''].join(' ')}
          {...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {hint && !error && (
        <p className="text-xs text-text-muted">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-red-500" role="alert">{error}</p>
      )}
    </div>
  );
}
