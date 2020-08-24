import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { render } from 'react-dom';

interface Props {
  title?: 'Warning' | 'Info' | 'Error' | 'Confirmation';
  message?: string;
}

interface State {
  isOpen: boolean;
  confirmProps: Props;
}

let resolve: any;

class DialogService extends Component<Props, State> {

  constructor(props: Props = {}) {
    super(props);

    this.state = {
      isOpen: false,
      confirmProps: {
        title: 'Confirmation',
        message: 'Are you sure?'
      }
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.show = this.show.bind(this);
  }

  static create(props: Props = {}) {
    const containerElement = document.createElement('div');
    document.body.appendChild(containerElement);
    return render(<DialogService title="Confirmation" message="Are you sure?"/>, containerElement);
  }

  handleCancel() {
    this.setState({isOpen: false});
    resolve(false);
  }

  handleConfirm() {
    this.setState({isOpen: false});
    resolve(true);
  }

  show = (props: Props = {}): any => {
    this.setState({isOpen: true, confirmProps: props});
    return new Promise((res) => {
      resolve = res;
    });
  };

  render() {
    return (
      <ReactModal
        isOpen={this.state.isOpen!}
        contentLabel="Minimal Modal Example"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex justify-between items-center mx-4 mt-4 border-green-900 border-b-2">
          <h2 className="text-green-900 text-2xl font-bold">{this.state.confirmProps.title}</h2>
          <button onClick={() => this.handleCancel()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                 className="fill-current text-green-800 hover:text-green-600">
              <path className="heroicon-ui"
                    d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
            </svg>
          </button>
        </div>
        <div className="container p-4">
          <h2>{this.state.confirmProps.message}</h2>
          <div className="flex justify-evenly items-center mx-4 my-4">
            <button onClick={() => this.handleConfirm()}
                    className="bg-transparent hover:bg-gray-700 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded w-56">
              Yes
            </button>
            <button onClick={() => this.handleCancel()}
                    className="bg-transparent hover:bg-gray-700 text-green-700 font-semibold py-2 px-4 border border-green-500 rounded w-56">
              No
            </button>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default DialogService.create() as any;
