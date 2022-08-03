//DOM
function layGiaTri(id) {
  return document.getElementById(id).value;
}

let tagSoHienThi = [];

function laySo() {
  let tagSoDauVao = layGiaTri("soDauVao");
  // console.log(typeof tagSoDauVao); //string

  //check nếu input không nhập gì vẫn thêm số 0 vào mảng
  if (!tagSoDauVao) {
    return tagSoHienThi;
  }

  tagSoDauVao = +tagSoDauVao;

  //Thêm số vào mảng
  tagSoHienThi.push(tagSoDauVao);

  // sau khi push value vào mảng thì set input về "" rỗng, làm mất đi input đã nhập
  document.getElementById("soDauVao").value = "";
  return tagSoHienThi;
}

function themSo() {
  document.getElementById("hienThi").value = laySo();
}

//Tính Tổng Số Dương
function tinhTongSoDuong() {
  let tagSo = laySo();
  //Dùng For
  // let tong = 0;
  // for (let i = 0; i < tagSo.lfength; i++) {
  //   if (tagSo[i] > 0) {
  //     tong += tagSo[i];
  //   } else break;
  // }

  //Dùng Reduce
  let tong = tagSo.reduce(
    (total, value) => (value > 0 ? total + value : total),
    0
  );
  document.getElementById("ketQua1").value = "Tổng Số Dương Là : " + tong;
}

//Đếm Số Dương
function demSoDuong() {
  let tagSo = laySo();
  let soHang = 0;

  //dùng For
  // for (let i = 0; i < tagSo.length; i++) {
  //   if (tagSo[i] > 0) {
  //     soHang++;
  //   }
  // }

  //dùng filter
  let soDuong = tagSo.filter((value) => {
    if (value > 0) {
      soHang++;
    }
    return soHang;
  });
  document.getElementById("ketQua2").value = `Số Dương: ${soHang}`;
}

//Tìm Số Nhỏ Nhất
function soNhoNhat() {
  let tagSo = laySo();

  //Dùng For
  // let tagSoNhoNhat = tagSo[0];
  // for (let i = 1; i < tagSo.length; i++) {
  //   if (tagSo[i] < tagSoNhoNhat) {
  //     tagSoNhoNhat = tagSo[i];
  //   }
  // }

  // dùng Math.min
  let tagSoNhoNhat = Math.min(...tagSo);

  //Dùng hàm sort
  // let sapXepSo = tagSo.sort((a, b) => a - b);
  // let tagSoNhoNhat = sapXepSo[0];

  //Dùng hàm reduce
  // let tagSoNhoNhat = tagSo.reduce((ketQua, giaTri) =>
  //   ketQua < giaTri ? ketQua : giaTri
  // );
  document.getElementById("ketQua3").value = "Số nhỏ Nhất Là : " + tagSoNhoNhat;
}

//Tìm số dương nhỏ nhất
function soDuongNhoNhat() {
  let tagSo = laySo();
  let mangSoDuong = [];

  //dùng For lọc số dương trong mảng
  for (let i = 0; i < tagSo.length; i++) {
    if (tagSo[i] > 0) {
      mangSoDuong.push(tagSo[i]);
    }
  }

  // dùng ( array.length === 0 ) hoặc ( !array.length ) để check mảng có rỗng hay không
  if (!mangSoDuong.length) {
    document.getElementById("ketQua4").value = "Mảng không có số dương !";
    return;
  }
  // Dùng hàm Sort
  let soDuongNhoNhat = mangSoDuong.sort((a, b) => a - b);
  document.getElementById("ketQua4").value =
    "Số Dương Nhỏ Nhất là : " + soDuongNhoNhat[0];

  //Dùng Math.min
  // let soDuongNhoNhat = Math.min(...mangSoDuong);
  // document.getElementById("ketQua4").value =
  //   "Số Dương Nhỏ Nhất là : " + soDuongNhoNhat;

  //Dùng reduce
  // let tagSoDuongNhoNhat = mangSoDuong.reduce((bienTam, giaTri) => {
  //   return bienTam < giaTri ? bienTam : giaTri;
  // });
  // document.getElementById("ketQua4").value =
  //   "Số Dương Nhỏ Nhất là : " + tagSoDuongNhoNhat;
}

