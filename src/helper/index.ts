function sortDataByProjectList(projectList: [] | string, data: []) {
  // Khởi tạo một Map rỗng để lưu kết quả
  let mapResult = new Map();
  // Duyệt qua mảng projectList
  let len = 1;
  if (typeof projectList === `string`) {
    len = 1;
  } else {
    len = projectList.length;
  }
  for (let i = 0; i < len; i++) {
    // Lấy address từ projectList
    let address = projectList[i];
    // Tạo một đối tượng mới với các trường tương ứng từ data
    let obj = {
      title: data[i * 6],
      description: data[i * 6 + 1],
      imageURL: data[i * 6 + 2],
      raised: Number(data[i * 6 + 3]),
      expiresAt: String(data[i * 6 + 4]),
      status: data[i * 6 + 5],
    };
    // Thêm cặp key-value vào Map
    mapResult.set(address, obj);
  }
  // Trả về Map kết quả
  return mapResult;
}

export default sortDataByProjectList;
