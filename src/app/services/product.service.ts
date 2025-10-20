import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'ASUS ROG Astral RTX5080 16GB GDDR7 WHITE OC Edition',
      price: 1649,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/c034419b-755b-4a8d-ac12-2d9de8848607.png',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/d5fddde4-1f12-4187-8d44-5064bc1e6c0b.png'
    },
    {
      id: 2,
      name: 'INTEL CORE ULTRA 7-265K | ZOTAC GAMING GEFORCE RTX 5070 SOLID 12GB',
      price: 2055,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/6ac97b9c-dd8f-42db-a77d-2996bcecdae0.jpg',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/2540d492-ff2c-44a7-bb04-b78483a00066.jpg'
    },
    {
      id: 3,
      name: 'Asus ROG Azoth X Gaming Keyboard',
      price: 259,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/213ee6ef-633d-4abc-8cfa-3e8451b08e6d.png',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/213ee6ef-633d-4abc-8cfa-3e8451b08e6d.png'
    },
    {
      id: 4,
      name: 'MSI Claw A1M-200KH Black',
      price: 539,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/c0a11d77-103f-4aea-9eeb-9d7877474522.png',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/942b7dc7-32f1-4d95-b8b0-d10425f6243b.png'
    },
    {
      id: 5,
      name: 'GRAVASTAR MERCURY K1 PRO - CYBERFLARE',
      price: 239,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/0502266b-bfb4-4fa4-8895-ebfdc607ddda.jpg',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/eb60bf64-1767-4b9d-8dc5-2dfd03e4cea1.png'
    },
    {
      id: 6,
      name: 'Razer Basilisk V3 X HyperSpeed - Wireless Ergonomic Gaming Mouse',
      price: 69.00,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/2012b530-d27f-4e2c-a636-54af77b3f9c9.jpg',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/9b859294-a571-41bd-895d-1c650fd00b4d.jpg'
    },
    {
      id: 7,
      name: 'Asus MONITOR ROG Swift OLED PG49WCD gaming monitor',
      priceFrom: 1499,
      price: 1399,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/7ab2629f-1b4b-491f-ba2d-8a0a6b8aa332.png',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/3e9d0b25-5d69-4c2d-a769-cecd15d01888.png'
    },
    {
      id: 8,
      name: 'MSI Katana 17 HX B14WEK-067KH-Black',
      price: 1199,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/932bde22-a0fe-4316-8e54-5ad1b35385cc.png',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/dd9e9468-e96d-4d83-80af-e70a96b2b181.png'
    },
    {
      id: 9,
      name: 'GravaStar Alpha65 GaN 65W Wall Charger - Dawn White',
      price: 49,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/b609e315-930d-4dac-b9e4-4e2c2634e831.png',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/5e5cc01a-1067-45c0-a719-bd87781d9979.png'
    },
    {
      id: 10,
      name: 'ASUS ROG CARNYX - WHITE',
      price: 179,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/753b9af7-19b1-4a67-817a-391eb85b4631.png',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/8a4a5c4b-e014-4f9a-a8ad-cc070491c0be.png'
    },
    {
      id: 11,
      name: 'ASUS ROG ALLY X RC72LA-NH002W Black',
      price: 849,
      image1: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/769ccd8e-0b46-4ae9-b48f-c879c8e47de9.png',
      image2: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/68783af4-0641-4a84-af18-5637b1943727.png'
    },
    {
      id: 12,
      name: 'DXRacer Formula Series 2025 Black White',
      price: 169 ,
      image1: 'https://www.gamingstorekh.com/Content/Upload/Item/9df7b44a-18c5-438b-b57e-2e1340b95d19.png',
      image2: 'https://www.gamingstorekh.com/Content/Upload/ItemImage/5622c26c-f8bc-4dd4-a733-234f2b646415.png'
    },
    {
      id: 13,
      name: 'ASUS G614JU-N3186W 1C-GRAY',
      price: 1199,
      image1: 'https://www.gamingstorekh.com/Content/Upload/Item/71f45f86-b849-4bed-89f8-4504c2498f03.png',
      image2: 'https://www.gamingstorekh.com/Content/Upload/ItemImage/12bd71b2-c92d-4516-b52d-5b53a9808594.png'
    },
    {
      id: 14,
      name: 'ASUS M704 ROG AZOTH X/NXSMV2/US/PBT',
      price: 275,
      image1: 'https://www.gamingstorekh.com/Content/Upload/Item/eade2c13-9d96-4b63-9764-1d80b095c1c5.png',
      image2: 'https://www.gamingstorekh.com/Content/Upload/Item/eade2c13-9d96-4b63-9764-1d80b095c1c5.png'
    },
    {
      id: 15,
      name: 'Razer BlackShark V2 HyperSpeed WHITE - Wireless Ultra-Lightweight Esports Headset - FRML Packaging',
      price: 149,
      image1: 'https://www.gamingstorekh.com/Content/Upload/Item/50ce80a1-5f23-4563-b989-88a247b56cc2.jpg',
      image2: 'https://www.gamingstorekh.com/Content/Upload/ItemImage/b6e2e117-0b49-40f9-9fca-c3f7ab2e6d41.jpg'
    },
    {
      id: 16,
      name: 'Razer Cobra – Gengar Edition',
      price: 59.00,
      image1: 'https://assets2.razerzone.com/images/pnx.assets/ae30a78535bf5c9941d05950d7a70f73/pokemon-gengar-cobra-desktop-v2.webp',
      image2: 'https://assets2.razerzone.com/images/pnx.assets/d8a3eac0e7ebe9036c6493a00a0791a1/pokemon-gengar-gigantus-v2-xxl.webp'
    },
    {
      id: 17,
      name: 'RAZER BLACKWIDOW V4 X POKÉMON EDITION',
      price: 319.00,
      image1: 'https://assets2.razerzone.com/images/pnx.assets/4aa03381f9773a6a37b3606933ca361c/pokemon-kanto-first-partners-edition-blackwidow-v4-x-desktop-1920x700.webp',
      image2: 'https://assets2.razerzone.com/images/pnx.assets/13bd3e86e09d8ed1ba33aa31b6581981/pokemon-kanto-first-partners-edition-cobra-desktop-1920x700.webp',
      image3: 'https://assets2.razerzone.com/images/pnx.assets/35651793c1f37c32727e61408d78511e/pokemon-kanto-first-partners-edition-gigantus-v2-m-desktop-1920x700.webp'
    },
    {
      id: 18,
      name: 'Logitech G29 Driving Force Gaming Racing Wheel',
      price: 299 ,
      image1: 'https://www.gamingstorekh.com/Content/Upload/Item/097493eb-e3a6-4b18-a857-78e55e8bb2f6.png',
      image2: 'https://www.gamingstorekh.com/Content/Upload/ItemImage/abb9d94f-9a3c-4ef0-b61a-eb9013ea57bd.png',
      image3:'https://www.gamingstorekh.com/Content/Upload/ItemImage/299d651b-802c-45ce-92b1-3f55540f65bf.png'
    },
    {
      id: 19,
      name: 'FANTECH GD-714',
      price: 185,
      image1: 'https://www.gamingstorekh.com/Content/Upload/Item/c26d0765-a3e0-49a3-a1c5-b1d6af7546ba.png',
      image2: 'https://www.gamingstorekh.com/Content/Upload/ItemImage/348cf47e-83eb-4d4e-a1d1-af70a8cc9f96.png',
      image3: 'https://www.gamingstorekh.com/Content/Upload/ItemImage/24356a3e-2de1-4f07-b452-0f1a71c05b32.png'
    },
    {
      id: 20,
      name: 'DXRacer Craft Standard SFS',
      price: 449,
      image1: 'https://www.gamingstorekh.com/Content/Upload/Item/9ad96667-6c14-4cd0-a114-8eaa0b2fa4b7.png',
      image2: 'https://www.gamingstorekh.com/Content/Upload/Item/9ad96667-6c14-4cd0-a114-8eaa0b2fa4b7.png',
      image3: 'https://www.gamingstorekh.com/Content/Upload/ItemImage/406f2a95-e1c5-42e0-99aa-1a545a2bcb92.png'
    },
    {
      id: 21,
      name: 'Gaming Speaker Logitech G560 LIGHTSYNC (980-001304)',
      price: 160.00,
      image1:'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/Qg3qW5AJXDiCs3hrPhXxZ76LeWNa1SPlHCAqA92U.png',
      image2:'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/Qg3qW5AJXDiCs3hrPhXxZ76LeWNa1SPlHCAqA92U.png'
    },
    {
      id: 22,
      name: 'Keyboard English Logitech G Pro Mechanical Gaming (920-009396)',
      price: 100.00,
      image1: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/dHoYc5Ae8RkwI2p0su7ITGotRLbDI8lSDFhUdJ3X.png',
      image2: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/dHoYc5Ae8RkwI2p0su7ITGotRLbDI8lSDFhUdJ3X.png'
    },
    {
      id: 23,
      name: 'Headset K9 ONIKUMA Gaming RGB Stereo Gaming Headset with Cat Ears for PS4, Xbox, PC and Switch',
      price: 30.00,
      image1: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/D74X6TbsZ5EsFRnkM6A4Zkwj8C3jkLQccPqmGP2m.png',
      image2: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/D74X6TbsZ5EsFRnkM6A4Zkwj8C3jkLQccPqmGP2m.png'
      
    },
    {
      id: 24,
      name: 'Curved Gaming LED Monitor Dell 23.6" S2422HG FHD (1920x1080)',
      price: 215.00,
      image1: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/BvYGC9jDsLfdvgRSvNVDMeGO7fBO4e2ryMd7fQDv.png',
      image2: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/P1kR4U0x2XIhddE60sViAHNzLe6xBotfqPO4WJWS.png'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
