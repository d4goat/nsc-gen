import * as React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface ComponentProps {
    name: string;
    label?: string;
    onBlur?: () => void;
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    type?: string;
    inputClass?: string;
    id?: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    rows?: number;
    [key: string]: any; // Allow additional props
}

const FormInput = React.forwardRef<any, ComponentProps>(
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
        rows = 4,
        ...props
    }, ref) => {
        const inputId = id || name;
        const labelText = label || name;

        return (
            <div className="w-full">
                <Label htmlFor={inputId} className='capitalize mb-2'>{labelText}{required && <span className="text-red-500"> *</span>}</Label>
                {type === "textarea" ? (
                    <Textarea
                        ref={ref}
                        onBlur={onBlur}
                        value={value}
                        rows={rows}
                        className={inputClass}
                        onChange={onChange}
                        id={inputId}
                        name={name}
                        placeholder={placeholder}
                        disabled={disabled}
                        required={required}
                        {...props}
                    />
                ) : (
                    <Input
                        ref={ref}
                        onBlur={onBlur}
                        value={value}
                        type={type}
                        className={inputClass}
                        onChange={onChange}
                        id={inputId}
                        name={name}
                        placeholder={placeholder}
                        disabled={disabled}
                        required={required}
                        {...props}
                    />
                )}
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        )
    }
);

export { FormInput };
