"use client"

import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import {
  Controller,
  FieldError as RHFFieldError,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form"

// ── InputField ───────────────────────────────────────────────────────────────

interface InputFieldProps<TFormValues extends FieldValues> {
  name: FieldPath<TFormValues>
  form: UseFormReturn<TFormValues>
  placeholder?: string
  label?: string
  type?: React.HTMLInputTypeAttribute
  description?: string
  className?: string
}

export const InputField = <TFormValues extends FieldValues>({
  name,
  form,
  placeholder,
  label,
  type,
  description,
  className,
}: InputFieldProps<TFormValues>) => {
  const { control, formState } = form
  const error = formState.errors[name] as RHFFieldError | undefined
  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Field>
          {label && (
            <FieldLabel htmlFor={`input-field-${name}`} className="text-white font-semibold">{label}</FieldLabel>
          )}
          <div className="relative">
            <Input
              id={`input-field-${name}`}
              type={inputType}
              placeholder={placeholder}
              className={cn("rounded-full border-[#4C5C6B] h-12 px-4 placeholder:text-gray-400", className)}
              {...field}
            />
            {type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            )}
          </div>
          {description && <FieldDescription>{description}</FieldDescription>}
          {error?.message && <FieldError className="text-xs text-red-500">{error.message}</FieldError>}
        </Field>
      )}
    />
  )
}

// ── SelectField ──────────────────────────────────────────────────────────────

interface SelectFieldProps<TFormValues extends FieldValues> {
  name: FieldPath<TFormValues>
  form: UseFormReturn<TFormValues>
  label?: string
  description?: string
  placeholder?: string
  /** Pass <SelectItem> elements as children */
  children: React.ReactNode
  className?: string
}

export const SelectField = <TFormValues extends FieldValues>({
  name,
  form,
  label,
  description,
  placeholder,
  children,
  className,
}: SelectFieldProps<TFormValues>) => {
  const { control, formState } = form
  const error = formState.errors[name] as RHFFieldError | undefined
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Field>
          {label && <FieldLabel>{label}</FieldLabel>}
          <Select value={field.value ?? ""} onValueChange={field.onChange}>
            <SelectTrigger
              ref={field.ref}
              onBlur={field.onBlur}
              className={cn("h-10 w-full bg-input", className)}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>{children}</SelectContent>
          </Select>
          {description && <FieldDescription>{description}</FieldDescription>}
          {error?.message && <FieldError>{error.message}</FieldError>}
        </Field>
      )}
    />
  )
}

// ── TextareaField ─────────────────────────────────────────────────────────────

interface TextareaFieldProps<TFormValues extends FieldValues> {
  name: FieldPath<TFormValues>
  form: UseFormReturn<TFormValues>
  label?: string
  description?: string
  placeholder?: string
  rows?: number
  className?: string
}

export const TextareaField = <TFormValues extends FieldValues>({
  name,
  form,
  label,
  description,
  placeholder,
  rows = 3,
  className,
}: TextareaFieldProps<TFormValues>) => {
  const { control, formState } = form
  const error = formState.errors[name] as RHFFieldError | undefined
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Field>
          {label && (
            <FieldLabel htmlFor={`textarea-field-${name}`}>{label}</FieldLabel>
          )}
          <Textarea
            id={`textarea-field-${name}`}
            rows={rows}
            placeholder={placeholder}
            className={cn("resize-none", className)}
            {...field}
          />
          {description && <FieldDescription>{description}</FieldDescription>}
          {error?.message && <FieldError>{error.message}</FieldError>}
        </Field>
      )}
    />
  )
}

// ── CheckboxField ─────────────────────────────────────────────────────────────

interface CheckboxFieldProps<TFormValues extends FieldValues> {
  name: FieldPath<TFormValues>
  form: UseFormReturn<TFormValues>
  label: string
  description?: string
}

export const CheckboxField = <TFormValues extends FieldValues>({
  name,
  form,
  label,
  description,
}: CheckboxFieldProps<TFormValues>) => {
  const { control, formState } = form
  const error = formState.errors[name] as RHFFieldError | undefined
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Field orientation="horizontal">
          <Checkbox
            id={`checkbox-field-${name}`}
            checked={!!field.value}
            onCheckedChange={(checked) => field.onChange(checked === true)}
            onBlur={field.onBlur}
            ref={field.ref}
          />
          <Label htmlFor={`checkbox-field-${name}`} className="cursor-pointer font-normal">
            {label}
          </Label>
          {description && <FieldDescription>{description}</FieldDescription>}
          {error?.message && <FieldError>{error.message}</FieldError>}
        </Field>
      )}
    />
  )
}

// ── RadioGroupField ───────────────────────────────────────────────────────────

export interface RadioOption {
  label: string
  value: string
}

interface RadioGroupFieldProps<TFormValues extends FieldValues> {
  name: FieldPath<TFormValues>
  form: UseFormReturn<TFormValues>
  label?: string
  options: RadioOption[]
  description?: string
}

export const RadioGroupField = <TFormValues extends FieldValues>({
  name,
  form,
  label,
  options,
  description,
}: RadioGroupFieldProps<TFormValues>) => {
  const { control, formState } = form
  const error = formState.errors[name] as RHFFieldError | undefined
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Field>
          {label && (
            <p className="text-sm font-medium leading-snug text-foreground">
              {label}
            </p>
          )}
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            onBlur={field.onBlur}
            className="flex flex-wrap gap-4"
          >
            {options.map((option) => (
              <div key={option.value} className="flex items-center gap-2">
                <RadioGroupItem
                  id={`radio-${name}-${option.value}`}
                  value={option.value}
                />
                <Label
                  htmlFor={`radio-${name}-${option.value}`}
                  className="cursor-pointer font-normal"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {description && <FieldDescription>{description}</FieldDescription>}
          {error?.message && <FieldError>{error.message}</FieldError>}
        </Field>
      )}
    />
  )
}
