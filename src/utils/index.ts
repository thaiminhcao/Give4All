export function ConvertDate(unixTimestamp: number): string {
  // Tạo một đối tượng Date từ số Unix (nhân với 1000 vì JavaScript sử dụng mili giây)
  let date = new Date(unixTimestamp * 1000);

  // Lấy ngày, tháng, năm
  let day = date.getDate();
  let month = date.getMonth() + 1; // Tháng bắt đầu từ 0 trong JavaScript
  let year = date.getFullYear();

  // Chuyển đổi thành chuỗi có dạng dd/mm/yyyy
  let formattedDate = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year}`;

  return formattedDate;
}

export function ConvertDateString(unixTimestamp: number): string {
  // Tạo một đối tượng Date từ số Unix (nhân với 1000 vì JavaScript sử dụng mili giây)
  let date = new Date(unixTimestamp * 1000);

  // Lấy ngày, tháng, năm
  let day = date.getDate();
  let month = date.getMonth(); // Tháng bắt đầu từ 0 trong JavaScript
  let year = date.getFullYear();

  // Mảng chứa tên của các tháng
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Chuyển đổi thành chuỗi có dạng Month dd, yyyy
  let formattedDate = `${months[month]} ${day}, ${year}`;

  return formattedDate;
}
