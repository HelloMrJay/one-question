import React from 'react';
import {Form, Input} from 'antd';
import { Store, ValidateErrorEntity } from "rc-field-form/lib/interface";
import {ColProps} from "antd/lib/grid/col";

interface Rules {
  required?: boolean,
  message?: string,
  pattern?: RegExp
}

interface FormItem {
  label: string,
  name: string,
  type: string,
  key: string,
  placeholder: string,
  labelCol: ColProps,
  rules?: Array<Rules>
}

interface FormProps {
  onFinish?: (values: Store) => void,
  onFinishFailed?: (errorInfo: ValidateErrorEntity) => void,
  fields: Array<FormItem>
}

enum InputType {
  INPUT = 'input',
  PASSWORD = 'password'
}

const genInput = (type: string, placeholder: string) => {
  switch (type) {
    case InputType.INPUT:
      return <Input style={{width: '188px'}} placeholder={placeholder} />
    case InputType.PASSWORD:
      return <Input.Password style={{width: '188px'}} placeholder={placeholder} />
    default:
      return <Input style={{width: '188px'}} placeholder={placeholder} />
  }
}

const FormComponent: React.FC<FormProps> = (props) => {
  return (
    <div className="form-container">
      <Form
        name="basic-form"
        {...props}
      >
        {
          props.fields.map(filed =>
            <Form.Item {...filed}>
              { genInput(filed.type, filed.placeholder) }
            </Form.Item>
          )
        }
      </Form>
    </div>
  )
}

export default FormComponent;
