import { FormInputLabel, Group, Input } from './form-input.styles'

const FormInput = ({ label, ...otherProps}) => {
  return (
    <Group>
      <Input {...otherProps} />
      <FormInputLabel shrink={otherProps.value.length}>
        {label}
      </FormInputLabel>
    </Group>
  )
}

export default FormInput