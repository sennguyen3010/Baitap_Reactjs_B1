import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSinhVien extends Component {
  handleChange = (event) => {
    const { value, id } = event.target;
    let dataType = event.target.getAttribute('datatype');

    const action = {
      type: 'HANDLE_CHANGE',
      payload: {
        id: id,
        value: value,
        dataType: dataType,
      },
    };
    this.props.dispatch(action);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //gửi dữ liệu lên redux
    const action = {
      type: 'HANDLE_SUBMIT',
      payload: {
        svInfo: this.props.svInfo,
      },
    };
    this.props.dispatch(action);
  };
  search = (e) => {
    let value = e.target.value;
    const action = {
      type: 'SEARCH',
      payload: value,
    };
    this.props.dispatch(action);
  };

  render() {
    let { maSV, hoTen, soDienThoai, email } = this.props.svInfo;
    let { error } = this.props;

    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark ">
          <h3 className="text-white">Thông tin sinh viên</h3>
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>Mã SV</p>
              <input
                value={maSV}
                id="maSV"
                className="form-control"
                onInput={this.handleChange}
              />
              <span className="text-danger">{error.maSV}</span>
            </div>
            <div className="form-group mt-2">
              <p>Số điện thoại</p>
              <input
                value={soDienThoai}
                id="soDienThoai"
                datatype="number"
                className="form-control"
                onInput={this.handleChange}
              />
              <span className="text-danger">{error.soDienThoai}</span>
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <p>Họ tên</p>
              <input
                value={hoTen}
                id="hoTen"
                className="form-control"
                onInput={this.handleChange}
              />
              <span className="text-danger">{error.hoTen}</span>
            </div>
            <div className="form-group mt-2">
              <p>Email</p>
              <input
                value={email}
                id="email"
                className="form-control"
                datatype="email"
                onInput={this.handleChange}
              />
              <span className="text-danger">{error.email}</span>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Thêm sinh viên</button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={() => {
              const action = {
                type: 'UPDATE',
                payload: maSV,
              };
              this.props.dispatch(action);
            }}
          >
            Cập nhật
          </button>
        </div>
        <div className="row m-3">
          <div className="col-6">
            <div className="form-group">
              <input
                id="search"
                className="form-control"
                placeholder="Search name"
                onChange={this.search}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  svInfo: state.sinhVienReducer.svInfo,
  error: state.sinhVienReducer.error,
  arrSV: state.sinhVienReducer.arrSV,
});

export default connect(mapStateToProps)(FormSinhVien);
