import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Ý', 'https://tienichhay.net/uploads/flags/shiny/48x48/it.png'),
  new Category('c2', 'Nhật Bản', 'https://tienichhay.net/uploads/flags/shiny/48x48/jp.png'),
  new Category('c3', 'Mỹ', 'https://tienichhay.net/uploads/flags/shiny/48x48/us.png'),
  new Category('c4', 'Đức', 'https://tienichhay.net/uploads/flags/shiny/48x48/de.png'),
  new Category('c5', 'Hy Lạp', 'https://tienichhay.net/uploads/flags/shiny/48x48/gr.png'),
  new Category('c6', 'Thái Lan', 'https://tienichhay.net/uploads/flags/shiny/48x48/th.png'),
  new Category('c7', 'Pháp', 'https://tienichhay.net/uploads/flags/shiny/48x48/fr.png'),
  new Category('c8', 'Việt Nam', 'https://tienichhay.net/uploads/flags/shiny/48x48/vn.png'),
  new Category('c9', 'Mexico', 'https://tienichhay.net/uploads/flags/shiny/48x48/mx.png'),
  new Category('c10', 'Ấn Độ', 'https://tienichhay.net/uploads/flags/shiny/48x48/in.png')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Mì Ý sốt cà chua',
    'rẻ',
    'đơn giản',
    'https://hangngoainhap.net.vn/upload/news/nh-bia-7732.PNG',
    20,
    [
      '4 quả cà chua',
      '1 muỗng canh dầu ô liu',
      '1 củ hành tây',
      '250g mì spaghetti',
      'Gia vị',
      'Phô mai Parmesan'
    ],
    [
      'Cắt nhỏ cà chua và hành tây.',
      'Đun sôi nước - thêm muối khi nước sôi.',
      'Cho mì vào nước sôi - nấu khoảng 10 đến 12 phút.',
      'Trong khi đó, đun nóng dầu ô liu và thêm hành tây đã cắt.',
      'Sau 2 phút, thêm cà chua, muối, tiêu và các gia vị khác.',
      'Sốt sẽ hoàn thành khi mì chín.',
      'Rắc phô mai Parmesan lên trên khi ăn.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm2',
    ['c2'],
    'Sushi',
    'đắt',
    'khó',
    'https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_1280.jpg',
    60,
    [
      '2 cốc gạo sushi',
      '2 cốc nước',
      '1/4 cốc giấm gạo',
      '1 muỗng canh đường',
      '1 muỗng cà phê muối',
      'Cá hồi tươi',
      'Rong biển',
      'Wasabi',
      'Gừng muối'
    ],
    [
      'Nấu gạo với nước theo hướng dẫn.',
      'Trộn giấm gạo, đường, muối và trộn đều với gạo đã nấu.',
      'Cắt cá hồi thành từng miếng mỏng.',
      'Trải rong biển lên chiếu tre, phủ một lớp gạo mỏng.',
      'Đặt cá hồi lên gạo và cuộn chặt.',
      'Cắt cuộn sushi thành từng miếng nhỏ.',
      'Phục vụ kèm wasabi và gừng muối.'
    ],
    true,
    false,
    false,
    true
  ),
  new Meal(
    'm3',
    ['c3'],
    'Hamburger cổ điển',
    'Đơn giản',
    'Trung bình',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g thịt bò xay',
      '1 quả trứng',
      '1 củ hành tây',
      '2 miếng bánh mì hamburger',
      'Xà lách',
      'Cà chua',
      'Phô mai',
      'Ketchup'
    ],
    [
      'Trộn thịt bò xay với trứng và hành tây băm nhuyễn.',
      'Nặn thành bánh burger và nướng mỗi bên 4-5 phút.',
      'Nướng nhẹ bánh mì hamburger.',
      'Xếp xà lách và cà chua lên bánh mì dưới.',
      'Đặt miếng thịt lên trên và phủ phô mai.',
      'Thêm ketchup tùy thích.',
      'Đậy bánh mì trên và thưởng thức.'
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'Khó',
    'Trung bình',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '4 miếng thịt bê',
      '2 quả trứng',
      '1 cốc bột mì',
      '1 cốc vụn bánh mì',
      'Dầu ăn',
      'Muối',
      'Tiêu'
    ],
    [
      'Đập dẹp miếng thịt bê.',
      'Lăn thịt qua bột mì, trứng đánh và vụn bánh mì.',
      'Đun nóng dầu trong chảo.',
      'Chiên schnitzel cho đến khi vàng đều cả hai mặt.',
      'Để ráo dầu trên giấy thấm.',
      'Phục vụ kèm với lát chanh và salad khoai tây.'
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm5',
    ['c5'],
    'Salad Hy Lạp',
    'Đơn giản',
    'Rẻ',
    'https://cdn.pixabay.com/photo/2016/05/05/02/37/greek-salad-1373225_1280.jpg',
    15,
    [
      'Cà chua',
      'Dưa chuột',
      'Hành tây đỏ',
      'Ô liu đen',
      'Phô mai Feta',
      'Dầu ô liu',
      'Giấm',
      'Oregano'
    ],
    [
      'Cắt cà chua, dưa chuột thành miếng vừa ăn.',
      'Thái mỏng hành tây đỏ.',
      'Trộn rau củ với ô liu trong tô lớn.',
      'Thêm phô mai Feta cắt khối.',
      'Rưới dầu ô liu và giấm lên trên.',
      'Rắc oregano và trộn đều.',
      'Để lạnh trước khi dùng.'
    ],
    true,
    true,
    true,
    false
  ),
  new Meal(
    'm6',
    ['c6'],
    'Pad Thai',
    'Vừa phải',
    'Trung bình',
    'https://cdn.pixabay.com/photo/2021/01/22/18/00/shrimp-5940735_1280.jpg',
    30,
    [
      'Phở khô',
      'Tôm',
      'Đậu phụ',
      'Trứng',
      'Giá đỗ',
      'Hành lá',
      'Lạc',
      'Nước mắm',
      'Đường',
      'Ớt'
    ],
    [
      'Ngâm phở trong nước ấm.',
      'Xào tôm và đậu phụ trong chảo.',
      'Đẩy sang một bên và scramble trứng.',
      'Thêm phở, giá đỗ và gia vị.',
      'Xào đều tất cả nguyên liệu.',
      'Thêm hành lá và lạc trước khi dùng.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm7',
    ['c7'],
    'Ratatouille',
    'Vừa phải',
    'Trung bình',
    'https://cdn.pixabay.com/photo/2014/09/22/14/49/ratatouille-456046_1280.jpg',
    45,
    [
      'Cà tím',
      'Bí ngòi',
      'Ớt chuông',
      'Cà chua',
      'Hành tây',
      'Tỏi',
      'Dầu ô liu',
      'Thảo mộc Provence'
    ],
    [
      'Cắt tất cả rau củ thành miếng vừa ăn.',
      'Xào hành tây và tỏi trong dầu ô liu.',
      'Thêm từng loại rau và xào nhẹ.',
      'Thêm gia vị và thảo mộc.',
      'Hầm nhỏ lửa khoảng 30 phút.',
      'Phục vụ nóng hoặc ấm.'
    ],
    true,
    true,
    true,
    false
  ),
  new Meal(
    'm8',
    ['c8'],
    'Phở Bò',
    'Vừa phải',
    'Cao',
    'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg',
    120,
    [
      'Xương bò',
      'Thịt bò',
      'Bánh phở',
      'Hành tây',
      'Gừng',
      'Gia vị (quế, hồi, đinh hương)',
      'Rau thơm',
      'Giá đỗ'
    ],
    [
      'Nấu nước dùng từ xương bò và gia vị.',
      'Lọc lấy nước dùng trong.',
      'Trụng bánh phở.',
      'Xếp thịt bò lát mỏng lên trên.',
      'Chan nước dùng nóng vào tô.',
      'Thêm rau thơm và giá đỗ khi ăn.'
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm9',
    ['c9'],
    'Tacos',
    'Đơn giản',
    'Rẻ',
    'https://cdn.pixabay.com/photo/2018/03/30/08/39/food-3274858_1280.jpg',
    30,
    [
      'Vỏ bánh tortilla',
      'Thịt bò xay',
      'Hành tây',
      'Cà chua',
      'Xà lách',
      'Phô mai',
      'Kem chua',
      'Guacamole'
    ],
    [
      'Xào thịt bò với gia vị.',
      'Hâm nóng vỏ bánh tortilla.',
      'Đặt thịt lên tortilla.',
      'Thêm rau sống và phô mai.',
      'Phục vụ kèm kem chua và guacamole.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm10',
    ['c10'],
    'Butter Chicken',
    'Vừa phải',
    'Trung bình',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    60,
    [
      'Thịt gà',
      'Sữa chua',
      'Bơ',
      'Kem',
      'Cà chua',
      'Hành tây',
      'Tỏi',
      'Gừng',
      'Gia vị garam masala'
    ],
    [
      'Ướp gà với sữa chua và gia vị.',
      'Nướng gà trong lò.',
      'Làm sốt từ cà chua, bơ và kem.',
      'Thêm gà đã nướng vào sốt.',
      'Nấu nhỏ lửa đến khi gà mềm.',
      'Phục vụ với cơm basmati.'
    ],
    false,
    false,
    false,
    true
  )
];