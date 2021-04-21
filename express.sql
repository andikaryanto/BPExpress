-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 21, 2021 at 04:23 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `balimornode`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `version` varchar(255) NOT NULL,
  `class` text NOT NULL,
  `group` varchar(255) NOT NULL,
  `namespace` varchar(255) NOT NULL,
  `time` int(11) NOT NULL,
  `batch` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `version`, `class`, `group`, `namespace`, `time`, `batch`) VALUES
(1, '2021_01_27_100110', '\\Groupuser20210107100000', 'default', 'App', 1615391783, 1),
(2, '2021_01_27_104834', '\\User20210107104845', 'default', 'App', 1615391783, 1),
(3, '2021_01_27_110434', '\\Form20210107104845', 'default', 'App', 1615391783, 1),
(4, '2021_01_27_112644', '\\Seeder20210127112645', 'default', 'App', 1615391784, 1),
(5, '2021_02_09_164215', '\\Mpopup20210209164215', 'default', 'App', 1615391784, 1),
(6, '2021_02_09_202934', '\\Mbranch20210209202934', 'default', 'App', 1615391784, 1),
(7, '2021_02_09_205724', '\\Mcity20210209205724', 'default', 'App', 1615391784, 1),
(8, '2021_02_09_205823', '\\Mcitybranches20210209205823', 'default', 'App', 1615391785, 1),
(9, '2021_02_09_210923', '\\Mdealer20210209210923', 'default', 'App', 1615391785, 1),
(10, '2021_02_09_212204', '\\Mvehicle20210209212204', 'default', 'App', 1615391786, 1),
(11, '2021_02_09_213412', '\\Mvehicletype20210209213412', 'default', 'App', 1615391786, 1),
(12, '2021_02_09_222743', '\\Mtenor20210209222743', 'default', 'App', 1615391787, 1),
(13, '2021_02_09_223612', '\\Minsurance20210209223612', 'default', 'App', 1615391787, 1),
(14, '2021_02_10_112334', '\\Mvehicletypetenor20210210112834', 'default', 'App', 1615391787, 1),
(15, '2021_02_10_114423', '\\Mexistingmember20210210114423', 'default', 'App', 1615391787, 1),
(16, '2021_02_10_114611', '\\Mexistingmemberprospect20210210114611', 'default', 'App', 1615391788, 1),
(17, '2021_02_10_131905', '\\Mbanner20210210131905', 'default', 'App', 1615391788, 1),
(18, '2021_02_10_201413', '\\Mvehicletypeimage20210210201413', 'default', 'App', 1615391788, 1),
(19, '2021_02_17_100312', '\\Mhistoryclick20210217100312', 'default', 'App', 1615391789, 1),
(20, '2021_02_19_222612', '\\Mhistoryclickalter20210219222612', 'default', 'App', 1615391789, 1),
(21, '2021_02_19_224014', '\\Mprospectivealter20210219222612', 'default', 'App', 1615391789, 1),
(22, '2021_02_22_111409', '\\Mvehicletypeimagealter20210222114909', 'default', 'App', 1615391789, 1),
(23, '2021_02_23_211809', '\\Mhistoryclickalter2021023211809', 'default', 'App', 1615391789, 1),
(24, '2021_02_23_215835', '\\Mdealeralter2021023215835', 'default', 'App', 1615391789, 1),
(25, '2021_02_25_130201', '\\Mbranchalter2021025130201', 'default', 'App', 1615391789, 1),
(26, '2021_02_25_131156', '\\Mprospective2021025131156', 'default', 'App', 1615391790, 1),
(27, '2021_02_25_134013', '\\Mhistoyclickalter2021025134013', 'default', 'App', 1615391790, 1),
(28, '2021_02_26_132314', '\\Mvehicletype20210226132314', 'default', 'App', 1615391790, 1),
(29, '2021_03_04_224012', '\\Mvehicletype202103042240', 'default', 'App', 1615391790, 1),
(30, '2021_03_10_152423', '\\Mprspectivemember20210310152423', 'default', 'App', 1615391791, 1),
(32, '2021_03_12_141213', '\\Mprspectivemember20210312141213', 'default', 'App', 1615535068, 2),
(34, '2021_03_12_145714', '\\Mprspectivemember20210312145714', 'default', 'App', 1615536096, 3),
(35, '2021_03_12_154018', '\\Mhistoryclick20210312154018', 'default', 'App', 1615540750, 4),
(36, '2021_03_12_162114', '\\Mhistoryclick20210312162114', 'default', 'App', 1615540944, 5),
(37, '2021_03_15_093617', '\\Mfromsettings20210315093617', 'default', 'App', 1615776247, 6);

