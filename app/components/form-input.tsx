import * as React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface ComponentProps {
    name: string;
    label?: string;
    onBlur?: () => void;
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    type?: string;
    inputClass?: string;
    id?: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    [key: string]: any; // Allow additional props
}

const FormInput = React.forwardRef<HTMLInputElement, ComponentProps>(
    ({
        name,
        label,
        onBlur,
        value,
        onChange,
        error,
        type = "text",
        inputClass = "",
        id,
        required = false,
        placeholder,
        disabled = false,
        ...props
    }, ref) => {
        const inputId = id || name;
        const labelText = label || name;

        return (
            <div className="w-full">
                <Label htmlFor={inputId} className='capitalize mb-2'>{labelText}{required && <span className="text-red-500"> *</span>}</Label>
                <Input
                    ref={ref}
                    onBlur={onBlur}
                    value={value}
                    type={type}
                    className={inputClass}
                    onChange={onChange}
                    id={inputId}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    {...props}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        )
    }
);

export { FormInput };