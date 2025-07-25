import React from 'react';
import styled, { css } from 'styled-components';

// Input Props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

// Textarea Props
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  helperText?: string;
}

// Select Props
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  helperText?: string;
  options: Array<{ value: string; label: string }>;
}

// Checkbox Props
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

// Radio Props
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

// Form Group Props
interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
}

// Styled Components
const FormControl = styled.div<{ fullWidth?: boolean; hasError?: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div<{ position: 'start' | 'end' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position }) => position === 'start' ? 'left: ${({ theme }) => theme.spacing.sm};' : 'right: ${({ theme }) => theme.spacing.sm};'}
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey};
  pointer-events: none;
`;

const StyledInput = styled.input<{ hasError?: boolean; hasStartIcon?: boolean; hasEndIcon?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  border: ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color ${({ theme }) => theme.transitions.normal}, box-shadow ${({ theme }) => theme.transitions.normal};
  
  ${({ hasStartIcon }) => hasStartIcon && css`
    padding-left: ${({ theme }) => theme.spacing.xl};
  `}
  
  ${({ hasEndIcon }) => hasEndIcon && css`
    padding-right: ${({ theme }) => theme.spacing.xl};
  `}
  
  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme, hasError }) => 
      hasError ? `${theme.colors.error}33` : `${theme.colors.primary}33`};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey}15;
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    opacity: 0.7;
  }
`;

const StyledTextarea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  border: 1px solid ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color ${({ theme }) => theme.transitions.normal}, box-shadow ${({ theme }) => theme.transitions.normal};
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme, hasError }) => 
      hasError ? `${theme.colors.error}33` : `${theme.colors.primary}33`};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey}15;
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    opacity: 0.7;
  }
`;

const StyledSelect = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  border: 1px solid ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color ${({ theme }) => theme.transitions.normal}, box-shadow ${({ theme }) => theme.transitions.normal};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.spacing.sm} center;
  
  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme, hasError }) => 
      hasError ? `${theme.colors.error}33` : `${theme.colors.primary}33`};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey}15;
    cursor: not-allowed;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StyledCheckbox = styled.input`
  margin-right: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StyledRadio = styled.input`
  margin-right: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const HelperText = styled.p<{ hasError?: boolean }>`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.grey};
`;

const StyledFormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

// Component Implementations
const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  helperText,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <FormControl fullWidth={fullWidth} hasError={!!error}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        {startIcon && <IconWrapper position="start">{startIcon}</IconWrapper>}
        <StyledInput 
          hasError={!!error} 
          hasStartIcon={!!startIcon} 
          hasEndIcon={!!endIcon} 
          {...props} 
        />
        {endIcon && <IconWrapper position="end">{endIcon}</IconWrapper>}
      </InputWrapper>
      {(helperText || error) && (
        <HelperText hasError={!!error}>{error || helperText}</HelperText>
      )}
    </FormControl>
  );
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  fullWidth = false,
  helperText,
  ...props
}) => {
  return (
    <FormControl fullWidth={fullWidth} hasError={!!error}>
      {label && <Label>{label}</Label>}
      <StyledTextarea hasError={!!error} {...props} />
      {(helperText || error) && (
        <HelperText hasError={!!error}>{error || helperText}</HelperText>
      )}
    </FormControl>
  );
};

const Select: React.FC<SelectProps> = ({
  label,
  error,
  fullWidth = false,
  helperText,
  options,
  ...props
}) => {
  return (
    <FormControl fullWidth={fullWidth} hasError={!!error}>
      {label && <Label>{label}</Label>}
      <StyledSelect hasError={!!error} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {(helperText || error) && (
        <HelperText hasError={!!error}>{error || helperText}</HelperText>
      )}
    </FormControl>
  );
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  helperText,
  ...props
}) => {
  return (
    <FormControl hasError={!!error}>
      <CheckboxContainer>
        <StyledCheckbox type="checkbox" {...props} />
        <Label>{label}</Label>
      </CheckboxContainer>
      {(helperText || error) && (
        <HelperText hasError={!!error}>{error || helperText}</HelperText>
      )}
    </FormControl>
  );
};

const Radio: React.FC<RadioProps> = ({
  label,
  error,
  helperText,
  ...props
}) => {
  return (
    <FormControl hasError={!!error}>
      <RadioContainer>
        <StyledRadio type="radio" {...props} />
        <Label>{label}</Label>
      </RadioContainer>
      {(helperText || error) && (
        <HelperText hasError={!!error}>{error || helperText}</HelperText>
      )}
    </FormControl>
  );
};

const FormGroup: React.FC<FormGroupProps> = ({ children, className }) => {
  return <StyledFormGroup className={className}>{children}</StyledFormGroup>;
};

const Form = {
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Group: FormGroup,
};

export default Form;