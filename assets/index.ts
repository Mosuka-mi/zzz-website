// 资源索引文件 - 确保所有图片和视频资源都被Vite打包

// 使用静态导入确保Vite能够识别并打包所有资源

// 设置图片
import settingImg1 from './settingImg/2c922e7a628a0da421c379fd01dadbc7_3613600539715984322.png';
import settingImg2 from './settingImg/7a001b1888212dcf02dac506218db1a8_6221512774701940076.png';
import settingImg3 from './settingImg/7dc8e490e0e15e0656458003241b94ad_8371389282001677330.png';

// 新闻图片
import newsImg1 from './news/Alice-Pv.png';
import newsImg2 from './news/activity-邦布券.png';
import newsImg3 from './news/birthday-柯蕾妲.png';
import newsImg4 from './news/news-activity-tktm.png';
import newsImg5 from './news/news-activity-ylcdmx.png';
import newsImg6 from './news/news-jtdcxj.png';

// newsImg图片和视频
import newsMedia0 from './newsImg/0.png';
import newsMedia1 from './newsImg/1.png';
import newsMedia2 from './newsImg/2.png';
import newsMedia3 from './newsImg/3.png';
import newsMedia4 from './newsImg/4.png';
import newsMedia5 from './newsImg/5.png';
import newsMedia5mp4 from './newsImg/5.mp4';
import newsMedia6 from './newsImg/6.png';
import newsMedia7 from './newsImg/7.png';
import newsMedia7mp4 from './newsImg/7.mp4';

// 角色相关图片
import charBgLeft from './char-bg-left.png';
import charBgRight from './char-bg-right.png';
import avatarBorder from './头像边框.png';
import zzzOpeningWebm from './zzz_opening.webm';
import zzzOpeningGif from './zzz_opening.gif';
import liuyingRotate from './流萤旋转.gif';
import liuyingFire from './流萤喷火.gif';
import liuyingStar from './流萤点燃星海.gif';

// 创建资源映射表，键是文件名，值是资源本身
export const resourceMap: Record<string, string> = {
  // settingImg
  '2c922e7a628a0da421c379fd01dadbc7_3613600539715984322.png': settingImg1,
  '7a001b1888212dcf02dac506218db1a8_6221512774701940076.png': settingImg2,
  '7dc8e490e0e15e0656458003241b94ad_8371389282001677330.png': settingImg3,
  
  // news
  'Alice-Pv.png': newsImg1,
  'activity-邦布券.png': newsImg2,
  'birthday-柯蕾妲.png': newsImg3,
  'news-activity-tktm.png': newsImg4,
  'news-activity-ylcdmx.png': newsImg5,
  'news-jtdcxj.png': newsImg6,
  
  // newsImg
  '0.png': newsMedia0,
  '1.png': newsMedia1,
  '2.png': newsMedia2,
  '3.png': newsMedia3,
  '4.png': newsMedia4,
  '5.png': newsMedia5,
  '5.mp4': newsMedia5mp4,
  '6.png': newsMedia6,
  '7.png': newsMedia7,
  '7.mp4': newsMedia7mp4,
  
  // 其他常用资源
  'char-bg-left.png': charBgLeft,
  'char-bg-right.png': charBgRight,
  '头像边框.png': avatarBorder,
  'zzz_opening.webm': zzzOpeningWebm,
  'zzz_opening.gif': zzzOpeningGif,
  '流萤旋转.gif': liuyingRotate,
  '流萤喷火.gif': liuyingFire,
  '流萤点燃星海.gif': liuyingStar
};

// 导出所有资源，确保它们被打包
export const allResources = {
  settingImages: [settingImg1, settingImg2, settingImg3],
  newsImages: [newsImg1, newsImg2, newsImg3, newsImg4, newsImg5, newsImg6],
  newsMedia: [newsMedia0, newsMedia1, newsMedia2, newsMedia3, newsMedia4, newsMedia5, newsMedia5mp4, newsMedia6, newsMedia7, newsMedia7mp4],
  charImages: [charBgLeft, charBgRight, avatarBorder, zzzOpeningWebm, zzzOpeningGif, liuyingRotate, liuyingFire, liuyingStar]
};

// 确保所有资源都被使用，防止tree-shaking移除
Object.values(resourceMap);
Object.values(allResources).flat();