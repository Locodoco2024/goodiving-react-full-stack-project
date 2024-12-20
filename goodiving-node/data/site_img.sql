-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2024 年 11 月 20 日 04:31
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `goodiving`
--

-- --------------------------------------------------------

--
-- 資料表結構 `site_img`
--

CREATE TABLE `site_img` (
  `img_id` int(11) NOT NULL,
  `site_id` int(11) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `site_intro` varchar(500) DEFAULT NULL,
  `img_main` tinyint(1) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `site_img`
--

INSERT INTO `site_img` (`img_id`, `site_id`, `img_url`, `site_intro`, `img_main`, `create_at`) VALUES
(1, 1, 'green004.jpg', '三塊石是綠島最受歡迎的潛點之一，以其獨特的地形和生態系統而著稱。潛入水中，首先看到的是三塊巨石並排而立，像是大海中的天然屏障，形成一片絕佳的觀察區域。', 0, '2024-11-17 16:23:09'),
(2, 1, 'green005.jpg', '這裡的水深約在 10 至 30 米之間，能見度通常很好，常見各種熱帶魚群在岩石周圍游動。珊瑚覆蓋在石頭表面，為多樣化的生物提供棲息地。偶爾還能發現隱藏的海鰻和裸鰓類。', 1, '2024-11-17 16:23:09'),
(3, 1, 'green006.jpg', '三塊石的水流相對平穩，適合不同等級的潛水者。除了壯麗的岩石景觀，這裡還是一個適合拍攝水下風景的地方，吸引著無數愛好水攝的潛水者。', 0, '2024-11-17 16:23:09'),
(4, 2, 'green007.jpg', '仙人疊石以層層堆疊的巨岩聞名，宛如一座大自然的海底雕塑。潛入水中，那些錯落有致的岩石像是仙人巧手打造的藝術品，讓人驚嘆不已。', 0, '2024-11-17 16:23:09'),
(5, 2, 'green008.jpg', '這裡的水深範圍在 10 至 20 米，適合初中級潛水者。除了壯觀的岩石地形，這裡的水域還孕育了多樣的海洋生態，包括小丑魚、石斑魚以及豐富的珊瑚種類。', 0, '2024-11-17 16:23:09'),
(6, 2, 'green009.jpg', '仙人疊石的特殊地形提供了豐富的探險感，裂縫和洞穴裡隱藏著各種驚喜。這裡的寧靜氛圍與自然美景讓每位潛水者都流連忘返。', 1, '2024-11-17 16:23:09'),
(7, 3, 'green010.jpg', '教堂潛點因其壯麗的拱形岩洞而得名，遠遠看去宛如一座海底教堂，給人一種神聖的感覺。潛水的過程中，光線透過洞口映入水中，場景美得如同夢境。', 0, '2024-11-17 16:23:09'),
(8, 3, 'green011.jpg', '這裡的水深約為 15 至 25 米，適合有一定經驗的潛水者。洞內常見蝦蟹等小型生物，洞外則有各種熱帶魚群穿梭，讓人目不暇給。', 1, '2024-11-17 16:23:09'),
(9, 3, 'green012.jpg', '教堂的獨特地形和光影效果非常適合進行水攝，也是綠島的潛水亮點之一。在這裡探索，讓人感受到大自然的力量與美好。', 0, '2024-11-17 16:23:09'),
(10, 4, 'green013.jpg', '獨立礁是一座孤立於海底的巨大岩石，像是大海中的守護者，為周圍的生態系統提供了遮風擋浪的保護。潛水時，能見到這塊巨石的壯麗全貌，令人震撼。', 1, '2024-11-17 16:23:09'),
(11, 4, 'green014.jpg', '這裡的水深約 20 至 30 米，水流有時較強，適合較有經驗的潛水者。岩石表面布滿了軟珊瑚，還有海鰻和裸鰓類在其中出沒，生態豐富多樣。', 0, '2024-11-17 16:23:09'),
(12, 4, 'green015.jpg', '獨立礁不僅是一個觀察生物的好地方，也是挑戰潛水技巧的絕佳地點。每次在這裡潛水，都能感受到它的孤寂與壯麗。', 0, '2024-11-17 16:23:09'),
(13, 5, 'green016.jpg', '大白沙是綠島一個風景如畫的潛點，以其細膩的白沙和清澈的水質而聞名。潛水時，沙地如同一片寧靜的水底平原，讓人心情無比放鬆。', 1, '2024-11-17 16:23:09'),
(14, 5, 'green017.jpg', '這裡的水深約 5 至 15 米，能見度極高，非常適合初學者和喜歡慢潛的潛水者。在沙地上，可以看到擬態高手，如比目魚和管蟲，有時還會遇到悠游的海龜。', 0, '2024-11-17 16:23:09'),
(15, 5, 'green018.jpg', '大白沙的簡單純粹讓人感受到潛水的本質之美，是適合初學者探索和與自然接觸的理想地點，也是回歸初心的好選擇。', 0, '2024-11-17 16:23:09'),
(16, 6, 'green001.jpg', '鋼鐵礁因其如鋼鐵般堅硬的岩壁而得名，壯觀的火山地形成為這裡最大的特色。潛水時，可以感受到岩壁帶來的震撼力量，彷彿置身於海底的壯麗畫卷中。', 0, '2024-11-17 16:23:09'),
(17, 6, 'green002.jpg', '這裡的水深約 10 至 30 米，水流可能較強，適合有經驗的潛水者。岩壁上覆滿了軟硬珊瑚，吸引了大量魚群棲息，常見石斑魚、魟魚等大中型魚類在此出沒。', 1, '2024-11-17 16:23:09'),
(18, 6, 'green003.jpg', '鋼鐵礁不僅提供了豐富的生態觀察，也是一個挑戰技巧的地方。它的獨特地形和壯麗景觀，讓每位潛水者都會流連忘返，是一次充滿挑戰與驚喜的深海探險。', 0, '2024-11-17 16:23:09'),
(19, 18, 'orchid004.jpg', '玉女岩外礁以壯麗的珊瑚景觀與清澈的水質聞名，是潛水愛好者不可錯過的蘭嶼經典潛點之一。潛入水中，映入眼簾的是覆蓋著各種色彩繽紛珊瑚的岩壁，為魚群提供了豐富的棲息地，宛如一幅動態的海底畫卷。', 0, '2024-11-17 16:36:10'),
(20, 18, 'orchid005.jpg', '這裡的水深範圍大約在 10 至 25 米，適合中級及以上潛水者。偶爾可以發現優雅游過的蝠鱝或躲藏於珊瑚中的海鰻。這片區域的能見度極高，讓潛水者能輕鬆觀察到各種海洋生物的細節。', 0, '2024-11-17 16:36:10'),
(21, 18, 'orchid006.jpg', '玉女岩外礁以其靜謐的氛圍與壯麗的自然景觀吸引著潛水者。無論是初次探訪還是重遊舊地，每次潛水都會帶來新的發現與驚喜，是心靈沉靜與感官享受的完美結合。', 1, '2024-11-17 16:36:10'),
(22, 19, 'orchid007.jpg', '母雞岩外礁以其奇特的地形與豐富的海洋生態而聞名，因形狀酷似母雞而得名。下潛後，潛水者可以看到延綿的礁岩地形，像是大自然雕琢出的藝術品，壯觀而震撼。', 0, '2024-11-17 16:36:10'),
(23, 19, 'orchid008.jpg', '這裡的水深範圍在 8 至 20 米之間，適合不同等級的潛水者探索。魚群常聚集在岩石周圍，形成一道活躍的生態長廊，石斑魚、雀鯛和其他熱帶魚類是常見的居民。', 0, '2024-11-17 16:36:10'),
(24, 19, 'orchid009.jpg', '母雞岩外礁的獨特魅力在於其多樣化的地形和生態系統。不論是漫遊於珊瑚叢中，還是欣賞魚群的穿梭，都能感受到蘭嶼海域的美好與神秘。', 1, '2024-11-17 16:36:10'),
(25, 20, 'orchid010.jpg', '雙獅岩以兩塊相鄰的大型岩石命名，遠遠望去彷彿兩頭雄獅守護著海域。這裡是蘭嶼最具代表性的潛點之一，以其壯觀的地形與生態系統深受潛水者喜愛。', 0, '2024-11-17 16:36:10'),
(26, 20, 'orchid011.jpg', '這個地點的水深約為 10 至 25 米，適合有一定經驗的潛水者。潛入後，可以欣賞到珊瑚覆蓋的岩石，以及豐富的魚群，包括魟魚、海鰻和偶爾出現的海龜。', 1, '2024-11-17 16:36:10'),
(27, 20, 'orchid012.jpg', '雙獅岩的特殊地形不僅是海洋生物的庇護所，也為潛水者提供了絕佳的水下攝影機會。每次探索雙獅岩，總能帶回滿滿的驚喜與感動。', 0, '2024-11-17 16:36:10'),
(28, 21, 'orchid013.jpg', '雙獅外礁左側以其較為平穩的水流與豐富的生態景觀成為潛水者的首選之一。這裡的地形變化多樣，潛水者能欣賞到連綿的礁岩與茂密的軟珊瑚。', 1, '2024-11-17 16:36:10'),
(29, 21, 'orchid014.jpg', '這片區域的水深範圍大約在 8 至 20 米，適合不同等級的潛水者。魚群如彩帶般圍繞著岩石，包括小丑魚、石斑魚以及其他熱帶魚類。', 0, '2024-11-17 16:36:10'),
(30, 21, 'orchid015.jpg', '雙獅外礁左的寧靜與美麗吸引了許多喜愛慢潛的潛水者。這裡不僅是一個放鬆身心的地方，也是探索自然之美與發現驚喜的絕佳潛點。', 0, '2024-11-17 16:36:10'),
(31, 22, 'orchid016.jpg', '雙獅外礁右側以其稍具挑戰性的水流與壯觀的地形聞名，是適合進階潛水者挑戰的地方。礁岩上覆蓋著各種形狀的硬珊瑚，為這片區域增添了幾分神秘。', 1, '2024-11-17 16:36:10'),
(32, 22, 'orchid017.jpg', '這裡的水深範圍在 15 至 30 米之間，潛水者可以發現許多大型魚類，如魟魚、海鰻，甚至偶爾有白鰭鯊游過。', 0, '2024-11-17 16:36:10'),
(33, 22, 'orchid018.jpg', '雙獅外礁右不僅是挑戰技巧的絕佳地點，還是一個體驗蘭嶼水下魅力的必遊之地。每次下潛，總能感受到大自然的無限驚奇與震撼。', 0, '2024-11-17 16:36:10'),
(34, 23, 'orchid001.jpg', '軍艦岩以其外形酷似軍艦的巨大岩石而得名，充滿了歷史與自然的厚重感。這裡的地形壯麗非凡，像是大自然精心雕刻的傑作，是蘭嶼最受歡迎的潛水景點之一。', 0, '2024-11-17 16:36:10'),
(35, 23, 'orchid002.jpg', '潛水深度範圍約在 12 至 25 米之間，適合有經驗的潛水者。岩壁上覆滿了軟硬珊瑚，吸引了大量的魚群棲息，常見魟魚、石斑魚和其他大型魚類悠游其中。', 1, '2024-11-17 16:36:10'),
(36, 23, 'orchid003.jpg', '軍艦岩的地形與生態完美結合，為潛水者提供了無限的探索機會。無論是觀察豐富的海洋生物，還是欣賞壯觀的水下景色，都能在這裡找到屬於自己的潛水記憶。', 0, '2024-11-17 16:36:10'),
(37, 37, 'liuqiu004.jpg', '花瓶岩是小琉球的地標之一，以其形似花瓶的岩石命名。這個潛點的特色在於清澈的海水和豐富的珊瑚生態，適合初學者和喜愛輕鬆潛水的潛水者。花瓶岩下方的沙地上，有各種熱帶魚悠遊其間，讓人感受到大自然的美妙。', 0, '2024-11-17 16:52:37'),
(38, 37, 'liuqiu005.jpg', '這片海域的水深範圍約在 5 至 15 米之間，能見度通常非常好。沿著岩石邊緣下潛，可以欣賞到色彩繽紛的軟珊瑚和偶爾出現的海鰻。這裡的環境相對平穩，是一個放鬆探索的好地方。', 0, '2024-11-17 16:52:37'),
(39, 37, 'liuqiu006.jpg', '除了珊瑚景觀，花瓶岩也是海洋攝影愛好者的熱門地點。獨特的岩石地形與繽紛的生態相結合，每次潛水都能捕捉到驚艷的水下畫面，讓人流連忘返。', 1, '2024-11-17 16:52:37'),
(40, 38, 'liuqiu007.jpg', '中澳沙灘以其細緻的白沙和淺灘的自然美景著稱，是小琉球最適合放鬆和浮潛的地方之一。這裡的水質清澈，海底平坦，經常可以看到小丑魚在海葵中穿梭，景色非常迷人。', 0, '2024-11-17 16:52:37'),
(41, 38, 'liuqiu008.jpg', '水深範圍在 3 至 10 米之間，非常適合初學者和親子潛水活動。沿著沙灘邊緣潛水，可以發現各種有趣的小型生物，如螃蟹和海星，為水下之旅增添驚喜。', 0, '2024-11-17 16:52:37'),
(42, 38, 'liuqiu009.jpg', '中澳沙灘的寧靜氣氛讓人感到放鬆，是享受慢潛的理想地點。不論是探索沙地生態還是欣賞海岸景色，這裡都能讓潛水者忘卻煩憂，沉浸於大自然的懷抱。', 1, '2024-11-17 16:52:37'),
(43, 39, 'liuqiu010.jpg', '小琉球的軟珊瑚區被譽為水下的「花園」，這裡擁有豐富的軟珊瑚景觀，是潛水者的必訪之地。五顏六色的珊瑚搖曳在水中，形成了夢幻般的水下世界，吸引了各種魚類和無脊椎動物。', 0, '2024-11-17 16:52:37'),
(44, 39, 'liuqiu011.jpg', '這片區域的水深範圍在 10 至 20 米，適合有一定經驗的潛水者。漫遊在珊瑚叢中，常常可以遇見海龜或小丑魚群，為旅程增添驚喜。能見度高且水流平穩，使這裡成為水下攝影的理想地點。', 1, '2024-11-17 16:52:37'),
(45, 39, 'liuqiu012.jpg', '軟珊瑚區的獨特魅力在於它的生態多樣性。每次探索都像是一場驚喜連連的冒險，讓人對海洋的奧秘更加著迷。這裡是感受小琉球海域生機勃勃氛圍的最佳地點。', 0, '2024-11-17 16:52:37'),
(46, 40, 'liuqiu013.jpg', '龍蝦洞因其洞穴中經常可以發現龍蝦而得名，是小琉球最具探險氛圍的潛點之一。洞穴深處隱藏著壯觀的珊瑚景觀和各式各樣的海洋生物，是潛水者挑戰自我、探索未知的好地方。', 1, '2024-11-17 16:52:37'),
(47, 40, 'liuqiu014.jpg', '這裡的水深範圍在 15 至 25 米之間，適合進階潛水者。潛入洞穴時，可以觀察到大批的龍蝦聚集，還有石斑魚和其他底棲生物在洞中穿梭。洞內的光線和陰影效果增添了神秘感，讓人印象深刻。', 0, '2024-11-17 16:52:37'),
(48, 40, 'liuqiu015.jpg', '龍蝦洞的挑戰在於洞穴的結構和水流變化，需要潛水者謹慎操作。然而，探索結束後的滿足感和震撼景象，足以成為潛水旅程中最珍貴的回憶。', 0, '2024-11-17 16:52:37'),
(49, 41, 'liuqiu016.jpg', '鋼鐵礁陰森廟因其獨特的礁石形狀和濃厚的神秘氣氛而得名。礁石上覆蓋著各種形狀的珊瑚，宛如天然的水下神殿，是小琉球的特色潛點之一。', 1, '2024-11-17 16:52:37'),
(50, 41, 'liuqiu017.jpg', '這片海域的水深範圍大約在 8 至 20 米，適合不同等級的潛水者。沿著礁石探索，可以發現魚群聚集、珊瑚蟲蠕動，還有偶爾出現的魟魚和海鰻。這裡的能見度極高，為潛水者提供了觀察細節的良好條件。', 0, '2024-11-17 16:52:37'),
(51, 41, 'liuqiu018.jpg', '鋼鐵礁陰森廟的獨特魅力在於其如夢似幻的氣氛。潛水者彷彿置身於神秘的海底世界，感受到大自然的壯麗與寧靜，每次下潛都能帶來全新的體驗。', 0, '2024-11-17 16:52:37'),
(52, 42, 'liuqiu001.jpg', '大福西以其壯觀的礁岩地形和多樣化的生態環境吸引了許多潛水愛好者。這裡的礁石連綿不斷，覆滿了各種珊瑚，宛如一幅動態的水下畫卷，令人流連忘返。', 0, '2024-11-17 16:52:37'),
(53, 42, 'liuqiu002.jpg', '水深範圍在 10 至 25 米之間，適合中級及以上的潛水者。潛入水中，可以觀察到色彩繽紛的魚群以及偶爾出現的魟魚或海龜，讓潛水者驚喜連連。這片區域的水流變化多端，增添了潛水的挑戰性。', 1, '2024-11-17 16:52:37'),
(54, 42, 'liuqiu003.jpg', '大福西的礁石區域擁有許多洞穴和暗流，對潛水者來說是一個充滿挑戰和探索的地方。每次下潛，都能發現新的驚奇，成為潛水之旅中的亮點。', 0, '2024-11-17 16:52:37'),
(55, 54, 'hengchun004.jpg', '石珠是恆春區一個著名的岸潛點，這裡的海水清澈透明，能見度高。潛水者可以在這片海域享受與海洋生物親密接觸的機會，水中常見熱帶魚、珊瑚礁以及一些底棲生物。潛水的深度相對淺，適合初學者進行輕鬆潛水。', 0, '2024-11-17 17:34:41'),
(56, 54, 'hengchun005.jpg', '此潛點的特色之一是其獨特的岩石結構，形狀如珠串般排列，為潛水者提供了絕佳的觀賞體驗。沿著岩石邊緣潛水，可以發現多種海洋生物的栖息地，無論是海葵中的小丑魚，還是珊瑚礁中的螃蟹和海星，都是潛水者的驚喜。', 0, '2024-11-17 17:34:41'),
(57, 54, 'hengchun006.jpg', '水深大約在 5 至 15 米之間，水流平穩，非常適合喜歡悠閒潛水的人。此潛點是放鬆心情和欣賞大自然美景的理想場所，無論是潛水還是浮潛，都能帶來愉悅的體驗。', 1, '2024-11-17 17:34:41'),
(58, 55, 'hengchun007.jpg', '萬里桐是恆春的中階潛點，以其壯麗的珊瑚礁和多樣的海洋生態而聞名。潛水者可以在這裡看到色彩繽紛的軟硬珊瑚，還有各種熱帶魚和偶爾出現的海龜。水深約 10 至 25 米，適合有一定潛水經驗的潛水者。', 0, '2024-11-17 17:34:41'),
(59, 55, 'hengchun008.jpg', '這個潛點的魅力在於其獨特的海底地形，海底有許多自然的洞穴和裂縫，為生物提供了豐富的栖息環境。隨著潛水者的探索，會發現更多隱藏的海洋奇觀，如海鰻、鯊魚和各種珊瑚種類，讓每次潛水都充滿驚奇。', 0, '2024-11-17 17:34:41'),
(60, 55, 'hengchun009.jpg', '此外，萬里桐潛點的能見度通常非常好，是進行水下攝影和探索海底生物的理想場所。這裡的環境相對平穩，讓潛水者可以悠閒地探索，享受與海洋世界親密接觸的時光。', 1, '2024-11-17 17:34:41'),
(61, 56, 'hengchun0010.jpg', '山海潛點位於恆春的另一個熱門潛水地點，這裡的水域以清澈透明著稱。潛水者可以在水下探索豐富的珊瑚礁系統，並與各種海洋生物互動。這個潛點的水深適中，適合中級潛水者。', 0, '2024-11-17 17:34:41'),
(62, 56, 'hengchun011.jpg', '山海潛點的特色是其岩石和珊瑚的奇妙結合，構成了非常多樣化的海底景觀。從海底的沙地到岩礁，潛水者會發現各種熱帶魚、珊瑚和底棲生物。這裡的水域生物豐富多樣，是水下攝影愛好者的理想選擇。', 0, '2024-11-17 17:34:41'),
(63, 56, 'hengchun012.jpg', '潛水時，除了生物的多樣性，這裡的水流變化也使得每次潛水都充滿挑戰。適合有一定經驗的潛水者來此探索，並享受深度潛水帶來的樂趣。', 1, '2024-11-17 17:34:41'),
(64, 57, 'hengchun013.jpg', '紅柴坑是一個具有挑戰性的高階潛水點，擁有壯麗的海底景觀和多樣的生態環境。這裡的水深大約在 15 至 40 米之間，潛水者可以在此發現獨特的岩礁和豐富的珊瑚群，並與各種海洋生物親密接觸。', 0, '2024-11-17 17:34:41'),
(65, 57, 'hengchun014.jpg', '此潛點最吸引潛水者的是其海底洞穴和裂縫，這些地形為許多海洋生物提供了栖息地。潛水者在水下能夠看到各種熱帶魚、海鰻、甚至偶爾出現的鯊魚。這裡也是進行水下攝影的好地方，充滿了各種迷人的水下畫面。', 0, '2024-11-17 17:34:41'),
(66, 57, 'hengchun015.jpg', '紅柴坑潛點的水流較為湍急，對潛水者的經驗要求較高，因此適合有一定潛水經驗的潛水者。挑戰自我、探索水下世界，這裡是潛水愛好者不容錯過的地點。', 1, '2024-11-17 17:34:41'),
(67, 58, 'hengchun016.jpg', '合界潛點以其深邃的海域和清澈的水質而聞名，是一個適合進階潛水者的潛點。這裡的水深範圍大約從 20 米到 45 米不等，水下景觀迷人，無論是珊瑚礁還是各種海洋生物，都讓潛水者驚嘆不已。', 0, '2024-11-17 17:34:41'),
(68, 58, 'hengchun017.jpg', '潛水者可以在合界潛點發現各種水底生物，包括熱帶魚、珊瑚和底棲生物。這裡的海底結構變化多端，有許多隱蔽的岩石和洞穴，適合喜愛探索的潛水者。這些特色讓每次潛水都充滿了新鮮感和挑戰性。', 0, '2024-11-17 17:34:41'),
(69, 58, 'hengchun018.jpg', '合界潛點的水流相對穩定，但由於水深較大，因此需要一定的潛水經驗。對於進階潛水者來說，這裡無疑是一個理想的探險地點，能讓潛水者享受到探索深海的樂趣。', 1, '2024-11-17 17:34:41'),
(70, 59, 'hengchun001.jpg', '頂白沙潛點是恆春區一個優美的岸潛點，這裡的水域水深適中，水質清澈，適合所有潛水等級的潛水者。這裡的珊瑚礁美麗，海底生物繁多，是一個絕佳的潛水地點。', 0, '2024-11-17 17:34:41'),
(71, 59, 'hengchun002.jpg', '這裡的海域非常適合初學者進行水肺潛水，水流平穩，能見度也很高。沿著海底的沙洲潛水，潛水者可以發現各種熱帶魚和底棲生物，像是海星和小型螃蟹，讓潛水經歷充滿樂趣。', 0, '2024-11-17 17:34:41'),
(72, 59, 'hengchun003.jpg', '此外，頂白沙潛點還非常適合浮潛愛好者，海面下就是絢麗的珊瑚礁，這裡的生物非常多樣，是一個探索海洋生態的理想場所。', 1, '2024-11-17 17:34:41'),
(73, 7, 'green023.jpg', '馬蹄橋位於綠島北部，是一個容易進入的潛點，適合初學者和進階潛水者。這裡的地形以珊瑚礁為主，水下能見度良好，魚群豐富，常見小丑魚和石斑魚。', 0, '2024-11-20 01:07:54'),
(74, 7, 'green024.jpg', '此地的潛水深度多在10-20公尺之間，海流平穩，非常適合進行放鬆的潛水體驗。岸邊設施便利，讓這裡成為許多潛水者的首選地點。', 1, '2024-11-20 01:07:54'),
(75, 8, 'green025.jpg', '電桿礁是綠島的一處經典潛點，得名於附近的一根舊電桿，具指標性。這裡水域開闊，海底有豐富的硬珊瑚與軟珊瑚，提供海洋生物棲息。', 0, '2024-11-20 01:07:54'),
(76, 8, 'green026.jpg', '適合有經驗的潛水者，因為此處水流可能稍強。潛水深度約15-25公尺，偶爾能見到海龜和白鳍礁鯊，是觀察大型海洋生物的好地方。', 1, '2024-11-20 01:07:54'),
(77, 9, 'green027.jpg', '六米礁以淺水深度和穩定水流著稱，是新手練習的理想地點。這裡的海底地形平坦，布滿色彩繽紛的珊瑚礁與海綿，適合水底攝影。', 0, '2024-11-20 01:07:54'),
(78, 9, 'green028.jpg', '生態豐富，常見海兔、小型熱帶魚和狹口海膽等海洋生物。由於水深僅約6-12公尺，即使潛水時間較長，也能輕鬆探索整個區域。', 1, '2024-11-20 01:07:54'),
(79, 10, 'green029.jpg', '海底郵筒是綠島知名的特色潛點，位於柴口附近。這座郵筒是世界少數設置在水下的郵筒之一，吸引無數潛水愛好者前來打卡和投遞防水明信片。郵筒周圍布滿五彩繽紛的珊瑚礁，環境清澈宜人。', 0, '2024-11-20 01:07:54'),
(80, 10, 'green030.jpg', '此地的潛水深度約在10公尺左右，水流穩定，非常適合新手與進階潛水者一同探索。除了郵筒，這裡也有豐富的熱帶魚群和小型海洋生物，是欣賞生態與拍照的好地方。', 1, '2024-11-20 01:07:54'),
(81, 11, 'green031.jpg', '大香菇得名於其巨大的珊瑚塊形似香菇，這裡的地形獨特且易辨識。水域平靜，潛水深度在10-20公尺之間，非常適合中級潛水者探索。', 0, '2024-11-20 01:07:54'),
(82, 11, 'green032.jpg', '海底生態多樣，常見蝴蝶魚、龍蝦與小型魟魚，偶爾可見到海龜悠游而過。這裡的珊瑚健康，視野開闊，是欣賞生態的好選擇。', 1, '2024-11-20 01:07:54'),
(83, 12, 'green033.jpg', '中寮港是綠島重要的港口之一，港內外皆為潛水熱門地點。港外的海底地形平緩，擁有豐富的珊瑚礁群，是適合初學者的潛點。', 0, '2024-11-20 01:07:54'),
(84, 12, 'green034.jpg', '潛水深度約10-18公尺，生態資源豐富，包括熱帶魚群與色彩繽紛的海綿。由於其位置便利，也是夜潛的好選擇，夜間能見到獨特的生物活動。', 1, '2024-11-20 01:07:54'),
(85, 13, 'green035.jpg', '柴口以水底火山地形聞名，擁有壯麗的熔岩結構和珊瑚礁。這裡的水流相對穩定，適合各級潛水者。', 0, '2024-11-20 01:07:54'),
(86, 13, 'green036.jpg', '潛水深度範圍廣，從淺水5公尺到深水30公尺都有精彩景觀。柴口的生態系統健康，常見海馬、蝴蝶魚與珊瑚礁魚群，適合攝影與觀察。', 1, '2024-11-20 01:07:54'),
(87, 14, 'green037.jpg', '公館鼻位於綠島東南角，是以壯觀的水下斷崖地形聞名的潛點。這裡的海底景色變化豐富，水深從淺灘逐漸延伸至30公尺以上。', 0, '2024-11-20 01:07:54'),
(88, 14, 'green038.jpg', '生態上，常見大型魚群和珊瑚礁，適合中高級潛水者探索。水流可能較強，建議依當日情況安排潛水路線，保證安全。', 1, '2024-11-20 01:07:54'),
(89, 15, 'green039.jpg', '大峽谷是綠島的經典深潛點，以壯麗的水下峽谷結構吸引潛水者。這裡的峽谷兩側布滿軟珊瑚和海綿，色彩鮮豔且生態豐富。', 0, '2024-11-20 01:07:54'),
(90, 15, 'green040.jpg', '潛水深度通常在20-30公尺，能見度良好，但水流可能有挑戰性。適合經驗豐富的潛水者，是探險和攝影的理想地點。', 1, '2024-11-20 01:07:54'),
(91, 16, 'green041.jpg', '將軍岩因海底巨石地形而得名，這裡的地形多變，水下有壯觀的巨石與珊瑚群交織，宛如水下迷宮。', 0, '2024-11-20 01:07:54'),
(92, 16, 'green042.jpg', '深度範圍在15-25公尺，適合中高級潛水者探索。此處經常可以看到大型魚類，例如海鯊與梭魚，是愛好挑戰者的熱門選擇。', 1, '2024-11-20 01:07:54'),
(93, 17, 'green043.jpg', '一線天是綠島的著名深潛點，以壯觀的岩石裂縫景觀吸引潛水者。這條狹窄的水下通道兩側布滿海葵和小型珊瑚礁，景色壯麗。', 0, '2024-11-20 01:07:54'),
(94, 17, 'green044.jpg', '深度範圍約在20-30公尺，水流可能較強，適合經驗豐富的潛水者。建議帶防水手電筒，欣賞裂縫中的生態。', 1, '2024-11-20 01:07:54');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `site_img`
--
ALTER TABLE `site_img`
  ADD PRIMARY KEY (`img_id`),
  ADD KEY `site_id` (`site_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `site_img`
--
ALTER TABLE `site_img`
  MODIFY `img_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