-- --------------------------------------------------------

--
-- Table structure for table `m_banners`
--

CREATE TABLE `m_banners` (
  `Id` int(11) NOT NULL,
  `Picture` varchar(300) DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `m_branches`
--

CREATE TABLE `m_branches` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `Address` varchar(1000) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_branches`
--

INSERT INTO `m_branches` (`Id`, `Name`, `Description`, `Address`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 'TEsta', NULL, '<p>TESTa</p>', 0, '2021-03-12 11:52:36', 'super_admin', '2021-03-12 16:35:24', 'super_admin'),
(2, 'TEST UBAH U', NULL, '<p>TEST 2</p>', 0, '2021-03-12 11:52:56', 'super_admin', '2021-03-12 15:34:37', 'super_admin');

-- --------------------------------------------------------

--
-- Table structure for table `m_cities`
--

CREATE TABLE `m_cities` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_cities`
--

INSERT INTO `m_cities` (`Id`, `Name`, `Description`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 'JAKARTA PUSAT', NULL, 0, '2021-03-12 11:52:42', 'super_admin', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_citybranches`
--

CREATE TABLE `m_citybranches` (
  `Id` int(11) NOT NULL,
  `M_Branch_Id` int(11) DEFAULT NULL,
  `M_City_Id` int(11) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `m_dealers`
--

CREATE TABLE `m_dealers` (
  `Id` int(11) NOT NULL,
  `M_Branch_Id` int(11) DEFAULT NULL,
  `M_City_Id` int(11) DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `Address1` varchar(1000) DEFAULT NULL,
  `Address2` varchar(1000) DEFAULT NULL,
  `Link` varchar(500) DEFAULT NULL,
  `Box1` varchar(500) DEFAULT NULL,
  `Box2` varchar(500) DEFAULT NULL,
  `Box3` varchar(500) DEFAULT NULL,
  `Picture` varchar(250) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_dealers`
--

INSERT INTO `m_dealers` (`Id`, `M_Branch_Id`, `M_City_Id`, `Name`, `Description`, `Address1`, `Address2`, `Link`, `Box1`, `Box2`, `Box3`, `Picture`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 1, 1, 'TEST DEALER', NULL, '<p>asdasdasdasd</p>', NULL, 'https://mbf-expo.com/HONDA_JAKARTA_CENTER', 'Promo 10%', 'Nikmati Kemudahan Belanja Disini i', 'Disc 20%', 'assets/uploads/dealer/20210312_115331896c8aa3cd025f61435fb07923b3897.png', 0, '2021-03-12 11:53:31', 'super_admin', '2021-03-12 22:52:19', 'super_admin'),
(2, 2, 1, 'DEALER 22', NULL, '<p>21341234</p>', NULL, 'https://mbf-expo.com/HONDA_JAKARTA_CENTER', 'Promo 10%', 'Nikmati Kemudahan Belanja Disini', 'SEGARA DAPATKAN CASHBACK', 'assets/uploads/dealer/20210312_152641HA-timeless-elegance1---L.png', 0, '2021-03-12 15:26:41', 'super_admin', '2021-03-12 17:02:16', 'super_admin');

-- --------------------------------------------------------

--
-- Table structure for table `m_existingmemberprospectives`
--

CREATE TABLE `m_existingmemberprospectives` (
  `Id` int(11) NOT NULL,
  `M_Existingmember_Id` int(11) DEFAULT NULL,
  `M_Dealer_Id` int(11) DEFAULT NULL,
  `M_Vehicletype_Id` int(11) DEFAULT NULL,
  `Source` varchar(250) DEFAULT NULL,
  `Branch` varchar(250) DEFAULT NULL,
  `SalesName` varchar(250) DEFAULT NULL,
  `Vehicle` varchar(250) DEFAULT NULL,
  `VehicleType` varchar(250) DEFAULT NULL,
  `Price` decimal(18,2) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_existingmemberprospectives`
--

INSERT INTO `m_existingmemberprospectives` (`Id`, `M_Existingmember_Id`, `M_Dealer_Id`, `M_Vehicletype_Id`, `Source`, `Branch`, `SalesName`, `Vehicle`, `VehicleType`, `Price`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 1, NULL, NULL, 'TEST DEALER', 'TEST 2', 'TEST DATA', 'JAZZ', 'RS', '340000000.00', 0, '2021-03-12 14:52:35', 'super_admin', NULL, NULL),
(2, 1, 1, 1, 'TEST DEALER', 'TEST UBAH', '34345sfdsdf', 'JAZZ', 'RS', '340000000.00', 0, '2021-03-12 15:02:42', 'super_admin', NULL, NULL),
(3, 1, 2, 1, 'DEALER 2', 'TEst', 'adfasdfdasdf', 'JAZZ', 'RS', '340000000.00', 0, '2021-03-12 15:27:07', 'super_admin', NULL, NULL),
(4, 1, 1, 1, 'TEST DEALER', 'TEST UBAH U', 'sdfgsdfg', 'JAZZ', 'RS', '342000000.00', 0, '2021-03-12 16:36:42', 'super_admin', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_existingmembers`
--

CREATE TABLE `m_existingmembers` (
  `Id` int(11) NOT NULL,
  `Name` varchar(250) DEFAULT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_existingmembers`
--

INSERT INTO `m_existingmembers` (`Id`, `Name`, `Phone`, `Email`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 'andik aryanto', '89674392721', 'andik.aryantoo@gmail.com', 0, '2021-03-12 14:52:35', 'super_admin', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_forms`
--

CREATE TABLE `m_forms` (
  `Id` int(11) NOT NULL,
  `FormName` varchar(100) DEFAULT NULL,
  `AliasName` varchar(100) DEFAULT NULL,
  `LocalName` varchar(100) DEFAULT NULL,
  `ClassName` varchar(100) DEFAULT NULL,
  `Resource` varchar(50) DEFAULT NULL,
  `IndexRoute` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_forms`
--

INSERT INTO `m_forms` (`Id`, `FormName`, `AliasName`, `LocalName`, `ClassName`, `Resource`, `IndexRoute`) VALUES
(1, 'm_popups', 'Pop Up', 'Pop Up', 'Master', NULL, NULL),
(2, 'm_branches', 'Branch', 'Cabang', 'Master', NULL, NULL),
(3, 'm_cities', 'City', 'Kota', 'Master', NULL, NULL),
(4, 'm_dealers', 'Dealer', 'Dealer', 'Master', NULL, NULL),
(5, 'm_vehicles', 'Vehicle', 'Kendaraan', 'Master', NULL, NULL),
(6, 'm_vehicletypes', 'Vehicle Type', 'Tipe Kendaraan', 'Master', NULL, NULL),
(7, 'm_existingmemberprospectives', 'Prospective Member', 'Member Prospektif', 'Master', NULL, NULL),
(8, 'm_banners', 'Banner', 'Banner', 'Master', NULL, NULL),
(9, 'm_histroyclicks', 'History Click', 'Histori Klik', 'Master', NULL, NULL),
(10, 'm_formsettings', 'Setting', 'Pengaturan', 'Setting', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_formsettings`
--

CREATE TABLE `m_formsettings` (
  `Id` int(11) NOT NULL,
  `M_Form_Id` int(11) NOT NULL,
  `TypeTrans` int(11) NOT NULL,
  `Value` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `IntValue` int(11) NOT NULL,
  `StringValue` varchar(250) NOT NULL,
  `DecimalValue` decimal(18,2) NOT NULL,
  `DateTimeValue` datetime NOT NULL,
  `BooleanValue` smallint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_formsettings`
--

INSERT INTO `m_formsettings` (`Id`, `M_Form_Id`, `TypeTrans`, `Value`, `Name`, `IntValue`, `StringValue`, `DecimalValue`, `DateTimeValue`, `BooleanValue`) VALUES
(1, 10, 0, 1, 'EXPO_START_DATE', 0, '', '0.00', '2021-03-16 15:30:00', 0),
(2, 10, 0, 1, 'EXPO_END_DATE', 0, '', '0.00', '2021-10-16 23:59:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `m_groupusers`
--

CREATE TABLE `m_groupusers` (
  `Id` int(11) NOT NULL,
  `GroupName` varchar(100) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_groupusers`
--

INSERT INTO `m_groupusers` (`Id`, `GroupName`, `Description`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 'Admin', 'Changee', NULL, NULL, NULL, NULL),
(2, 'FO', 'FO', NULL, NULL, NULL, NULL),
(3, 'Test Node', 'Test Node', NULL, NULL, NULL, NULL),
(4, 'Test Node Lagi', 'Test Node Lagi', NULL, NULL, NULL, NULL),
(5, 'Ganti 5', 'Abata', NULL, NULL, NULL, NULL),
(6, 'Test Node Lagi', 'CEDE', NULL, NULL, NULL, NULL),
(7, 'andik@gmail.com', 'Database', NULL, NULL, NULL, NULL),
(8, 'Changee', 'Changee', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_historyclicks`
--

CREATE TABLE `m_historyclicks` (
  `Id` int(11) NOT NULL,
  `M_Existingmemberprospective_Id` int(11) DEFAULT NULL,
  `M_Vehicletypetenor_Id` int(11) DEFAULT NULL,
  `M_Dealer_Id` int(11) DEFAULT NULL,
  `Name` varchar(250) DEFAULT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Branch` varchar(250) DEFAULT NULL,
  `Source` varchar(250) DEFAULT NULL,
  `Vehicle` varchar(250) DEFAULT NULL,
  `VehicleType` varchar(250) DEFAULT NULL,
  `Price` decimal(18,2) DEFAULT NULL,
  `Tenor` varchar(250) DEFAULT NULL,
  `Insurance` varchar(250) DEFAULT NULL,
  `TenorMonth` int(11) DEFAULT NULL,
  `DownPayment` decimal(18,2) DEFAULT NULL,
  `Installment` decimal(18,2) DEFAULT NULL,
  `RegisterDate` datetime DEFAULT NULL,
  `SalesName` varchar(250) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_historyclicks`
--

INSERT INTO `m_historyclicks` (`Id`, `M_Existingmemberprospective_Id`, `M_Vehicletypetenor_Id`, `M_Dealer_Id`, `Name`, `Phone`, `Email`, `Branch`, `Source`, `Vehicle`, `VehicleType`, `Price`, `Tenor`, `Insurance`, `TenorMonth`, `DownPayment`, `Installment`, `RegisterDate`, `SalesName`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, NULL, NULL, NULL, 'andik aryanto', '89674392721', 'andik.aryantoo@gmail.com', 'TEST UBAH', 'TEST DEALER', 'JAZZ', 'RS', '340000000.00', 'Total Dp Rendah (ADDB)', 'Paket ADDB - Asuransi Comprehensive', 12, '1234567890.00', '123456789.00', '2021-03-12 14:52:35', 'TEST DATA', 0, '2021-03-12 15:02:24', 'super_admin', NULL, NULL),
(2, NULL, NULL, NULL, 'andik aryanto', '89674392721', 'andik.aryantoo@gmail.com', 'TEST UBAH', 'TEST DEALER', 'JAZZ', 'RS', '340000000.00', 'Total Dp Rendah (ADDB)', 'Paket ADDB - Asuransi Comprehensive', 12, '1234567890.00', '123456789.00', '2021-03-12 15:02:42', '34345sfdsdf', 0, '2021-03-12 15:26:12', 'super_admin', NULL, NULL),
(3, 3, 1, 2, 'andik aryanto', '89674392721', 'andik.aryantoo@gmail.com', 'TEst', 'DEALER 2', 'JAZZ', 'RS', '340000000.00', 'Total Dp Rendah (ADDB)', 'Paket ADDB - Asuransi Comprehensive', 12, '1234567890.00', '123456789.00', '2021-03-12 15:27:07', 'adfasdfdasdf', 0, '2021-03-12 16:24:51', 'super_admin', NULL, NULL),
(4, 4, 1, 1, 'andik aryanto', '89674392721', 'andik.aryantoo@gmail.com', 'TEST UBAH U', 'TEST DEALER', 'JAZZ', 'RS', '342000000.00', 'Total Dp Rendah (ADDB)', 'Paket ADDB - Asuransi Comprehensive', 12, '1234.00', '123.00', '2021-03-12 16:36:42', 'sdfgsdfg', 0, '2021-03-12 16:36:45', 'super_admin', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_insurances`
--

CREATE TABLE `m_insurances` (
  `Id` int(11) NOT NULL,
  `M_Tenor_Id` int(1) DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_insurances`
--

INSERT INTO `m_insurances` (`Id`, `M_Tenor_Id`, `Name`, `Description`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 1, 'Paket ADDB - Asuransi Comprehensive', NULL, 0, '2021-03-10 22:57:04', NULL, NULL, NULL),
(2, 1, 'Paket ADDB - Asuransi Combination', NULL, 0, '2021-03-10 22:57:04', NULL, NULL, NULL),
(3, 2, 'Paket Regular - Asuransi Comprehensive', NULL, 0, '2021-03-10 22:57:04', NULL, NULL, NULL),
(4, 2, 'Paket Regular - Asuransi Combination', NULL, 0, '2021-03-10 22:57:04', NULL, NULL, NULL),
(5, 3, 'Paket Cicilan Ringan - Asuransi Comprehensive', NULL, 0, '2021-03-10 22:57:04', NULL, NULL, NULL),
(6, 1, 'Paket ADDB - Asuransi Comprehensive', NULL, 0, '2021-03-10 23:00:09', NULL, NULL, NULL),
(7, 1, 'Paket ADDB - Asuransi Combination', NULL, 0, '2021-03-10 23:00:09', NULL, NULL, NULL),
(8, 2, 'Paket Regular - Asuransi Comprehensive', NULL, 0, '2021-03-10 23:00:09', NULL, NULL, NULL),
(9, 2, 'Paket Regular - Asuransi Combination', NULL, 0, '2021-03-10 23:00:09', NULL, NULL, NULL),
(10, 3, 'Paket Cicilan Ringan - Asuransi Comprehensive', NULL, 0, '2021-03-10 23:00:09', NULL, NULL, NULL),
(11, 4, 'Paket Bunga Ringan - Asuransi Comprehensive', NULL, 0, '2021-03-10 23:00:09', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_popups`
--

CREATE TABLE `m_popups` (
  `Id` int(11) NOT NULL,
  `Picture` varchar(300) DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `m_tenors`
--

CREATE TABLE `m_tenors` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_tenors`
--

INSERT INTO `m_tenors` (`Id`, `Name`, `Description`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 'Total Dp Rendah (ADDB)', NULL, 0, '2021-03-10 22:57:04', NULL, NULL, NULL),
(2, 'Angsuran Rendah (Regular)', NULL, 0, '2021-03-10 22:57:04', NULL, NULL, NULL),
(3, 'Cicilan Ringan', NULL, 0, '2021-03-10 22:57:04', NULL, NULL, NULL),
(4, 'Bunga 0%', NULL, 0, '2021-03-10 22:57:04', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_users`
--

CREATE TABLE `m_users` (
  `Id` int(11) NOT NULL,
  `M_Groupuser_Id` int(11) DEFAULT NULL,
  `Username` varchar(100) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `Photo` varchar(300) DEFAULT NULL,
  `IsLoggedIn` smallint(1) DEFAULT NULL,
  `IsActive` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_users`
--

INSERT INTO `m_users` (`Id`, `M_Groupuser_Id`, `Username`, `Password`, `Photo`, `IsLoggedIn`, `IsActive`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, NULL, 'super_admin', '742f0ff46d553e4817d31ef705ba7346', 'public/assets/uploads/img/custom.png', 0, 1, '2021-03-10 22:57:04', NULL, NULL, NULL),
(59, 1, 'andik', 'ca47bfa3d8d6a118300c27821af9044a', NULL, 0, 1, NULL, NULL, NULL, NULL),
(60, 2, 'naya', '17806e7ebd06506e35ad29c91f6b496d', NULL, 0, 1, NULL, NULL, NULL, NULL),
(61, 2, 'zuran', 'e1c24b913b37fca715470ccf6c10a51d', NULL, 0, 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_vehicles`
--

CREATE TABLE `m_vehicles` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_vehicles`
--

INSERT INTO `m_vehicles` (`Id`, `Name`, `Description`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 'JAZZ', NULL, 0, '2021-03-12 14:51:14', 'super_admin', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_vehicletypeimages`
--

CREATE TABLE `m_vehicletypeimages` (
  `Id` int(11) NOT NULL,
  `M_Vehicletype_Id` int(1) DEFAULT NULL,
  `Image` varchar(250) DEFAULT NULL,
  `Thumbnail` varchar(300) DEFAULT NULL,
  `FileType` varchar(50) DEFAULT NULL,
  `Size` varchar(50) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_vehicletypeimages`
--

INSERT INTO `m_vehicletypeimages` (`Id`, `M_Vehicletype_Id`, `Image`, `Thumbnail`, `FileType`, `Size`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 1, 'assets/uploads/vehicletype/20210312_145147896c8aa3cd025f61435fb07923b3897.png', NULL, 'png', '225403', 0, '2021-03-12 14:51:47', 'super_admin', NULL, NULL),
(2, 1, 'assets/uploads/vehicletype/20210312_145147HA-timeless-elegance1---L.png', NULL, 'png', '15773874', 0, '2021-03-12 14:51:47', 'super_admin', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_vehicletypes`
--

CREATE TABLE `m_vehicletypes` (
  `Id` int(11) NOT NULL,
  `M_Vehicle_Id` int(11) DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `Price` decimal(18,2) DEFAULT NULL,
  `Image` varchar(250) DEFAULT NULL,
  `Thumbnail` varchar(300) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_vehicletypes`
--

INSERT INTO `m_vehicletypes` (`Id`, `M_Vehicle_Id`, `Name`, `Description`, `Price`, `Image`, `Thumbnail`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 1, 'RS', NULL, '342000000.00', 'assets/uploads/vehicletype/20210312_145147896c8aa3cd025f61435fb07923b3897.png', 'assets/uploads/vehicletype/thumbnail-20210312_145147896c8aa3cd025f61435fb07923b3897.png', 0, '2021-03-12 14:51:47', 'super_admin', '2021-03-12 16:35:01', 'super_admin');

-- --------------------------------------------------------

--
-- Table structure for table `m_vehicletypetenors`
--

CREATE TABLE `m_vehicletypetenors` (
  `Id` int(11) NOT NULL,
  `M_Vehicletype_Id` int(11) DEFAULT NULL,
  `M_Tenor_Id` int(11) DEFAULT NULL,
  `M_Insurance_Id` int(11) DEFAULT NULL,
  `Tenor` int(11) DEFAULT NULL,
  `DownPayment` decimal(18,2) DEFAULT NULL,
  `Installment` decimal(18,2) DEFAULT NULL,
  `IsDeleted` smallint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `CreatedBy` varchar(100) DEFAULT NULL,
  `Modified` datetime DEFAULT NULL,
  `ModifiedBy` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `m_vehicletypetenors`
--

INSERT INTO `m_vehicletypetenors` (`Id`, `M_Vehicletype_Id`, `M_Tenor_Id`, `M_Insurance_Id`, `Tenor`, `DownPayment`, `Installment`, `IsDeleted`, `Created`, `CreatedBy`, `Modified`, `ModifiedBy`) VALUES
(1, 1, 1, 1, 12, '1234.00', '123.00', 0, '2021-03-12 14:51:47', 'super_admin', '2021-03-12 16:34:38', 'super_admin');

-- --------------------------------------------------------

--
-- Table structure for table `seeder`
--

CREATE TABLE `seeder` (
  `Id` int(11) NOT NULL,
  `Seeder` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `seeder`
--

INSERT INTO `seeder` (`Id`, `Seeder`) VALUES
(1, 'default_user2021022711532'),
(2, 'insert_m_tenors20210212220809'),
(3, 'insert_m_insurance20210212221345'),
(4, 'seed_2021_03_15_091516_m_forms20210315091516'),
(5, 'seed_2021_03_15_164843_m_formssetting20210315164843');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(255) NOT NULL,
  `sess` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`sess`)),
  `expired` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `sess`, `expired`) VALUES
('615af468-4c31-4d8c-bb5e-2b2d4c1696b7', '{\"cookie\":{\"originalMaxAge\":7200000,\"expires\":\"2021-04-21T15:16:30.256Z\",\"secure\":false,\"httpOnly\":\"true\",\"path\":\"/\"},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MSwiTV9Hcm91cHVzZXJfSWQiOm51bGwsIlVzZXJuYW1lIjoic3VwZXJfYWRtaW4iLCJQYXNzd29yZCI6Ijc0MmYwZmY0NmQ1NTNlNDgxN2QzMWVmNzA1YmE3MzQ2IiwiUGhvdG8iOiJwdWJsaWMvYXNzZXRzL3VwbG9hZHMvaW1nL2N1c3RvbS5wbmciLCJJc0xvZ2dlZEluIjowLCJJc0FjdGl2ZSI6MSwiQ3JlYXRlZEJ5IjpudWxsLCJNb2RpZmllZCI6bnVsbCwiTW9kaWZpZWRCeSI6bnVsbCwiaWF0IjoxNjE5MDEwNDA2fQ.pQx1sqQla_KSvEowbRtpKi1LsTggxg_luF-OurOIAec\"}', '2021-04-21 15:16:30'),
('c2f9ab6d-e7bc-4d68-b2e2-fd669fc8b79b', '{\"cookie\":{\"originalMaxAge\":7200000,\"expires\":\"2021-04-21T15:17:40.911Z\",\"secure\":false,\"httpOnly\":\"true\",\"path\":\"/\"}}', '2021-04-21 15:17:40'),
('d4dbc4b7-bc88-4059-a49f-bb7d1b71129f', '{\"cookie\":{\"originalMaxAge\":7200000,\"expires\":\"2021-04-21T15:16:21.478Z\",\"secure\":false,\"httpOnly\":\"true\",\"path\":\"/\"}}', '2021-04-21 15:16:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_banners`
--
ALTER TABLE `m_banners`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_branches`
--
ALTER TABLE `m_branches`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_cities`
--
ALTER TABLE `m_cities`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_citybranches`
--
ALTER TABLE `m_citybranches`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `m_citybranches_M_City_Id_foreign` (`M_City_Id`),
  ADD KEY `m_citybranches_M_Branch_Id_foreign` (`M_Branch_Id`);

--
-- Indexes for table `m_dealers`
--
ALTER TABLE `m_dealers`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `m_dealers_M_Branch_Id_foreign` (`M_Branch_Id`),
  ADD KEY `m_dealers_M_City_Id_foreign` (`M_City_Id`);

--
-- Indexes for table `m_existingmemberprospectives`
--
ALTER TABLE `m_existingmemberprospectives`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `m_existingmemberprospectives_M_Existingmember_Id_foreign` (`M_Existingmember_Id`),
  ADD KEY `m_existingmemberprospectives_M_Dealer_Id_foreign` (`M_Dealer_Id`),
  ADD KEY `m_existingmemberprospectives_M_Vehicletype_Id_foreign` (`M_Vehicletype_Id`);

--
-- Indexes for table `m_existingmembers`
--
ALTER TABLE `m_existingmembers`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_forms`
--
ALTER TABLE `m_forms`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_formsettings`
--
ALTER TABLE `m_formsettings`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_groupusers`
--
ALTER TABLE `m_groupusers`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_historyclicks`
--
ALTER TABLE `m_historyclicks`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `m_historyclicks_M_Existingmemberprospective_Id_foreign` (`M_Existingmemberprospective_Id`),
  ADD KEY `m_historyclicks_M_Vehicletypetenor_Id_foreign` (`M_Vehicletypetenor_Id`),
  ADD KEY `m_historyclicks_M_Dealer_Id_Id_foreign` (`M_Dealer_Id`);

--
-- Indexes for table `m_insurances`
--
ALTER TABLE `m_insurances`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `m_insurances_M_Tenor_Id_foreign` (`M_Tenor_Id`);

--
-- Indexes for table `m_popups`
--
ALTER TABLE `m_popups`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_tenors`
--
ALTER TABLE `m_tenors`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_users`
--
ALTER TABLE `m_users`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `m_users_M_Groupuser_Id_foreign` (`M_Groupuser_Id`);

--
-- Indexes for table `m_vehicles`
--
ALTER TABLE `m_vehicles`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `m_vehicletypeimages`
--
ALTER TABLE `m_vehicletypeimages`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `m_vehicletypeimages_M_Vehicletype_Id_foreign` (`M_Vehicletype_Id`);

--
-- Indexes for table `m_vehicletypes`
--
ALTER TABLE `m_vehicletypes`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `m_vehicletypes_M_Vehicle_Id_foreign` (`M_Vehicle_Id`);

--
-- Indexes for table `m_vehicletypetenors`
--
ALTER TABLE `m_vehicletypetenors`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `m_vehicletypetenors_M_Vehicletype_Id_foreign` (`M_Vehicletype_Id`),
  ADD KEY `m_vehicletypetenors_M_Tenor_Id_foreign` (`M_Tenor_Id`),
  ADD KEY `m_vehicletypetenors_M_Insurance_Id_foreign` (`M_Insurance_Id`);

--
-- Indexes for table `seeder`
--
ALTER TABLE `seeder`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `sessions_expired_index` (`expired`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `m_banners`
--
ALTER TABLE `m_banners`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `m_branches`
--
ALTER TABLE `m_branches`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `m_cities`
--
ALTER TABLE `m_cities`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `m_citybranches`
--
ALTER TABLE `m_citybranches`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `m_dealers`
--
ALTER TABLE `m_dealers`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `m_existingmemberprospectives`
--
ALTER TABLE `m_existingmemberprospectives`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `m_existingmembers`
--
ALTER TABLE `m_existingmembers`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `m_forms`
--
ALTER TABLE `m_forms`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `m_formsettings`
--
ALTER TABLE `m_formsettings`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `m_groupusers`
--
ALTER TABLE `m_groupusers`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `m_historyclicks`
--
ALTER TABLE `m_historyclicks`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `m_insurances`
--
ALTER TABLE `m_insurances`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `m_popups`
--
ALTER TABLE `m_popups`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `m_tenors`
--
ALTER TABLE `m_tenors`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `m_users`
--
ALTER TABLE `m_users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `m_vehicles`
--
ALTER TABLE `m_vehicles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `m_vehicletypeimages`
--
ALTER TABLE `m_vehicletypeimages`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `m_vehicletypes`
--
ALTER TABLE `m_vehicletypes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `m_vehicletypetenors`
--
ALTER TABLE `m_vehicletypetenors`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `seeder`
--
ALTER TABLE `seeder`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `m_citybranches`
--
ALTER TABLE `m_citybranches`
  ADD CONSTRAINT `m_citybranches_M_Branch_Id_foreign` FOREIGN KEY (`M_Branch_Id`) REFERENCES `m_branches` (`Id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `m_citybranches_M_City_Id_foreign` FOREIGN KEY (`M_City_Id`) REFERENCES `m_cities` (`Id`) ON UPDATE CASCADE;

--
-- Constraints for table `m_dealers`
--
ALTER TABLE `m_dealers`
  ADD CONSTRAINT `m_dealers_M_Branch_Id_foreign` FOREIGN KEY (`M_Branch_Id`) REFERENCES `m_branches` (`Id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `m_dealers_M_City_Id_foreign` FOREIGN KEY (`M_City_Id`) REFERENCES `m_cities` (`Id`) ON UPDATE CASCADE;

--
-- Constraints for table `m_existingmemberprospectives`
--
ALTER TABLE `m_existingmemberprospectives`
  ADD CONSTRAINT `m_existingmemberprospectives_M_Dealer_Id_foreign` FOREIGN KEY (`M_Dealer_Id`) REFERENCES `m_dealers` (`Id`),
  ADD CONSTRAINT `m_existingmemberprospectives_M_Existingmember_Id_foreign` FOREIGN KEY (`M_Existingmember_Id`) REFERENCES `m_existingmembers` (`Id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `m_existingmemberprospectives_M_Vehicletype_Id_foreign` FOREIGN KEY (`M_Vehicletype_Id`) REFERENCES `m_vehicletypes` (`Id`) ON DELETE SET NULL;

--
-- Constraints for table `m_historyclicks`
--
ALTER TABLE `m_historyclicks`
  ADD CONSTRAINT `m_historyclicks_M_Dealer_Id_Id_foreign` FOREIGN KEY (`M_Dealer_Id`) REFERENCES `m_dealers` (`Id`) ON DELETE SET NULL,
  ADD CONSTRAINT `m_historyclicks_M_Existingmemberprospective_Id_foreign` FOREIGN KEY (`M_Existingmemberprospective_Id`) REFERENCES `m_existingmemberprospectives` (`Id`) ON DELETE SET NULL,
  ADD CONSTRAINT `m_historyclicks_M_Vehicletypetenor_Id_foreign` FOREIGN KEY (`M_Vehicletypetenor_Id`) REFERENCES `m_vehicletypetenors` (`Id`) ON DELETE SET NULL;

--
-- Constraints for table `m_insurances`
--
ALTER TABLE `m_insurances`
  ADD CONSTRAINT `m_insurances_M_Tenor_Id_foreign` FOREIGN KEY (`M_Tenor_Id`) REFERENCES `m_tenors` (`Id`) ON UPDATE CASCADE;

--
-- Constraints for table `m_users`
--
ALTER TABLE `m_users`
  ADD CONSTRAINT `m_users_M_Groupuser_Id_foreign` FOREIGN KEY (`M_Groupuser_Id`) REFERENCES `m_groupusers` (`Id`) ON UPDATE CASCADE;

--
-- Constraints for table `m_vehicletypeimages`
--
ALTER TABLE `m_vehicletypeimages`
  ADD CONSTRAINT `m_vehicletypeimages_M_Vehicletype_Id_foreign` FOREIGN KEY (`M_Vehicletype_Id`) REFERENCES `m_vehicletypes` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `m_vehicletypes`
--
ALTER TABLE `m_vehicletypes`
  ADD CONSTRAINT `m_vehicletypes_M_Vehicle_Id_foreign` FOREIGN KEY (`M_Vehicle_Id`) REFERENCES `m_vehicles` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `m_vehicletypetenors`
--
ALTER TABLE `m_vehicletypetenors`
  ADD CONSTRAINT `m_vehicletypetenors_M_Insurance_Id_foreign` FOREIGN KEY (`M_Insurance_Id`) REFERENCES `m_insurances` (`Id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `m_vehicletypetenors_M_Tenor_Id_foreign` FOREIGN KEY (`M_Tenor_Id`) REFERENCES `m_tenors` (`Id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `m_vehicletypetenors_M_Vehicletype_Id_foreign` FOREIGN KEY (`M_Vehicletype_Id`) REFERENCES `m_vehicletypes` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
