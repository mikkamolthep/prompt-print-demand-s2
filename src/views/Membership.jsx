export default function Membership(){
  return (
    <>
      <h2>ข้อมูลส่วนตัว</h2>
      <div>
        <label>ชื่อ-นามสกุล</label>
        <input type="text" value="aaa bbb"/>
        <label>อีเมล</label>
        <input type="email" value="ab@mail.com"/>
        <label>เบอร์โทรศัพท์</label>
        <input type="tel" value="09x-xxx-xxxx"/>
        <label>ที่อยู่จัดส่ง</label>
        <span>111/22 กรุงเทพมหานคร 12345</span>
        <button>แก้ไขข้อมูล</button>
      </div>

      <h2>ประวัติการสั่งซื้อ</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>เลขที่สั่งซื้อ</th>
              <th>วันที่สั่งซื้อ</th>
              <th>สถานะ</th>
              <th>ยอดรวม</th>
              <th>รายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#123</td>
              <td>12/12/2568</td>
              <td>รอชำระ</td>
              <td>568฿</td>
              <td><button>ดูรายละเอียด</button></td>
            </tr>
            <tr>
              <td>#124</td>
              <td>15/11/2568</td>
              <td>สำเร็จ</td>
              <td>1250฿</td>
              <td><button>ดูรายละเอียด</button></td>
            </tr>
            <tr>
              <td>#125</td>
              <td>07/09/2568</td>
              <td>สำเร็จ</td>
              <td>751฿</td>
              <td><button>ดูรายละเอียด</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}