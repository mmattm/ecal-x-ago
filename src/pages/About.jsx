import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="p-4 overflow-y-scroll h-dvh">
        <h1 className="text-2xl md:text-4xl lg:text-5xl leading-tight">
          ECAL × AGO <br /> Seoul Highlights <br />
          서울 하이라이트
        </h1>
        <div className="flex flex-col md:flex-row gap-12 mt-10">
          <div className="md:w-1/2 w-full">
            <p className="mb-4">
              We believe that lighting defines spaces. The importance of light
              in every space is essential, which is why we favor lighting as the
              starting point when building a space. Moreover, most of AGO
              Lighting collections offer lighting options that can be specified
              by architects and designers.
            </p>
            <p className="mb-4">
              AGO Lighting has come together with ECAL Bachelor students in
              Industrial Design, under the guidance of Swiss designer Adrien
              Rovero, to conceive a collection of lighting installations to be
              used in public places such as museums, hotel lobbies, coffee bar
              and so on. Focusing primarily on the spatial aspect of light, our
              approach was to design lighting structures based on components
              supplied by AGO and inspired by the fabric of Seoul, rather than
              creating mere lamps.
            </p>{" "}
            <p className="mb-4">
              ECAL students had to explore and identify potential landmarks
              scattered around Seoul many vibrant districts – from Jongno, the
              historic center of Seoul, and coveted Gangnam, to Mapo and
              Dasan-ro industrial heritage. Based on their findings, they
              designed various lighting typologies, taking into account the
              specific characteristics of each venue and setting; such as a
              light-pole system inspired by the typical Euljiro District
              electric street pylons overloaded with cables; a lamp at the
              crossroads of avant-garde streetwear and futuristic clothing; a
              planter with an integrated luminaire to highlight plants at the
              botanical garden; a lighting structure that can host a full table
              or up to a three-seater sofa underneath its lights; and a high
              table that bring people together under its gentle light.
            </p>
            <p className="mb-4">
              The challenge we set ourselves was to reimagine the chandelier –
              an object that lends a distinctive status to a space, while
              fulfilling its initial purpose of diffusing functional light.
            </p>
            <p className="mb-4">
              Presented for the first time at Seochon Lounge, operated by Hanok
              Heritage Preservation Division of Urban Regeneration Office and
              Swiss Embassy in Korea in collaboration with Design Press. And
              this project was made possible with the generous support of the
              Summer University program of the Board of Higher Education (DGES)
              – State of Vaud.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <p className="mb-4">
              우리는 조명이 공간을 정의한다고 믿습니다. 모든 공간에서 빛은
              핵심적인 역할을 하기에, 우리는 공간을 설계할 때 조명을 가장 먼저
              고려하기도 합 니다. AGO아고의 대부분의 컬렉션은 건축가와
              디자이너가 그들의 필요에 맞게 선택할 수 있는 옵션을 제공합니다.
            </p>
            <p className="mb-4">
              AGO아고는 스위스 디자이너 Adrien Rovero의 지도 아래, ECAL 산업디
              자인 학사 학생들과 협력하여 박물관, 호텔 로비, 커피바 와 같은 공공
              장소 에 사용될 조명 설치물을 구상했습니다. 우리는 단순한 램프
              제작을 넘어, 서울의 다양한 면모에서 영감을 받아 아고로부터
              제공받은 그들의 제품을 활용해 새로운 조명 구조물을 설계하는 데
              중점을 두었습니다.
            </p>
            <p className="mb-4">
              ECAL 학생들은 서울의 활기찬 여러 지역, 예를 들어 역사적인 종로와
              주 목받는 강남, 마포와 다산로의 산업 유산 등을 탐험하고 그 속에서
              잠재적 인 랜드마크를 찾아야 했습니다. 그 결과 각 장소의 특성과
              맥락을 반영한 다양한 조명 디자인을 선보였습니다. 예를 들어, 전선이
              가득한 을지로의 전형적인 전기 가로등에서 영감을 받은 라이트폴
              시스템, 아방가르드 스트 릿웨어와 퓨쳐리스틱 패션의 교차점에 있는
              조명 설치물, 조경 식물관에서 식물을 돋보이게 하는 플랜터와 결합된
              조명, 큰 테이블 또는 3인용 소파까 지도 수용할 수 있는 조명 구조,
              그리고 부드러운 빛 아래 여러 사람들이 함 께 사용하는 테이블 등이
              있습니다.
            </p>
            <p className="mb-4">
              우리의 시도는 샹들리에를 새로운 시각으로 재해석하는 것이었습니다.
              샹 들리에는 공간에 특별한 존재감을 부여하면서도 기능적인 조명을
              제공하 는 본래의 목적을 충족시키는 물건입니다.
            </p>
            <p className="mb-4">
              이 프로젝트는 스위스 Vaud(보) 주 정부 산하 Board of Higher
              Education (DGES-고등교육위원회)의 ‘여름 대학교 프로그램’의
              후원으로 진행되었 으며, 스위스 대사관과 서울시 한옥정책과의
              지원으로 서촌라운지에서 전 시됩니다. 또한 본 프로젝트는
              디자인하우스 주최, 디자인프레스가 주관 하는
              서울디자인페스티벌(SDF)의 장외전시로도 연계되어 진행됩니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mt-12 md:mt-16">
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="mb-4 text-base">
                  <b>Biography</b>
                  <br />
                  ECAL/University of Art and Design Lausanne is internationally
                  renowned and featured regularly as one of the world’s top ten
                  universities of art and design. As part of its industrial
                  design BA program, ECAL offers its students multiple colla-
                  boration projects with local and international institutions,
                  brands and manufacturers. Students are thus led to better
                  understand the identity and values of a brand, specific
                  production pro- cesses and know-how, which they have to work
                  with in order to conceive innovative products.
                </p>
                <p className="text-base">
                  ECAL/로잔 예술 디자인 대학교는 세계 10대 예술 디자인 대학 중
                  하나로 선정되는 등 국제적 위상을 지니 학교 입니다. ECAL의 산업
                  디자인 학사 프로그램은 학생들에게 다양한 국내외 기관, 브랜드
                  및 제조업체와의 협업 프로젝트를 제공하며, 이를 통해 학생들은
                  브랜드의 정체성과 가치를 깊이 이해하고, 생산 과정과 기술을
                  파악하여 혁신적인 제품을 구상하게 됩니다.
                </p>
              </div>
              <div>
                {" "}
                <p className="mb-4 text-base">
                  AGO is a Korean lighting company that searches for a balance
                  between beauty and function. AGO collaborate with designers
                  who share these values and make their ideas possible through
                  their dedication to production. AGO is located in an area of
                  central Seoul named Euljiro, the historic heart of Korea’s
                  manufacturing industry, where many small factories and
                  workshops of skilled artisans still remain. Through its close
                  ties with local workshops and industry, AGO aims to expand in
                  Korea and reach new international markets through a
                  well-curated and distinct design language. The name AGO is
                  actually de- rived from Korean meaning “old friends” – a
                  reference to the history of the region and the new friendships
                  to be forged.
                </p>
                <p className="text-base">
                  AGO는 아름다움과 기능의 균형을 추구하는 한국의 조명
                  브랜드입니다. AGO는 이러한 가치를 공유하는 디자이너들과
                  협력하여 그들의 아이디어를 실제로 실현합니다. AGO는, 여전히
                  많은 소규모 공장과 숙련된 장인들의 작업장이 자리하고 있는,
                  한국 도심 제조업의 중심지였던 서울 을지로에 위치해 있습니다.
                  AGO는 한국의 지역 산업과의 긴밀한 협력을 바탕으로 정교하게
                  큐레이션 된 독특한 디자인 언어를 통해 국제 시장으로 확장하고
                  있습니다. ‘AGO’라는 이름은 ‘옛 친구’를 의미하며, 지역의 역사와
                  새롭게 형성될 관계을 상징합니다
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="mb-4 text-base">
                  <b>ECAL Director</b>
                  <br />
                  ECAL 디렉터
                  <br />
                  Alexis Georgacopoulos
                </p>
                <p className="mb-4 text-base">
                  <b>
                    Head of Bachelor Industrial Design 산업 디자인 학사 프로그램
                    책임자
                  </b>
                  <br />
                  Stéphane Halmaï-Voisard
                </p>
                <p className="mb-4 text-base">
                  <b>Professor 교수</b>
                  <br />
                  Adrien Rovero
                </p>
                <p className="mb-4 text-base">
                  <b>Adjoint 조교</b>
                  <br />
                  Adrien Rovero
                </p>
                <p className="mb-4 text-base">
                  <b>Assistant 조교</b>
                  <br />
                  Sebastiano Gallizia
                </p>
              </div>
              <div>
                <p className="mb-4 text-base">
                  <b>Students 학생</b>
                  <br />
                  Laura Cotnoir <br /> Oriana Gonzalez <br /> Fernandez
                  Charlotte <br />
                  Jobin Alexandre Li
                  <br />
                  Neitzke Nikita
                  <br />
                  Abla Bolassi Owoussi
                  <br />
                  Flavia Renaud
                  <br />
                  Matthieu Rigelo
                  <br />
                  Mael Sandoz
                  <br /> Joab Schneiter
                </p>
                <p className="mb-4 text-base">
                  <b>Head of Communications 커뮤니케이션 책임자</b>
                  <br />
                  Romaine Delaloye
                </p>
                <p className="mb-4 text-base">
                  <b>
                    Photography 사진
                    <br /> Video Editing 비디오 편집
                  </b>
                  <br />
                  Jasmine Deporta
                  <br />
                  Jamy Herrmann
                  <br />
                  Matthieu Minguet
                  <br />
                  Michaël Pica
                </p>
                <p className="mb-4 text-base">
                  <b>Graphic Design 그래픽 디자인</b>
                  <br />
                  Benoît Brun
                </p>
                <p className="mb-4 text-base">
                  <b>Website</b>
                  <br />
                  Matthieu Minguet
                  <br />
                  Jamy Herrmann
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 my-12 md:my-16">
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Link className="block" to="https://www.instagram.com/ecal_ch/">
                  @ecal_ch
                </Link>
                <Link
                  className="block"
                  to="https://www.instagram.com/ecal_design/"
                >
                  @ecal_design
                </Link>
                <Link
                  className="block"
                  to="https://www.instagram.com/ago_lighting/"
                >
                  @ago_lighting
                </Link>
              </div>
              <div>
                <Link className="block" to="https://ecal-ago-highlights.ch">
                  ecal-ago-highlights.ch
                </Link>
                <Link className="block" to="https://www.ecal.ch">
                  ecal.ch
                </Link>
                <Link className="block" to="https://www.agolighting.com/">
                  agolighting.com
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            {/* grid of logo svg folder */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-12 lg:gap-10 items-center">
              <img
                src="/svg/logo_ecal.svg"
                alt="logo_ecal"
                className="w-full mx-auto"
              />
              <img
                src="/svg/logo_ago.svg"
                alt="logo_ago"
                className="w-full mx-auto"
              />
              <img
                src="/svg/logo_seoul_design_festival.svg"
                alt="logo_seoul_design_festival"
                className="w-full mx-auto"
              />
              <img
                src="/svg/logo_summer_university.svg"
                alt="logo_summer_university"
                className="w-full mx-auto"
              />
              <img
                src="/svg/logo_swiss_confederation.svg"
                alt="logo_swiss_confederation"
                className="w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
