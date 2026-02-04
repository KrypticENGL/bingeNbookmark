import './Input.css';

const Input = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    helperText,
    required = false,
    disabled = false,
    className = '',
    ...props
}) => {
    const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`input-wrapper ${className}`}>
            {label && (
                <label htmlFor={inputId} className="input-label">
                    {label}
                    {required && <span className="input-required">*</span>}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                className={`input ${error ? 'input--error' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                {...props}
            />
            {error && <span className="input-error-text">{error}</span>}
            {helperText && !error && (
                <span className="input-helper-text">{helperText}</span>
            )}
        </div>
    );
};

export default Input;
