import React from 'react';
import { Modal } from 'antd';

export interface WithModalProps {
  onCancel: () => void,
  onOk: () => void,
  visible: boolean,
  title: string,
  cancelText?: string,
  okText?: string
}

const withModal = <P extends WithModalProps>(WrappedComponent: React.ComponentType<P & WithModalProps>) => {
  return class ModalContainer extends React.Component<P & WithModalProps, {}>{
    render() {
      return (
        <Modal
          {...this.props}
          cancelText={this.props.cancelText || '取 消'}
          okText={this.props.okText || '确 定'}
        >
          <WrappedComponent {...this.props as P} />
        </Modal>
      );
    }
  }
}

export default withModal;
