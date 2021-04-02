import {MigrationInterface, QueryRunner} from "typeorm";

export class init1617359979930 implements MigrationInterface {
    name = 'init1617359979930'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `language` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(65) NOT NULL, UNIQUE INDEX `IDX_7df7d1e250ea2a416f078a631f` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(65) NOT NULL, `create_time` datetime NOT NULL, `update_time` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_statistic` (`id` int NOT NULL AUTO_INCREMENT, `duration` int NOT NULL, `number_of_rounds` int NOT NULL, `has_left` tinyint NOT NULL, `create_time` datetime NOT NULL, `update_time` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `User` (`id` int NOT NULL AUTO_INCREMENT, `login_name` varchar(45) NOT NULL, `display_name` varchar(45) NOT NULL, `user_creation` timestamp NOT NULL, `time_played` int NOT NULL, `password_hash` varchar(45) NOT NULL, `profile_picture` varchar(45) NULL, `figure` int NOT NULL, `is_connected` tinyint NOT NULL, `is_dev` tinyint NOT NULL, UNIQUE INDEX `IDX_29434256f28e086ecc1b97c151` (`login_name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `board_tile` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(65) NOT NULL, `description` varchar(255) NOT NULL, `path` varchar(255) NOT NULL, `languageId` int NULL, `userId` int NULL, UNIQUE INDEX `IDX_3eb095ed70b89a177a623680de` (`name`), UNIQUE INDEX `IDX_b404aa86580d5ef646fd59c13f` (`description`), UNIQUE INDEX `IDX_9911fc20dcd7ce07b46ec291e2` (`path`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Games` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(45) NOT NULL, `author` varchar(45) NOT NULL, `skin` varchar(45) NOT NULL, `randomizeTiles` tinyint NOT NULL, `startTime` datetime NOT NULL, `endTime` datetime NOT NULL, `maxPlayers` int NOT NULL, `maxRound` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_roles_role` (`userId` int NOT NULL, `roleId` int NOT NULL, INDEX `IDX_5f9286e6c25594c6b88c108db7` (`userId`), INDEX `IDX_4be2f7adf862634f5f803d246b` (`roleId`), PRIMARY KEY (`userId`, `roleId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_user_statistics_user_statistic` (`userId` int NOT NULL, `userStatisticId` int NOT NULL, INDEX `IDX_9fe2a935a423b20ca351906e7f` (`userId`), INDEX `IDX_6e25bf5bb52dbf957cecb72513` (`userStatisticId`), PRIMARY KEY (`userId`, `userStatisticId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `board_tile` ADD CONSTRAINT `FK_f9e85e818a3e6d12eef1c0b16d6` FOREIGN KEY (`languageId`) REFERENCES `language`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `board_tile` ADD CONSTRAINT `FK_d980dd48fac8f904fe42edc36b6` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_roles_role` ADD CONSTRAINT `FK_5f9286e6c25594c6b88c108db77` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_roles_role` ADD CONSTRAINT `FK_4be2f7adf862634f5f803d246b8` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_user_statistics_user_statistic` ADD CONSTRAINT `FK_9fe2a935a423b20ca351906e7f1` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_user_statistics_user_statistic` ADD CONSTRAINT `FK_6e25bf5bb52dbf957cecb725138` FOREIGN KEY (`userStatisticId`) REFERENCES `user_statistic`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    
        await queryRunner.query("INSERT INTO `User` (id, login_name, display_name, password_hash, user_creation, time_played, profile_picture, last_figure, is_connected, is_dev) VALUES (8,'Mandrax','Mandrax','9b3ecd069bd7e0d7e44e01ec9bee40f7','2020-05-08 15:26:21',2992,'fileStash/img_1590261041877.png',1,0,0),(9,'x','x','c5731c0603405caaf18128d15c4380ad','2020-05-08 15:26:21',1206,'fileStash/img_1589216686362.jpg',1,0,1),(13,'tiz','tiz-handy','1fed35fe6e953e8d9ef2cb8dc5b6688f','2020-05-08 15:26:21',0,NULL,1,0,1),(14,'sgtrising','MasterGulagMind','0fa88872ba5172ea9ece9f70cab1b387','2020-05-08 15:26:21',141,'fileStash/img_1589227607034.jpg',1,0,0),(15,'mycouchy','Couchy','4726aac70918277210ffd87e1605e50a','2020-05-08 15:26:21',0,NULL,1,0,0),(16,'privatepupu','PrivatePupu','555faffaef31bc7f4834c3e6719830ef','2020-05-08 15:26:21',813,'fileStash/img_1614807718526.jpg',1,0,1),(17,'PapaJabu','PapaJabu','ed7ac386be080b564c42433a45abb08f','2020-05-08 15:26:21',0,NULL,1,0,0),(18,'Kargah','Kevin','c8a1ddb104924015f9bf52b645739615','2020-05-08 15:26:21',0,NULL,1,0,0),(19,'Kabelknoten','Afro Kevin','6e91a2eac462bd30f3a932773e35925b','2020-05-08 15:26:21',722,'fileStash/img_1604256275289.jpg',1,0,0),(20,'Maxe','Saufgott','1632ce95c17a56a496c59f78bcd548d6','2020-05-08 15:26:21',1541,'fileStash/img_1614970686155.jpg',1,0,0),(21,'Quicky345t','Quicky345t','7b089d1fb47146497383cf4d1961f532','2020-05-08 15:26:21',567,NULL,1,0,0),(22,'Todesschnitzel','Todesschnitzel','e453580ed72acffbb7ea53b3e4ed2f94','2020-05-08 15:26:21',0,NULL,1,0,0),(23,'logo','adfghsgh','c8a1ddb104924015f9bf52b645739615','2020-05-08 15:26:21',0,NULL,1,0,0),(24,'Riesenriemen','Riesenriemen','ba5373e489151e96c17524e7c31a506a','2020-05-08 15:26:21',236,'fileStash/img_1606506085527.jpg',1,0,0),(25,'asdf','qwer','c8a1ddb104924015f9bf52b645739615','2020-05-08 15:26:21',0,NULL,1,0,0),(26,'XeniaLee','Yoshi','45ddddd0173d27c923a4b92540b1fd07','2020-05-08 15:26:21',1570,'fileStash/img_1604256605576.png',1,0,0),(27,'Mysterion420','Mathes','4726aac70918277210ffd87e1605e50a','2020-05-08 15:26:21',0,NULL,1,0,0),(28,'Nacsis','Till','4726aac70918277210ffd87e1605e50a','2020-05-08 15:26:21',425,'fileStash/img_1614972252157.png',1,0,0),(29,'PrinzessinPaula','Paula','4726aac70918277210ffd87e1605e50a','2020-05-08 15:26:21',0,NULL,1,0,0),(31,'liebler','Liebler','4726aac70918277210ffd87e1605e50a','2020-05-11 15:59:24',7296,'fileStash/img_1589216661998.jpg',1,0,1),(33,'Kollin','Lizard','6618d3a4b00ea66ae5c30579387f40a5','2020-05-11 19:44:29',5,NULL,1,0,0),(34,'AdriJane','AdriJane','f4134529e8c83746897de481b6b38ac0','2020-05-11 20:33:56',378,'fileStash/img_1606506122995.jpg',1,0,0),(35,'Cocklin','Cocklin','14c8f66a941b01aec0f81605659b450a','2020-05-11 20:39:11',32,NULL,1,0,0),(36,'CHOPPER','CHOPPER','6794eb143571dc1a4daf5d587429ae2b','2020-05-16 19:13:58',4,NULL,1,0,0),(38,'nacsis3','Nacsis','4726aac70918277210ffd87e1605e50a','2020-05-23 18:50:30',78,NULL,1,0,0),(39,'LuckGODGAMER','trinker','61d056f4404bda7be17eec381ae5ff8f','2020-05-23 19:32:40',0,NULL,1,0,0),(40,'huhn','huhn','ad46a7a6be2cf0f4ba58a0c840ad79fe','2020-05-23 19:33:40',189,NULL,1,0,0),(41,'Mysteiron420','Mysterion420','accafc4f01e69d1941eaeb05149af765','2020-05-23 20:44:22',0,NULL,1,0,0),(42,'SikTirgit','SikTirgit','6340c0b4c667e83551728a793f19e607','2020-05-23 20:44:37',12,NULL,1,0,0),(43,'Potsgl','Potsgl','d2a2ebcf1ea0315aeaffd501a9bcf5fa','2020-05-23 20:44:46',13,NULL,1,0,0),(44,'Prox99','Prox','50c79d95e903ea54d234bb478cff6d4a','2020-05-23 20:44:51',12,NULL,1,0,0),(45,'StengerStinkt ','StengerStinkt','f40f964143040ce875261c760bc0e8e8','2020-05-23 20:45:04',11,NULL,1,0,0),(46,'Hammer123','Hammer123','139696b70f43e612b5155b0fe9d722d8','2020-05-23 20:45:08',11,NULL,1,0,0),(47,'Lonlytalibam158','Reiner Wahnsinn','15c62928025bdd96454b96848bfb054f','2020-05-23 20:46:16',10,NULL,1,0,0),(48,'Riptide','LEERTASTE','8dcb550bfa13bf2ca71564e2bce65649','2020-05-30 19:41:03',751,'fileStash/img_1602883683780.jpg',1,0,0),(49,'reki','RPGReki','a4dbbeb915ef075f807138d3568938a2','2020-06-06 02:13:50',34,NULL,1,0,0),(50,'Plani','Plani','fcf2817a1cb19aa11bfaca457152a0cb','2020-06-06 02:13:51',124,NULL,1,0,0),(51,'Lexxeyy','Lexxeyy','8dc6f3265c1b5af2f52b647531ec8433','2020-06-06 02:14:24',30,NULL,1,0,0),(52,'Wolve','Wolve','a2ab406bc87f0c7cae3ed7e29fa07979','2020-06-12 20:34:38',93,NULL,1,0,0),(53,'Käpten Schoki','Käpten Schoki','96f6eab9567df6ebf642249f605ed4fa','2020-06-12 20:35:00',92,NULL,1,0,0),(54,'Niclas','Ethanol4drink','8dc70dc080b7480f8bcc3f70aced3759','2020-06-18 20:23:44',431,NULL,1,0,0),(56,'DDCtimes','DOMI DC','a106d61a9322c3f8c142868fd5665151','2020-09-26 17:58:23',184,'fileStash/img_1601143165247.jpg',1,0,0),(57,'david2203','David','895f18935fee2964a3ab8618c72ca062','2020-09-26 18:08:46',197,'fileStash/img_1601144594362.jpeg',1,0,0),(58,'bob','schlongdongsilva','4726aac70918277210ffd87e1605e50a','2020-10-16 19:24:53',190,NULL,1,0,0),(59,'Papabär','Papabär','57c7a0ee214f51542b0656eb42c32d7e','2020-10-16 21:33:20',578,'fileStash/img_1612039352555.png',1,0,0),(61,'Tropenhelm','Marianne de Hérpes','1637c74736a23aff3bd78d210b624579','2020-10-23 22:15:13',0,NULL,1,0,0),(62,'grogro','Marianne de Hérpes','adc6b1bf9ec8202dbe44fc3541ec0c43','2020-10-23 22:16:41',205,NULL,1,0,0),(63,'jan','DeineMudda','c8a1ddb104924015f9bf52b645739615','2020-10-23 22:44:48',176,NULL,1,0,0),(65,'a','aaaaBOIIIaaaa','8ebb110b0faa145e25c61a1396ad154c','2020-10-31 14:27:47',108,NULL,1,0,0),(68,'Deine mudder','Deine mudder','93fe5b67d887ef1702e0eddb9d43993e','2020-11-01 18:43:03',1,NULL,1,0,0),(70,'granit','Granti','10e0416693f1fa4aaa282b9e55307f31','2020-11-01 18:44:04',0,NULL,1,0,0),(71,'Unger','Ungerhunger','4726aac70918277210ffd87e1605e50a','2020-11-01 18:44:48',181,'fileStash/img_1604256544019.jpg',1,0,0),(72,'Lefti','Lefti','cd74421aecfcc5288e40a2ba565ee012','2020-11-19 19:30:36',80,NULL,1,0,0),(73,'cecil','cecil','0ffb1eba1d9e2397ee78713486682702','2020-11-19 19:30:47',81,NULL,1,0,0),(74,'Stinker97','Felix Scheibl','ae98ed8224a0227026eb4aca189be69a','2020-11-19 19:31:03',122,'fileStash/img_1608760915249.jpg',1,0,0),(75,'Moritz','Moritz','b6aa6e3d383950a63ef8965904d307fc','2020-11-19 19:36:05',4,NULL,1,0,0),(77,'Mace','Mace','e759aa8376d821cfa770643beeb74d5a','2020-11-27 19:41:04',554,NULL,1,0,0),(78,'vilash','Vilash','4df2702a991fc620f8155991883ff9c0','2020-11-27 19:41:46',0,NULL,1,0,0),(79,'Jan242','Jan K','a8781073761ad16565ecdd372dd92f8b','2020-11-27 19:41:50',120,'fileStash/img_1606506288352.jpg',1,0,0),(80,'ahxclzh1244','Zhehao','9200413e8e71690179c34f30382c379a','2020-11-27 19:45:49',265,NULL,1,0,0),(81,'Saufen!','DeineMudda','e46c44762446935dceff2f3d83483191','2020-11-27 19:46:40',165,NULL,1,0,0),(82,'Marianne du Herpès','Marianne du Herpès','9072ed212df26480875d4d30d6d5aedf','2020-11-27 19:50:49',264,NULL,1,0,0),(83,'max','max','17debfe3e54bf4864f6e619ee881709d','2020-11-27 19:53:19',70,NULL,1,0,0),(84,'ficken129','ficken129','88a205c26a74e9243f1f90b1da3e9df5','2020-11-27 20:27:37',0,NULL,1,0,0),(85,'arschloch1298','arschloch1298','be1421c4bc776d4324c622d49e1fb8d8','2020-11-27 20:32:03',0,NULL,1,0,0),(86,'ficken12','ficken12','ddd3e6000a63a996c906d40717c250e3','2020-11-27 20:33:25',0,NULL,1,0,0),(87,'Eric','Eric','073241b16e390933ff036e2f830d3b94','2020-11-27 20:34:13',20,NULL,1,0,0),(88,'Bärchen','Bärchen','ed2630404e4d261e5a66f5cd55212490','2020-11-27 22:19:39',4,NULL,1,0,0),(89,'c-train','C-Train','b0fd8c002b67a4e3d884067a5ae5eabd','2020-11-27 22:20:10',0,NULL,1,0,0),(90,'Schlange','Schlange','a39e9dc2362a143f4bf667baad88f49d','2020-11-27 22:20:18',0,NULL,1,0,0),(91,'Nuttis_idee','Nuttis_idee','c8a1ddb104924015f9bf52b645739615','2020-11-27 22:20:40',1,NULL,1,0,0),(92,'dennis','dennis','34fd486b260d0ee5b43fa70d4a7a4aa1','2020-12-04 10:02:39',4,NULL,1,0,0),(95,'niclnik','niclnik','92ede9b3f4acc8b3166cfbc491e25146','2020-12-19 18:42:38',0,NULL,1,0,0),(96,'Nico97','Nico','1e6ceb0b82ca9c345b5b4027ffb57e0a','2020-12-19 18:52:56',54,NULL,1,0,0),(98,'Rainbow','Rainbow','8fbdc7e384eff26e2ccbfb0044dc3d44','2020-12-19 18:55:18',165,NULL,1,0,0),(99,'nicelike','niclik','feb75e635b6284cc3c811faa6ec07f34','2020-12-19 18:56:31',163,NULL,1,0,0),(100,'MissingName','Moritz','b6aa6e3d383950a63ef8965904d307fc','2020-12-23 21:58:42',153,NULL,1,0,0),(101,'malte','malte','47791d48ac8292a7eff37cc0c641355a','2020-12-23 21:59:52',216,NULL,1,0,0),(102,'Hendrik','Hennooooooo','9c18f597e269773da6dea6b85f8b83a9','2020-12-23 22:01:25',44,'fileStash/img_1608762228259.jpg',1,0,0),(103,'Marianne de Hérpès','Marianne de Hérpès','14c8f66a941b01aec0f81605659b450a','2021-01-09 00:19:32',432,NULL,1,0,0),(104,'','Robin','0e913fb764af77317ee1190b4898f477','2021-01-09 00:22:33',0,NULL,1,0,0),(106,'cerobin21','cerobin21','0e913fb764af77317ee1190b4898f477','2021-01-09 00:25:39',195,NULL,1,0,0),(108,'Marvin','Marvin','fb561b0c14e56dde689fdd1df907bc90','2021-01-15 21:41:13',93,NULL,1,0,0),(109,'Juan1231','juan1231','3f95545e8c191d67f379ff21c3c7da45','2021-01-15 21:42:02',195,NULL,1,0,0),(110,'Till','Till','17fc7e936b81c7c38e22c0fb48a40bf2','2021-01-15 21:42:19',111,NULL,1,0,0),(112,'y','y','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:38:41',0,NULL,1,0,0),(113,'z','z','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:39:01',0,NULL,1,0,0),(116,'b','b','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:41:34',0,NULL,1,0,0),(117,'c','c','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:42:22',0,NULL,1,0,0),(118,'d','d','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:42:43',0,NULL,1,0,0),(119,'e','e','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:43:02',0,NULL,1,0,0),(120,'f','f','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:43:32',4,NULL,1,0,0),(121,'g','g','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:44:17',0,NULL,1,0,0),(122,'h','h','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:44:27',0,NULL,1,0,0),(123,'i','i','c5731c0603405caaf18128d15c4380ad','2021-01-23 14:44:39',0,NULL,1,0,0),(124, 'j', 'j', 'c5731c0603405caaf18128d15c4380ad', '2021-01-23 14:44:48', 0, NULL, 1, 0, 00), (125, 'k', 'k', 'c5731c0603405caaf18128d15c4380ad', '2021-01-23 14:44:55', 0, NULL, 1, 0, 0), (126, 'l', 'l', 'c5731c0603405caaf18128d15c4380ad', '2021-01-23 15:21:39', 0, NULL, 1, 0, 0), (127, 'm', 'm', 'c5731c0603405caaf18128d15c4380ad', '2021-01-23 15:26:53', 0, NULL, 1, 0, 0), (128, 'n', 'n', 'c5731c0603405caaf18128d15c4380ad', '2021-01-23 15:30:09', 0, NULL, 1, 0, 0), (130, 'LieblerFan', 'LieblerFan', '8dcb550bfa13bf2ca71564e2bce65649', '2021-01-30 19:59:35', 0, NULL, 1, 0, 0), (131, 'Roflcopter3000', 'Roflcopter3000', 'ba5373e489151e96c17524e7c31a506a', '2021-01-30 22:42:56', 91, 'fileStash/img_1612046604732.jpg', 1, 0, 0), (132, 'toto', 'toto', '541cd0177475ec2596313a229a7490d4', '2021-01-31 00:19:18', 0, NULL, 1, 0, 0), (134, 'Mothtron1', 'Mothtron', '9d8ff0e1636755dadaa8646f03654616', '2021-01-31 00:20:57', 29, NULL, 1, 0, 0), (135, 'kaddy14', 'Kaddy14', 'ccb5b61c6fe840195bbaaefc7bee0ec3', '2021-02-12 21:11:28', 44, NULL, 1, 0, 0), (136, 'deineMudda!', 'deineMudda!', 'c8a1ddb104924015f9bf52b645739615', '2021-02-14 01:31:26', 58, NULL, 1, 0, 0), (137, 'Simon.henseleit@web.de', 'Simonski', '58d075ede6460f61dfc2bee73ede857c', '2021-02-14 01:34:39', 77, NULL, 1, 0, 0), (138, 'Küver', 'Moin', 'a8781073761ad16565ecdd372dd92f8b', '2021-02-14 01:36:51', 24, NULL, 1, 0, 0), (139, 'test', 'test', 'a39e9dc2362a143f4bf667baad88f49d', '2021-02-15 19:04:50', 7, NULL, 1, 0, 0), (140, 'Michi', 'Michi', '5f24ca80194a11be36b3fc6f73dc4955', '2021-02-15 21:18:07', 117, NULL, 1, 0, 0), (141, 'Ethanol4drink', 'Ethanol4drink', 'fee8b70f3dcfd0f191b3c3652edea34c', '2021-03-05 19:15:55', 164, 'fileStash/img_1614983315220.png', 1, 0, 0), (142, 'vx29', 'Max29', '98e5572462094a3069b6563b8b9097a5', '2021-03-05 19:23:22', 76, NULL, 1, 0, 0), (143, 'Lazzo', 'Lazzo', '9435d61259bb183578c000e93d831725', '2021-03-17 21:21:48', 36, NULL, 1, 0, 0), (144, 'Fipsinger', 'Fipsinger', '510dc3a33cf222ddeed8a6c40549f999', '2021-03-26 21:49:57', 0, NULL, 1, 0, 0), (145, 'CoronaSuff', 'Fipsinger', 'fec6bc829be2081973e2a416902c9016', '2021-03-26 21:51:09', 0, NULL, 1, 0, 0), (146, 'sonntagistbongtag', 'bongboy', 'bd77b4074ac42dccd477630ffc5ac49a', '2021-03-28 11:03:19', 0, NULL, 1, 0, 0)");
        await queryRunner.query("INSERT INTO `Games` VALUES (6,'TestGame','Liebler','default',0,'2020-10-09 17:59:23','2020-10-09 17:59:42',1,0),(7,'TESTGAME','Liebler','default',0,'2020-10-09 17:59:53','2020-10-09 18:00:19',1,1),(8,'Testgame','Liebler','default',0,'2020-10-09 18:00:32','2020-10-09 18:00:37',1,0),(9,'ZestGame','Liebler','default',0,'2020-10-09 18:07:11','2020-10-09 18:08:32',1,0),(10,'tiz hat nen kleinen puller','Liebler','default',1,'2020-10-09 19:42:22','2020-10-09 19:55:53',2,1),(11,'Domi schwitzt','Tizian','default',1,'2020-10-10 18:21:49','2020-10-10 20:33:03',3,33),(12,'Lieber mit Spaß','Mandrax','default',1,'2020-10-10 20:33:16','2020-10-10 20:34:24',2,0),(13,'Tiz fristt kleine Kinder','Mandrax','default',1,'2020-10-10 20:34:35','2020-10-10 22:03:31',3,24),(14,'test','Liebler','default',0,'2020-10-12 17:43:50','2020-10-12 22:51:30',1,1),(15,'Tiz kann Computer nicht bedienen','Liebler','default',1,'2020-10-16 16:58:32','2020-10-16 18:52:27',4,19),(16,'Die HArd BOiiis!','Tizian','default',1,'2020-10-16 18:52:26','2020-10-16 23:45:16',7,21),(17,'test','Liebler','default',0,'2020-10-17 10:07:00','2020-10-17 10:07:53',1,0),(18,'test','Liebler','default',0,'2020-10-17 10:08:14','2020-10-17 10:08:29',1,0),(19,'fghb','Tizian','default',0,'2020-10-18 15:43:26','2020-10-18 15:54:11',1,0),(20,'sdfasdf','Tizian','default',0,'2020-10-23 17:27:43','2020-10-23 17:41:57',3,1),(21,'Jetzt aber ps liebler suggt','Tizian','default',1,'2020-10-23 17:40:18','2020-10-23 21:04:21',4,35),(22,'DOMINIKU-KUN !','Tizian','default',1,'2020-10-23 20:44:31','2020-10-24 01:55:02',8,27),(23,'asdfasdf','Tizian','default',0,'2020-10-31 12:38:48','2020-10-31 12:59:40',2,1),(24,'Liebler müffelt','Tizian','default',0,'2020-10-31 14:26:45','2020-10-31 16:15:51',2,0),(25,'Mekka','Tizian','default',1,'2020-10-31 16:34:12','2020-10-31 16:40:52',1,0),(26,'Scharmhaare des Zeus','Tizian','default',1,'2020-10-31 17:09:47','2020-10-31 20:16:08',4,36),(27,'Prometheus sackhaare','Tizian','default',1,'2020-11-01 18:16:56','2020-11-01 18:51:09',5,0),(28,'Hier BOiis','Tizian','default',1,'2020-11-01 18:51:31','2020-11-01 19:41:33',5,11),(29,'Hier für till VIP!','Tizian','default',1,'2020-11-01 19:33:07','2020-11-01 21:47:20',5,9),(30,'asdfasdf','Tizian','default',0,'2020-11-19 19:28:36','2020-11-19 19:29:26',1,0),(31,'Hier','Tizian','default',0,'2020-11-19 19:31:18','2020-11-19 20:52:11',5,19),(32,'hallo','Saufgott','default',1,'2020-11-27 20:14:03','2020-11-27 20:14:11',0,0),(33,'Bulgarien','Bärchen','default',0,'2020-11-27 22:20:26','2020-11-27 22:24:57',2,0),(34,'Caspar halts maul','Saufgott','default',1,'2020-11-27 20:14:44','2020-11-28 01:48:42',10,15),(35,'adsfadf','Tizian','default',0,'2020-12-04 10:00:55','2020-12-04 10:01:32',1,0),(36,'lala','dennis','default',1,'2020-12-04 10:03:19','2020-12-04 10:03:24',1,0),(37,'lala','dennis','default',1,'2020-12-04 10:03:29','2020-12-04 10:07:08',2,2),(38,'sauphen','Mace','default',0,'2020-12-09 00:06:47','2020-12-09 00:06:51',1,0),(39,'Sauphen','Mace','default',0,'2020-12-09 00:07:19','2020-12-09 00:10:46',1,2),(40,'yfsdfsdfgsdf','Mandrax','default',0,'2020-12-12 22:23:24','2020-12-12 22:25:05',1,2),(41,'bla','Mace','default',0,'2020-12-14 22:20:23','2020-12-14 22:28:14',1,1),(42,'Gearmany is wundaschön','Liebler','default',1,'2020-12-19 16:53:31','2020-12-19 17:01:01',1,1),(43,'Germany is wunderschön','Liebler','default',1,'2020-12-19 18:26:04','2020-12-19 18:26:10',1,0),(44,'Lieblers puller lutschen','Tizian','default',1,'2020-12-19 18:51:23','2020-12-19 18:51:27',1,0),(45,'Lieblers sack lutschen','Tizian','default',1,'2020-12-19 18:52:52','2020-12-19 21:43:48',9,21),(46,'Handballer hier rein','Tizian','default',1,'2020-12-23 21:56:25','2020-12-24 00:32:04',5,5),(47,'Sauphieren','Mace','default',1,'2021-01-09 00:08:13','2021-01-09 00:08:47',1,0),(48,'Sauphieren','Mace','default',1,'2021-01-09 00:08:58','2021-01-09 04:04:27',5,21),(49,'pisser','malte','default',0,'2021-01-15 21:39:11','2021-01-15 23:14:35',4,12),(50,'test','Liebler','default',0,'2021-01-23 15:07:44','2021-01-23 15:07:46',1,0),(51,'aa','Liebler','default',0,'2021-01-25 13:54:39','2021-01-25 21:39:50',1,1),(52,'2k21 Rar besäufnis','Tizian','default',1,'2021-01-29 18:19:46','2021-01-29 18:27:07',1,0),(53,'xnfgb','Tizian','default',0,'2021-01-29 18:27:28','2021-01-29 18:36:09',1,1),(54,'oh boiii','Liebler','default',1,'2021-01-29 19:46:55','2021-01-29 22:38:43',5,26),(55,'Fett liebler','Tizian','default',1,'2021-01-29 22:40:49','2021-01-30 04:25:51',4,28),(56,'lobbyDerBaesten','Liebler','default',1,'2021-01-30 20:23:55','2021-01-30 23:58:12',7,25),(57,'bier','malte','default',0,'2021-01-31 00:13:06','2021-01-31 00:17:52',1,0),(58,'sdfasdf','Tizian','default',1,'2021-01-31 00:41:40','2021-01-31 00:43:30',1,0),(59,'fgggfgf','Tizian','default',1,'2021-01-31 00:43:44','2021-01-31 00:43:54',1,0),(60,'bier','malte','default',0,'2021-01-31 00:18:00','2021-01-31 00:51:12',4,3),(61,'halle','malte','default',0,'2021-01-31 00:45:46','2021-01-31 01:14:13',2,0),(62,'keineAlkoholikerHier','Liebler','default',1,'2021-02-12 22:24:57','2021-02-13 02:45:31',5,2),(63,'Henseleitkannnichtsaufen','Saufgott','default',1,'2021-02-13 23:38:48','2021-02-13 23:40:44',1,0),(64,'Henseleit kann nicht saufen','Saufgott','default',1,'2021-02-14 01:30:14','2021-02-14 01:49:45',5,0),(65,'pipikaka','Saufgott','default',1,'2021-02-14 01:35:18','2021-02-14 03:01:25',5,5),(66,'test','test','default',0,'2021-02-15 19:05:38','2021-02-15 19:07:50',1,0),(67,'','test','default',1,'2021-02-15 19:08:16','2021-02-15 19:13:07',1,2),(68,'Gnade für Lieblers Leber','Mandrax','default',0,'2021-02-15 19:33:01','2021-02-15 19:33:50',1,0),(69,'Lieblers Leber soll leiden','Mandrax','default',1,'2021-02-15 19:34:19','2021-02-15 19:46:29',1,0),(70,'Lieblers Leber leidet','Mandrax','default',1,'2021-02-15 19:50:29','2021-02-15 19:53:13',1,0),(71,'Lieblers Leber soll leiden2','Mandrax','default',0,'2021-02-15 19:55:31','2021-02-15 19:56:54',1,0),(72,'Lieblers Leber soll leiden','Mandrax','default',1,'2021-02-15 19:57:09','2021-02-15 23:17:37',7,21),(73,'test','Liebler','default',0,'2021-02-28 14:08:34','2021-02-28 14:11:21',1,1),(74,'tste','Liebler','default',0,'2021-02-28 14:33:28','2021-02-28 18:29:45',3,1),(75,'fdsfdfsf','PrivatePupu','default',0,'2021-03-01 12:12:17','2021-03-01 12:16:03',1,2),(76,'asas','Liebler','default',0,'2021-03-01 12:25:16','2021-03-01 21:50:33',2,1),(77,'manuboi','Liebler','default',0,'2021-03-03 20:23:40','2021-03-03 20:28:33',2,1),(78,'testss','Liebler','default',0,'2021-03-03 20:52:43','2021-03-03 20:53:14',1,1),(79,'test','Liebler','default',0,'2021-03-03 20:53:20','2021-03-03 21:42:24',2,1),(80,'fast as Fuck','Liebler','default',0,'2021-03-04 17:55:56','2021-03-04 17:57:28',2,0),(81,'fast as fuck boiii','Liebler','default',0,'2021-03-04 17:57:39','2021-03-04 17:58:32',1,0)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_user_statistics_user_statistic` DROP FOREIGN KEY `FK_6e25bf5bb52dbf957cecb725138`");
        await queryRunner.query("ALTER TABLE `user_user_statistics_user_statistic` DROP FOREIGN KEY `FK_9fe2a935a423b20ca351906e7f1`");
        await queryRunner.query("ALTER TABLE `user_roles_role` DROP FOREIGN KEY `FK_4be2f7adf862634f5f803d246b8`");
        await queryRunner.query("ALTER TABLE `user_roles_role` DROP FOREIGN KEY `FK_5f9286e6c25594c6b88c108db77`");
        await queryRunner.query("ALTER TABLE `board_tile` DROP FOREIGN KEY `FK_d980dd48fac8f904fe42edc36b6`");
        await queryRunner.query("ALTER TABLE `board_tile` DROP FOREIGN KEY `FK_f9e85e818a3e6d12eef1c0b16d6`");
        await queryRunner.query("DROP INDEX `IDX_6e25bf5bb52dbf957cecb72513` ON `user_user_statistics_user_statistic`");
        await queryRunner.query("DROP INDEX `IDX_9fe2a935a423b20ca351906e7f` ON `user_user_statistics_user_statistic`");
        await queryRunner.query("DROP TABLE `user_user_statistics_user_statistic`");
        await queryRunner.query("DROP INDEX `IDX_4be2f7adf862634f5f803d246b` ON `user_roles_role`");
        await queryRunner.query("DROP INDEX `IDX_5f9286e6c25594c6b88c108db7` ON `user_roles_role`");
        await queryRunner.query("DROP TABLE `user_roles_role`");
        await queryRunner.query("DROP TABLE `Games`");
        await queryRunner.query("DROP INDEX `IDX_9911fc20dcd7ce07b46ec291e2` ON `board_tile`");
        await queryRunner.query("DROP INDEX `IDX_b404aa86580d5ef646fd59c13f` ON `board_tile`");
        await queryRunner.query("DROP INDEX `IDX_3eb095ed70b89a177a623680de` ON `board_tile`");
        await queryRunner.query("DROP TABLE `board_tile`");
        await queryRunner.query("DROP INDEX `IDX_29434256f28e086ecc1b97c151` ON `User`");
        await queryRunner.query("DROP TABLE `User`");
        await queryRunner.query("DROP TABLE `user_statistic`");
        await queryRunner.query("DROP TABLE `role`");
        await queryRunner.query("DROP INDEX `IDX_7df7d1e250ea2a416f078a631f` ON `language`");
        await queryRunner.query("DROP TABLE `language`");
    }



}