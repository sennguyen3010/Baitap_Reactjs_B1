import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableSinhVien extends Component {
  render() {
    let { arrSV, search } = this.props;
    const arrSVFilter = arrSV.filter((sv) => {
      return (
        sv.hoTen
          .toLocaleLowerCase()
          .trim()
          .indexOf(search.toLocaleLowerCase().trim()) != -1
      );
    });
    // console.log(arrSV);
    // console.log(arrSVFilter);
    return (
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrSVFilter.map((sv, index) => {
            return (
              <tr key={index}>
                <td>{sv.maSV}</td>
                <td>{sv.hoTen}</td>
                <td>{sv.soDienThoai}</td>
                <td>{sv.email}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      const action = {
                        type: 'DELETE',
                        payload: sv.maSV,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Xoá
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      const action = {
                        type: 'EDIT',
                        payload: index,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSV: state.sinhVienReducer.arrSV,
  search: state.sinhVienReducer.search,
});

export default connect(mapStateToProps)(TableSinhVien);