//Tìm Số Chẵn Cuối Cùng
function soChanCuoiCung() {
  let tagSo = laySo();
  let mangSoChan = [];

  // dùng for để lọc mảng số chẵn
  for (let i = 0; i < tagSo.length; i++) {
    if (tagSo[i] % 2 == 0) {
      mangSoChan.push(tagSo[i]);
    }
  }

  //Nếu mảng không có giá trị chẵn ouput trả về -1
  if (mangSoChan == "") {
    mangSoChan.push(-1);
    return (document.getElementById("ketQua5").value = mangSoChan);
  }

  let soChanCuoiCung = mangSoChan.pop();
  document.getElementById("ketQua5").value =
    "Số Chẵn Cuối Cùng là : " + soChanCuoiCung;
}

//Đổi chỗ
function doiCho() {
  let tagSo = laySo();
  let viTri1 = +layGiaTri("doiCho1");
  let viTri2 = +layGiaTri("doiCho2");

  doiViTri(tagSo, viTri1, viTri2);
  document.getElementById("ketQua6").value = "Vị Trí Sau Khi Đổi: " + tagSo;
}
function doiViTri(array, viTri1, viTri2) {
  let soHang = array[viTri1 - 1];
  array[viTri1 - 1] = array[viTri2 - 1];
  array[viTri2 - 1] = soHang;
}
//Sắp Xếp Tăng Dần
function sapXep() {
  let tagSo = laySo();

  //Dùng for
  // let soHang = 0;
  // for (let i = 0; i < tagSo.length; i++) {
  //   for (let j = 0; j < tagSo.length; j++) {
  //     if (tagSo[i] < tagSo[j]) {
  //       soHang = tagSo[i];
  //       tagSo[i] = tagSo[j];
  //       tagSo[j] = soHang;
  //     }
  //   }
  // }

  // document.getElementById("ketQua7").value = "Mảng sau khi sắp xếp :" + tagSo;

  //Dùng hàm sort
  let mangTangDan = tagSo.sort((a, b) => a - b);
  document.getElementById("ketQua7").value =
    "Mảng sau khi sắp xếp :" + mangTangDan;
}

//Tìm Số Nguyên Tố Đầu Tiên
function kiemtraSNT(value) {
  if (value < 2) {
    return false;
  }
  for (let i = 2; i < value - 1; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}
function timSoNguyenToDauTien() {
  let tagSo = laySo();

  for (let i = 0; i < tagSo.length; i++) {
    if (kiemtraSNT(tagSo[i])) {
      return (document.getElementById("ketQua8").value =
        "Số Nguyên Tố Đầu Tiên là : " + tagSo[i]);
    }
  }
  document.getElementById("ketQua8").value = -1;
}

//Đếm Số Nguyên
function demSoNguyen() {
  let tagSo = laySo();
  let soNguyen = 0;
  //Dùng for
  // for (let i = 0; i < tagSo.length; i++) {
  //   if (Number.isInteger(tagSo[i])) {
  //     soNguyen++;
  //   }
  // }

  //Dùng forEach
  // tagSo.forEach((value) => (Number.isInteger(value) ? soNguyen++ : value));

  //Dùng filter
  let tagSoNguyen = tagSo.filter((value) =>
    Number.isInteger(value) ? soNguyen++ : value
  );

  document.getElementById("ketQua9").value = "Số Nguyên : " + soNguyen;
}

//So Sánh Số Lượng Số Âm & Số Dương
function soSanh() {
  let tagSo = laySo();
  let soAm = 0;
  let soDuong = 0;
  //Dùng for

  for (let i = 0; i < tagSo.length; i++) {
    if (tagSo[i] === 0) {
      continue;
    } else if (tagSo[i] > 0) {
      soDuong++;
    } else {
      soAm++;
    }
  }

  //Dùng filter
  // let phanLoaiSoAmDuong = tagSo.filter((value) =>
  //   value < 0 ? soAm++ : soDuong++
  // );

  if (soDuong > soAm) {
    return (document.getElementById("ketQua10").value = "Số Dương > Số Âm");
  } else if (soDuong < soAm) {
    return (document.getElementById("ketQua10").value = "Số Dương < Số Âm");
  } else {
    return (document.getElementById("ketQua10").value = "Số Dương = Số Âm");
  }
}
