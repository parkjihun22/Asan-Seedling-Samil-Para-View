import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";


const projectData = [
	{ label: '사업명', value: '아산 모종 삼일 파라뷰' },
	{ label: '사업위치', value: '충청남도 아산시 모종동 361-27번지 일원' },
	{ label: '대지면적', value: '13,923.00㎡' },
	{ label: '건축면적', value: '3,042.60㎡' },
	{ label: '연면적', value: '46,185.71㎡' },
	{ label: '건폐율', value: '21.85%' },
	{ label: '용적률', value: '232.19%' },
	{ label: '건축규모', value: '지하 2층 ~ 지상 20층' },
	{ label: '세대수', value: '총 352세대' },
  ];
  

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		// { title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>

			<Helmet>
			{/* 기본 문자셋 및 모바일 최적화 */}
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="robots" content="index, follow" />
			<html lang="ko" />

			{/* SEO 메타 */}
			<title>모종 삼일 파라뷰- 사업안내</title>
			<meta
				name="description"
				content="모종 삼일 파라뷰사업개요를 확인하세요. 단지 위치, 건축 규모, 주택형 등 주요 정보를 안내합니다."
			/>
			<meta
				name="keywords"
				content="모종 삼일 파라뷰, 아산 모종 아파트, 아산 민간임대아파트, 사업개요, 아산 모종 주거단지"
			/>
			<link rel="canonical" href="https://intercs.co.kr/BusinessGuide/intro" />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="ko_KR" />
			<meta property="og:site_name" content="모종 삼일 파라뷰" />
			<meta property="og:title" content="모종 삼일 파라뷰- 사업안내" />
			<meta
				property="og:description"
				content="모종 삼일 파라뷰의 사업개요와 핵심 정보를 확인하세요."
			/>
			<meta property="og:image" content="https://intercs.co.kr/Main1.png" />
			<meta property="og:image:alt" content="모종 삼일 파라뷰조감도" />
			<meta property="og:url" content="https://intercs.co.kr/BusinessGuide/intro" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="모종 삼일 파라뷰- 사업안내" />
			<meta
				name="twitter:description"
				content="모종 삼일 파라뷰사업개요와 단지 핵심 정보를 소개합니다."
			/>
			<meta name="twitter:image" content="https://intercs.co.kr/Main1.png" />
			<meta name="twitter:url" content="https://intercs.co.kr/BusinessGuide/intro" />

			{/* JSON-LD 구조화 데이터 */}
			<script type="application/ld+json">
			{`
			{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "모종 삼일 파라뷰- 사업안내",
			"description": "모종 삼일 파라뷰사업개요 및 단지 주요 정보를 소개합니다.",
			"url": "https://intercs.co.kr/BusinessGuide/intro",
			"inLanguage": "ko-KR"
			}
			`}
			</script>
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />

			<h1 className={styles.screenReaderOnly}>
			모종 삼일 파라뷰- 사업안내
			</h1>

			<p className={styles.screenReaderOnly}>
			모종 삼일 파라뷰의 사업개요 페이지입니다.
			단지 위치, 건축 규모, 주택형 등 주요 정보를 한눈에 확인하실 수 있습니다.
			</p>

			<div className={styles.textBox}>
			<div>아산 모종에서 시작되는 새로운 주거 가치</div>
			<div>모종 삼일 파라뷰사업개요 안내</div>
			</div>


			<img className={styles.img3} src={page1} alt="모종 삼일 파라뷰 사업안내 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
