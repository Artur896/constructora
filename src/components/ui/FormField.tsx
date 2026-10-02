"use client";

import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  className?: string;
};

type InputFieldProps = BaseProps & {
  as?: "input";
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

type TextareaFieldProps = BaseProps & {
  as: "textarea";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
};

type SelectFieldProps = BaseProps & {
  as: "select";
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
};

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

export default function FormField(props: FormFieldProps) {
  const { label, name, error, required, className } = props;

  const fieldBase =
    "w-full bg-transparent border-b border-white/20 py-3 text-paper placeholder:text-architect/70 focus:outline-none focus:border-bronze transition-colors duration-300";

  return (
    <div className={cn("relative", className)}>
      <label htmlFor={name} className="label-sm text-architect block mb-2">
        {label} {required && <span className="text-bronze">*</span>}
      </label>

      {props.as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={props.rows ?? 4}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange(e.target.value)}
          className={cn(fieldBase, "resize-none")}
          aria-invalid={!!error}
        />
      ) : props.as === "select" ? (
        <select
          id={name}
          name={name}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          className={cn(fieldBase, "appearance-none")}
          aria-invalid={!!error}
        >
          <option value="" disabled>
            {props.placeholder ?? "Seleccionar"}
          </option>
          {props.options.map((opt) => (
            <option key={opt} value={opt} className="text-carbon">
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={props.type ?? "text"}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange(e.target.value)}
          className={fieldBase}
          aria-invalid={!!error}
        />
      )}

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
