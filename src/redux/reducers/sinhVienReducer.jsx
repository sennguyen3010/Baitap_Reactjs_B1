const stateDefault = {
  svInfo: {
    maSV: '',
    hoTen: '',
    soDienThoai: '',
    email: '',
  },
  arrSV: [
    {
      maSV: 1,
      hoTen: 'Nguyễn Văn A',
      soDienThoai: '0938111111',
      email: 'nguyenvana@gmail.com',
    },
    {
      maSV: 2,
      hoTen: 'Nguyễn Văn B',
      soDienThoai: '0938222222',
      email: 'nguyenvanb@gmail.com',
    },
  ],
  error: {
    maSV: '',
    hoTen: '',
    soDienThoai: '',
    email: '',
  },
  search: '',
};

export const sinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'DELETE': {
      let maSVDel = action.payload;
      let arrSVUpdate = state.arrSV.filter((sv) => sv.maSV !== maSVDel);
      state.arrSV = arrSVUpdate;
      return { ...state };
    }
    case 'HANDLE_CHANGE': {
      // lấy dữ liệu từ action gửi lên
      const { id, value, dataType } = action.payload;

      //b2: clone state
      let svInfoUpdate = { ...state.svInfo };
      let errorUpdate = { ...state.error };
      // b3: thay đổi state
      //svInfo
      svInfoUpdate[id] = value;
      //error
      let messError = '';
      if (value.trim() === '') {
        messError = ' không được để trống!';
      } else {
        if (dataType == 'number') {
          let regexNumber = /^\d+$/;
          if (!regexNumber.test(value)) {
            messError = 'số điện thoại phải là số';
          }
        }
        if (dataType == 'email') {
          let regexEmail =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if (!regexEmail.test(value)) {
            messError = 'email không hợp lệ';
          }
        }
      }
      errorUpdate[id] = messError;
      //b4: gán lại state
      state.svInfo = svInfoUpdate;
      state.error = errorUpdate;
      return { ...state };
    }
    case 'HANDLE_SUBMIT': {
      const { svInfo } = action.payload;
      let arrSVUpdate = [...state.arrSV];
      let errorUpdate = { ...state.error };
      for (let id in errorUpdate) {
        if (errorUpdate[id] !== '') {
          return { ...state };
        }
      }
      for (let id in svInfo) {
        if (svInfo[id] == '') {
          return { ...state };
        }
      }
      arrSVUpdate.push(svInfo);
      state.arrSV = arrSVUpdate;
      return { ...state };
    }
    case 'EDIT': {
      let index = action.payload;
      let svInfoUpdate = { ...state.svInfo };
      svInfoUpdate = state.arrSV[index];
      state.svInfo = svInfoUpdate;
      return { ...state };
    }
    case 'UPDATE': {
      let maSVClick = action.payload;
      let arrSVUpdate = [...state.arrSV];
      let svInfoUpdate = { ...state.svInfo };

      let errorUpdate = { ...state.error };
      for (let id in errorUpdate) {
        if (errorUpdate[id] !== '') {
          return { ...state };
        }
      }
      for (let id in svInfoUpdate) {
        if (svInfoUpdate[id] == '') {
          return { ...state };
        }
      }

      let index = arrSVUpdate.findIndex((sv) => sv.maSV == maSVClick);
      if (index !== -1) {
        arrSVUpdate[index] = state.svInfo;
      }
      state.arrSV = arrSVUpdate;
      return { ...state };
    }
    case 'SEARCH': {
      let value = action.payload;
      state.search = value;
      return { ...state };
    }
    default:
      return state;
  }
};
