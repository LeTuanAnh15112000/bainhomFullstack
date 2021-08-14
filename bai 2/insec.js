var list=document.querySelector('#container');
console.log(list);
var listjs=`
<table border="1" cellpadding="0" cellspacing="0">
<caption>list language</caption>
<thead>
   <tr>
    <th>Index</th>
    <th>Name language</th>
    <th>Công dụng</th>
    <th>Đối tượng sử dụng</th>
   </tr>


</thead>
<tbody>
   <tr>
    <td>1</td>
    <td>HTML</td>
    <td>Sieu văn bản</td>
    <td>Lập trình viên web</td>
   </tr>
   <tr>
    <td>2</td>
    <td>CSS</td>
    <td>Trang trí cho siêu bản trở nên đẹp hơn</td>
    <td>lập trình viên web</td>
   </tr>
   <tr>
    <td>3</td>
    <td>Javascript</td>
    <td>Thực hiện các lo gic trên trang web</td>
    <td>Lập trình viên web</td>
   </tr>
   <tr>
    <td>4</td>
    <td>PHP</td>
    <td>Sử lý cơ sở dữ liệu</td>
    <td>Lập trình viên web</td>
   </tr>

</table>

`
list.innerHTML=listjs