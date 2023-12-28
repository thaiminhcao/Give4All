export function sortDataByProjectList(
  projectList: [] | string,
  data: [],
  functionLen: number
) {
  // Khởi tạo một Map rỗng để lưu kết quả
  let mapResult = new Map();
  // Duyệt qua mảng projectList
  let len = 1;
  if (typeof projectList === `string`) {
    len = 1;
    // Lấy address từ projectList
    let address = projectList;
    // Tạo một đối tượng mới với các trường tương ứng từ data
    let obj = {
      title: data.at(0),
      description: data.at(1),
      imageURL: data.at(2),
      raised: Number(data.at(3)),
      expiresAt: String(data.at(4)),
      status: data.at(5),
    };
    // Thêm cặp key-value vào Map
    mapResult.set(address, obj);
    return mapResult;
  } else {
    len = projectList.length;
  }
  for (let i = 0; i < len; i++) {
    // Lấy address từ projectList
    let address = projectList[i];
    // Tạo một đối tượng mới với các trường tương ứng từ data
    let obj = {
      title: data[i * functionLen],
      description: data[i * functionLen + 1],
      imageURL: data[i * functionLen + 2],
      raised: Number(data[i * functionLen + 3]),
      expiresAt: String(data[i * functionLen + 4]),
      status: data[i * functionLen + 5],
    };
    // Thêm cặp key-value vào Map
    mapResult.set(address, obj);
  }
  // Trả về Map kết quả
  return mapResult;
}
export function charToColor(char: string) {
  let code = char.charCodeAt(0);
  let hex = code.toString(16);
  let color = '#' + hex + Math.floor(Math.random() * 0xffff).toString(16);
  return color;
}
